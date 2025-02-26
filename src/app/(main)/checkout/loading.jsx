import Container from "@/components/ui/Container";
import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const TestingPage = () => {
  return (
    <div className="bg-gray-4">
      <Container>
        {/* Header */}
        <Skeleton className="hidden h-6 w-1/4 md:block" />
        <Skeleton className="my-4 hidden h-px w-full md:block" />

        <div className="flex flex-col gap-6 lg:flex-row">
          {/* Left Section: Course Info and Payment Summary */}
          <div className="flex w-full flex-col gap-6 rounded-2xl border border-stroke bg-white lg:w-3/5">
            <div className="border-none shadow-none md:shadow-sm">
              <div className="p-4 md:p-6">
                <div className="flex gap-4">
                  <Skeleton className="aspect-video h-20 w-28 rounded md:w-32" />
                  <Skeleton className="h-6 w-3/4" />
                </div>
                <Skeleton className="my-4 h-4 w-1/4" />
                <div className="mt-2 space-y-2">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <Skeleton className="h-3 w-1/6" />
                    <Skeleton className="h-3 w-1/6" />
                  </div>
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <Skeleton className="h-3 w-1/5" />
                    <Skeleton className="h-3 w-1/5" />
                  </div>
                  <Skeleton className="my-2 h-px w-full" />
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <Skeleton className="h-4 w-1/6" />
                    <Skeleton className="h-4 w-1/6" />
                  </div>
                </div>
              </div>
            </div>
            <Skeleton className="mx-auto h-4 w-3/4" />
          </div>

          {/* Right Section: Payment Methods */}
          <div className="flex w-full flex-col lg:w-2/5">
            <div className="rounded-xl border border-stroke bg-white p-4 shadow-sm md:p-6 md:shadow-sm">
              <div className="">
                <Skeleton className="mb-4 h-4 w-1/4" />
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Skeleton className="h-6 w-6 rounded-full" />
                    <Skeleton className="h-11 w-full rounded-md" />
                  </div>
                  <div className="flex items-center space-x-2">
                    <Skeleton className="h-6 w-6 rounded-full" />
                    <Skeleton className="h-11 w-full rounded-md" />
                  </div>
                  <div className="flex flex-col items-center md:flex-row md:justify-between">
                    <Skeleton className="h-4 w-1/4" />
                    <Skeleton className="h-6 w-1/3 font-bold" />
                  </div>
                  <Skeleton className="h-10 w-full rounded-md" />
                  <div className="hidden items-center justify-center gap-2 lg:flex">
                    <Skeleton className="h-3 w-1/4" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TestingPage;
