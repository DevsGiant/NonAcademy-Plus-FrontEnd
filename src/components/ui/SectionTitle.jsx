import { cn } from "@/lib/utils";
import React from "react";

const SectionTitle = ({ subtitle, title, className }) => {
  return (
    <div
      className={cn(
        "flex w-full flex-col items-center gap-2 md:mx-auto md:w-[70%] lg:gap-3.5",
        className,
      )}
    >
      {title && (
        <h2 className="text-center text-xl font-semibold capitalize text-nad-title md:text-3xl md:font-bold lg:text-4xl">
          {title}
        </h2>
      )}

      {subtitle && (
        <p className="text-center font-medium text-gray-700 md:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
