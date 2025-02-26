import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const ModuleSkeleton = () => {
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
      <div className="flex flex-col gap-7 rounded-lg bg-white p-4 md:flex-row md:items-center lg:w-[80%]">
        <div>
          <Skeleton className="h-[160px] w-full rounded-lg bg-gray-300 object-cover md:h-[180px] md:w-[270px]" />
        </div>
        <div className="flex-1 space-y-5">
          <Skeleton className="h-8 w-full rounded-sm bg-gray-300" />
          <Skeleton className="h-3 w-[20%] rounded-sm bg-gray-300" />
          <Skeleton className="h-3 w-full rounded-sm bg-gray-300" />
          <div className="flex justify-end">
            <Skeleton className="h-8 w-[35%] rounded-sm bg-gray-300" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModuleSkeleton;
