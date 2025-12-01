"use client";

import React, { forwardRef, useRef } from "react";

import { cn } from "@/lib/utils";
import { AnimatedBeam } from "../ui/animated-beam";
import { Button } from "../ui/button";
import {
  IconBrandGithub,
  IconBrandGithubFilled,
  IconBrandLinkedin,
  IconBrandLinkedinFilled,
  IconBrandTiktok,
  IconBrandTiktokFilled,
  IconBrandX,
  IconBrandXFilled,
  IconBrandYoutube,
  IconBrandYoutubeFilled,
} from "@tabler/icons-react";
import { BrainCircuit } from "lucide-react";

const Circle = forwardRef<
  HTMLButtonElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <Button
      ref={ref}
      className={cn(
        `z-10 flex size-14 items-center justify-center rounded-full  cursor-pointer  transition-all duration-700 ease-out border border-y-white/30 border-x-white/40  backdrop-blur-xs  group hover:bg-linear-to-b 
         bg-white/10 hover:bg-white/10 overflow-hidden hover:border-none

`,
        className
      )}
    >
      {children}
    </Button>
  );
});

Circle.displayName = "Circle";

export function HeroAnimatedBeam({ className }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLButtonElement>(null);
  const div2Ref = useRef<HTMLButtonElement>(null);
  const div3Ref = useRef<HTMLButtonElement>(null);
  const div4Ref = useRef<HTMLButtonElement>(null);
  const div5Ref = useRef<HTMLButtonElement>(null);
  const div6Ref = useRef<HTMLButtonElement>(null);
  const div7Ref = useRef<HTMLButtonElement>(null);

  return (
    <div
      className={cn(
        "relative flex w-full items-center justify-center overflow-hidden   ",
        className
      )}
      ref={containerRef}
    >
      <div className="flex size-full max-w-lg flex-row items-stretch justify-between gap-10 ">
        <div className="flex flex-col justify-center ">
          <Circle ref={div7Ref} className=" bg-white/40 cursor-default">
            <BrainCircuit
              className="
              size-8 text-black/90 
              transition-all duration-500 "
            />
          </Circle>
        </div>
        <div className="flex flex-col justify-center">
          <Circle ref={div6Ref} className=" bg-white/40 cursor-default ">
            <BrainCircuit
              className="
              size-8 text-black/90 
              transition-all duration-500 "
            />
          </Circle>
        </div>
        <div className="flex flex-col justify-center gap-4">
          <Circle
            ref={div1Ref}
            className=" hover:from-neutral-800 hover:via-white/20 hover:to-[#080808] hover:shadow-lg  hover:shadow-neutral-800 
            
            "
          >
            <IconBrandGithub
              className="
              size-8 text-white/90 
              transition-all duration-500 group-hover:opacity-0"
            />

            <IconBrandGithubFilled
              className="
    size-8  absolute inset-0 m-auto
    opacity-0 scale-5 transition-all duration-500
    group-hover:opacity-100 group-hover:scale-100
    text-white/80
    
  "
            />
          </Circle>
          <Circle
            ref={div2Ref}
            className=" hover:from-[#ff4444]/65 hover:via-[#ffadad]/50 hover:to-[#ff0808]/90 hover:shadow-lg hover:shadow-[#ee6161]/40"
          >
            <IconBrandYoutube
              className="
              size-8 text-white/90 
              transition-all duration-500 group-hover:opacity-0"
            />

            <IconBrandYoutubeFilled
              className="
              size-8  absolute inset-0 m-auto
              opacity-0 scale-5 transition-all duration-500 group-hover:opacity-100 group-hover:scale-100 text-white/80"
            />
          </Circle>
          <Circle
            ref={div3Ref}
            className=" hover:from-black hover:via-[#2cf4ef]/30 hover:to-[#fe335a]/80 hover:shadow-lg hover:shadow-[#a1112e]/90"
          >
            <IconBrandTiktok
              className="
              size-8 text-white/90 
              transition-all duration-500 group-hover:opacity-0"
            />

            <IconBrandTiktokFilled
              className="
              size-8  absolute inset-0 m-auto
              opacity-0 scale-5 transition-all duration-500 group-hover:opacity-100 group-hover:scale-100 text-white/80"
            />
          </Circle>
          <Circle
            ref={div4Ref}
            className=" hover:from-[#0784c8]/40 hover:via-[#bfe9ff]/50 hover:to-[#005c8e] hover:shadow-lg hover:shadow-[#33b8ff]/30"
          >
            <IconBrandLinkedin
              className="
              size-8 text-white/90 
              transition-all duration-500 group-hover:opacity-0"
            />

            <IconBrandLinkedinFilled
              className="
              size-8  absolute inset-0 m-auto
              opacity-0 scale-5 transition-all duration-500 group-hover:opacity-100 group-hover:scale-100 text-white/80"
            />
          </Circle>
          <Circle
            ref={div5Ref}
            className=" hover:from-neutral-950/80 hover:via-neutral-600/30 hover:to-black hover:shadow-md hover:shadow-neutral-950/40"
          >
            <IconBrandX
              className="
              size-8 text-white/90 
              transition-all duration-500 group-hover:opacity-0"
            />

            <IconBrandXFilled
              className="
              size-8  absolute inset-0 m-auto
              opacity-0 scale-5 transition-all duration-500 group-hover:opacity-100 group-hover:scale-100 text-white/80"
            />
          </Circle>
        </div>
      </div>

      {/* AnimatedBeams */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div6Ref}
        duration={3}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div2Ref}
        toRef={div6Ref}
        duration={3}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div3Ref}
        toRef={div6Ref}
        duration={3}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div4Ref}
        toRef={div6Ref}
        duration={3}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div5Ref}
        toRef={div6Ref}
        duration={3}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div6Ref}
        toRef={div7Ref}
        duration={3}
      />
    </div>
  );
}
