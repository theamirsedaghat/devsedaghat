import dynamic from "next/dynamic";
import TopNavbar from "@/components/TopNavbar";
import { StatsSection } from "@/components/StatsSection";
import Hero from "@/components/00-hero-section/Hero";
import SectionImporter from "@/components/SectionImporter";

const About = dynamic(
  () => import("@/components/01-about-section/About").then((m) => m.default),
  {
    loading: () => null,
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

// <script src="https://platform.linkedin.com/badges/js/profile.js" async defer type="text/javascript"></script>

// <div class="badge-base LI-profile-badge" data-locale="en_US" data-size="medium" data-theme="dark" data-type="VERTICAL" data-vanity="amirsedaghat" data-version="v1"><a class="badge-base__link LI-simple-link" href="https://ir.linkedin.com/in/amirsedaghat?trk=profile-badge">Amir Sedaghat</a></div>

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
