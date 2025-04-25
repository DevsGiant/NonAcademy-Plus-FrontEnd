"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import React from "react";
import toast from "react-hot-toast";
import { IoPlayCircleSharp } from "react-icons/io5";

// Utility to convert duration string to total minutes
const parseDuration = (duration) => {
  const timeParts = duration.split(":").map(Number);
  let totalMinutes = 0;

  if (timeParts.length === 3) {
    // Format: hh:mm:ss
    totalMinutes = timeParts[0] * 60 + timeParts[1] + timeParts[2] / 60;
  } else if (timeParts.length === 2) {
    // Format: mm:ss
    totalMinutes = timeParts[0] + timeParts[1] / 60;
  } else {
    // Invalid or unknown format
    return 0;
  }

  return totalMinutes;
};

// Utility to format total minutes to hours and minutes
const formatDuration = (totalMinutes) => {
  const hours = Math.floor(totalMinutes / 60);
  const minutes = Math.round(totalMinutes % 60);
  return `${hours > 0 ? `${hours}h ` : ""}${minutes}m`;
};

const CourseStructure = ({
  modules,
  setCurrentVideo,
  setIsOpenOverview,
  loggedInUser,
  forSubscription,
}) => {
  let totalVideos = 0;
  let totalDurationMinutes = 0;

  modules.forEach((module) => {
    totalVideos += module?.videos?.length || 0;
    module?.videos?.forEach((video) => {
      totalDurationMinutes += parseDuration(video?.duration);
    });
  });

  return (
    <div className="mt-8 text-nad-gray-9">
      <h3 className="mb-4 block text-xl font-bold tracking-tight text-nad-gray-9 md:mb-5 md:text-2xl md:font-extrabold">
        Course Structure
      </h3>
      {/* Calculation of total lectures and total duration */}
      <p className="pb-2">
        {totalVideos} lectures • {formatDuration(totalDurationMinutes)} total
        duration
      </p>
      <Accordion
        type="multiple"
        defaultValue={["item-1"]}
        className="w-full border border-gray-200"
      >
        {modules?.map((module, index) => {
          let moduleDurationMinutes = 0;
          module?.videos?.forEach((video) => {
            moduleDurationMinutes += parseDuration(video?.duration);
          });

          return (
            <AccordionItem
              key={module._id}
              value={`item-${index + 1}`}
              className="border-gray-200 last:border-b-0"
            >
              <AccordionTrigger className="relative bg-gray-100 px-4 text-left">
                <p className="font-semibold md:font-bold">{module?.title}</p>
                <p className="absolute bottom-0 text-sm font-normal md:bottom-5 md:end-9">
                  {module?.videos?.length} lectures —{" "}
                  {formatDuration(moduleDurationMinutes)}
                </p>
              </AccordionTrigger>
              <AccordionContent className="p-4">
                {module?.videos?.map((video) => (
                  <div
                    key={video._id}
                    className="flex flex-col justify-between gap-1 py-2 text-sm sm:flex-row sm:gap-4"
                  >
                    <div className="flex items-center gap-1.5">
                      {/* {forSubscription && video?.hasPreview ? ( */}
                      {video?.hasPreview ? (
                        <IoPlayCircleSharp
                          className="inline h-5 w-5 cursor-pointer"
                          onClick={
                            loggedInUser
                              ? () => {
                                  setIsOpenOverview(true);
                                  setCurrentVideo(video);
                                }
                              : () => toast.error("Login to preview!")
                          }
                        />
                      ) : (
                        <IoPlayCircleSharp className="inline h-5 w-5" />
                      )}

                      {/* {forSubscription && video?.hasPreview ? ( */}
                      {video?.hasPreview ? (
                        <button
                          onClick={
                            loggedInUser
                              ? () => {
                                  setIsOpenOverview(true);
                                  setCurrentVideo(video);
                                }
                              : () => toast.error("Login to preview!")
                          }
                          className={`cursor-pointer text-blue-600`}
                        >
                          {video?.title}
                        </button>
                      ) : (
                        <div className="">{video?.title}</div>
                      )}
                    </div>
                    <div>{formatDuration(parseDuration(video?.duration))}</div>
                  </div>
                ))}
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
};

export default CourseStructure;
