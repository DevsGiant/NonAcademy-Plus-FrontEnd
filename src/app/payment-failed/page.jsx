import { Button } from "@/components/ui/button";
import Container from "@/components/ui/Container";
import Link from "next/link";
import React from "react";
import { FaRegCircleXmark } from "react-icons/fa6";
import TryAgainBtn from "./_components/TryAgainBtn";

export const metadata = {
  title: "Payment Failed - NonAcademy",
  description: "A online learning platform. your career building university",
};

const PaymentFailedPage = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-nad-primary-lite-1">
      <Container>
        <div className="flex flex-col items-center justify-center">
          <div className="mx-auto max-w-md rounded-lg border bg-white p-8 text-center shadow-lg">
            <FaRegCircleXmark className="mx-auto h-16 w-16 text-red-500" />
            <h1 className="mt-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Payment Failed
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              We&apos;re sorry, but your payment was unsuccessful. Please try
              again or contact support if the issue persists.
            </p>
            {/* <div className="mt-6">
              <Button className="w-full" asChild>
                <Link href="/">Try Again</Link>
              </Button>
            </div> */}
            <TryAgainBtn />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default PaymentFailedPage;
