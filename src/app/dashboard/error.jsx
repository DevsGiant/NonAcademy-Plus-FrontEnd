"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, { useEffect } from "react";

const DashboardErrorPage = ({ error, reset }) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex h-[calc(100vh-150px)] items-center justify-center">
      <div className="flex flex-col items-center justify-center px-4 py-6 text-center">
        <div className="rounded-lg bg-white p-6 shadow-lg shadow-gray-100">
          <h1 className="mb-4 text-xl font-bold text-red-400 md:text-2xl md:font-extrabold lg:mb-5">
            Oops! Something went wrong.
          </h1>
          <p className="mx-auto mt-4 w-full text-sm font-medium text-gray-600 md:w-[70%]">
            We&apos;re sorry, but the page you&apos;re looking for can&apos;t be
            found or an unexpected error has occurred.
          </p>
          <div className="mt-4 flex flex-col items-center justify-center gap-4 md:mt-6">
            <Button
              variant="outline"
              className="border-stroke bg-gray-100"
              onClick={() => reset()}
            >
              Try Again
            </Button>
            <Button asChild>
              <Link href="/dashboard">Go to dashboard</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardErrorPage;
