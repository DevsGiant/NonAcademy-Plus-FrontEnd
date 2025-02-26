import HTMLReactParser from "html-react-parser";
import React from "react";

const CourseAbout = ({ description }) => {
  return (
    <div className="mt-8">
      <h3 className="mb-4 block text-xl font-bold tracking-tight text-nad-gray-9 md:mb-5 md:text-2xl md:font-extrabold">
        About This Course
      </h3>
      <div>{HTMLReactParser(description)}</div>
    </div>
  );
};

export default CourseAbout;
