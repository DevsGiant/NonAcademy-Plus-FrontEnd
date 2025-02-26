import React from "react";
import { IoCodeSlash } from "react-icons/io5";

const Category = ({ categories }) => {
  return (
    <div className="group/cat flex h-full w-fit shrink-0 cursor-pointer items-center gap-1.5 rounded-md border border-gray-300 bg-gray-100 px-4 py-2 hover:border-gray-400 hover:bg-gray-200 ">
      <div className="w-7 items-center justify-center rounded-full bg-white p-1.5 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.16)]">
        <IoCodeSlash className="w-4 min-w-4 brightness-0 transition-all duration-300 group-hover/cat:text-orange-400 group-hover/cat:brightness-100" />
      </div>
      <div className="flex flex-col items-start justify-center gap-0.5">
        <p className="line-clamp-1 whitespace-nowrap text-sm font-medium group-hover/cat:underline">
          Web & App Development
        </p>
        <p className="whitespace-nowrap text-[11px] font-medium">
          • 30 Course • 5 Workshop
        </p>
      </div>
    </div>
  );
};

export default Category;
