import { cn } from "@/lib/utils";
import React from "react";

const Container = ({ className, children }) => {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-7xl px-4 py-6 md:px-5 md:py-8 lg:px-6 lg:py-10 xl:px-8 xl:py-[60px]",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default Container;
