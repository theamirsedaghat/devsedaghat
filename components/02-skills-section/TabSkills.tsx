"use client";

import {
  Layers,
  Layout,
  MessageSquare,
  Sparkles,
  Video,
  Zap,
} from "lucide-react";
import { Tabs } from "../ui/tabs";
import { IconBrandNextjs, IconBrandYoutube } from "@tabler/icons-react";
import JavascriptLogo from "../ui/icons/tech-stack/JavascriptLogo";
import TypescriptLogo from "../ui/icons/tech-stack/TypescriptLogo";
import ReactjsLogo from "../ui/icons/tech-stack/ReactjsLogo";
import TailwindCssLogo from "../ui/icons/tech-stack/TailwindCssLogo";
import VercelLogo from "../ui/icons/tech-stack/VercelLogo";
import FigmaLogo from "../ui/icons/tech-stack/FigmaLogo";
import PrismaORMLogo from "../ui/icons/tech-stack/PrismaORMLogo";
import PostgresqlLogo from "../ui/icons/tech-stack/PostgresqlLogo";
import SupabaseLogo from "../ui/icons/tech-stack/SupabaseLogo";
import HtmlLogo from "../ui/icons/tech-stack/HtmlLogo";
import CssLogo from "../ui/icons/tech-stack/CssLogo";

export function TabSkills() {
  const tabs = [
    {
      title: "Tech Stack",
      value: "techstack",
      tabColor: "var(--blue-p-400)",
      content: (
        <div className="w-full h-full  overflow-hidden relative rounded-2xl p-4 sm:p-6 md:p-8 text-foreground flex flex-col bg-background">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-headline mb-4 text-center md:text-start">
            Technologies & Tools
          </h3>

          <div className="mt-1 sm:mt-2 md:mt-3 flex-1 min-h-0">
            <div className="relative h-full">
              <div className="h-full overflow-auto scrollbar-hide no-visible-scrollbar py-12 lg:py-0">
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3 sm:gap-4 md:gap-5 max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto place-items-center">
                  {/* HTML & CSS */}
                  <div className="group flex flex-col items-center justify-center w-24 h-24 sm:w-[104px] sm:h-[104px] px-2 py-3 rounded-2xl bg-linear-to-b from-orange-500/30 to-blue-500/30 border border-orange-500/30 hover:border-orange-400/60 transition-all duration-300">
                    <div className="flex flex-row gap-2">
                      <HtmlLogo className="size-8 group-hover:scale-110 transition opacity-70 group-hover:opacity-100" />
                      <CssLogo className="size-8 group-hover:scale-110 transition opacity-70 group-hover:opacity-100" />
                    </div>
                    <span className="text-xs mt-2 font-medium text-orange-200 text-center">
                      HTML & CSS
                    </span>
                  </div>

                  {/* JavaScript */}
                  <div className="group flex flex-col items-center justify-center w-24 h-24 sm:w-[104px] sm:h-[104px] px-2 py-3 rounded-2xl bg-linear-to-b from-yellow-400/20 to-amber-500/40 border border-yellow-400/30 hover:border-yellow-300/70 transition-all duration-300">
                    <JavascriptLogo className="size-8 group-hover:scale-110 transition opacity-75 group-hover:opacity-100 rounded-md" />
                    <span className="text-xs mt-2 font-medium text-yellow-200 text-center">
                      JavaScript
                    </span>
                  </div>

                  {/* TypeScript */}
                  <div className="group flex flex-col items-center justify-center w-24 h-24 sm:w-[104px] sm:h-[104px] px-2 py-3 rounded-2xl bg-linear-to-b from-blue-500/20 to-blue-700/40 border border-blue-500/40 hover:border-blue-400/80 transition-all duration-300">
                    <TypescriptLogo className="size-8 group-hover:scale-110 transition opacity-75 group-hover:opacity-100 rounded-md" />
                    <span className="text-xs mt-2 font-medium text-blue-200 text-center">
                      TypeScript
                    </span>
                  </div>

                  {/* React */}
                  <div className="group flex flex-col items-center justify-center w-24 h-24 sm:w-[104px] sm:h-[104px] px-2 py-3 rounded-2xl bg-linear-to-b from-cyan-400/20 to-cyan-600/40 border border-cyan-400/40 hover:border-cyan-300/80 transition-all duration-300">
                    <ReactjsLogo className="size-8 text-[#58c4dc] group-hover:scale-110 transition opacity-75 group-hover:opacity-100" />
                    <span className="text-xs mt-2 font-medium text-cyan-200 text-center">
                      React
                    </span>
                  </div>

                  {/* Next.js */}
                  <div className="group flex flex-col items-center justify-center w-24 h-24 sm:w-[104px] sm:h-[104px] px-2 py-3 rounded-2xl bg-linear-to-b from-black/70 via-zinc-900/90 to-black border border-white/20 hover:border-white/60 transition-all duration-300">
                    <IconBrandNextjs className="size-8 text-white group-hover:scale-110 transition opacity-80 group-hover:opacity-100" />
                    <span className="text-xs mt-2 font-medium text-white text-center">
                      Next.js
                    </span>
                  </div>

                  {/* Tailwind CSS */}
                  <div className="group flex flex-col items-center justify-center w-24 h-24 sm:w-[104px] sm:h-[104px] px-2 py-3 rounded-2xl bg-linear-to-b from-cyan-500/40 to-cyan-700/40 border border-cyan-500/50 hover:border-cyan-300/80 transition-all duration-300">
                    <TailwindCssLogo className="size-8 group-hover:scale-110 transition opacity-75 group-hover:opacity-100" />
                    <span className="text-xs mt-2 font-medium text-cyan-200 text-center">
                      TailwindCSS
                    </span>
                  </div>

                  {/* PostgreSQL */}
                  <div className="group flex flex-col items-center justify-center w-24 h-24 sm:w-[104px] sm:h-[104px] px-2 py-3 rounded-2xl bg-linear-to-b from-blue-600/20 via-blue-950/70 to-blue-800/50 border border-blue-600/40 hover:border-blue-400/80 transition-all duration-300">
                    <PostgresqlLogo className="size-8 group-hover:scale-110 transition opacity-85 group-hover:opacity-100" />
                    <span className="text-xs mt-2 font-medium text-blue-200 text-center">
                      PostgreSQL
                    </span>
                  </div>

                  {/* Prisma ORM */}
                  <div className="group flex flex-col items-center justify-center w-24 h-24 sm:w-[104px] sm:h-[104px] px-2 py-3 rounded-2xl bg-linear-to-br from-[#0c344b]/60 via-[#26a495]/70 to-teal-950 border border-[#26a495]/50 hover:border-[#26a495]/80 transition-all duration-300">
                    <PrismaORMLogo className="size-8 group-hover:scale-110 transition opacity-85 group-hover:opacity-100" />
                    <span className="text-xs mt-2 font-medium text-teal-50 text-center">
                      Prisma ORM
                    </span>
                  </div>

                  {/* Supabase */}
                  <div className="group flex flex-col items-center justify-center w-24 h-24 sm:w-[104px] sm:h-[104px] px-2 py-3 rounded-2xl bg-linear-to-b from-emerald-400/20 to-green-600/40 border border-emerald-400/40 hover:border-emerald-300/80 transition-all duration-300">
                    <SupabaseLogo className="size-8 group-hover:scale-110 transition opacity-75 group-hover:opacity-100" />
                    <span className="text-xs mt-2 font-medium text-emerald-200 text-center">
                      Supabase
                    </span>
                  </div>

                  {/* Vercel */}
                  <div className="group flex flex-col items-center justify-center w-24 h-24 sm:w-[104px] sm:h-[104px] px-2 py-3 rounded-2xl bg-black/90 border border-white/20 hover:border-white/70 transition-all duration-300 ">
                    <VercelLogo className="size-8 text-white group-hover:scale-110 transition opacity-80 group-hover:opacity-100" />
                    <span className="text-xs mt-2 font-medium text-white text-center">
                      Vercel
                    </span>
                  </div>

                  {/* Figma */}
                  <div className="group flex flex-col items-center justify-center w-24 h-24 sm:w-[104px] sm:h-[104px] px-2 py-3 rounded-2xl bg-linear-to-b from-purple-500/20 via-pink-500/30 to-orange-500/40 border border-fuchsia-400/40 hover:border-fuchsia-600/80 transition-all duration-300">
                    <FigmaLogo className="size-8 group-hover:scale-110 transition opacity-75 group-hover:opacity-100" />
                    <span className="text-xs mt-2 font-medium text-fuchsia-200 text-center">
                      Figma
                    </span>
                  </div>

                  {/* React Native */}
                  <div className="group flex flex-col items-center justify-center w-24 h-24 sm:w-[104px] sm:h-[104px] px-2 py-3 rounded-2xl bg-linear-to-b from-sky-400/20 to-blue-600/40 border border-sky-400/40 hover:border-sky-300/80 transition-all duration-300">
                    <ReactjsLogo className="size-8 text-[#61dafb] group-hover:scale-110 transition opacity-75 group-hover:opacity-100" />
                    <span className="text-xs mt-2 font-medium text-sky-200 text-center">
                      React Native
                    </span>
                  </div>
                </div>
              </div>

              <div
                className="absolute bottom-0 w-full h-16 pointer-events-none 
                  bg-linear-to-t from-background via-background/90 to-transparent lg:hidden"
              >
                <div className="h-2/3 bg-transparent w-full bottom-0 absolute backdrop-blur-[2px] backdrop-opacity-80" />
              </div>

              <div
                className="absolute top-0 w-full h-12 pointer-events-none 
                  bg-linear-to-b from-background via-background/70 to-transparent lg:hidden"
              >
                <div className="h-1/3 bg-transparent w-full top-0 absolute backdrop-blur-[2px] backdrop-opacity-80" />
              </div>
            </div>
          </div>
        </div>
      ),
    },

    {
      title: "Teaching",
      value: "teaching",
      tabColor: "var(--orange-p-400)",
      content: (
        <div className="w-full h-full overflow-hidden relative rounded-2xl p-4 sm:p-6 md:p-8 text-foreground bg-linear-to-br from-background to-(--orange-p-400)/30 text-center md:text-start flex flex-col justify-between">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-headline mb-4">
            Teaching Skills
          </h3>
          <p className="text-sm sm:text-base md:text-lg mb-5 font-body text-foreground/85 leading-relaxed">
            I teach developers how to actually ship — not just code. My content
            is calm, deeply practical, and always follows the full journey from
            zero to deployed product.
          </p>

          <ul className="space-y-8 text-sm sm:text-base md:text-lg">
            <li className="flex flex-col md:flex-row items-center md:items-start  gap-3 ">
              <Video className="w-5 h-5 sm:w-6 sm:h-6 text-(--orange-p-400) mt-0.5" />
              <span>
                Short, high-signal videos on advanced frontend patterns, UX
                decisions, and real-world debugging tricks.
              </span>
            </li>
            <li className="flex flex-col md:flex-row items-center md:items-start  gap-3 ">
              <Layers className="w-5 h-5 sm:w-6 sm:h-6 text-(--orange-p-400) mt-0.5" />
              <span>
                Long-form series that guide builders through complete products —
                from Figma to deployed MVP.
              </span>
            </li>
            <li className="flex flex-col md:flex-row items-center md:items-start  gap-3 ">
              <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6 text-(--orange-p-400) mt-0.5" />
              <span>
                Threads, articles, and post-mortems sharing hard-earned lessons
                from shipping dozens of projects.
              </span>
            </li>
          </ul>

          <p className="mt-6 text-xs sm:text-sm italic text-foreground/60">
            If you found me through my content — welcome, you already know the
            vibe.
          </p>
        </div>
      ),
    },
    {
      title: "Product",
      value: "product",
      tabColor: "var(--purple-p-300)",
      content: (
        <div className="w-full h-full overflow-hidden relative rounded-2xl p-4 sm:p-6 md:p-8 text-foreground bg-linear-to-br from-background to-(--purple-p-300)/30 text-center md:text-start flex flex-col justify-between">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-headline mb-4">
            Product Skills
          </h3>
          <p className="text-sm sm:text-base md:text-lg mb-5 font-body text-foreground/85 leading-relaxed">
            I turn ideas into production-ready web and mobile products with a
            focus on clean UX, fast performance, and smart AI integration where
            it truly adds value.
          </p>

          <ul className="space-y-4 text-sm sm:text-base md:text-lg">
            <li className="flex flex-col md:flex-row items-center md:items-start gap-3">
              <Layout className="w-5 h-5 sm:w-6 sm:h-6 text-(--purple-p-400) mt-0.5" />
              <span>
                Designing responsive dashboards, landing pages, and
                cross-platform interfaces that feel natural on every device.
              </span>
            </li>

            <li className="flex flex-col md:flex-row items-center md:items-start gap-3">
              <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-(--purple-p-400) mt-0.5" />
              <span>
                Building early SaaS prototypes and AI-powered tools for
                creators, developers, and startups — always with a ship-first
                mindset.
              </span>
            </li>

            <li className="flex flex-col md:flex-row items-center md:items-start gap-3">
              <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-(--purple-p-400) mt-0.5" />
              <span>
                Exploring motion-rich UI, micro-interactions, 3D concepts, and
                internal tools — many evolving into public products or
                tutorials.
              </span>
            </li>
          </ul>

          <p className="mt-6 text-xs sm:text-sm italic text-foreground/60">
            Watch me build & ship real products on YouTube →
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 perspective-[1000px] relative flex flex-col items-start justify-center mt-8 lg:my-16  ">
      <Tabs tabs={tabs} />
    </div>
  );
}
