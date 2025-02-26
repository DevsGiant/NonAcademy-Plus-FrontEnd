import Link from "next/link";
import React from "react";
import { MdGroups } from "react-icons/md";

const Ads = () => {
  return (
    <div className="bg-gradient-to-r from-[#002761] via-[#0056d2] to-[#002761] text-white">
      <div className="mx-auto mt-6 max-w-7xl px-4 md:mt-14 md:px-5 lg:px-6 xl:px-4">
        <div className="flex flex-col items-center justify-between gap-4 py-8 md:flex-row md:py-12 lg:py-16">
          <h2 className="w-full text-center text-xl font-semibold capitalize leading-8 md:w-[70%] md:text-left md:text-3xl md:font-bold md:leading-normal lg:w-[50%] lg:text-4xl xl:leading-relaxed">
            যুক্ত হন বাংলাদেশের সবচেয়ে বড় ও এক্টিভ ব্লকচেইন কমিউনিটিতে
          </h2>
          <Link
            href="https://www.facebook.com/groups/nonacademy1"
            target="_blank"
            className="inline-flex h-10 items-center justify-center gap-2 whitespace-nowrap rounded-full bg-white px-4 text-base font-semibold text-nad-title shadow ring-offset-background transition-colors hover:bg-gray-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 md:h-14 md:gap-2.5 md:px-5 md:text-lg md:font-bold"
          >
            <MdGroups className="text-lg md:text-2xl" /> <span>Join Here</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Ads;
