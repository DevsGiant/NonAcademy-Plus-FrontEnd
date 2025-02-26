"use client";

import { Button } from "@/components/ui/button";
import Container from "@/components/ui/Container";
import LogoBlack from "@/components/ui/LogoBlack";
import Link from "next/link";
import React, { useEffect } from "react";

const ErrorPage = ({ error, reset }) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="bg-nad-primary-lite-1">
      <Container>
        <div className="flex h-screen flex-col items-center justify-center">
          <Link
            href="/"
            className="mb-6 max-w-[200px] md:max-w-[300px] lg:mb-8"
          >
            <LogoBlack />
          </Link>
          <div className="mx-auto max-w-lg rounded-lg border bg-white p-5 text-center shadow-2xl md:p-10">
            <h1 className="mb-4 text-xl font-extrabold text-red-400 md:text-3xl lg:mb-5">
              Oops! Something went wrong.
            </h1>
            <p className="mb-4 text-sm text-gray-700 lg:mb-6">
              We&apos;re sorry, but the page you&apos;re looking for can&apos;t
              be found or an unexpected error has occurred.
            </p>
            <div className="flex flex-col items-center justify-center gap-4">
              <Button
                variant="outline"
                className="border-stroke bg-gray-100"
                onClick={() => reset()}
              >
                Try Again
              </Button>
              <Button asChild>
                <Link href="/">Go to Home</Link>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ErrorPage;
