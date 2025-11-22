import React from "react";
import { Highlighter } from "../ui/highlighter";
import { TabSkills } from "./TabSkills";

const Skills = () => {
  return (
    <div>
      <h2 className=" text-center font-nunito font-bold text-4xl text-(--blue-p-400) mb-8 tracking-tight uppercase">
        <Highlighter
          action="underline"
          isView
          strokeWidth={2}
          iterations={3}
          color="var(--blue-p-400)"
          padding={16}
          animationDuration={1000}
        >
          Skills
        </Highlighter>
      </h2>
      <TabSkills />
    </div>
  );
};

export default Skills;
