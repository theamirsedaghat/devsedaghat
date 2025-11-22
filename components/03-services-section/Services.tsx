import React from "react";
import { Highlighter } from "../ui/highlighter";
import { WobbleCards } from "./WobbleCards";

const Services = () => {
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
          Services
        </Highlighter>
      </h2>
      <WobbleCards />
    </div>
  );
};

export default Services;
