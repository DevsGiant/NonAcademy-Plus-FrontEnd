import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const DegreeSkeleton = () => {
  return (
    <>
      <div className="mb-6 space-y-3 lg:mb-8">
        <Skeleton className="mx-auto h-7 w-[25%] bg-gray-300" />
        <Skeleton className="mx-auto h-3 w-[45%] bg-gray-300" />
      </div>
      <div>
        {[...Array(2)].map((_, index) => (
          <div
            key={index}
            className="grid grid-cols-1 gap-4 rounded-md border-b-2 border-stroke bg-white p-4 last:border-b-0 md:gap-5 md:p-5 lg:grid-cols-3"
          >
            <Skeleton className="h-[180px] md:h-[200px]" />
            <div className="space-y-4 lg:col-span-2 lg:col-start-2">
              <Skeleton className="h-7 w-[60%] bg-gray-300" />
              <hr />

              <div className="flex items-center gap-3">
                <Skeleton className="h-6 w-16 bg-gray-300" />
                <Skeleton className="h-6 w-16 bg-gray-300" />
              </div>

              <div className="space-y-2">
                <Skeleton className="h-3 w-[90%] bg-gray-300" />
                <Skeleton className="h-3 w-[75%] bg-gray-300" />
                <Skeleton className="h-3 w-[60%] bg-gray-300" />
              </div>

              <div className="flex flex-wrap items-center gap-3">
                {[...Array(4)].map((_, index) => (
                  <Skeleton key={index} className="h-6 w-16 bg-gray-300" />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default DegreeSkeleton;
