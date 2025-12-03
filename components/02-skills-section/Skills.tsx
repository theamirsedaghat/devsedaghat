import { TabSkills } from "./TabSkills";

const Skills = () => {
  return (
    <div className="my-16 ">
      <div className="my-12 px-4 flex items-center justify-center">
        <div className="h-px w-full max-w-md bg-foreground/20"></div>
        <span className="mx-4 text-2xl sm:text-3xl">🛠️</span>
        <div className="h-px w-full max-w-md bg-foreground/20"></div>
      </div>
      <h2 className=" text-center font-nunito font-bold text-3xl sm:text-4xl text-(--mint-p-300)  tracking-tight uppercase ">
        Skills
      </h2>

      <TabSkills />
    </div>
  );
};

export default Skills;
