"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

type Tab = {
  title: string;
  value: string;
  content?: string | React.ReactNode;
  tabColor?: string;
};

export const Tabs = ({
  tabs: propTabs,
  containerClassName,
  activeTabClassName,
  tabClassName,
  contentClassName,
}: {
  tabs: Tab[];
  containerClassName?: string;
  activeTabClassName?: string;
  tabClassName?: string;
  contentClassName?: string;
}) => {
  const [active, setActive] = useState<Tab>(propTabs[0]);
  const [tabs, setTabs] = useState<Tab[]>(propTabs);

  const moveSelectedTabToTop = (idx: number) => {
    const newTabs = [...propTabs];
    const selectedTab = newTabs.splice(idx, 1);
    newTabs.unshift(selectedTab[0]);
    setTabs(newTabs);
    setActive(newTabs[0]);
  };

  const [hovering, setHovering] = useState(false);

  return (
    <>
      <div
        className={cn(
          "flex flex-row items-center justify-start sm:justify-center gap-2 sm:gap-3 md:gap-6",
          "w-full overflow-x-auto scrollbar-hide no-visible-scrollbar pr-16",
          "snap-x snap-mandatory ",
          containerClassName
        )}
      >
        {propTabs.map((tab, idx) => {
          const isActive = active.value === tab.value;

          return (
            <button
              key={tab.title}
              onClick={() => moveSelectedTabToTop(idx)}
              onMouseEnter={() => setHovering(true)}
              onMouseLeave={() => setHovering(false)}
              className={cn(
                "relative px-3 py-2 sm:px-4 sm:py-2 text-xs sm:text-sm md:text-base font-medium rounded-xs transition-all shrink-0",
                "snap-center cursor-pointer",
                tabClassName
              )}
              style={{ transformStyle: "preserve-3d" }}
            >
              {isActive && (
                <motion.div
                  layoutId="clickedbutton"
                  transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                  className={cn(
                    "absolute inset-0  backdrop-blur-xs rounded-md",
                    activeTabClassName
                  )}
                  style={{
                    backgroundColor: tab.tabColor,
                    opacity: tab.tabColor ? (isActive ? 0.1 : 0) : 1,
                  }}
                />
              )}
              <span
                className="relative block z-10 transition-colors"
                style={{
                  color: tab.tabColor,
                  opacity: tab.tabColor ? (isActive ? 1 : 0.6) : 1,
                }}
              >
                {tab.title}
              </span>
            </button>
          );
        })}
      </div>
      <div
        className="absolute top-0 right-0 py-6 w-24 pointer-events-none 
                  bg-linear-to-l from-background  to-transparent md:hidden"
      >
        <div className="w-1/3 bg-transparent h-full top-0 right-0 absolute backdrop-blur-xs backdrop-opacity-80" />
      </div>

      <div className="w-full max-w-[1200px] mx-auto">
        <FadeInDiv
          tabs={tabs}
          active={active}
          key={active.value}
          hovering={hovering}
          className={cn(
            "mt-10 4 h-[400px] sm:h-[340px] md:h-[360px] lg:h-[380px]",
            contentClassName
          )}
        />
      </div>
    </>
  );
};

export const FadeInDiv = ({
  className,
  tabs,
  hovering,
}: {
  className?: string;
  key?: string;
  tabs: Tab[];
  active: Tab;
  hovering?: boolean;
}) => {
  const isActive = (tab: Tab) => {
    return tab.value === tabs[0].value;
  };

  return (
    <div className={cn("relative w-full overflow-hidden", className)}>
      {tabs.map((tab, idx) => (
        <motion.div
          key={tab.value}
          layoutId={tab.value}
          style={{
            scale: 1 - idx * 0.06,
            top: hovering ? idx * -24 : 0,
            zIndex: -idx,

            opacity: idx === 0 ? 1 : 0,
          }}
          animate={{
            y: isActive(tab) ? [0, 32, 0] : 0,
          }}
          className="absolute inset-0 w-full h-full"
        >
          {tab.content}
        </motion.div>
      ))}
    </div>
  );
};
