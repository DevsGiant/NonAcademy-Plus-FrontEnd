import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const MyAllCoursesSkeleton = () => {
  return (
    <div className="space-y-5 md:space-y-8">
      <Skeleton className="h-8 w-full rounded-sm bg-gray-300 md:w-1/2" />
      <div>
        <Skeleton className="mx-auto h-12 w-full rounded-sm bg-gray-300 md:w-1/2" />
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-5">
        {[1, 2, 3].map((index) => (
          <div key={index} className="rounded-lg bg-white p-4">
            <Skeleton className="h-[180px] w-full rounded-lg bg-gray-300" />
            <div className="mt-6">
              <Skeleton className="h-8 w-full rounded-sm bg-gray-300" />
              <div className="mt-4 flex flex-wrap gap-3">
                <Skeleton className="h-5 w-[30%] rounded-sm bg-gray-300" />
                <Skeleton className="h-5 w-[30%] rounded-sm bg-gray-300" />
                <Skeleton className="h-5 w-[30%] rounded-sm bg-gray-300" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyAllCoursesSkeleton;
