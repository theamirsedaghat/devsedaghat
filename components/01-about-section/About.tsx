import { StatsSection } from "../StatsSection";
import { StickyScrolls } from "./StickyScrolls";
import { Highlighter } from "../ui/highlighter";

const About = () => {
  return (
    <div>
      <StatsSection />

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
          About Me
        </Highlighter>
      </h2>
      <StickyScrolls />
    </div>
  );
};

export default About;
