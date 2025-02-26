import React from "react";

const FailedUI = () => {
  return (
    <div className="mx-auto my-10 flex max-w-md flex-col items-center justify-center rounded-lg border border-red-300 bg-red-50 p-6 text-center shadow-lg lg:my-16">
      <svg
        className="mb-4 h-12 w-12 text-red-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M18.364 5.636L5.636 18.364M18.364 18.364L5.636 5.636"
        ></path>
      </svg>
      <p className="text-xl font-semibold text-red-500 md:text-2xl">
        Oops! Something went wrong
      </p>
      <p className="mt-2 text-gray-700">
        We couldn&apos;t load data. Please try refreshing the page or check back
        later.
      </p>
    </div>
  );
};

export default FailedUI;
