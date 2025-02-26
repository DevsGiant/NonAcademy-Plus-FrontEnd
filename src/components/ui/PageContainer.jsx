import { cn } from "@/lib/utils";
import React from "react";

const PageContainer = ({ className, children }) => {
  return (
    <section
      className={cn(
        "mx-auto max-w-7xl px-4 py-7 md:px-5 md:py-8 lg:px-6 lg:py-10 xl:px-4 xl:py-14",
        className,
      )}
    >
      {children}
    </section>
  );
};

export default PageContainer;
