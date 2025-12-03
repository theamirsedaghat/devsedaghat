"use client";
import dynamic from "next/dynamic";

const TerminalAnimation = dynamic(
  () =>
    import("@/components/ui/terminal").then((mod) => {
      return function TerminalWrapper() {
        const { Terminal, TypingAnimation, AnimatedSpan } = mod;
        return (
          <Terminal
            startOnView={true}
            className="z-40 absolute bottom-2 right-[4%] sm:right-12 md:right-[20%] lg:right-4"
          >
            <TypingAnimation delay={0}>
              &gt; npx amirsedaghat@latest
            </TypingAnimation>
            <AnimatedSpan delay={2500} className="text-blue-400">
              ✔ Building creative interfaces...
            </AnimatedSpan>
            <AnimatedSpan delay={3800} className="text-blue-400">
              ✔ Integrating design & motion...
            </AnimatedSpan>
            <AnimatedSpan delay={5000} className="text-green-400">
              ✨ Let&apos;s build the future
            </AnimatedSpan>
          </Terminal>
        );
      };
    }),
  {
    ssr: false,
    loading: () => (
      <div className="z-40 absolute bottom-2 right-[4%] sm:right-12 md:right-[20%] lg:right-4">
        <div className="bg-white/10  p-4 rounded-lg border border-white/10">
          <pre className="text-sm text-white/90">
            <code>&gt; npx amirsedaghat@latest init</code>
          </pre>
        </div>
      </div>
    ),
  }
);

export default TerminalAnimation;
