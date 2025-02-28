import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import React from "react";
import { GoDownload } from "react-icons/go";
import { answerSolutions } from "../../../../../public/data/answerSolutions";

const KeysSolution = () => {
  return (
    <div className="bg-[#F8F8F8]">
      <Container>
        <SectionTitle
          title="Official Answer Keys & Solutions"
          subtitle="Access verified answer keys and detailed solutions for your exams."
        />

        <div className="mt-5 grid grid-cols-1 gap-4 md:mt-9 md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-7">
          {answerSolutions?.map((solution) => (
            <div
              key={solution.id}
              className="flex flex-col rounded-lg bg-white shadow-[0_1px_8px_0_rgba(0,0,0,0.08)]"
            >
              {/* top part */}
              <div className="rounded-t-lg bg-nad-primary p-4 text-center text-lg font-semibold text-white md:p-5 md:text-xl">
                {solution.category}
              </div>

              {/* middle part */}
              <div className="flex-grow p-5 md:p-6">
                <ul className="list-disc space-y-2.5 pl-3 text-gray-700 md:pl-4">
                  {solution.resources?.map((resource) => (
                    <li key={resource.id}>
                      <div className="inline-flex gap-4">
                        <span>{resource.title}</span>{" "}
                        <button className="inline-flex h-6 items-center justify-center gap-1 whitespace-nowrap rounded-full bg-[#e3eeff] px-2.5 text-xs font-medium text-nad-primary">
                          <GoDownload /> <span>Download</span>
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              {/* bottom part */}
              <div className="mt-auto h-fit cursor-pointer border-t border-stroke p-4 text-center font-semibold text-nad-primary md:p-5">
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
