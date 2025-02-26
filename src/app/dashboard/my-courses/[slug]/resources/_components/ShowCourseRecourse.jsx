"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import PdfViewer from "@/components/ui/PdfViewer";
import PdfViewer2 from "@/components/ui/PdfViewer2";
import Link from "next/link";
import React, { Suspense, useState } from "react";
import { AiOutlineEye } from "react-icons/ai";
import { FaFileAlt } from "react-icons/fa";

const ShowCourseRecourse = ({ modules }) => {
  const [pdfUrl, setPdfUrl] = useState("");
  const [pdfUrl2, setPdfUrl2] = useState("");

  return (
    <>
      {/* {pdfUrl || pdfUrl2 ? (
        <div className="">
          <div className="mb-2 flex justify-end">
            <Button
              size="sm"
              variant="destructive"
              className="text-white"
              onClick={() => {
                setPdfUrl("");
                setPdfUrl2("");
              }}
            >
              Close
            </Button>
          </div>
          <Suspense fallback={<div>Loading PDF...</div>}>

            {pdfUrl && <PdfViewer pdfUrl={pdfUrl} />}
            {pdfUrl2 && <PdfViewer2 pdfUrl={pdfUrl2} />}
          </Suspense>
        </div>
      ) : ( */}
      <Accordion
        type="multiple"
        className="w-full border border-stroke bg-white"
      >
        {modules?.map((module, index) => (
          <AccordionItem
            key={module._id}
            value={`item-${index + 1}`}
            className="border-b border-stroke last:border-b-0"
          >
            <AccordionTrigger
              className={`relative p-4 text-left md:p-5 ${module?.resources?.length <= 0 && "opacity-50"}`}
            >
              <p className="font-medium md:font-semibold">{module?.title}</p>
              <p className="absolute bottom-0 text-sm font-normal md:bottom-5 md:end-9">
                {module?.resources?.length || 0} Resources
              </p>
            </AccordionTrigger>
            <AccordionContent className="border-t border-stroke p-4 md:p-5 md:text-base">
              {module?.resources?.length > 0 ? (
                module?.resources?.map((resource) => (
                  <div
                    key={resource._id}
                    className="flex flex-col justify-between gap-2 py-2 sm:flex-row sm:gap-4"
                  >
                    <div className="flex items-center gap-1 md:gap-1.5">
                      <FaFileAlt className="inline text-sm md:text-base" />
                      <div>{resource?.title}</div>
                    </div>
                    {resource?.resourceUrl && (
                      <div className="flex items-center gap-2">
                        <Link
                          href={resource.resourceUrl}
                          target="_blank"
                          className=" flex items-center gap-2 rounded-md bg-slate-200 px-2 py-1 font-semibold text-slate-800 hover:bg-slate-300"
                        >
                          <AiOutlineEye className="text-base" /> Open
                        </Link>
                      </div>
                      // <div className="flex items-center gap-2">
                      // <Button
                      //   className="gap-2 bg-slate-200 font-semibold text-slate-800 hover:bg-slate-300"
                      //   size="sm"
                      //   variant="secondary"
                      //   onClick={() => setPdfUrl(resource.resourceUrl)}
                      // >
                      //   <AiOutlineEye className="text-base" /> Open-1
                      // </Button>
                      // <Button
                      //   className="gap-2 bg-slate-200 font-semibold text-slate-800 hover:bg-slate-300"
                      //   size="sm"
                      //   variant="secondary"
                      //   onClick={() => setPdfUrl2(resource.resourceUrl)}
                      // >
                      //   <AiOutlineEye className="text-base" /> Open
                      // </Button>
                      // </div>
                    )}
                  </div>
                ))
              ) : (
                <div className="p-3 text-center text-sm font-medium text-danger-1">
                  No resources available
                </div>
              )}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      {/*  )} */}
    </>
  );
};

export default ShowCourseRecourse;
