"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";

const ContactMeSection = dynamic(
  () => import("@/components/006-contactme/ContactMeSection"),
  {
    ssr: false,
    loading: () => <div className="h-96" />,
  }
);

const Footer = dynamic(() => import("@/components/Footer"), {
  ssr: false,
  loading: () => <div className="h-30" />,
});

export default function SectionImporter() {
  return (
    <>
      <Suspense fallback={<div />}>
        <section id="contact" className="scroll-mt-12 md:scroll-mt-18">
          <ContactMeSection />
        </section>
      </Suspense>
      <Suspense fallback={<div />}>
        <footer className="mt-24">
          <Footer
            className="space-x-6 p-4 md:space-x-12"
            textStyle="tracking-wider md:tracking-widest py-4"
          />
        </footer>
      </Suspense>
    </>
  );
}
