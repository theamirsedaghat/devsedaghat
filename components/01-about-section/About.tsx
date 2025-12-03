import { StickyScrolls } from "./StickyScrolls";

const About = () => {
  return (
    <div>
      <div className="my-12 px-4 flex items-center justify-center">
        <div className="h-px w-full max-w-md bg-foreground/20"></div>
        <span className="mx-4 text-2xl sm:text-3xl">👨‍💻</span>
        <div className="h-px w-full max-w-md bg-foreground/20"></div>
      </div>
      <h2 className=" text-center font-nunito font-bold text-3xl sm:text-4xl text-(--purple-p-300) mb-8 tracking-tight uppercase">
        About Me
      </h2>
      <StickyScrolls />
    </div>
  );
};

export default About;
