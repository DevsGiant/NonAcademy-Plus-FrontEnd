import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const LeaderboardSkeleton = () => {
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
      <Skeleton className="mb-6 h-8 w-full rounded-none bg-gray-300 md:w-1/2" />

      <Skeleton className="h-12 w-full rounded-none bg-gray-300" />
      <div className="divide-y divide-gray-200 bg-white">
        {[1, 2, 3].map((index) => (
          <div key={index} className="flex items-center gap-3 px-5 py-6">
            <Skeleton className="h-4 w-[40%] rounded-sm bg-gray-300" />
            <Skeleton className="mx-auto h-4 w-[20%] rounded-sm bg-gray-300" />
            <Skeleton className="ml-auto h-8 w-[15%] rounded-sm bg-gray-300" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeaderboardSkeleton;
