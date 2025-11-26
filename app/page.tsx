import Hero from "@/components/00-hero-section/Hero";
import About from "@/components/01-about-section/About";
import Skills from "@/components/02-skills-section/Skills";
import ContactMeSection from "@/components/006-contactme/ContactMeSection";
import Services from "@/components/03-services-section/Services";
import Footer from "@/components/Footer";
import TopNavbar from "@/components/TopNavbar";
import { StatsSection } from "@/components/StatsSection";

export default function Home() {
  return (
    <>
      <header>
        {/* <ProgressiveBlur height="20%" position="top" /> */}
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
        <section id="contact" className="scroll-mt-12 md:scroll-mt-18">
          <ContactMeSection />
        </section>
      </main>
      <footer>
        <Footer
          className="space-x-6 p-4 md:space-x-12 "
          textStyle={"tracking-wider md:tracking-widest py-4 "}
        />
      </footer>
    </>
  );
}
