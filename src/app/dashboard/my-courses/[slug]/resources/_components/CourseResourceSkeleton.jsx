import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const CourseResourceSkeleton = () => {
  return (
    <div>
      <div className="pb-4 sm:pb-6 2xl:pb-10">
        <div className="w-fit">
          <div className="flex flex-wrap items-center gap-2 rounded-md bg-white p-3">
            <Skeleton className="h-9 w-28 rounded-sm bg-gray-300" />
            <Skeleton className="h-9 w-28 rounded-sm bg-gray-300" />
            <Skeleton className="h-9 w-28 rounded-sm bg-gray-300" />
            <Skeleton className="h-9 w-28 rounded-sm bg-gray-300" />
          </div>
        </div>
      </div>
      <div className="divide-y divide-gray-200 bg-white">
        {[1, 2, 3, 4, 5].map((index) => (
          <div
            key={index}
            className="flex flex-wrap items-center justify-between gap-3 px-5 py-6"
          >
            <Skeleton className="h-6 w-[45%] rounded-sm bg-gray-300" />
            <Skeleton className="h-4 w-[15%] rounded-sm bg-gray-300" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseResourceSkeleton;
