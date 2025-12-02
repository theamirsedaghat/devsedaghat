import dynamic from "next/dynamic";
import TopNavbar from "@/components/TopNavbar";
import { StatsSection } from "@/components/StatsSection";
import Hero from "@/components/00-hero-section/Hero";
import SectionImporter from "@/components/SectionImporter";

// اینا SSR دارن، فقط chunk جدا می‌شن (اوکی برای SEO)
const About = dynamic(
  () => import("@/components/01-about-section/About").then((m) => m.default),
  {
    loading: () => null,
    // ssr: true به‌صورت پیش‌فرض هست، نیازی نیست بنویسی
  }
);

const Skills = dynamic(
  () => import("@/components/02-skills-section/Skills").then((m) => m.default),
  {
    loading: () => null,
  }
);

const Services = dynamic(
  () =>
    import("@/components/03-services-section/Services").then((m) => m.default),
  {
    loading: () => null,
  }
);

// فقط جایی که به JS سنگین نیاز داری ssr: false بذار
const ContactMeSection = dynamic(
  () =>
    import("@/components/006-contactme/ContactMeSection").then(
      (m) => m.default
    ),
  {
    // ssr: false, // چون Turnstile + RHF + فرم ـه، اینجا منطقیه
    loading: () => null,
  }
);

const Footer = dynamic(
  () => import("@/components/Footer").then((m) => m.default),
  {
    loading: () => null,
  }
);

export default function Home() {
  return (
    <>
      <header>
        <TopNavbar />
      </header>
      <main className="max-w-7xl mx-auto">
        <section id="hero">
          <Hero />
        </section>

        <section aria-label="Stats & Achievements" className="my-20">
          <h2 className="sr-only">Stats & Achievements</h2>
          <StatsSection />
        </section>

        <section id="about" className="scroll-mt-12 md:scroll-mt-18">
          <About />
        </section>

        <section id="skills" className="scroll-mt-12 md:scroll-mt-18">
          <Skills />
        </section>

        <section id="services" className="scroll-mt-12 md:scroll-mt-18">
          <Services />
        </section>
      </main>
      <SectionImporter />
    </>
  );
}
