"use client";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion"; // Fix import
import { cn } from "@/lib/utils";

type FlipWordItem = {
  text: string;
  className?: string;
};

type FlipWordsProps = {
  words: Array<string | FlipWordItem>;
  duration?: number;
  className?: string;
};

export const FlipWords = ({
  words,
  duration = 3000,
  className,
}: FlipWordsProps) => {
  const normalizedWords = useMemo<FlipWordItem[]>(
    () => words.map((w) => (typeof w === "string" ? { text: w } : w)),
    [words]
  );

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  const currentWord = normalizedWords[currentIndex];

  const startAnimation = useCallback(() => {
    setCurrentIndex((prev) =>
      prev + 1 < normalizedWords.length ? prev + 1 : 0
    );
    setIsAnimating(true);
  }, [normalizedWords.length]);

  useEffect(() => {
    if (!isAnimating) {
      const timeout = setTimeout(() => {
        startAnimation();
      }, duration);

      return () => clearTimeout(timeout);
    }
  }, [isAnimating, duration, startAnimation]);

  if (!normalizedWords.length || !currentWord) return null; // Add check for empty words

  return (
    <div className="relative">
      {" "}
      {/* Add relative parent for absolute exit */}
      <AnimatePresence
        onExitComplete={() => {
          setIsAnimating(false);
        }}
      >
        <motion.div
          key={currentWord.text + currentIndex} // Unique key with index to avoid duplicates
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
          }}
          exit={{
            opacity: 0,
            y: -30,
            x: 0,
            scale: 0,
            position: "absolute",
          }}
          className={cn(
            "relative z-10 inline-block text-center text-base ", // Responsive text size
            className,
            currentWord.className
          )}
        >
          {currentWord.text.split(" ").map((word, wordIndex) => (
            <motion.span
              key={word + wordIndex + currentIndex} // Unique with index
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: wordIndex * 0.3,
                duration: 0.3,
              }}
              className="inline-block whitespace-nowrap"
            >
              {/* Optimize: Skip letter animation for long words to improve perf */}
              {word.length > 10 ? (
                <span className="inline-block">{word}</span>
              ) : (
                word.split("").map((letter, letterIndex) => (
                  <motion.span
                    key={word + letterIndex + currentIndex}
                    initial={{
                      opacity: 0,
                      y: 10,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay: wordIndex * 0.3 + letterIndex * 0.05,
                      duration: 0.2,
                    }}
                    className="inline-block"
                  >
                    {letter}
                  </motion.span>
                ))
              )}
              <span className="inline-block">&nbsp;</span>
            </motion.span>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
