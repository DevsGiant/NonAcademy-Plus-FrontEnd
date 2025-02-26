import React from "react";
import Container from "../ui/Container";
import { Skeleton } from "../ui/skeleton";
import CardSkeleton from "./CardSkeleton";

const AllCoursesSkeleton = () => {
  return (
    <>
      <Skeleton className="mx-auto mb-6 h-7 w-1/5 lg:mb-8" />
      <div className="grid w-full grid-cols-1 gap-2 md:grid-cols-2 md:gap-3 lg:grid-cols-3 lg:gap-3 xl:grid-cols-4">
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
      </div>
    </>
  );
};

export default AllCoursesSkeleton;
