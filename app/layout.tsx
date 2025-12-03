import type { Metadata } from "next";
import { Poppins, Roboto, Nunito } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { ThemeProvider } from "@/components/themes-provider";
import { ScrollToTopButton } from "@/components/ScrollToTopButton";
import Head from "next/head";

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
    "Amir Sedaghat | Full-Stack Innovator, Tech Educator & Content Creator",
  description:
    "Discover the world of Amir Sedaghat (TheAmirSedaghat), a full-stack innovator crafting seamless web and mobile experiences with React, Next.js, React Native, and UI/UX mastery. Dive into empowering tutorials, in-depth courses, real-world projects, and insightful strategies designed to elevate aspiring developers. Join a journey toward building impactful tech communities, fostering trust, and paving the way for groundbreaking SaaS ventures that attract visionary investors.",
  keywords: [
    "Amir Sedaghat",
    "TheAmirSedaghat",
    "AmirSedaghat",
    "Tech Educator",
    "Content Creator",
    "Full-Stack Developer",
    "Dev Sedaghat",
    "UI/UX Designer",
    "React Developer",
    "Next.js Expert",
    "React Native Mobile Developer",
    "Web Development Tutorials",
    "Educational Tech Courses",
    "SaaS Founder Visionary",
    "Tech Community Leader",
    "YouTube Amir Sedaghat",
    "LinkedIn Amir Sedaghat",
    "Twitter Amir Sedaghat",
    "Sedaghat",
  ],
  authors: [{ name: "Amir Sedaghat", url: "https://amirsedaghat.com" }],
  creator: "Amir Sedaghat (TheAmirSedaghat)",
  publisher: "Amir Sedaghat",
  metadataBase: new URL("https://amirsedaghat.com"),
  alternates: {
    canonical: "https://amirsedaghat.com",
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
    title: "Amir Sedaghat – Tech Educator & Product Builder (Web, Mobile, AI)",
    description:
      "Amir Sedaghat is a tech educator and product builder focused on modern web, mobile with React, Next.js, React Native, and AI-powered SaaS. He creates clear learning paths, real-world projects, and educational content for developers, founders, and teams.",
    url: "https://amirsedaghat.com",
    siteName: "Amir Sedaghat Portfolio",
    images: [
      {
        // TODO: جایگزین کن با تصویر واقعی (1200x630)
        // مثال: Canva → "amirsedaghat" + عکس + متن + رنگ برند
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Amir Sedaghat - Portfolio of TheAmirSedaghat, Tech Educator",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Amir Sedaghat | Full-Stack Innovator, Tech Educator & Content Creator",
    description:
      "Unlock the secrets of full-stack development and tech education with Amir Sedaghat (TheAmirSedaghat). From React Native mobile apps to UI/UX masterpieces, get tutorials, courses, and insights that build trust and inspire innovation. Follow for daily empowerment and SaaS dreams!",
    images: ["/og-image.png"],
    creator: "@theamirsedaghat",
  },
  icons: {
    icon: ["/favicon.ico", "/browser-logo.svg"],
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon.ico",
  },
};
export const viewport = {
  themeColor: "#16161e",
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
                  "@id": "https://amirsedaghat.com/#person",
                  name: "Amir Sedaghat",
                  alternateName: "TheAmirSedaghat",
                  url: "https://amirsedaghat.com",
                  image: {
                    "@type": "ImageObject",
                    // TODO: عکس پروفایل حرفه‌ای آپلود کن (800x800)
                    url: "https://amirsedaghat.com/amir-sedaghat-profile.jpg",
                    width: 800,
                    height: 800,
                    caption:
                      "Amir Sedaghat - Full-Stack Innovator & Tech Educator",
                  },
                  sameAs: [
                    "https://www.linkedin.com/in/amirsedaghat",
                    "https://x.com/TheAmirSedaghat",
                    "https://youtube.com/@TheAmirSedaghat",
                    "https://github.com/TheAmirSedaghat",
                    "https://instagram.com/TheAmirSedaghat",
                  ],
                  jobTitle: "Tech Educator & Content Creator",
                  worksFor: {
                    "@type": "Organization",
                    "@id": "https://amirsedaghat.com/#organization",
                  },

                  knowsAbout: [
                    "Full-Stack Development",
                    "UI/UX Design",
                    "SaaS Product Development",
                    "Technical Content Creation",
                  ],
                  description:
                    "Amir Sedaghat (TheAmirSedaghat) is a passionate full-stack innovator and tech educator dedicated to empowering developers through high-quality tutorials, courses, and open-source projects. With expertise in React, Next.js, React Native, and UI/UX, he builds scalable applications while teaching modern web development. Aspiring SaaS founder with a vision to create unicorn-level impact.",
                },
                {
                  "@type": "Organization",
                  "@id": "https://amirsedaghat.com/#organization",
                  name: "Amir Sedaghat",
                  url: "https://amirsedaghat.com",
                  logo: {
                    "@type": "ImageObject",
                    // TODO: لوگو آپلود کن (512x512)
                    url: "https://amirsedaghat.com/logo.png",
                    width: 512,
                    height: 512,
                  },
                  sameAs: [
                    "https://x.com/TheAmirSedaghat",
                    "https://youtube.com/@TheAmirSedaghat",
                  ],
                  founder: {
                    "@type": "Person",
                    name: "Amir Sedaghat",
                  },
                  contactPoint: {
                    "@type": "ContactPoint",
                    email: "hello@amirsedaghat.com",
                    contactType: "Customer Support",
                  },
                },
                // TODO: وقتی دوره واقعی ساختی، اینو آپدیت کن
                // {
                //   "@type": "CreativeWork",
                //   name: "Next.js Mastery Course",
                //   url: "https://amirsedaghat.com/courses/nextjs-mastery",
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
      <head>
        <meta name="apple-mobile-web-app-title" content="Amir Sedaghat" />
        <link
          rel="preconnect"
          href="https://challenges.cloudflare.com"
          crossOrigin="anonymous"
        />
      </head>

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
          <ScrollToTopButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
