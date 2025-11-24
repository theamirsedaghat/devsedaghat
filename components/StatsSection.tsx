"use client";

import { NumberTicker } from "@/components/ui/number-ticker";
interface StatsSectionProps {
  className?: string;
}

export const StatsSection: React.FC<StatsSectionProps> = ({ className }) => {
  return (
    <section className={`w-full ${className}`}>
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-0 my-16 ">
        <div
          className="
        grid grid-cols-1 sm:grid-cols-3
        divide-y divide-border/40 sm:divide-y-0 sm:divide-x
        rounded-2xl bg-black/5 dark:bg-white/5 backdrop-blur-sm 
      "
        >
          {/* 1) LinkedIn Connections */}
          <div className="flex flex-col items-center gap-2 px-4 py-6 text-center">
            <div className="flex items-baseline gap-1 ">
              <NumberTicker
                value={5000}
                startValue={4000}
                delay={0.2}
                decimalPlaces={0}
                className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-foreground text-center "
              />
              <span className="text-2xl sm:text-3xl md:text-4xl font-semibold text-foreground">
                +
              </span>
            </div>
            <p className="text-xs sm:text-sm uppercase tracking-[0.15em] text-foreground/60">
              LinkedIn Connections
            </p>
            <p className="text-sm sm:text-base text-foreground/70">
              Building a global network of developers, founders, and investors.
            </p>
          </div>

          {/* 2) Years of Experience */}
          <div className="flex flex-col items-center gap-2 px-4 py-6 text-center">
            <div className="flex items-baseline gap-1">
              <NumberTicker
                value={4}
                startValue={0}
                decimalPlaces={0}
                delay={0.4}
                className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-foreground"
              />
              <span className="text-2xl sm:text-3xl md:text-4xl font-semibold text-foreground">
                +
              </span>
            </div>
            <p className="text-xs sm:text-sm uppercase tracking-[0.15em] text-foreground/60">
              Years in Development
            </p>
            <p className="text-sm sm:text-base text-foreground/70">
              From frontend to full-stack, focusing on real-world products.
            </p>
          </div>

          {/* 3) Target Students */}
          <div className="flex flex-col items-center gap-2 px-4 py-6 text-center">
            <div className="flex items-baseline gap-1">
              <NumberTicker
                value={2000}
                startValue={500}
                decimalPlaces={0}
                delay={0.6}
                className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-foreground"
              />
              <span className="text-2xl sm:text-3xl md:text-4xl font-semibold text-foreground">
                +
              </span>
            </div>
            <p className="text-xs sm:text-sm uppercase tracking-[0.15em] text-foreground/60">
              Students (Next 6 Months)
            </p>
            <p className="text-sm sm:text-base text-foreground/70">
              Creators and developers learning through my content and courses.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
