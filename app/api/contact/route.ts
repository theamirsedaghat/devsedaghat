// app/api/contact/route.ts
import { NextRequest, NextResponse } from "next/server";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import { Resend } from "resend";

// React Email templates
import { OwnerNotificationEmail } from "@/emails/OwnerNotificationEmail";
import { UserAutoReplyEmail } from "@/emails/UserAutoReplyEmail";

// ----- Types -----

type TypeWork = "education" | "saas" | "fullstack" | "investment" | "other";

interface TurnstileVerifyResponse {
  success: boolean;
  "error-codes"?: string[];
  challenge_ts?: string;
  hostname?: string;
  action?: string;
  cdata?: string;
}

// ----- Helpers -----

function formatTypeWorkLabel(value: TypeWork | "unspecified"): string {
  switch (value) {
    case "education":
      return "Tech Education / Mentoring";
    case "saas":
      return "SaaS / Product Collaboration";
    case "fullstack":
      return "Full-Stack / Frontend Project";
    case "investment":
      return "Investment / Partnership";
    case "other":
      return "Other";
    default:
      return "Unspecified";
  }
}

// ----- Upstash rate limit -----

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

const ratelimit = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(5, "60 s"), // 5 requests per 60 seconds
});

// ----- Resend -----

const resend = new Resend(process.env.RESEND_API_KEY);

// ----- Main handler -----

export async function POST(req: NextRequest) {
  try {
    // Rate-limit by IP
    const ipHeader = req.headers.get("x-forwarded-for") ?? "";
    const clientIp = ipHeader.split(",")[0]?.trim() || "anonymous";

    const { success: rateLimitOk } = await ratelimit.limit(clientIp);
    if (!rateLimitOk) {
      return NextResponse.json(
        {
          success: false,
          message: "Too many requests. Please wait a minute and try again.",
        },
        { status: 429 }
      );
    }

    // Parse form data
    const formData = await req.formData();

    const name = formData.get("name")?.toString().trim() ?? "";
    const email = formData.get("email")?.toString().trim() ?? "";
    const typeWorkRaw = formData.get("type_work")?.toString().trim() ?? "";
    const message = formData.get("message")?.toString().trim() ?? "";
    const turnstileToken =
      formData.get("turnstileToken")?.toString().trim() ?? "";

    const file = formData.get("file") as File | null;

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        {
          success: false,
          message: "Name, email, and message are required.",
        },
        { status: 400 }
      );
    }

    if (!turnstileToken) {
      return NextResponse.json(
        {
          success: false,
          message: "Captcha verification is required.",
        },
        { status: 400 }
      );
    }

    if (!process.env.TURNSTILE_SECRET_KEY) {
      console.error("Missing TURNSTILE_SECRET_KEY env var");
      return NextResponse.json(
        {
          success: false,
          message:
            "Server configuration error. Please try again later or contact me directly.",
        },
        { status: 500 }
      );
    }

    // Verify Turnstile token
    const turnstileBody = new URLSearchParams();
    turnstileBody.append("secret", process.env.TURNSTILE_SECRET_KEY);
    turnstileBody.append("response", turnstileToken);
    if (clientIp !== "anonymous") {
      turnstileBody.append("remoteip", clientIp);
    }

    const turnstileRes = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        body: turnstileBody,
      }
    );

    if (!turnstileRes.ok) {
      console.error("Turnstile verify HTTP error:", turnstileRes.status);
      return NextResponse.json(
        {
          success: false,
          message: "Captcha verification failed. Please try again.",
        },
        { status: 400 }
      );
    }

    const turnstileResult =
      (await turnstileRes.json()) as TurnstileVerifyResponse;

    if (!turnstileResult.success) {
      console.error("Turnstile verify failed:", turnstileResult["error-codes"]);
      return NextResponse.json(
        {
          success: false,
          message: "Captcha verification failed. Please try again.",
        },
        { status: 400 }
      );
    }

    // Normalize type_work
    const validTypeWorkValues: TypeWork[] = [
      "education",
      "saas",
      "fullstack",
      "investment",
      "other",
    ];
    const typeWork: TypeWork | "unspecified" = validTypeWorkValues.includes(
      typeWorkRaw as TypeWork
    )
      ? (typeWorkRaw as TypeWork)
      : "unspecified";

    const typeWorkLabel = formatTypeWorkLabel(typeWork);

    // File handling (max 2 MB)
    const MAX_FILE_SIZE = 2 * 1024 * 1024; // 2 MB
    let attachments:
      | {
          filename: string;
          content: Buffer;
          type?: string;
        }[]
      | undefined;

    if (file && file.size > 0) {
      if (file.size > MAX_FILE_SIZE) {
        return NextResponse.json(
          {
            success: false,
            message: "Attachment is too large. Maximum size is 2 MB.",
          },
          { status: 400 }
        );
      }

      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);

      attachments = [
        {
          filename: file.name || "attachment",
          content: buffer,
          type: file.type || undefined,
        },
      ];
    }

    const ownerEmail = process.env.CONTACT_RECIPIENT_EMAIL;
    const fromEmail = process.env.RESEND_FROM_EMAIL;

    if (!process.env.RESEND_API_KEY || !ownerEmail || !fromEmail) {
      console.error("Missing RESEND configuration env vars");
      return NextResponse.json(
        {
          success: false,
          message:
            "Server email configuration error. Please try again later or contact me directly.",
        },
        { status: 500 }
      );
    }

    const submittedAt = new Date().toLocaleString("en-US", {
      timeZone: "UTC",
      year: "numeric",
      month: "short",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    });

    // ---- Email to you (Amir): OwnerNotificationEmail ----
    const { error: ownerError } = await resend.emails.send({
      from: fromEmail,
      to: ownerEmail,
      replyTo: email,
      subject: `New portfolio message from ${name}`,
      react: OwnerNotificationEmail({
        name,
        email,
        typeWork: typeWorkLabel,
        message,
        submittedAt,
      }),
      attachments,
    });

    if (ownerError) {
      console.error("Error sending owner email:", ownerError);
      return NextResponse.json(
        {
          success: false,
          message:
            "Something went wrong while sending the message. Please try again later.",
        },
        { status: 500 }
      );
    }

    // ---- Auto-reply to user: UserAutoReplyEmail ----
    const { error: userError } = await resend.emails.send({
      from: fromEmail,
      to: email,
      subject: "Thanks for reaching out ✉️",
      react: UserAutoReplyEmail({
        name,
        message,
        typeWork: typeWorkLabel,
      }),
    });

    // اگر اینجا خطا بخوره، پیام اصلی به تو رسیده، پس کاربر رو fail نکنیم
    if (userError) {
      console.error("Error sending user confirmation email:", userError);
    }

    return NextResponse.json({
      success: true,
      message:
        "Your message was sent successfully. I’ll reply as soon as I can.",
    });
  } catch (error) {
    console.error("Error in contact API:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong. Please try again in a few minutes.",
      },
      { status: 500 }
    );
  }
}
