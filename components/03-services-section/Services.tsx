"use client";

import { BentoCard, BentoGrid } from "../ui/bento-grid";
import { WobbleCard } from "../ui/wobble-card";
import {
  Rocket,
  LayoutTemplate,
  Code2,
  Users,
  Lightbulb,
  Video,
} from "lucide-react";

const services = [
  {
    Icon: Rocket,
    name: "From idea to a focused web or mobile MVP",
    description:
      "I partner with founders and small teams to ship a clear first version with a modern stack, realistic scope, and room to grow.",
    href: "#contact",
    cta: "Discuss an MVP",
    className: "lg:row-start-1 lg:row-end-3 lg:col-start-1 lg:col-end-3",
    background: (
      <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-3xl bg-[radial-gradient(circle_at_30%_20%,var(--blue-p-300),transparent_60%)] opacity-70 hidden md:flex md:blur-lg" />
    ),
  },
  {
    Icon: LayoutTemplate,
    name: "Clean, modern interfaces for web and mobile",
    description:
      "From Figma to production-ready React/Next.js, with attention to real-world UX, motion, and the details people actually feel.",
    href: "#contact",
    cta: "Improve your product",
    className: "lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-2",
    background: (
      <div className="pointer-events-none absolute -right-6 -bottom-6 h-32 w-32 rounded-full bg-[conic-gradient(from_200deg,var(--mint-p-300),transparent_60%)] opacity-80 hidden md:flex md:blur-lg" />
    ),
  },
  {
    Icon: Code2,
    name: "Technical Consulting & Code Review",
    description:
      "Straightforward feedback on architecture, frontend code, and implementation. I help you simplify, refactor, and make your codebase easier to ship and maintain.",
    href: "#contact",
    cta: "Get a review",
    className: "lg:col-start-3 lg:col-end-4 lg:row-start-2 lg:row-end-3",
    background: (
      <div className="pointer-events-none absolute -left-8 -top-8 h-28 w-28 rounded-2xl bg-[radial-gradient(circle_at_20%_20%,var(--purple-p-300),transparent_60%)] opacity-70 hidden md:flex md:blur-lg" />
    ),
  },
  {
    Icon: Users,
    name: "1:1 Mentoring for Developers",
    description:
      "For learners who want more than tutorials. We work on real projects, a clear roadmap, and the “why” behind the code so you can ship with confidence.",
    href: "#contact",
    cta: "Apply for mentoring",
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
    background: (
      <div className="pointer-events-none absolute -right-6 bottom-0 h-28 w-28 rounded-full bg-[radial-gradient(circle_at_70%_80%,var(--yellow-p-200),transparent_60%)] opacity-80 hidden md:flex md:blur-lg" />
    ),
  },
  {
    Icon: Lightbulb,
    name: "Idea Development & Strategy",
    description:
      "Brainstorming and shaping early-stage ideas. I help founders validate use cases, map user flows, and define a realistic first version before anyone writes serious code.",
    href: "#contact",
    cta: "Refine your idea",
    className: "lg:col-start-2 lg:col-end-3 lg:row-start-3 lg:row-end-4",
    background: (
      <div className="pointer-events-none absolute left-1/2 top-0 h-24 w-24 -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_50%_0%,var(--orange-p-200),transparent_60%)] opacity-80 hidden md:flex md:blur-lg" />
    ),
  },
  {
    Icon: Video,
    name: "Tech Content Collaboration",
    description:
      "Partnering on dev-focused content — courses, videos, and learning experiences with accurate code, clear explanations, and a calm, honest teaching style.",
    href: "#contact",
    cta: "Propose a collab",
    className: "lg:col-start-3 lg:col-end-4 lg:row-start-3 lg:row-end-4",
    background: (
      <div className="pointer-events-none absolute -right-6 top-4 h-24 w-24 rounded-3xl bg-[radial-gradient(circle_at_80%_0%,var(--pink-p-300),transparent_60%)] opacity-80 hidden md:flex md:blur-lg" />
    ),
  },
];

export default function Services() {
  return (
    <div className="mx-auto flex max-w-7xl flex-col px-4 md:px-6 lg:px-8">
      <div className="my-12 flex items-center justify-center">
        <div className="h-px w-full max-w-md bg-foreground/20"></div>
        <span className="mx-4 text-2xl sm:text-3xl">🚀</span>
        <div className="h-px w-full max-w-md bg-foreground/20"></div>
      </div>
      <div className="space-y-4 w-full text-center ">
        <h2 className=" text-center font-nunito font-bold text-3xl sm:text-4xl text-(--orange-p-300)  tracking-tight uppercase">
          Services
        </h2>
        <p className="font-headline text-center text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight text-foreground">
          How We Can Work Together
        </p>
        <p className="font-body text-center text-sm md:text-base text-foreground/70">
          I blend product building, frontend expertise, and practical education
          to empower founders, teams, and builders—shipping real products while
          demystifying the tech behind them.
        </p>
      </div>

      <div className="my-16">
        <BentoGrid className="lg:grid-rows-3">
          {services.map((service) => (
            <BentoCard key={service.name} {...service} />
          ))}
        </BentoGrid>
      </div>
      <div className="my-12 flex items-center justify-center">
        <div className="h-px w-full max-w-md bg-foreground/20"></div>
        <span className="mx-4 text-2xl sm:text-3xl">🎯</span>
        <div className="h-px w-full max-w-md bg-foreground/20"></div>
      </div>
      <div className="space-y-4 w-full text-center">
        <h2 className=" text-center font-nunito font-bold text-3xl sm:text-4xl text-(--pink-p-300) tracking-tight uppercase">
          Why me
        </h2>
        <p className="font-headline text-center text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight text-foreground">
          Why Builders Choose to Collaborate
        </p>
        <p className="font-body text-center text-sm md:text-base text-foreground/70">
          Clear, hype-free communication; cutting-edge execution; and a
          relentless focus on growth—not just deliverables.
        </p>
      </div>

      <div className="grid w-full  grid-cols-1 gap-4 lg:grid-cols-3 my-16">
        <WobbleCard containerClassName="col-span-1 lg:col-span-2 min-h-[260px] bg-[var(--myneutral-300)]/80">
          <div className="max-w-xl">
            <h3 className="text-left text-balance font-headline text-base md:text-xl lg:text-2xl font-semibold tracking-[-0.02em] text-white">
              How I can help in practice
            </h3>
            <p className="mt-3 text-left font-body text-sm md:text-base leading-relaxed text-neutral-100/80">
              I work with founders, teams, and creators who care about both
              quality and speed. From frontend and product decisions to
              technical trade-offs, I focus on building things that are
              shippable today and still easy to grow tomorrow.
            </p>
            <ul className="mt-4 space-y-2 text-left text-sm md:text-base text-neutral-100/80">
              <li>• Frontend &amp; full-stack development for MVPs.</li>
              <li>• UI/UX reviews, design refinement, and motion passes.</li>
              <li>• Guidance on choosing stacks and integrating AI.</li>
            </ul>
            <p className="mt-4 text-xs md:text-sm text-neutral-200/80">
              Building something in this space? The contact section is the best
              way to reach me.
            </p>
          </div>

          <div className="pointer-events-none absolute -right-6 -bottom-6 hidden h-40 w-40 rounded-3xl bg-[conic-gradient(from_180deg,var(--blue-p-300),var(--mint-p-300),transparent_70%)] opacity-80 blur-xl md:block" />
        </WobbleCard>

        <WobbleCard containerClassName="col-span-1 min-h-[220px] bg-orange-500/70">
          <div className="max-w-xs">
            <h3 className="font-headline  text-left text-balance text-base md:text-lg lg:text-xl font-semibold tracking-[-0.02em] text-white">
              For founders &amp; teams
            </h3>
            <p className="mt-3 text-left font-body text-sm md:text-base text-neutral-100/85">
              Need a first version of your product, not a giant agency? I help
              you move from idea and Figma into a working MVP with a clear
              scope, realistic constraints, and a developer-friendly stack.
            </p>
          </div>
        </WobbleCard>

        <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg- min-h-[240px] lg:min-h-[220px] bg-violet-700/70">
          <div className="max-w-xl">
            <h3 className="font-headline text-left text-balance text-base md:text-lg lg:text-xl font-semibold tracking-[-0.02em] text-white">
              For learners &amp; developers
            </h3>
            <p className="mt-3 text-left font-body text-sm md:text-base text-neutral-100/85">
              If you found me through content, this is where we go deeper: real
              projects, honest feedback, and a roadmap that fits your goals —
              not just another playlist.
            </p>
            <p className="mt-3 text-left text-xs md:text-sm text-neutral-100/80">
              1:1 mentoring, code reviews, and project guidance for learners who
              are serious about shipping, not just watching.
            </p>
          </div>
        </WobbleCard>
      </div>
    </div>
  );
}
