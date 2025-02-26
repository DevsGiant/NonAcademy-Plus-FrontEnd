import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import React from "react";
import { FiBookOpen } from "react-icons/fi";

const DegreeModules = ({ modules, slug }) => {
  return (
    <div>
      <div>
        <h3 className="text-lg font-semibold lg:text-2xl">আপনি যা শিখবেন</h3>
        <div className="mb-2 mt-2.5 space-y-0.5 md:mt-4">
          <p className="text-base font-semibold text-gray-800 lg:text-lg">
            মডিউল সমূহ
          </p>
          <p className="text-sm font-medium text-nad-gray-8">
            {(modules?.length || 0).toLocaleString("bn-BD")} টি মডিউল •{" "}
            {modules
              ?.reduce(
                (prev, current) => prev + current?.lessons?.length || 0,
                0,
              )
              .toLocaleString("bn-BD")}{" "}
            টি পাঠ
          </p>
        </div>
      </div>

      <Accordion
        type="multiple"
        defaultValue={["item-1"]}
        className="w-full border border-gray-200"
      >
        {modules?.map((course, index) => {
          return (
            <AccordionItem
              key={course._id}
              value={`item-${index + 1}`}
              className="border-gray-200 last:border-b-0"
            >
              <AccordionTrigger className="relative bg-gray-100 px-4 text-left">
                <p className="font-semibold md:font-semibold">
                  {course?.bangla_title || course?.title}
                </p>
                <p className="absolute bottom-0 text-sm font-normal md:bottom-5 md:end-9">
                  {(course?.lessons?.length || 0).toLocaleString("bn-BD")} টি{" "}
                  {course?.lessons?.length > 1 ? "পাঠ" : "পাঠ"}
                </p>
              </AccordionTrigger>
              <AccordionContent className="p-4">
                {course?.lessons?.map((singleLesson, idx) => (
                  <Link
                    href={`/degrees/${slug}/${singleLesson?.slug}?course=${course?.slug}`}
                    key={idx}
                    className="flex flex-col justify-between gap-1 py-2 text-sm transition-all hover:underline sm:flex-row sm:gap-4"
                  >
                    <div className="flex items-center gap-1.5">
                      <FiBookOpen className="inline h-5 w-5" />

                      <div className="">
                        {singleLesson?.bangla_title || singleLesson?.title}
                      </div>
                    </div>
                  </Link>
                ))}
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
};

export default DegreeModules;
