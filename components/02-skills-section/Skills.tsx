import { Highlighter } from "../ui/highlighter";
import { TabSkills } from "./TabSkills";

const Skills = () => {
  return (
    <div className="my-16">
      <h2 className=" text-center font-nunito font-bold text-3xl sm:text-4xl text-(--mint-p-300)  tracking-tight uppercase">
        <Highlighter
          action="underline"
          isView
          strokeWidth={2}
          iterations={3}
          color="var(--mint-p-300)"
          padding={12}
          animationDuration={1000}
        >
          Skills 🛠️
        </Highlighter>
      </h2>
      <TabSkills />
    </div>
  );
};

export default Skills;
