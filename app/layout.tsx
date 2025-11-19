import type { Metadata } from "next";
import { Poppins, Roboto, Nunito } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { ThemeProvider } from "@/components/themes-provider";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap",
});

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "DevSedaghat - Amir Sedaghat | Full-Stack Innovator, Tech Educator & Content Creator",
  description:
    "Discover the world of Amir Sedaghat (DevSedaghat), a full-stack innovator crafting seamless web and mobile experiences with React, Next.js, React Native, and UI/UX mastery. Dive into empowering tutorials, in-depth courses, real-world projects, and insightful strategies designed to elevate aspiring developers. Join a journey toward building impactful tech communities, fostering trust, and paving the way for groundbreaking SaaS ventures that attract visionary investors.",
  keywords: [
    "DevSedaghat",
    "Amir Sedaghat",
    "Full-Stack Developer",
    "Tech Educator",
    "Content Creator",
    "Dev Sedaghat",
    "UI/UX Designer",
    "React Developer",
    "Next.js Expert",
    "React Native Mobile Developer",
    "Web Development Tutorials",
    "Educational Tech Courses",
    "SaaS Founder Visionary",
    "Tech Community Leader",
    "Personal Branding in Tech",
    "YouTube DevSedaghat",
    "LinkedIn DevSedaghat",
    "Twitter DevSedaghat",
    "Sedaghat",
  ],
  authors: [{ name: "Amir Sedaghat", url: "https://devsedaghat.com" }],
  creator: "Amir Sedaghat (DevSedaghat)",
  publisher: "DevSedaghat",
  metadataBase: new URL("https://devsedaghat.com"),
  alternates: {
    canonical: "https://devsedaghat.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title:
      "DevSedaghat - Amir Sedaghat | Full-Stack Innovator, Tech Educator & Content Creator",
    description:
      "Embark on an inspiring adventure with Amir Sedaghat (DevSedaghat), where full-stack expertise meets transformative education. Explore cutting-edge projects in web, UI/UX, and mobile development, alongside tutorials and courses that empower the next generation of tech leaders. Building credibility, community, and future SaaS empires – ready to innovate and invest together?",
    url: "https://devsedaghat.com",
    siteName: "DevSedaghat Portfolio",
    images: [
      {
        // TODO: جایگزین کن با تصویر واقعی (1200x630)
        // مثال: Canva → "DevSedaghat" + عکس + متن + رنگ برند
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "DevSedaghat - Portfolio of Amir Sedaghat, Full-Stack Innovator and Tech Educator",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "DevSedaghat - Amir Sedaghat | Full-Stack Innovator, Tech Educator & Content Creator",
    description:
      "Unlock the secrets of full-stack development and tech education with Amir Sedaghat (DevSedaghat). From React Native mobile apps to UI/UX masterpieces, get tutorials, courses, and insights that build trust and inspire innovation. Follow for daily empowerment and SaaS dreams!",
    images: ["/og-image.png"],
    creator: "@devsedaghat",
  },
  icons: {
    // TODO: favicon و apple icon رو در public/ بگذار
    // favicon: browser-logo.svg → 32x32 یا 64x64
    // apple: icon.png → 180x180
    icon: "/browser-logo.svg",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <Script
        id="structured-data"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            {
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Person",
                  "@id": "https://devsedaghat.com/#person",
                  name: "Amir Sedaghat",
                  alternateName: "DevSedaghat",
                  url: "https://devsedaghat.com",
                  image: {
                    "@type": "ImageObject",
                    // TODO: عکس پروفایل حرفه‌ای آپلود کن (800x800)
                    url: "https://devsedaghat.com/amir-sedaghat-profile.jpg",
                    width: 800,
                    height: 800,
                    caption:
                      "Amir Sedaghat - Full-Stack Innovator & Tech Educator",
                  },
                  sameAs: [
                    "https://www.linkedin.com/in/devsedaghat",
                    "https://x.com/devsedaghat",
                    "https://youtube.com/@DevSedaghat",
                    "https://github.com/devsedaghat",
                    "https://instagram.com/devsedaghat",
                  ],
                  jobTitle:
                    "Full-Stack Innovator, Tech Educator & Content Creator",
                  worksFor: {
                    "@type": "Organization",
                    "@id": "https://devsedaghat.com/#organization",
                  },

                  knowsAbout: [
                    "Full-Stack Development",
                    "React.js",
                    "Next.js",
                    "React Native",
                    "UI/UX Design",
                    "SaaS Product Development",
                    "Technical Content Creation",
                  ],
                  description:
                    "Amir Sedaghat (DevSedaghat) is a passionate full-stack innovator and tech educator dedicated to empowering developers through high-quality tutorials, courses, and open-source projects. With expertise in React, Next.js, React Native, and UI/UX, he builds scalable applications while teaching modern web development. Aspiring SaaS founder with a vision to create unicorn-level impact.",
                },
                {
                  "@type": "Organization",
                  "@id": "https://devsedaghat.com/#organization",
                  name: "DevSedaghat",
                  url: "https://devsedaghat.com",
                  logo: {
                    "@type": "ImageObject",
                    // TODO: لوگو آپلود کن (512x512)
                    url: "https://devsedaghat.com/logo.png",
                    width: 512,
                    height: 512,
                  },
                  sameAs: [
                    "https://x.com/devsedaghat",
                    "https://youtube.com/@DevSedaghat",
                  ],
                  founder: {
                    "@type": "Person",
                    name: "Amir Sedaghat",
                  },
                  contactPoint: {
                    "@type": "ContactPoint",
                    email: "hello@devsedaghat.com",
                    contactType: "Customer Support",
                  },
                },
                // TODO: وقتی دوره واقعی ساختی، اینو آپدیت کن
                // {
                //   "@type": "CreativeWork",
                //   name: "Next.js Mastery Course",
                //   url: "https://devsedaghat.com/courses/nextjs-mastery",
                //   author: { "@type": "Person", name: "Amir Sedaghat" },
                //   datePublished: "2025-01-15",
                //   educationalLevel: "Intermediate",
                // },
              ],
            },
            null,
            2
          ),
        }}
      />

      <body
        className={`${poppins.variable} ${roboto.variable} ${nunito.variable} antialiased bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
