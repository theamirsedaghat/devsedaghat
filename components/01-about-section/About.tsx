import { StatsSection } from "../StatsSection";
import { StickyScrolls } from "./StickyScrolls";
import { Highlighter } from "../ui/highlighter";

const About = () => {
  return (
    <>
      <StatsSection />
      <section id="about">
        <h2 className=" text-center font-nunito font-bold text-3xl sm:text-4xl text-(--purple-p-300) mb-8 tracking-tight uppercase">
          <Highlighter
            action="underline"
            isView
            strokeWidth={2}
            iterations={3}
            color="var(--purple-p-300)"
            padding={12}
            animationDuration={1000}
          >
            About Me 👨‍💻
          </Highlighter>
        </h2>
        <StickyScrolls />
      </section>
    </>
  );
};

export default About;
