"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { useState } from "react";
import { FiBookOpen } from "react-icons/fi";
import { RiMenuUnfold3Line, RiMenuUnfold4Line } from "react-icons/ri";

const DegreeSideBar = ({
  className,
  data,
  singleLessonSlug,
  slug,
  courseSlug,
}) => {
  const [isOpenSideBar, setOpenSideBar] = useState(false);

  const handleToggleSideBar = (actionType) => {
    if (actionType == "open") {
      setOpenSideBar(true);
      document.body.style.overflow = "hidden";
    } else {
      setOpenSideBar(false);
      document.body.style.overflow = "";
    }
  };

  return (
    <div className={cn("h-full", className)}>
      <div className={`block overflow-x-hidden lg:hidden`}>
        <div className="m-2 flex w-max items-center gap-2 rounded bg-blue-600 p-2 font-semibold text-white">
          <div>
            {isOpenSideBar ? (
              <RiMenuUnfold4Line
                onClick={() => {
                  handleToggleSideBar("close");
                }}
                className="text-xl"
              />
            ) : (
              <RiMenuUnfold3Line
                onClick={() => {
                  handleToggleSideBar("open");
                }}
                className="text-xl"
              />
            )}
          </div>
          <button
            onClick={() => {
              handleToggleSideBar("open");
            }}
          >
            All Modules
          </button>
        </div>

        {/* side bar contents  */}
        <div
          onClick={() => {
            handleToggleSideBar("close");
          }}
          className={`${isOpenSideBar ? "block" : "hidden"} fixed left-0 top-16 z-30 h-full min-h-screen w-screen bg-black opacity-50`}
        ></div>
        <div
          className={`${isOpenSideBar ? "left-0" : "-left-[100vw]"} fixed top-16 z-40 h-[93vh] w-[80vw] bg-white transition-all duration-300`}
        >
          <div className="relative max-h-[90vh] overflow-y-auto overflow-x-hidden">
            <Accordion
              type="multiple"
              // defaultValue={data?.courses?.length ? ["item-1"] : []}
              defaultValue={data?.modules.map(
                (_, index) => `item-${index + 1}`,
              )}
              className="w-full border border-gray-200"
            >
              {data?.modules
                ?.sort((a, b) => a.sortValue - b.sortValue)
                ?.map((module, index) => {
                  return (
                    <AccordionItem
                      key={module._id}
                      value={`item-${index + 1}`}
                      className="border-gray-200 last:border-b-0"
                    >
                      <AccordionTrigger className="relative bg-gray-100 px-4 text-left">
                        <p className="font-semibold md:font-semibold">
                          {module?.bangla_title || module?.title}
                        </p>
                      </AccordionTrigger>
                      <AccordionContent className="z-40">
                        {module?.lessons?.map((singleLesson, idx) => (
                          <Link
                            onClick={() => (document.body.style.overflow = "")}
                            href={`/degrees/${slug}/${singleLesson?.slug}?course=${module?.slug}`}
                            key={idx}
                            className={`${singleLesson?.slug == singleLessonSlug && courseSlug == module?.slug ? "bg-blue-600 text-white" : ""} flex flex-col justify-between gap-1 p-2 text-sm sm:flex-row sm:gap-4`}
                          >
                            <div className="flex items-center gap-1.5">
                              <FiBookOpen className="inline h-5 w-5" />

                              <div>
                                {singleLesson?.bangla_title ||
                                  singleLesson?.title}
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
        </div>
      </div>

      {/* for lg devices  */}
      <div className={`hidden lg:block `}>
        <Accordion
          type="multiple"
          // defaultValue={data?.courses?.length ? ["item-1"] : []}
          defaultValue={data?.modules.map((_, index) => `item-${index + 1}`)}
          className="w-full border border-gray-200"
        >
          {data?.modules
            ?.sort((a, b) => a.sortValue - b.sortValue)
            ?.map((module, index) => {
              return (
                <AccordionItem
                  key={module._id}
                  value={`item-${index + 1}`}
                  className="border-gray-200 last:border-b-0"
                >
                  <AccordionTrigger className="relative bg-nad-primary-lite-1 px-4 text-left">
                    <p className="font-semibold md:font-semibold">
                      {module?.bangla_title || module?.title}
                    </p>
                  </AccordionTrigger>
                  <AccordionContent className="">
                    {module?.lessons?.map((singleLesson, idx) => (
                      <Link
                        href={`/degrees/${slug}/${singleLesson?.slug}?course=${module?.slug}`}
                        key={idx}
                        className={`${singleLesson?.slug == singleLessonSlug && courseSlug == module?.slug ? "bg-blue-600 text-white" : ""} flex flex-col justify-between gap-1 p-2 text-sm sm:flex-row sm:gap-4`}
                      >
                        <div className="flex items-center gap-1.5">
                          <FiBookOpen className="inline h-5 w-5" />

                          <div>
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
    </div>
  );
};

export default DegreeSideBar;
