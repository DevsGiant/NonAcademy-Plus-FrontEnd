import { cn } from "@/lib/utils";
import React from "react";

const SectionTitle = ({ subtitle, title, className }) => {
  return (
    <div
      className={cn(
        "flex w-full flex-col items-center gap-2 md:mx-auto md:w-[70%] xl:gap-4",
        className,
      )}
    >
      <span className="inline-block rounded-full bg-[#e3eeff] px-4 py-1 font-medium capitalize text-nad-primary">
        {subtitle}
      </span>
      <h2 className="text-center text-xl font-semibold capitalize text-nad-title md:text-3xl md:font-bold lg:text-4xl">
        {title}
      </h2>
    </div>
  );
};

export default SectionTitle;
