"use client";
import { StickyScroll } from "../ui/sticky-scroll-reveal";

const aboutContent = [
  {
    title: "Who I am",
    description:
      "I’m Amir Sedaghat, also known as DevSedaghat — a developer and tech educator focused on building real web and mobile products. I blend frontend, product thinking, and content to create experiences that are both usable and useful.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[radial-gradient(circle_at_20%_0%,rgba(244,244,245,0.6),transparent_55%),linear-gradient(to_bottom_right,var(--blue-p-300),var(--purple-p-300))] text-white">
        <span className="text-lg font-semibold">
          DevSedaghat — Builder & Educator
        </span>
      </div>
    ),
  },
  {
    title: "From code to content",
    description:
      "I don’t just ship projects — I document and teach the process. Through short-form content, deep-dive videos, and practical guides, I help developers move from tutorial-watching to building their own products.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--pink-p-200),var(--blue-p-300))] text-white">
        <div className="flex flex-col items-center gap-2 text-center">
          <p className="text-sm uppercase tracking-[0.18em] text-white/80">
            Content & Education
          </p>
          <p className="text-base font-medium">
            Videos · Threads · Deep-dive tutorials
          </p>
        </div>
      </div>
    ),
  },
  {
    title: "SaaS, AI, and real-world products",
    description:
      "My next focus is building SaaS products with AI integration — tools that help creators, developers, and small teams work smarter. I care about clean UX, practical automation, and solving real problems, not just fancy demos.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--mint-p-300),var(--yellow-p-200))] text-slate-900">
        <div className="flex flex-col items-center gap-2 text-center">
          <p className="text-sm font-semibold">SaaS & AI</p>
          <p className="text-xs text-slate-800/80">
            Dashboards · Workflows · Assistants
          </p>
        </div>
      </div>
    ),
  },
  {
    title: "Community and long-term vision",
    description:
      "I’m building DevSedaghat as a long-term brand — a place where learners, builders, and investors can intersect. Over the next years, my goal is to grow a community of builders, launch SaaS products, and collaborate with people who care about quality and impact.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[radial-gradient(circle_at_10%_0%,rgba(255,255,255,0.4),transparent_55%),linear-gradient(to_bottom_right,var(--purple-p-300),var(--blue-p-400))] text-white">
        <div className="flex flex-col items-center gap-1 text-center">
          <p className="text-sm font-semibold">Community of Builders</p>
          <p className="text-xs text-white/80">
            Learners · Collaborators · Future investors
          </p>
        </div>
      </div>
    ),
  },
];

export function StickyScrolls() {
  return (
    <div className="w-full p-4 ">
      <StickyScroll content={aboutContent} />
    </div>
  );
}
