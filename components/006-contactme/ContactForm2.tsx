"use client";

import { useState } from "react";
import type { ChangeEvent, DragEvent } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Turnstile } from "@marsidev/react-turnstile";
import { SendHorizonal, X } from "lucide-react";

const MAX_FILE_SIZE = 2 * 1024 * 1024; // 2 MB
const MAX_FILES = 3;

// Zod schema for the form
const formSchema = z.object({
  name: z.string().min(3, { message: "Name must be at least 3 characters" }),
  email: z.string().email({ message: "Please enter a valid email" }),
  type_work: z
    .enum(["education", "saas", "fullstack", "investment", "other"])
    .optional(),
  message: z
    .string()
    .min(40, { message: "Message must be at least 40 characters" }),
  files: z
    .array(
      z.instanceof(File).refine((file) => file.size <= MAX_FILE_SIZE, {
        message: "Each file must be 2 MB or less",
      })
    )
    .max(MAX_FILES, {
      message: `You can attach up to ${MAX_FILES} files`,
    })
    .optional(),
});

type FormValues = z.infer<typeof formSchema>;

interface Status {
  success: boolean;
  message: string;
}

export default function ContactForm2() {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors, isValid },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    mode: "onChange", // live validation on change
    reValidateMode: "onChange",
  });

  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const [status, setStatus] = useState<Status | null>(null);
  const [loading, setLoading] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
  const files = watch("files") ?? [];

  // Helper to format bytes to KB/MB string
  const formatFileSize = (size: number) => {
    if (size >= 1024 * 1024) {
      return `${(size / (1024 * 1024)).toFixed(2)} MB`;
    }
    return `${Math.round(size / 1024)} KB`;
  };

  // Handle file selection via input
  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const fileList = event.target.files;
    if (!fileList) {
      setValue("files", [], { shouldValidate: true });
      return;
    }

    // eslint-disable-next-line prefer-const
    let incomingFiles = Array.from(fileList);

    // Merge with existing files (optional – می‌تونی بخوای هر بار فقط جایگزین کنه)
    const existingFiles = files ?? [];
    const combined = [...existingFiles, ...incomingFiles];

    // Respect max files
    const limited = combined.slice(0, MAX_FILES);

    setValue("files", limited, { shouldValidate: true });
  };

  // Handle drag & drop
  const handleDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    setIsDragging(false);

    const fileList = event.dataTransfer.files;
    if (!fileList || fileList.length === 0) return;

    // eslint-disable-next-line prefer-const
    let incomingFiles = Array.from(fileList).filter(
      (file) => file.type !== "" // basic filter to avoid dropping folders
    );

    const existingFiles = files ?? [];
    const combined = [...existingFiles, ...incomingFiles];
    const limited = combined.slice(0, MAX_FILES);

    setValue("files", limited, { shouldValidate: true });
  };

  const handleDragOver = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    if (!isDragging) setIsDragging(true);
  };

  const handleDragLeave = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    setIsDragging(false);
  };

  // Remove a single file by index
  const handleRemoveFile = (index: number) => {
    const currentFiles = files ?? [];
    const updated = currentFiles.filter((_, i) => i !== index);
    setValue("files", updated, { shouldValidate: true });
  };

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setStatus(null);

    if (!turnstileToken) {
      setStatus({
        success: false,
        message: "Please complete the verification step.",
      });
      return;
    }

    try {
      setLoading(true);

      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("email", data.email);
      if (data.type_work) {
        formData.append("type_work", data.type_work);
      }
      formData.append("message", data.message);

      // NOTE:
      // Backend فعلی‌ات فقط یک فایل زیر کلید "file" قبول می‌کنه.
      // اینجا فقط اولین فایل رو می‌فرستیم تا API نشکنه.
      // اگر بعداً API رو برای چند فایل آپدیت کردی، این قسمت رو هم اصلاح کن.
      const firstFile = data.files?.[0];
      if (firstFile) {
        formData.append("file", firstFile);
      }

      formData.append("turnstileToken", turnstileToken);

      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      const result = (await response.json()) as Status;
      setStatus(result);

      if (response.ok && result.success) {
        reset();
        setTurnstileToken(null);
      }
    } catch {
      setStatus({
        success: false,
        message: "Something went wrong. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  const isSubmitDisabled = loading || !turnstileToken || !isValid;

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="mx-auto w-full md:w-2/3 lg:w-full space-y-6  rounded-2xl border border-white/10  p-6 shadow-xl shadow-white/10 md:p-8"
    >
      {/* Name */}
      <div className="space-y-1.5">
        <label
          className="mb-1 block text-sm font-medium tracking-tight"
          htmlFor="name"
        >
          Full name
        </label>
        <input
          id="name"
          {...register("name")}
          className="w-full rounded-lg border border-white/10 bg-[#18181f] px-4 py-2.5 text-sm  placeholder:text-white/30 outline-none  focus:border-transparent focus:ring-2 focus:ring-(--blue-p-400) hover:ring-(--blue-p-400)/60 hover:ring-1 transition-all duration-300 placeholder:text-xs"
          placeholder="John Doe"
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "name-error" : undefined}
        />
        {errors.name && (
          <p id="name-error" className="mt-1 text-xs text-(--error-warning)">
            {errors.name.message}
          </p>
        )}
      </div>

      {/* Email */}
      <div className="space-y-1.5">
        <label
          className="mb-1 block text-sm font-medium tracking-tight"
          htmlFor="email"
        >
          Email
        </label>
        <input
          id="email"
          type="email"
          {...register("email")}
          className="w-full rounded-lg border border-white/10 bg-[#18181f] px-4 py-2.5 text-sm  placeholder:text-white/30 outline-none  focus:border-transparent focus:ring-2 focus:ring-(--yellow-p-300) hover:ring-(--yellow-p-300)/60 hover:ring-1 transition-all duration-300 placeholder:text-xs"
          placeholder="you@example.com"
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
        />
        {errors.email && (
          <p id="email-error" className="mt-1 text-xs text-(--error-warning)">
            {errors.email.message}
          </p>
        )}
      </div>

      {/* Type of work (optional) */}
      <div className="space-y-1.5">
        <label
          className="mb-1 block text-sm font-medium tracking-tight"
          htmlFor="type_work"
        >
          What are you reaching out about?{" "}
          <span className="text-xs text-white/40">(optional)</span>
        </label>
        <select
          id="type_work"
          {...register("type_work", {
            setValueAs: (v) => (v === "" ? undefined : v),
          })}
          className="w-full appearance-none rounded-lg border border-white/10 bg-[#18181f] px-4 py-2.5 text-sm  outline-none  focus:border-transparent focus:ring-2 focus:ring-(--purple-p-400) hover:ring-(--purple-p-400)/60 hover:ring-1 transition-all duration-300 cursor-pointer"
          defaultValue=""
        >
          <option value="" className="bg-background text-white/40  ">
            Select an option
          </option>
          <option value="education" className="bg-background  ">
            Tech education / mentoring
          </option>
          <option value="investment" className="bg-background  ">
            Investment / partnership
          </option>
          <option value="fullstack" className="bg-background  ">
            Frontend / full-stack project
          </option>
          <option value="saas" className="bg-background  ">
            SaaS / product collaboration
          </option>
          <option value="other" className="bg-background  ">
            Something else
          </option>
        </select>
        <p className=" text-xs text-white/40">
          * This helps me understand if I&apos;m the right person to help.
        </p>
      </div>

      {/* Message */}
      <div className="space-y-1.5">
        <label
          className="mb-1 block text-sm font-medium tracking-tight"
          htmlFor="message"
        >
          Your message
        </label>
        <textarea
          id="message"
          {...register("message")}
          rows={5}
          className="resize-none min-h-[120px] w-full  rounded-lg border border-white/10 bg-[#18181f] px-4 py-2.5 text-sm text-white placeholder:text-white/30 outline-none  focus:border-transparent focus:ring-2 focus:ring-(--mint-p-400) hover:ring-(--mint-p-400)/60 hover:ring-1 transition-all duration-300 placeholder:text-xs"
          placeholder="Share the context, goals, timeline, and anything important about your project or question..."
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message && (
          <p id="message-error" className="mt-1 text-xs text-(--error-warning)">
            {errors.message.message}
          </p>
        )}
      </div>

      {/* File dropzone + input */}
      <div className="space-y-1.5">
        <label
          className="mb-1 block text-sm font-medium tracking-tight"
          htmlFor="file"
        >
          Attachments{" "}
          <span className="text-xs text-white/40">
            (optional, up to {MAX_FILES} files, max 2 MB)
          </span>
        </label>

        <div
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          className={`flex cursor-pointer flex-col items-center justify-center rounded-lg border border-dashed px-4 py-4 text-center text-xs transition-all duration-300 ${
            isDragging
              ? "border-(--orange-p-300) bg-indigo-500/10"
              : "border-white/15 bg-[#18181f] hover:border-(--orange-p-300)/70 hover:bg-[#18181f]"
          }`}
          onClick={() => {
            const input = document.getElementById(
              "file-input-hidden"
            ) as HTMLInputElement | null;
            input?.click();
          }}
        >
          <p className="mb-2 text-xs font-medium">
            Drag & drop files here, or click to browse
          </p>
          <p className="text-xs text-white/40">
            PDFs, images, or docs that provide more context
          </p>
        </div>

        {/* Hidden actual input */}
        <input
          id="file-input-hidden"
          type="file"
          multiple
          onChange={handleFileChange}
          className="hidden"
        />

        {/* File list */}
        {files.length > 0 && (
          <ul className="mt-2 space-y-1.5">
            {files.map((file, idx) => (
              <li
                key={`${file.name}-${idx}`}
                className="flex items-center justify-between rounded-md bg-[#18181f] px-3 py-2 text-xs"
              >
                <div className="flex min-w-0 flex-1 items-center gap-2">
                  <span className="truncate">{file.name}</span>
                  <span className="shrink-0 text-[11px] text-white/40">
                    {formatFileSize(file.size)}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => handleRemoveFile(idx)}
                  className="ml-3 text-[11px] text-white/50 transition hover:text-(--error-warning) cursor-pointer"
                  aria-label={`Remove ${file.name}`}
                >
                  <X />
                </button>
              </li>
            ))}
          </ul>
        )}

        {/* Zod file-level error */}
        {errors.files?.message && (
          <p className="mt-1 text-xs text-(--error-warning)">
            {String(errors.files.message)}
          </p>
        )}
      </div>

      {/* Turnstile */}
      <div className=" h-18">
        {siteKey ? (
          <div className="flex justify-center ">
            <Turnstile
              siteKey={siteKey}
              onSuccess={(token) => setTurnstileToken(token)}
              onError={() => setTurnstileToken(null)}
              onExpire={() => setTurnstileToken(null)}
              options={{ theme: "dark" }}
            />
          </div>
        ) : (
          <p className="text-center text-sm text-orange-400">
            <span className="font-bold">CAPTCHA</span> key is not configured.
            The form may not work correctly in production or{" "}
            <span className="font-bold">Refresh this page</span>.
          </p>
        )}
      </div>

      {/* Submit */}
      <div className="space-y-2">
        <button
          type="submit"
          disabled={isSubmitDisabled}
          className="flex w-full items-center justify-center rounded-lg bg-linear-to-r from-(--purple-p-400) to-(--orange-p-400) px-4 py-3 text-sm font-semibold text-background shadow-lg transition-all duration-300 active:scale-[0.95] cursor-pointer disabled:cursor-not-allowed disabled:opacity-50
          
          hover:shadow-[0_0_16px_var(--purple-p-300)] hover:brightness-110 hover:saturate-150
          "
        >
          {loading ? (
            <span className="flex items-center gap-2">
              <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
              Sending…
            </span>
          ) : (
            "Send message"
          )}
          <SendHorizonal className="mx-2 size-5 text-background/75" />
        </button>

        {/* Loading bar / progress-style indicator */}
        {loading && (
          <div className="h-1 w-full overflow-hidden rounded-full bg-white/10">
            <div className="h-full w-1/3 animate-[loading-bar_1.2s_ease-in-out_infinite] bg-linear-to-r from-(--purple-p-400) to-(--orange-p-400)" />
          </div>
        )}
      </div>

      {/* Status */}
      {status && (
        <p
          className={`mt-2 text-center text-sm ${
            status.success ? "text-green-500" : "text-red-500"
          }`}
        >
          {status.message}
        </p>
      )}
    </form>
  );
}
