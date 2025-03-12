import Link from "next/link";
import React, { Suspense } from "react";
import { FaRegCircleCheck } from "react-icons/fa6";
import PaymentInfo from "./_components/PaymentInfo";

export const metadata = {
  title: "Payment Success - NonAcademy",
  description: "With NonAcademy Plus Towards Fulfilling Your Dreams.",
};

const PaymentSuccessPage = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex flex-grow flex-col items-center justify-center p-4 text-center md:p-6">
        <FaRegCircleCheck className="h-16 w-16 text-green-500" />
        <h1 className="mt-4 text-2xl font-semibold">Payment Successful</h1>
        <p className="mt-2 text-gray-500 dark:text-gray-400">
          Thank you for your payment. Your transaction <br /> was completed
          successfully.
        </p>
        <Suspense fallback={<div>Loading payment info...</div>}>
          <PaymentInfo />
        </Suspense>
        <Link
          href="/"
          className="mt-6 inline-flex h-10 items-center justify-center rounded-md bg-blue-600 px-4 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          prefetch={false}
        >
          Return to Homepage
        </Link>
      </div>
    </div>
  );
};

export default PaymentSuccessPage;
