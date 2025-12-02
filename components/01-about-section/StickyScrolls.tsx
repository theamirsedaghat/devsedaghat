"use client";
import { StickyScroll } from "../ui/sticky-scroll-reveal";

const aboutContent = [
  {
    title: "Who I am",
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
    title: "From stack to learning roadmap",
    description:
      "I work with modern web and mobile stacks: HTML, CSS, JavaScript, React, Next.js, Tailwind, and React Native.Step by step, I’m moving deeper into full-stack flows, databases, deployment, and AI integration — and I share that journey in public.My content roadmap starts with the basics (HTML/CSS/JavaScript), moves into React and Next.js, and then continues into full-stack apps, mobile projects, and AI-powered tools.",
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
    title: "Who I build and teach for",
    description: `For students and self-taught developers, I try to make my content feel like a clear roadmap, not a random playlist of tutorials.

For teams and founders, I use the same mindset to help with:
	•	shaping and iterating on MVPs,
	•	improving UI and UX flows,
	•	and creating documentation or educational material around a product.

My core work lives in modern web and mobile — from interface design and user journeys to the overall flow of a project.`,
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
      "I like taking a rough idea, giving it a clear shape, and turning it into something that people can actually use and learn from.Over the next years, I want to focus on small, focused tools — SaaS products and AI-assisted helpers that make it easier for creators, developers, and small teams to move faster and ship with more confidence.This portfolio is just one snapshot of that direction, not the destination.",
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
