import Hero from "@/components/00-hero-section/Hero";
import About from "@/components/01-about-section/About";
import Skills from "@/components/02-skills-section/Skills";
import ContactMeSection from "@/components/006-contactme/ContactMeSection";
import { Services } from "@/components/03-services-section/Services";

export default function Home() {
  return (
    <>
      <main className="max-w-7xl mx-auto">
        <Hero />
        <About />
        <Skills />
        <Services />
        <ContactMeSection />
      </main>
    </>
  );
}
