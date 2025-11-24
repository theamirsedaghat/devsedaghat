"use client";

import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

type ScrollToTopButtonProps = {
  threshold?: number;
  className?: string;
};

export function ScrollToTopButton({
  threshold = 320,
  className,
}: ScrollToTopButtonProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;

      ticking = true;
      window.requestAnimationFrame(() => {
        const y = window.scrollY || window.pageYOffset;
        const shouldBeVisible = y > threshold;

        // جلوگیری از setState اضافه
        setIsVisible((prev) =>
          prev !== shouldBeVisible ? shouldBeVisible : prev
        );

        ticking = false;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // مقدار اولیه
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [threshold]);

  const scrollToTop = () => {
    if (typeof window === "undefined") return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={cn(
        "fixed z-70",
        "bottom-6 right-4 md:bottom-8 md:right-8",
        "inline-flex items-center justify-center rounded-full",
        "h-10 w-10 md:h-12 md:w-12 cursor-pointer group overflow-hidden",
        // گلس‌مورفیسم خیلی سبک
        "bg-white/5 hover:bg-white/20 hover border border-white/15 dark:border-white/10 backdrop-blur-md",
        "shadow-md shadow-black/15 dark:shadow-black/40",

        "transition-all duration-300 ease-out motion-safe:hover:-translate-y-0.5 motion-safe:active:scale-85",
        "motion-safe:hover:shadow-[0_0_14px_rgba(0, 0, 0, 0.85)]",

        isVisible
          ? "opacity-100 pointer-events-auto translate-y-0"
          : "opacity-0 pointer-events-none translate-y-2",

        className
      )}
    >
      <ChevronUp className="h-4 w-4 md:h-5 md:w-5 text-white opacity-60 group-hover:opacity-100 group-hover:scale-125 transition-all duration-300 ease-out" />
    </button>
  );
}
