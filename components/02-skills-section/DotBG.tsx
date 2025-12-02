"use client";

import { TabSkills } from "./TabSkills";

export function DotBG() {
  return (
    <div className="bg-background relative flex  grow w-full flex-col items-center justify-center overflow-hidden rounded-lg border">
      <h2 className=" text-center font-nunito font-bold text-4xl text-(--blue-p-400) mb-8 tracking-tight uppercase">
        Skills
      </h2>
      <TabSkills />
    </div>
  );
}
