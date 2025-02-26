import Image from "next/image";
import React from "react";
import learn1 from "../../../../../../public/images/courses/learn-1.webp";
import learn2 from "../../../../../../public/images/courses/learn-2.webp";
import learn3 from "../../../../../../public/images/courses/learn-3.webp";
import learn4 from "../../../../../../public/images/courses/learn-4.webp";
import learn5 from "../../../../../../public/images/courses/learn-5.webp";
import learn6 from "../../../../../../public/images/courses/learn-6.webp";

const UsedByLearners = () => {
  /* TODO: static data removed */
  return (
    <div className="my-4 flex flex-col items-center overflow-hidden rounded-md border border-gray-100 bg-gray-50 p-6">
      <h3 className="text-2xl font-bold text-nad-gray-8">
        Used by learners at
      </h3>
      <div className="mt-6 grid w-full grid-cols-1 gap-6 sm:grid-cols-3">
        <div className="group flex h-[80px] w-full items-center justify-center rounded-xl border border-gray-200 bg-white bg-opacity-5 px-4 py-2 text-center hover:bg-opacity-10 dark:border-gray-600">
          <Image
            className="h-full w-auto object-contain p-3 transition"
            src={learn1}
            alt="learner"
          />
        </div>
        <div className="group flex h-[80px] w-full items-center justify-center rounded-xl border border-gray-200 bg-white bg-opacity-5 px-4 py-2 text-center hover:bg-opacity-10 dark:border-gray-600">
          <Image
            className="h-full w-auto object-contain p-3 transition"
            src={learn2}
            alt="learner"
          />
        </div>
        <div className="group flex h-[80px] w-full items-center justify-center rounded-xl border border-gray-200 bg-white bg-opacity-5 px-4 py-2 text-center hover:bg-opacity-10 dark:border-gray-600">
          <Image
            className="h-full w-auto object-contain p-3 transition"
            src={learn3}
            alt="learner"
          />
        </div>
        <div className="group flex h-[80px] w-full items-center justify-center rounded-xl border border-gray-200 bg-white bg-opacity-5 px-4 py-2 text-center hover:bg-opacity-10 dark:border-gray-600">
          <Image
            className="h-full w-auto object-contain p-3 transition"
            src={learn4}
            alt="learner"
          />
        </div>
        <div className="group flex h-[80px] w-full items-center justify-center rounded-xl border border-gray-200 bg-white bg-opacity-5 px-4 py-2 text-center hover:bg-opacity-10 dark:border-gray-600">
          <Image
            className="h-full w-auto object-contain p-3 transition"
            src={learn5}
            alt="learner"
          />
        </div>
        <div className="group flex h-[80px] w-full items-center justify-center rounded-xl border border-gray-200 bg-white bg-opacity-5 px-4 py-2 text-center hover:bg-opacity-10 dark:border-gray-600">
          <Image
            className="h-full w-auto object-contain p-3 transition"
            src={learn6}
            alt="learner"
          />
        </div>
      </div>
    </div>
  );
};

export default UsedByLearners;
