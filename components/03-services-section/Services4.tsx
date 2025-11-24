import {
  RocketIcon, // For MVP launch
} from "@radix-ui/react-icons";
import { BentoCard, BentoGrid } from "../ui/bento-grid";
import { CpuIcon, PaintbrushIcon, UsersIcon, VideoIcon } from "lucide-react";

const services = [
  {
    Icon: RocketIcon,
    name: "Product & MVP Development",
    description:
      "From idea to a real, usable web/mobile product. I help founders and small teams turn ideas into working products, focusing on clear flows, fast interfaces, and a solid foundation.",
    href: "/contact", // Link to your contact section
    cta: "Get Started",
    background: (
      <img
        src="/mvp-wireframe.png"
        className="absolute -top-20 -right-20 opacity-60"
        alt="MVP wireframe"
      />
    ), // Replace with your Figma-exported image path
    className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
  },
  {
    Icon: PaintbrushIcon,
    name: "Frontend & UX for Real Products",
    description:
      "Design and implementation for modern, user-friendly interfaces. From Figma prototypes to clean React/Next.js code, including component libraries and refactors.",
    href: "/contact",
    cta: "Explore",
    background: (
      <img
        src="/ui-components.png"
        className="absolute -top-20 -right-20 opacity-60"
        alt="UI elements"
      />
    ),
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
  },
  {
    Icon: UsersIcon,
    name: "Developer Education & Mentorship",
    description:
      "For learners who want more than just tutorials. Personalized roadmaps, 1:1 sessions, code reviews, and project guidance to build real skills.",
    href: "/contact",
    cta: "Join Now",
    background: (
      <img
        src="/roadmap-path.png"
        className="absolute -top-20 -right-20 opacity-60"
        alt="Learning roadmap"
      />
    ),
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
  },
  {
    Icon: VideoIcon,
    name: "Content & Learning Partnerships",
    description:
      "Helping creators, brands, and teams build better tech education. From course structures to landing pages and code examples for videos/courses.",
    href: "/contact",
    cta: "Collaborate",
    background: (
      <img
        src="/content-thumbnail.png"
        className="absolute -top-20 -right-20 opacity-60"
        alt="Content frame"
      />
    ),
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
  },
  {
    Icon: CpuIcon,
    name: "SaaS & AI Ideation (Early Stage)",
    description:
      "Designing the first version of your SaaS—with realistic AI features. Ideation, UX flows, stack choices, and simple API integrations like OpenAI.",
    href: "/contact",
    cta: "Brainstorm",
    background: (
      <img
        src="/ai-network.png"
        className="absolute -top-20 -right-20 opacity-60"
        alt="AI ideation"
      />
    ),
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
  },
];

export function Services4() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4">Services</h2>
        <p className="text-lg mb-8">
          As DevSedaghat, I combine product thinking, frontend development, and
          tech education to help founders, teams, and learners build real
          products—and actually understand the code behind them.
        </p>
        <BentoGrid className="lg:grid-rows-3">
          {services.map((service) => (
            <BentoCard key={service.name} {...service} />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}
