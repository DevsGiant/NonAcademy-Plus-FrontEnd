import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const CourseDetailsSkeleton = () => {
  return (
    <div className="grid w-full grid-cols-6 gap-5 xl:gap-6">
      <div className="col-span-6 h-max w-full md:col-span-4">
        <Skeleton className="h-[65vh] w-full bg-gray-300 object-cover" />
        <div className="mt-4 grid grid-cols-1 gap-3 md:mt-7 md:grid-cols-2">
          <div>
            <Skeleton className="h-8 rounded-sm bg-gray-300" />
          </div>
          <div className="flex justify-end gap-4">
            <Skeleton className="h-8 rounded-sm bg-gray-300 md:w-[30%]" />
            <Skeleton className="h-8 rounded-sm bg-gray-300 md:w-[30%]" />
          </div>
        </div>
      </div>
      <div className="col-span-6 space-y-4 bg-white p-5 md:col-span-2 md:space-y-6">
        <Skeleton className="h-10 w-full rounded-sm bg-gray-300" />
        <Skeleton className="h-10 w-full rounded-sm bg-gray-300" />
        <Skeleton className="h-10 w-full rounded-sm bg-gray-300" />
        <Skeleton className="h-10 w-full rounded-sm bg-gray-300" />
        <Skeleton className="h-10 w-full rounded-sm bg-gray-300" />
        <Skeleton className="h-10 w-full rounded-sm bg-gray-300" />
        <Skeleton className="h-10 w-full rounded-sm bg-gray-300" />
      </div>
    </div>
  );
};

export default CourseDetailsSkeleton;
