import Container from "@/components/ui/Container";
import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const ResourcesLadingPage = () => {
  return (
    <div className="bg-nad-primary-lite-1">
      <Container>
        <Skeleton className="mx-auto mb-5 h-7 w-1/2 bg-gray-300 md:mb-6 md:w-1/6" />
        <div className="divide-y divide-gray-200 bg-white">
          {[1, 2, 3, 4, 5, 6].map((index) => (
            <div
              key={index}
              className="flex flex-wrap items-center justify-between gap-3 px-5 py-6"
            >
              <Skeleton className="h-6 w-[45%] rounded-sm bg-gray-300" />
              <Skeleton className="h-4 w-[15%] rounded-sm bg-gray-300" />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default ResourcesLadingPage;
