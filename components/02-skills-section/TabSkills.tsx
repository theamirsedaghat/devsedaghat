"use client";

import {
  Code,
  Database,
  Figma,
  Globe,
  Layout,
  Target,
  Video,
  Zap,
} from "lucide-react";
import { Tabs } from "../ui/tabs";
import {
  IconBrandNextjs,
  IconBrandReact,
  IconBrandReactNative,
  IconBrandTailwind,
  IconBrandVercel,
  IconDatabase,
  IconLock,
} from "@tabler/icons-react";
import Image from "next/image";
import JavascriptLogo from "../ui/icons/tech-stack/JavascriptLogo";
import TypescriptLogo from "../ui/icons/tech-stack/TypescriptLogo";
import ReactjsLogo from "../ui/icons/tech-stack/ReactjsLogo";

export function TabSkills() {
  const tabs = [
    {
      title: "Tech Stack",
      value: "techstack",
      content: (
        <div className="w-full bg-background/90 backdrop-blur-xl border border-border/50 min-h-80 relative overflow-hidden rounded-3xl p-6 md:p-10">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 bg-linear-to-r from-white to-white/60 bg-clip-text text-transparent">
            Tech Stack & Tools
          </h3>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-5 max-w-5xl mx-auto">
            <div className="group flex flex-col items-center p-5 rounded-2xl bg-linear-to-br from-[#3178C6]/20 to-[#2D6AB1]/40 border border-[#3178C6]/20 hover:border-[#3178C6]/60 transition-all duration-300">
              <TypescriptLogo className="w-9 h-9 group-hover:scale-110 group-hover:opacity-100 transition opacity-80 rounded-md" />
              <span className="text-xs mt-2 font-medium">TypeScript</span>
            </div>

            {/* Next.js 15 */}
            <div className="group flex flex-col items-center p-5 rounded-2xl bg-linear-to-br from-black/40 to-black/80 border border-white/10 hover:border-white/30 transition-all">
              <IconBrandNextjs className="w-9 h-9 text-white group-hover:scale-110 transition opacity-80  group-hover:opacity-100 " />
              <span className="text-xs mt-2 font-medium">Next.js 15</span>
            </div>

            <div className="group flex flex-col items-center p-5 rounded-2xl bg-linear-to-br from-[#61DAFB]/20 to-[#00D8FF]/30 border border-[#61DAFB]/30 hover:border-[#61DAFB]/60">
              <ReactjsLogo className="w-9 h-9 group-hover:scale-110 group-hover:opacity-100 transition opacity-80 rounded-md" />

              <span className="text-xs mt-2 font-medium">React</span>
            </div>

            <div className="group flex flex-col items-center p-5 rounded-2xl bg-linear-to-br from-[#06B6D4]/20 to-[#0891B2]/40 border border-[#06B6D4]/30">
              <IconBrandTailwind className="w-9 h-9 text-[#06B6D4] group-hover:scale-110 transition" />
              <span className="text-xs mt-2 font-medium">Tailwind</span>
            </div>

            <div className="group flex flex-col items-center p-5 rounded-2xl bg-black border border-white/20 hover:border-white/50 transition-all">
              <IconBrandVercel className="w-9 h-9 text-white group-hover:scale-110 transition" />
              <span className="text-xs mt-2 font-medium">Vercel</span>
            </div>

            <div className="group flex flex-col items-center p-5 rounded-2xl bg-linear-to-br from-[#ffeb0e]/20 to-[#FF1A75]/40 border border-[#FF4D4D]/30">
              <JavascriptLogo className="w-9 h-9  group-hover:scale-120 transition text-yellow-300 opacity-80 group-hover:opacity-100" />
              <span className="text-xs mt-2 font-medium">Framer Motion</span>
            </div>

            {/* React  Native */}
            <div className="group flex flex-col items-center p-5 rounded-2xl bg-linear-to-br from-[#00d8ff]/20 to-[#00a8cc]/40 border border-[#3178C6]/40 hover:border-[#3178C6]/80">
              <IconBrandReactNative className="w-9 h-9 text-[#00bfff] group-hover:rotate-12 transition " />
              <span className="text-xs mt-2 font-medium">React Native</span>
            </div>
            {/* Figma */}
            <div className="group flex flex-col items-center p-5 rounded-2xl bg-linear-to-br from-[#eb4c1d]/20 to-[#9d56f7]/40">
              <Figma className="w-9 h-9 text-[#eb4c1d]" />
              <span className="text-xs mt-2 font-medium">Figma</span>
            </div>

            {/* Prisma */}
            <div className="group flex flex-col items-center p-5 rounded-2xl bg-linear-to-br from-[#2D3748]/40 to-[#1A202C]/60 border border-[#4FD1C5]/30">
              <IconDatabase className="w-9 h-9 text-[#4FD1C5] group-hover:scale-110 transition" />
              <span className="text-xs mt-2 font-medium">Prisma</span>
            </div>

            {/* PostgreSQL */}
            <div className="group flex flex-col items-center p-5 rounded-2xl bg-linear-to-br from-[#336791]/30 to-[#1E4B6B]/50 border border-[#336791]/40">
              <Database className="w-9 h-9 text-[#336791] group-hover:scale-110 transition" />
              <span className="text-xs mt-2 font-medium">PostgreSQL</span>
            </div>

            {/* Clerk */}
            <div className="group flex flex-col items-center p-5 rounded-2xl bg-linear-to-br from-[#6C47FF]/20 to-[#5439CC]/40 border border-[#6C47FF]/30">
              <IconLock className="w-9 h-9 text-[#6C47FF] group-hover:scale-110 transition" />
              <span className="text-xs mt-2 font-medium">Clerk</span>
            </div>
            {/* TanStack Query */}
            <div className="group flex flex-col items-center p-5 rounded-2xl bg-linear-to-br from-[#28c5ad]/30 to-[#fe7c5c]/50 border border-white/10">
              <Image
                src={"/rql.png"}
                alt="React query logo"
                width={36}
                height={36}
              />
              <span className="text-xs mt-2 font-medium">React Query</span>
            </div>
          </div>
        </div>
        // <div className="w-full bg-background min-h-[300px] relative overflow-hidden rounded-2xl p-6 md:p-10 text-foreground">
        //   <h3 className="text-2xl md:text-3xl font-headline mb-4">
        //     Tech Stack & Tools
        //   </h3>
        //   <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        //     {/* React */}
        //     <div className="flex flex-col items-center bg-linear-to-br from-[#00c8ff]/20 to-[#006aff]/30 p-4 rounded-xl backdrop-blur-sm">
        //       <IconBrandReact className="w-8 h-8 text-[#61DAFB]" />
        //       <span className="text-sm mt-2">React</span>
        //     </div>

        //     {/* Next.js */}
        //     <div className="flex flex-col items-center bg-linear-to-br from-white/10 to-white/5 p-4 rounded-xl backdrop-blur-sm">
        //       <IconBrandNextjs className="w-8 h-8 text-white" />
        //       <span className="text-sm mt-2">Next.js</span>
        //     </div>

        //     {/* React Native */}
        //     <div className="flex flex-col items-center bg-linear-to-br from-[#00d8ff]/20 to-[#00a8cc]/30 p-4 rounded-xl">
        //       <IconBrandReactNative className="w-8 h-8 text-[#00D8FF]" />

        //       <span className="text-sm mt-2">React Native / Expo</span>
        //     </div>

        //     {/* JavaScript */}
        //     <div className="flex flex-col items-center bg-linear-to-br from-[#f7df1e]/30 to-[#e4c800]/40 p-4 rounded-xl">
        //       <IconBrandJavascript className="w-8 h-8 text-[#F7DF1E]" />
        //       <span className="text-sm mt-2">JavaScript</span>
        //     </div>

        //     {/* TypeScript */}
        //     <div className="flex flex-col items-center bg-linear-to-br from-[#3178c6]/30 to-[#165799]/40 p-4 rounded-xl">
        //       <IconBrandTypescript className="w-8 h-8 text-[#3178C6]" />
        //       <span className="text-sm mt-2">TypeScript</span>
        //     </div>

        //     {/* Tailwind */}
        //     <div className="flex flex-col items-center bg-linear-to-br from-[#38bdf8]/30 to-[#0ea5e9]/40 p-4 rounded-xl">
        //       <IconBrandTailwind className="w-8 h-8 text-[#38BDF8]" />
        //       <span className="text-sm mt-2">Tailwind CSS</span>
        //     </div>

        //     {/* Figma */}
        //     <div className="flex flex-col items-center bg-linear-to-br from-[#ff7262]/30 to-[#a259ff]/40 p-4 rounded-xl">
        //       <IconBrandFigma className="w-8 h-8 text-[#A259FF]" />
        //       <span className="text-sm mt-2">Figma</span>
        //     </div>

        //     {/* Git */}
        //     <div className="flex flex-col items-center bg-linear-to-br from-[#f34f29]/30 to-[#b8321a]/40 p-4 rounded-xl">
        //       <GitGraph className="w-8 h-8 text-[#F34F29]" />
        //       <span className="text-sm mt-2">Git</span>
        //     </div>

        //     {/* HTML/CSS */}
        //     <div className="flex flex-col items-center bg-linear-to-br from-[#e34f26]/30 to-[#264de4]/30 p-4 rounded-xl">
        //       <div className="flex flex-row">
        //         <IconBrandHtml5 className="w-8 h-8 text-[#e4522d]" />
        //         <IconBrandCss3 className="w-8 h-8 text-[#6b399c]" />
        //       </div>
        //       <span className="text-sm mt-2">HTML & CSS</span>
        //     </div>
        //   </div>
        // </div>
      ),
    },
    {
      title: "Products",
      value: "products",
      content: (
        <div className="w-full bg-red-600 min-h-[300px] overflow-hidden relative rounded-2xl p-6 md:p-10  text-foreground">
          <h3 className="text-2xl md:text-3xl font-headline mb-4">
            Products I Design & Build
          </h3>
          <p className="text-base md:text-lg mb-6 font-body text-foreground/80">
            I turn ideas into working web and mobile products — from polished
            UIs to early SaaS prototypes. My focus is on clear flows, fast
            interfaces, and using AI where it genuinely improves the experience.
          </p>
          <ul className="space-y-4 text-sm md:text-base">
            <li className="flex items-center gap-3">
              <Layout className="w-5 h-5 text-[--purple-p-300]" />
              <span>
                Modern web dashboards, landing pages, and internal tools.
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Globe className="w-5 h-5 text-[--purple-p-300]" />
              <span>
                Web/mobile experiences that feel consistent across devices.
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Zap className="w-5 h-5 text-[--purple-p-300]" />
              <span>
                Early-stage SaaS and AI-assisted concepts for creators and
                developers.
              </span>
            </li>
          </ul>
          <p className="mt-6 text-sm italic text-foreground/60">
            You can explore some of these in the projects section below.
          </p>
        </div>
      ),
    },

    {
      title: "Playground",
      value: "playground",
      content: (
        <div className="w-full bg-rose-400 min-h-[300px] overflow-hidden relative rounded-2xl p-6 md:p-10  text-foreground">
          <h3 className="text-2xl md:text-3xl font-headline mb-4">
            Experiments & Playground
          </h3>
          <p className="text-base md:text-lg mb-6 font-body text-foreground/80">
            I&apos;m constantly testing new ideas — from UI motion and component
            labs to AI features inside everyday tools. This is where a lot of my
            content and future products are born.
          </p>
          <ul className="space-y-4 text-sm md:text-base">
            <li className="flex items-center gap-3">
              <Code className="w-5 h-5 text-[--purple-p-300]" />
              <span>
                Quick prototypes combining UI, animations, and real data.
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Zap className="w-5 h-5 text-[--purple-p-300]" />
              <span>
                Interactive experiments with motion, 3D feel, and
                micro-interactions.
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Globe className="w-5 h-5 text-[--purple-p-300]" />
              <span>
                Small tools I build for myself first — sometimes released
                publicly later.
              </span>
            </li>
          </ul>
          <p className="mt-6 text-sm italic text-foreground/60">
            I often turn these experiments into tutorials or breakdowns.
          </p>
        </div>
      ),
    },
    {
      title: "Content",
      value: "content",
      content: (
        <div className="w-full bg-gray-400  min-h-[300px] overflow-hidden relative rounded-2xl p-6 md:p-10 bg-linear-to-br from-[--blue-p-300] to-[--purple-p-300] text-foreground">
          <h3 className="text-2xl md:text-3xl font-headline mb-4">
            Teaching Through Content
          </h3>
          <p className="text-base md:text-lg mb-6 font-body text-foreground/80">
            I create content for developers who want to actually build things,
            not just watch tutorials. My focus is on calm, practical
            explanations and showing the full journey — from idea to shipped
            product.
          </p>
          <ul className="space-y-4 text-sm md:text-base">
            <li className="flex items-center gap-3">
              <Video className="w-5 h-5 text-[--mint-p-300]" />
              <span>
                Short-form videos on frontend, UX patterns, and real-world tips.
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Code className="w-5 h-5 text-[--mint-p-300]" />
              <span>Deeper series on building full products from scratch.</span>
            </li>
            <li className="flex items-center gap-3">
              <Globe className="w-5 h-5 text-[--mint-p-300]" />
              <span>
                Threads and articles about lessons learned from shipping.
              </span>
            </li>
          </ul>
          <p className="mt-6 text-sm italic text-foreground/60">
            If you found me through content, this is the side of my work
            you&apos;ve already seen.
          </p>
        </div>
      ),
    },
    {
      title: "Vision",
      value: "vision",
      content: (
        <div className="w-full bg-indigo-800 min-h-[300px] overflow-hidden relative rounded-2xl p-6 md:p-10 bg-linear-to-br from-[--purple-p-300] to-[text-[--purple-p-300]] text-foreground">
          <h3 className="text-2xl md:text-3xl font-headline mb-4">
            Long-Term Vision
          </h3>
          <p className="text-base md:text-lg mb-6 font-body text-foreground/80">
            DevSedaghat isn&apos;t just a portfolio name — it&apos;s a long-term
            brand. I&apos;m focused on building a community of builders first,
            then growing into AI-driven SaaS products that make development
            easier and more enjoyable.
          </p>
          <ul className="space-y-4 text-sm md:text-base">
            <li className="flex items-center gap-3">
              <Target className="w-5 h-5 text-[--blue-p-300]" />
              <span>
                0–2 years: grow education, content, and a trusted community.
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Globe className="w-5 h-5 text-[--blue-p-300]" />
              <span>2–5 years: launch focused AI-backed SaaS tools.</span>
            </li>
            <li className="flex items-center gap-3">
              <Code className="w-5 h-5 text-[--blue-p-300]" />
              <span>
                Long term: build a small, sharp team around product, content,
                and education.
              </span>
            </li>
          </ul>
          <p className="mt-6 text-sm italic text-foreground/60">
            If this direction resonates with you, I&apos;d love to connect.
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="h-80 md:h-160 perspective-[1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
      <Tabs tabs={tabs} />
    </div>
  );
}
// {
//     title: "Services",
//     value: "services",
//     content: (
//       <div className="w-full bg-violet-600 min-h-[300px] overflow-hidden relative rounded-2xl p-6 md:p-10  text-foreground">
//         <h3 className="text-2xl md:text-3xl font-headline mb-4">
//           How I Can Help
//         </h3>
//         <p className="text-base md:text-lg mb-6 font-body text-foreground/80">
//           I work with founders, small teams, and creators to bring ideas to
//           life. From frontend and product thinking to technical decisions, I
//           help build things that are both shippable and maintainable.
//         </p>
//         <ul className="space-y-4 text-sm md:text-base">
//           <li className="flex items-center gap-3">
//             <Code className="w-5 h-5 text-[--blue-p-300]" />
//             <span>
//               Frontend & full-stack development for MVPs and real products.
//             </span>
//           </li>
//           <li className="flex items-center gap-3">
//             <Layout className="w-5 h-5 text-[--blue-p-300]" />
//             <span>
//               UI/UX reviews, design refinement, and motion/interaction passes.
//             </span>
//           </li>
//           <li className="flex items-center gap-3">
//             <Zap className="w-5 h-5 text-[--blue-p-300]" />
//             <span>
//               Guidance on choosing stacks and integrating AI into your app.
//             </span>
//           </li>
//         </ul>
//         <p className="mt-6 text-sm italic text-foreground/60">
//           Building something in this space? The contact section is the best
//           way to reach me.
//         </p>
//       </div>
//     ),
//   },
