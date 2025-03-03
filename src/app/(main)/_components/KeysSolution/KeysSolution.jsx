"use client";

import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import React, { useState } from "react";
import { GoDownload } from "react-icons/go";
import {
  answerSolutions,
  solutionCategories,
} from "../../../../../public/data/answerSolutions";

const KeysSolution = () => {
  const [activeCategory, setActiveCategory] = useState("");
  const [filteredAnswerSolution, setFilteredAnswerSolution] = useState(
    answerSolutions || [],
  );

  // Set active category and filtered answer solution
  const handleCategorySelect = (slug) => {
    if (!slug) return;

    setActiveCategory(slug);

    const selected = answerSolutions?.filter((item) => item.category === slug);
    setFilteredAnswerSolution(selected || []);
  };

  return (
    <div className="bg-[#F8F8F8]">
      <Container>
        <div className="mb-4 md:mb-6">
          <SectionTitle
            title="Official Answer Keys & Solutions"
            subtitle="Access verified answer keys and detailed solutions for your exams."
          />
        </div>

        {/* Solution category part */}
        <div className="no-scrollbar mb-5 w-full overflow-x-auto">
          <div
            className="flex flex-nowrap justify-center gap-3"
            // style={{ justifyContent: "start" }}
          >
            {solutionCategories?.map((category) => (
              <div
                onClick={() => handleCategorySelect(category.slug)}
                key={category.id}
                className={`${activeCategory === category.slug ? "border-nad-primary bg-zinc-50 text-nad-primary" : "border-stroke-light bg-white text-[#3d3d3d] hover:border-stroke-medium hover:bg-zinc-50"} inline-flex cursor-pointer items-center space-x-2 whitespace-nowrap rounded-full border px-3 py-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2`}
              >
                {category.name}
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-3 lg:grid-cols-3 lg:gap-7">
          {filteredAnswerSolution?.map((solution) => (
            <div
              key={solution.id}
              className="flex flex-col rounded-lg bg-white shadow-[0_1px_8px_0_rgba(0,0,0,0.08)]"
            >
              {/* top part */}
              <div className="rounded-t-lg bg-nad-primary p-3 text-center text-lg font-semibold capitalize text-white md:text-xl lg:p-4">
                {solution.category}
              </div>

              {/* middle part */}
              <div className="flex-grow p-4 lg:p-6">
                <ul className="list-disc space-y-4 pl-3 text-gray-700 md:pl-4 lg:space-y-4">
                  {solution.resources?.map((resource) => (
                    <li key={resource.id}>
                      <div className="flex justify-between gap-3 md:gap-2 lg:gap-4">
                        <span className="text-sm">{resource.title}</span>{" "}
                        <button className="inline-flex h-6 items-center justify-center gap-1 whitespace-nowrap rounded bg-[#e3eeff] px-2.5 text-xs font-medium text-nad-primary md:rounded-full">
                          <GoDownload />{" "}
                          <span className="hidden md:block">Download</span>
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              {/* bottom part */}
              <div className="mt-auto h-fit cursor-pointer border-t border-stroke p-3 text-center font-semibold text-nad-primary lg:p-4">
                See al answers/ solution
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default KeysSolution;
