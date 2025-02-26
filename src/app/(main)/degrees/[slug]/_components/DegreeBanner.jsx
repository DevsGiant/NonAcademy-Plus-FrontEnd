import Image from "next/image";
import React from "react";

const DegreeBanner = ({ image, title, bangla_title, totalPoints }) => {
  return (
    <div className="mb-6 md:mb-10">
      <div>
        <Image
          src={image}
          alt={title}
          width={1600}
          height={500}
          className="h-[20vh] w-full rounded-md object-cover md:h-[40vh]"
        />
      </div>

      <div className="mt-3 flex flex-wrap items-center justify-between gap-3 md:mt-5">
        <h1 className="text-xl font-semibold text-nad-title md:text-4xl md:font-bold">
          {bangla_title || title}
        </h1>
        <div className="rounded-md bg-orange-500/15 px-3 py-1 font-semibold text-orange-700">
          +{(totalPoints || 0).toLocaleString("bn-BD")} AVT
        </div>
      </div>
    </div>
  );
};

export default DegreeBanner;
