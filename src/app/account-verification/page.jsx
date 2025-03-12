import Container from "@/components/ui/Container";
import LogoBlack from "@/components/ui/LogoBlack";
import Link from "next/link";
import React from "react";
import OtpVerification from "./_components/OtpVerification";

export const metadata = {
  title: "Account Verify | NonAcademy",
  description: "With NonAcademy Plus Towards Fulfilling Your Dreams.",
};

const AccountVerifyPage = () => {
  return (
    <div className="min-h-screen bg-nad-primary-lite-1">
      <Container>
        <div className="mx-auto w-full max-w-[300px] rounded-lg bg-white p-4 text-center shadow md:max-w-[400px]  md:space-y-4 md:p-7 lg:max-w-[500px] lg:rounded-xl lg:shadow-lg xl:p-12">
          <div className="mx-auto max-w-[200px] md:max-w-[250px] md:pb-1">
            <Link href="/">
              <LogoBlack />
            </Link>
          </div>
          <div className="space-y-3">
            <h1 className="text-xl font-semibold text-nad-gray-8 md:text-2xl md:font-bold lg:text-3xl">
              Verify Your Account
            </h1>
            <p className="text-xs text-gray-600 md:text-sm">
              <Link
                href="/dashboard"
                className="font-medium text-nad-primary hover:underline"
              >
                Back to Dashboard
              </Link>
              <br />
              Enter the 5 digit code sent to the registered phone number.{" "}
            </p>
            <OtpVerification />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AccountVerifyPage;
