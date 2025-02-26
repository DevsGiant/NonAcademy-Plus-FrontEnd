import React from "react";
import { FaUsers } from "react-icons/fa";

const Students = () => {
  return (
    <div className="absolute left-0 right-0 top-[4%] z-10 mx-auto w-fit rounded-md bg-white px-6 py-5 text-black drop-shadow-md md:-right-[11%] md:left-auto md:top-[10%] md:mx-0 md:rounded-lg md:px-4 md:py-6 lg:-right-[2%] lg:top-[1%] xl:right-[4%] xl:top-[-4%]">
      <div className="flex items-center gap-3">
        <div className="flex size-[45px] items-center justify-center rounded-full bg-nad-secondary text-white md:size-[50px] xl:size-[55px]">
          <FaUsers className="inline text-xl md:text-2xl xl:text-[28px]" />
        </div>
        <div>
          <h3 className="text-lg font-bold md:text-xl lg:text-2xl">10k+</h3>
          <p className="font-medium text-[#625F71] lg:text-lg lg:font-semibold">
            Active Members
          </p>
        </div>
      </div>
    </div>
  );
};

export default Students;
