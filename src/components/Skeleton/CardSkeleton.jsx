import React from "react";
import { Skeleton } from "../ui/skeleton";

const CardSkeleton = () => {
  return (
    <div className="rounded-lg border border-stroke bg-white">
      <Skeleton className="h-[160px] w-full rounded-b-none rounded-t-lg" />
      <div className="flex flex-wrap justify-between gap-2 border-b p-2">
        <Skeleton className="h-5 w-1/4" />
        <Skeleton className="h-5 w-1/4" />
        <Skeleton className="h-5 w-1/4" />
      </div>
      <div className="space-y-4 p-4">
        <Skeleton className="h-9 w-full" />
        <Skeleton className="h-9 w-full" />
      </div>
    </div>
  );
};

export default CardSkeleton;
