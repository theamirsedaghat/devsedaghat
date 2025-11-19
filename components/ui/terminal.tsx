"use client";

import {
  Children,
  createContext,
  useContext,
  useMemo,
  useRef,
  useState,
  useEffect,
} from "react";
import { motion, MotionProps, useInView } from "motion/react";
import { cn } from "@/lib/utils";

/* ----------------------- Sequence Context ----------------------- */

interface SequenceContextValue {
  completeItem: (index: number) => void;
  activeIndex: number;
  sequenceStarted: boolean;
}

const SequenceContext = createContext<SequenceContextValue | null>(null);
const useSequence = () => useContext(SequenceContext);

const ItemIndexContext = createContext<number | null>(null);
const useItemIndex = () => useContext(ItemIndexContext);

/* ----------------------- AnimatedSpan ----------------------- */

interface AnimatedSpanProps extends MotionProps {
  children: React.ReactNode;
  delay?: number; // ms
  className?: string;
  startOnView?: boolean;
}

export const AnimatedSpan = ({
  children,
  delay = 0,
  className,
  startOnView = false,
  ...props
}: AnimatedSpanProps) => {
  const elementRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(elementRef, { amount: 0.3, once: true });

  const sequence = useSequence();
  const itemIndex = useItemIndex();

  // تعیین اینکه این span باید انیمیت بشه یا نه (بدون state اضافی)
  const shouldAnimate = useMemo(() => {
    if (sequence && itemIndex !== null) {
      return sequence.sequenceStarted && sequence.activeIndex >= itemIndex;
    }
    return startOnView ? isInView : true;
  }, [sequence, itemIndex, startOnView, isInView]);

  return (
    <motion.div
      ref={elementRef}
      initial={{ opacity: 0, y: -5 }}
      animate={shouldAnimate ? { opacity: 1, y: 0 } : { opacity: 0, y: -5 }}
      transition={{ duration: 0.3, delay: sequence ? 0 : delay / 1000 }}
      className={cn("grid text-sm font-normal tracking-tight", className)}
      onAnimationComplete={() => {
        if (!sequence) return;
        if (itemIndex === null) return;
        sequence.completeItem(itemIndex);
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

/* ----------------------- TypingAnimation ----------------------- */

interface TypingAnimationProps extends MotionProps {
  children: string;
  className?: string;
  duration?: number; // فاصله‌ی بین کاراکترها (ms)
  delay?: number; // تاخیر شروع تایپ (ms)
  as?: React.ElementType;
  startOnView?: boolean;
}

export const TypingAnimation = ({
  children,
  className,
  duration = 60,
  delay = 0,
  as: Component = "span",
  startOnView = true,
  ...props
}: TypingAnimationProps) => {
  if (typeof children !== "string") {
    throw new Error("TypingAnimation: children must be a string.");
  }

  const MotionComponent = useMemo(
    () =>
      motion.create(Component, {
        forwardMotionProps: true,
      }),
    [Component]
  );

  const [displayedText, setDisplayedText] = useState<string>("");
  const elementRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(elementRef, { amount: 0.3, once: true });

  const sequence = useSequence();
  const itemIndex = useItemIndex();

  // شرط اینکه مجاز هستیم تایپ را شروع کنیم یا نه
  const readyToStart = useMemo(() => {
    if (sequence && itemIndex !== null) {
      return sequence.sequenceStarted && sequence.activeIndex >= itemIndex;
    }
    return startOnView ? isInView : true;
  }, [sequence, itemIndex, startOnView, isInView]);

  // جلوگیری از استارت دوباره، بدون state
  const startedRef = useRef(false);

  useEffect(() => {
    if (!readyToStart) return;
    if (startedRef.current) return;

    startedRef.current = true;

    let typingInterval: number | undefined;
    const startTimer = window.setTimeout(() => {
      let i = 0;
      typingInterval = window.setInterval(() => {
        if (i < children.length) {
          setDisplayedText(children.substring(0, i + 1));
          i++;
        } else {
          if (typingInterval !== undefined) {
            window.clearInterval(typingInterval);
          }
          if (sequence && itemIndex !== null) {
            sequence.completeItem(itemIndex);
          }
        }
      }, duration);
    }, delay);

    // cleanup
    return () => {
      window.clearTimeout(startTimer);
      if (typingInterval !== undefined) {
        window.clearInterval(typingInterval);
      }
    };
  }, [readyToStart, delay, duration, children, sequence, itemIndex]);

  return (
    <MotionComponent
      ref={elementRef}
      className={cn("text-sm font-normal tracking-tight", className)}
      {...props}
    >
      {displayedText}
    </MotionComponent>
  );
};

/* ----------------------- Terminal ----------------------- */

interface TerminalProps {
  children: React.ReactNode;
  className?: string;
  sequence?: boolean;
  startOnView?: boolean;
}

export const Terminal = ({
  children,
  className,
  sequence = true,
  startOnView = true,
}: TerminalProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(containerRef, { amount: 0.3, once: true });

  const [activeIndex, setActiveIndex] = useState(0);
  const sequenceHasStarted = sequence ? !startOnView || isInView : false;

  const contextValue = useMemo<SequenceContextValue | null>(() => {
    if (!sequence) return null;
    return {
      completeItem: (index: number) => {
        setActiveIndex((current) =>
          index === current ? current + 1 : current
        );
      },
      activeIndex,
      sequenceStarted: sequenceHasStarted,
    };
  }, [sequence, activeIndex, sequenceHasStarted]);

  const wrappedChildren = useMemo(() => {
    if (!sequence) return children;
    return Children.toArray(children).map((child, index) => (
      <ItemIndexContext.Provider key={index} value={index}>
        {child as React.ReactNode}
      </ItemIndexContext.Provider>
    ));
  }, [children, sequence]);

  const content = (
    <div
      ref={containerRef}
      className={cn(
        "group relative overflow-hidden    rounded-xl border border-white/15    bg-white/5 backdrop-blur-xl    shadow-2xl",
        className
      )}
    >
      {/* highlight layer */}
      <div
        className="
      pointer-events-none
      absolute inset-px rounded-[inherit]
      bg-linear-to-br from-white/15 to-transparent
      opacity-0 transition-opacity duration-500
      group-hover:opacity-100
    "
      />

      {/* radial glow */}
      <div
        className="
      pointer-events-none
      absolute inset-0
      bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.25),transparent_55%)]
      opacity-0 transition-opacity duration-700
      group-hover:opacity-100
    "
      />
      <div className="flex flex-col gap-y-2 border-b border-border p-4">
        <div className="flex flex-row gap-x-2">
          <div className="h-2 w-2 rounded-full bg-red-500" />
          <div className="h-2 w-2 rounded-full bg-yellow-500" />
          <div className="h-2 w-2 rounded-full bg-green-500" />
        </div>
      </div>
      <pre className="p-4">
        <code className="grid gap-y-1 overflow-auto">{wrappedChildren}</code>
      </pre>
    </div>
  );

  if (!sequence) return content;

  return (
    <SequenceContext.Provider value={contextValue}>
      {content}
    </SequenceContext.Provider>
  );
};
