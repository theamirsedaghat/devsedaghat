"use client";

import { Code, Globe, Layout, Target, Video, Zap } from "lucide-react";
import { Tabs } from "../ui/tabs";
import { IconBrandNextjs } from "@tabler/icons-react";
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
        <div className="w-full h-full bg-background overflow-hidden relative rounded-2xl p-4 sm:p-6 md:p-8 text-foreground flex flex-col">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-headline mb-3 sm:mb-4">
            Tech Stack & Tools
          </h3>

          <div className="mt-1 sm:mt-2 md:mt-3 flex-1 min-h-0">
            <div className="relative h-full">
              <div className="h-full overflow-auto scrollbar-hide no-visible-scrollbar py-12 lg:py-0">
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3 sm:gap-4 md:gap-5 max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto place-items-center">
                  {/* HTML & CSS */}
                  <div className="group flex flex-col items-center justify-center w-[96px] h-[96px] sm:w-[104px] sm:h-[104px] px-2 py-3 rounded-2xl bg-linear-to-b from-orange-500/30 to-blue-500/30 border border-orange-500/30 hover:border-orange-400/60 transition-all duration-300">
                    <div className="flex flex-row gap-2">
                      <HtmlLogo className="size-8 group-hover:scale-110 transition opacity-70 group-hover:opacity-100" />
                      <CssLogo className="size-8 group-hover:scale-110 transition opacity-70 group-hover:opacity-100" />
                    </div>
                    <span className="text-xs mt-2 font-medium text-orange-200 text-center">
                      HTML & CSS
                    </span>
                  </div>

                  {/* JavaScript */}
                  <div className="group flex flex-col items-center justify-center w-[96px] h-[96px] sm:w-[104px] sm:h-[104px] px-2 py-3 rounded-2xl bg-linear-to-b from-yellow-400/20 to-amber-500/40 border border-yellow-400/30 hover:border-yellow-300/70 transition-all duration-300">
                    <JavascriptLogo className="size-8 group-hover:scale-110 transition opacity-75 group-hover:opacity-100 rounded-md" />
                    <span className="text-xs mt-2 font-medium text-yellow-200 text-center">
                      JavaScript
                    </span>
                  </div>

                  {/* TypeScript */}
                  <div className="group flex flex-col items-center justify-center w-[96px] h-[96px] sm:w-[104px] sm:h-[104px] px-2 py-3 rounded-2xl bg-linear-to-b from-blue-500/20 to-blue-700/40 border border-blue-500/40 hover:border-blue-400/80 transition-all duration-300">
                    <TypescriptLogo className="size-8 group-hover:scale-110 transition opacity-75 group-hover:opacity-100 rounded-md" />
                    <span className="text-xs mt-2 font-medium text-blue-200 text-center">
                      TypeScript
                    </span>
                  </div>

                  {/* React */}
                  <div className="group flex flex-col items-center justify-center w-[96px] h-[96px] sm:w-[104px] sm:h-[104px] px-2 py-3 rounded-2xl bg-linear-to-b from-cyan-400/20 to-cyan-600/40 border border-cyan-400/40 hover:border-cyan-300/80 transition-all duration-300">
                    <ReactjsLogo className="size-8 text-[#58c4dc] group-hover:scale-110 transition opacity-75 group-hover:opacity-100" />
                    <span className="text-xs mt-2 font-medium text-cyan-200 text-center">
                      React
                    </span>
                  </div>

                  {/* Next.js */}
                  <div className="group flex flex-col items-center justify-center w-[96px] h-[96px] sm:w-[104px] sm:h-[104px] px-2 py-3 rounded-2xl bg-linear-to-b from-black/70 via-zinc-900/90 to-black border border-white/20 hover:border-white/60 transition-all duration-300 backdrop-blur-sm">
                    <IconBrandNextjs className="size-8 text-white group-hover:scale-110 transition opacity-80 group-hover:opacity-100" />
                    <span className="text-xs mt-2 font-medium text-white text-center">
                      Next.js
                    </span>
                  </div>

                  {/* Tailwind CSS */}
                  <div className="group flex flex-col items-center justify-center w-[96px] h-[96px] sm:w-[104px] sm:h-[104px] px-2 py-3 rounded-2xl bg-linear-to-b from-cyan-500/40 to-cyan-700/40 border border-cyan-500/50 hover:border-cyan-300/80 transition-all duration-300">
                    <TailwindCssLogo className="size-8 group-hover:scale-110 transition opacity-75 group-hover:opacity-100" />
                    <span className="text-xs mt-2 font-medium text-cyan-200 text-center">
                      TailwindCSS
                    </span>
                  </div>

                  {/* PostgreSQL */}
                  <div className="group flex flex-col items-center justify-center w-[96px] h-[96px] sm:w-[104px] sm:h-[104px] px-2 py-3 rounded-2xl bg-linear-to-b from-blue-600/20 via-blue-950/70 to-blue-800/50 border border-blue-600/40 hover:border-blue-400/80 transition-all duration-300">
                    <PostgresqlLogo className="size-8 group-hover:scale-110 transition opacity-85 group-hover:opacity-100" />
                    <span className="text-xs mt-2 font-medium text-blue-200 text-center">
                      PostgreSQL
                    </span>
                  </div>

                  {/* Prisma ORM */}
                  <div className="group flex flex-col items-center justify-center w-[96px] h-[96px] sm:w-[104px] sm:h-[104px] px-2 py-3 rounded-2xl bg-linear-to-br from-[#0c344b]/60 via-[#26a495]/70 to-teal-950 border border-[#26a495]/50 hover:border-[#26a495]/80 transition-all duration-300">
                    <PrismaORMLogo className="size-8 group-hover:scale-110 transition opacity-85 group-hover:opacity-100" />
                    <span className="text-xs mt-2 font-medium text-teal-50 text-center">
                      Prisma ORM
                    </span>
                  </div>

                  {/* Supabase */}
                  <div className="group flex flex-col items-center justify-center w-[96px] h-[96px] sm:w-[104px] sm:h-[104px] px-2 py-3 rounded-2xl bg-linear-to-b from-emerald-400/20 to-green-600/40 border border-emerald-400/40 hover:border-emerald-300/80 transition-all duration-300">
                    <SupabaseLogo className="size-8 group-hover:scale-110 transition opacity-75 group-hover:opacity-100" />
                    <span className="text-xs mt-2 font-medium text-emerald-200 text-center">
                      Supabase
                    </span>
                  </div>

                  {/* Vercel */}
                  <div className="group flex flex-col items-center justify-center w-[96px] h-[96px] sm:w-[104px] sm:h-[104px] px-2 py-3 rounded-2xl bg-black/90 border border-white/20 hover:border-white/70 transition-all duration-300 backdrop-blur-md">
                    <VercelLogo className="size-8 text-white group-hover:scale-110 transition opacity-80 group-hover:opacity-100" />
                    <span className="text-xs mt-2 font-medium text-white text-center">
                      Vercel
                    </span>
                  </div>

                  {/* Figma */}
                  <div className="group flex flex-col items-center justify-center w-[96px] h-[96px] sm:w-[104px] sm:h-[104px] px-2 py-3 rounded-2xl bg-linear-to-b from-purple-500/20 via-pink-500/30 to-orange-500/40 border border-fuchsia-400/40 hover:border-fuchsia-600/80 transition-all duration-300">
                    <FigmaLogo className="size-8 group-hover:scale-110 transition opacity-75 group-hover:opacity-100" />
                    <span className="text-xs mt-2 font-medium text-fuchsia-200 text-center">
                      Figma
                    </span>
                  </div>

                  {/* React Native */}
                  <div className="group flex flex-col items-center justify-center w-[96px] h-[96px] sm:w-[104px] sm:h-[104px] px-2 py-3 rounded-2xl bg-linear-to-b from-sky-400/20 to-blue-600/40 border border-sky-400/40 hover:border-sky-300/80 transition-all duration-300">
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
      title: "Products",
      value: "products",
      tabColor: "var(--yellow-p-300)",
      content: (
        <div className="w-full h-full overflow-hidden relative rounded-2xl p-4 sm:p-6 md:p-8 text-foreground bg-linear-to-br from-background  to-(--yellow-p-300)/40 backdrop-blur-lg">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-headline mb-4">
            Products I Design & Build
          </h3>
          <p className="text-sm sm:text-base md:text-lg mb-4 sm:mb-5 md:mb-6 font-body text-foreground/80">
            I turn ideas into working web and mobile products — from polished
            UIs to early SaaS prototypes. My focus is on clear flows, fast
            interfaces, and using AI where it genuinely improves the experience.
          </p>
          <ul className="space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <li className="flex items-center gap-3">
              <Layout className="w-4 h-4 sm:w-5 sm:h-5 text-[--purple-p-300]" />
              <span>
                Modern web dashboards, landing pages, and internal tools.
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-[--purple-p-300]" />
              <span>
                Web/mobile experiences that feel consistent across devices.
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-[--purple-p-300]" />
              <span>
                Early-stage SaaS and AI-assisted concepts for creators and
                developers.
              </span>
            </li>
          </ul>
          <p className="mt-4 sm:mt-5 md:mt-6 text-xs sm:text-sm italic text-foreground/60">
            You can explore some of these in the projects section below.
          </p>
        </div>
      ),
    },

    {
      title: "Playground",
      value: "playground",
      tabColor: "var(--pink-p-400)",

      content: (
        <div className="w-full h-full overflow-hidden relative rounded-2xl p-4 sm:p-6 md:p-8 bg-linear-to-br from-background  to-(--pink-p-400)/40 backdrop-blur-lg text-foreground">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-headline mb-4">
            Experiments & Playground
          </h3>
          <p className="text-sm sm:text-base md:text-lg mb-4 sm:mb-5 md:mb-6 font-body text-foreground/80">
            I&apos;m constantly testing new ideas — from UI motion and component
            labs to AI features inside everyday tools. This is where a lot of my
            content and future products are born.
          </p>
          <ul className="space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <li className="flex items-center gap-3">
              <Code className="w-4 h-4 sm:w-5 sm:h-5 text-[--purple-p-300]" />
              <span>
                Quick prototypes combining UI, animations, and real data.
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-[--purple-p-300]" />
              <span>
                Interactive experiments with motion, 3D feel, and
                micro-interactions.
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-[--purple-p-300]" />
              <span>
                Small tools I build for myself first — sometimes released
                publicly later.
              </span>
            </li>
          </ul>
          <p className="mt-4 sm:mt-5 md:mt-6 text-xs sm:text-sm italic text-foreground/60">
            I often turn these experiments into tutorials or breakdowns.
          </p>
        </div>
      ),
    },
    {
      title: "Content",
      value: "content",
      tabColor: "var(--orange-p-400)",

      content: (
        <div className="w-full h-full overflow-hidden relative rounded-2xl p-4 sm:p-6 md:p-8 bg-linear-to-br from-background  to-(--orange-p-400)/40 backdrop-blur-lg  text-foreground">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-headline mb-4">
            Teaching Through Content
          </h3>
          <p className="text-sm sm:text-base md:text-lg mb-4 sm:mb-5 md:mb-6 font-body text-foreground/80">
            I create content for developers who want to actually build things,
            not just watch tutorials. My focus is on calm, practical
            explanations and showing the full journey — from idea to shipped
            product.
          </p>
          <ul className="space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <li className="flex items-center gap-3">
              <Video className="w-4 h-4 sm:w-5 sm:h-5 text-[--mint-p-300]" />
              <span>
                Short-form videos on frontend, UX patterns, and real-world tips.
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Code className="w-4 h-4 sm:w-5 sm:h-5 text-[--mint-p-300]" />
              <span>Deeper series on building full products from scratch.</span>
            </li>
            <li className="flex items-center gap-3">
              <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-[--mint-p-300]" />
              <span>
                Threads and articles about lessons learned from shipping.
              </span>
            </li>
          </ul>
          <p className="mt-4 sm:mt-5 md:mt-6 text-xs sm:text-sm italic text-foreground/60">
            If you found me through content, this is the side of my work
            you&apos;ve already seen.
          </p>
        </div>
      ),
    },
    {
      title: "Vision",
      value: "vision",
      tabColor: "var(--purple-p-400)",

      content: (
        <div className="w-full h-full overflow-hidden relative rounded-2xl p-4 sm:p-6 md:p-8 bg-linear-to-br from-background  to-(--purple-p-400)/40 backdrop-blur-lg text-foreground">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-headline mb-4">
            Long-Term Vision
          </h3>
          <p className="text-sm sm:text-base md:text-lg mb-4 sm:mb-5 md:mb-6 font-body text-foreground/80">
            TheAmirSedaghat isn&apos;t just a portfolio name — it&apos;s a
            long-term brand. I&apos;m focused on building a community of
            builders first, then growing into AI-driven SaaS products that make
            development easier and more enjoyable.
          </p>
          <ul className="space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <li className="flex items-center gap-3">
              <Target className="w-4 h-4 sm:w-5 sm:h-5 text-[--blue-p-300]" />
              <span>
                0–2 years: grow education, content, and a trusted community.
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-[--blue-p-300]" />
              <span>2–5 years: launch focused AI-backed SaaS tools.</span>
            </li>
            <li className="flex items-center gap-3">
              <Code className="w-4 h-4 sm:w-5 sm:h-5 text-[--blue-p-300]" />
              <span>
                Long term: build a small, sharp team around product, content,
                and education.
              </span>
            </li>
          </ul>
          <p className="mt-4 sm:mt-5 md:mt-6 text-xs sm:text-sm italic text-foreground/60">
            If this direction resonates with you, I&apos;d love to connect.
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
