"use client";
import { StickyScroll } from "../ui/sticky-scroll-reveal";

const aboutContent = [
  {
    title: "Who I Am",
    description:
      "I work at the intersection of several worlds — engineering, teaching, and product. Most of my time goes into designing and shipping real web and mobile experiences, then turning that process into something others can learn from. What matters to me is clear thinking, honest trade-offs, and explaining things without hype or unnecessary complexity.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[radial-gradient(circle_at_20%_0%,rgba(244,244,245,0.6),transparent_55%),linear-gradient(to_bottom_right,var(--blue-p-300),var(--purple-p-300))] text-white">
        <span className="text-lg font-semibold">
          Amir Sedaghat — Builder & Educator
        </span>
      </div>
    ),
  },
  {
    title: "From Stack to Learning Roadmap",
    description:
      "I specialize in modern web and mobile stacks: HTML, CSS, JavaScript, React, Next.js, Tailwind CSS, and React Native. Gradually, I'm deepening my expertise in full-stack architecture, databases, deployment pipelines, and AI integrations—sharing the entire journey publicly. My content roadmap begins with fundamentals (HTML, CSS, JavaScript), progresses to frameworks like React and Next.js, and extends into full-stack apps, mobile development, and AI-enhanced tools.",
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
    title: "Who I Build and Teach For",
    description: `I create for self-taught developers and aspiring builders, turning scattered tutorials into structured roadmaps that lead to real shipped projects. For teams and founders, I apply the same approach to refine MVPs, optimize UI/UX flows, and develop educational resources around products. At my core, I focus on modern web and mobile—from intuitive interfaces and user journeys to seamless project orchestration.`,
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
    title: "What’s next",
    description:
      "I thrive on shaping raw ideas into usable, teachable products that empower others. In the coming years, I'll focus on compact, high-impact tools—SaaS solutions and AI assistants designed to help creators, developers, and small teams iterate faster and ship with greater confidence. This portfolio captures my current direction, but it's just the beginning of a broader vision.",
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
