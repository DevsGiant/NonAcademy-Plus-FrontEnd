import React from "react";
import { AiOutlineCheck } from "react-icons/ai";

const Outcomes = ({ course_outcomes }) => {
  return (
    <div className="rounded-md border border-gray-200 p-4">
      <h3 className=" block text-xl font-bold tracking-tight text-nad-gray-9 lg:text-2xl lg:font-extrabold">
        Course Outcomes
      </h3>
      <ul className="mt-5 grid grid-cols-1 gap-x-1.5 gap-y-2.5 text-sm md:grid-cols-2">
        {course_outcomes?.map((outcome, idx) => (
          <li className="flex space-x-2.5" key={idx}>
            <AiOutlineCheck className="inline flex-shrink-0 text-lg text-green-800" />
            <span>{outcome}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Outcomes;
