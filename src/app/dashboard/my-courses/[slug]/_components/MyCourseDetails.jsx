"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import VideoPlayer from "@/components/ui/VideoPlayer";
import { AuthContext } from "@/contexts/AuthProvider";
import axiosInstance from "@/utils/axiosInstance";
import { formatDate } from "@/utils/formateDate";
import { handleRequestOtp } from "@/utils/requestOtp";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import {
  IoIosCheckmarkCircle,
  IoMdArrowBack,
  IoMdArrowForward,
} from "react-icons/io";
import { calculateProgress } from "../_utils/calculateProgress";
import "./MyCourseDetailsCSS.css";
import VidStackPlayer from "@/components/ui/VidStackPlayer";

const MyCourseDetails = ({ coursesDetails }) => {
  const { loggedInUser, fetchUser } = useContext(AuthContext);
  const [allWatchHistory, setAllWatchHistory] = useState({});

  const [refetch2, setRefetch2] = useState(0);
  const [showDialog, setShowDialog] = useState(false);

  const [videoSources, setVideoSources] = useState([]);
  const [currentModule, setCurrentModule] = useState(0);
  const [currentVideo, setCurrentVideo] = useState(0);
  const [lastWatchedVideoDuration, setLastWatchedVideoDuration] = useState(0);
  const [openItem, setOpenItem] = useState("item-0");
  const [isDefault, setIsDefault] = useState(true);
  const [lastWatchedInfo, setLastWatchedInfo] = useState({});

  useEffect(() => {
    if (
      loggedInUser?.is_verified === false &&
      coursesDetails?.course?.type == "FREE"
    ) {
      setShowDialog(true);
    }

    if (!isDefault) {
      return;
    }

    setAllWatchHistory(coursesDetails?.courseHistory || {});
    // last watched info
    let moduleIndex = 0;
    let isHistoryFound = false;
    for (let mod of coursesDetails?.course?.modules || []) {
      if (mod._id == coursesDetails?.courseHistory?.lastWatched?.moduleId) {
        let videoIndex = 0;
        for (let vid of mod.videos || []) {
          if (vid._id == coursesDetails?.courseHistory?.lastWatched?.videoId) {
            isHistoryFound = true;

            setLastWatchedInfo({
              module: mod._id,
              video: vid._id,
              watchedTime:
                coursesDetails?.courseHistory?.lastWatched?.watchedTime,
              videoUrl: vid.videoUrl,
              title: vid.title,
              moduleTitle: mod.title,
              moduleIndex, // Track the module index
              videoIndex, // Track the video index
            });

            setCurrentVideo(videoIndex);
            setCurrentModule(moduleIndex);
            setOpenItem(`item-${moduleIndex}`);
            setVideoSources(
              coursesDetails?.course?.modules?.[moduleIndex]?.videos,
            );

            break;
          }
          videoIndex++; // Increment video index
        }
        break;
      }
      moduleIndex++; // Increment module index
    }

    if (!isHistoryFound) {
      for (const mod of coursesDetails?.course?.modules || []) {
        if (mod?.isPublic && mod?.isEnabled) {
          setVideoSources(mod?.videos);
          break;
        }
      }
    }
  }, [
    loggedInUser,
    refetch2,
    coursesDetails?.course.title,
    coursesDetails?.course?.modules,
    coursesDetails?.course?.type,
    isDefault,
    coursesDetails?.courseHistory?.lastWatched?.watchedTime,
  ]);

  const handleWatchHistory = async (data) => {
    data.newInfo = {
      courseId: coursesDetails?.course?._id,
      moduleId: coursesDetails?.course?.modules?.[data.module]?._id,
      videoId:
        coursesDetails?.course?.modules?.[data.module]?.videos?.[data.video]
          ?._id,
    };

    if (data?.newInfo?.videoId == undefined) {
      return;
    }

    if (
      allWatchHistory?.history?.[data.newInfo.moduleId]?.[
        data.newInfo.videoId
      ] != undefined
    ) {
      return;
    }

    // setVideoChanging(true);
    if (!videoSources?.[data?.video]?.videoUrl) {
      return;
    }

    const res = await axiosInstance.patch("/student/auth/history", data);
    if (res.data?.success) {
      setAllWatchHistory(res.data?.data || {});
      setRefetch2(refetch2 + 1);
    }
  };

  const updateLastWatchedHistory = async (data) => {
    // setVideoChanging(true);
    const res = await axiosInstance.patch(
      "/student/auth/last-watched-history",
      data,
    );

    if (res.data?.success) {
      coursesDetails = res.data?.data;
    }
    // console.log(res.data);
  };

  const previous = async (data) => {
    setIsDefault(false);
    if (currentVideo != 0) setCurrentVideo(currentVideo - 1);
  };

  const next = async () => {
    setIsDefault(false);
    if (currentVideo != videoSources?.length - 1) {
      setCurrentVideo(currentVideo + 1);
    }
  };

  // Calculate module duration
  const calculateTime = (module) => {
    const videos = coursesDetails?.course?.modules?.[module]?.videos;

    let totalDurationInSeconds = 0;

    videos?.forEach((video) => {
      if (video?.isPublic) {
        const timeArray = video?.duration?.split(":").map(Number);

        totalDurationInSeconds += (timeArray[0] || 0) * 3600;
        totalDurationInSeconds += (timeArray[1] || 0) * 60;
        totalDurationInSeconds += timeArray[2] || 0;
      }
    });

    const hours = Math.floor(totalDurationInSeconds / 3600);
    const minutes = Math.floor((totalDurationInSeconds % 3600) / 60);
    const seconds = totalDurationInSeconds % 60;

    if (hours >= 1) {
      const formattedHours = String(hours).padStart(2, "0");
      const formattedMinutes = String(minutes).padStart(2, "0");
      const formattedSeconds = String(seconds).padStart(2, "0");
      return `${formattedHours}:${formattedMinutes}:${formattedSeconds} hours`;
    } else {
      const formattedMinutes = String(minutes).padStart(2, "0");
      const formattedSeconds = String(seconds).padStart(2, "0");
      return `${formattedMinutes}:${formattedSeconds} minute`;
    }
  };

  // Convert everything to total seconds
  const formatDurationString = (durationString) => {
    const [hours, minutes, seconds] = durationString.split(":").map(Number);

    const totalMinutes = hours * 60 + minutes;

    if (totalMinutes >= 60) {
      const formattedHours = String(hours).padStart(2, "0");
      const formattedMinutes = String(minutes).padStart(2, "0");
      const formattedSeconds = String(seconds).padStart(2, "0");
      return `${formattedHours}:${formattedMinutes}:${formattedSeconds} hours`;
    } else {
      const formattedMinutes = String(totalMinutes).padStart(2, "0");
      const formattedSeconds = String(seconds).padStart(2, "0");
      return `${formattedMinutes}:${formattedSeconds} minute`;
    }
  };

  // handleVideoProgressSave will store last watched history of the video
  const handleVideoProgressSave = async (watchedTime, title, module, video) => {
    // Save the progress to your backend or local storage
    const data = {
      title: coursesDetails?.course?.title,
      module,
      video,
      watchedTime,
    };

    if (watchedTime < 1) {
      return;
    }

    if (!loggedInUser) {
      return;
    }

    if (
      video == lastWatchedInfo?.video &&
      module == lastWatchedInfo?.module &&
      Math.abs(watchedTime - lastWatchedInfo?.watchedTime || 0) == 0
    ) {
      // console.log("same");
    } else {
      // console.log("diff");

      data.newInfo = {
        courseId: coursesDetails?.course?._id,
        moduleId: coursesDetails?.course?.modules?.[currentModule]?._id,
        videoId:
          coursesDetails?.course?.modules?.[currentModule]?.videos?.[
            currentVideo
          ]?._id,
      };

      await updateLastWatchedHistory(data);
    }
  };

  return (
    <>
      {showDialog && (
        <Dialog
          open={showDialog}
          onOpenChange={() => {
            /* Keep dialog open */
          }}
          modal={true}
        >
          <DialogContent className="w-[80%]">
            <DialogHeader>
              <DialogTitle>Phone Not Verified</DialogTitle>
              <DialogDescription>
                Your phone number is not verified. Please verify your phone
                number to continue watching the course for free.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button asChild>
                <Link onClick={handleRequestOtp} href="/account-verification">
                  Verify Phone
                </Link>
              </Button>
              <Button variant="secondary">
                <Link href="/dashboard">Go Back</Link>
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}

      <div className="grid w-full grid-cols-6 gap-5 xl:gap-6">
        {/* ============  Video & Description  ============= */}
        <div className="col-span-6 h-max w-full md:col-span-4">
          {showDialog ? (
            <VideoPlayer videoSrc={""} />
          ) : (
            <VidStackPlayer
              userPhone={loggedInUser?.phone}
              watchHistory={loggedInUser?.watchHistory}
              videoSrc={videoSources?.[currentVideo || 0]?.videoUrl}
              title={videoSources?.[currentVideo || 0]?.title}
              courseTitle={coursesDetails?.course?.title}
              currentVideo={currentVideo}
              currentModule={currentModule}
              handleWatchHistory={handleWatchHistory}
              startingTime={
                videoSources?.[currentVideo || 0]?._id ===
                lastWatchedInfo?.video
                  ? lastWatchedInfo?.watchedTime
                  : 0
              }
              onProgressSave={handleVideoProgressSave}
              module={currentModule || 0}
              video={currentVideo || 0}
              allWatchHistory={allWatchHistory}
            />
          )}
          {/* Title and prev next buttons */}
          <div className="mt-4 flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <h5 className="text-base font-semibold md:text-lg">
              {videoSources?.[currentVideo || 0]?.title}
            </h5>
            {videoSources?.length > 0 && (
              <div className="flex items-center gap-4">
                <button
                  disabled={currentVideo == 0}
                  onClick={previous}
                  className={`flex items-center gap-1.5 rounded border-0 px-4 py-2.5 text-sm font-medium text-white ${currentVideo == 0 ? "cursor-not-allowed bg-nad-logo/50" : "bg-nad-logo transition-all duration-200 hover:bg-nad-primary/90"}`}
                >
                  <IoMdArrowBack className="text-base" /> Previous
                </button>
                <button
                  disabled={currentVideo == videoSources?.length - 1}
                  onClick={next}
                  className={`flex items-center gap-1.5 rounded px-4 py-2.5 text-sm font-medium text-white ${currentVideo == videoSources?.length - 1 ? "cursor-not-allowed bg-nad-logo/50" : "bg-nad-logo transition-all duration-200 hover:bg-nad-primary/90"}`}
                >
                  Next <IoMdArrowForward className="text-base" />
                </button>
              </div>
            )}
          </div>
          {/* Description */}
          <div className="mt-4 text-sm">
            <p className="w-fit border-b-2 border-slate-500 bg-slate-200 px-3 py-2 font-medium text-slate-600">
              Description:
            </p>
            <p className="pt-2 leading-6 text-slate-600">
              {videoSources?.[currentVideo || 0]?.description}
            </p>
          </div>
        </div>

        {/* =========== Course Modules  ===========  */}
        <div className="col-span-6 md:col-span-2">
          <div className="mb-1 flex w-full items-center justify-between gap-3">
            <div className="h-2 w-full rounded-full bg-gray-300/60">
              <div
                className="h-2 rounded-full bg-[#3AC55A]"
                style={{
                  width: `${calculateProgress(coursesDetails?.course?.modules, allWatchHistory)}%`,
                }}
              ></div>
            </div>
            <p className="text-sm font-medium text-slate-500">
              {calculateProgress(
                coursesDetails?.course?.modules,
                allWatchHistory,
              )}
              %
            </p>
          </div>
          <ScrollArea className="h-[80vh]">
            <Accordion
              type="single"
              value={openItem}
              className="w-full border border-slate-300"
              collapsible
              onValueChange={setOpenItem}
            >
              {coursesDetails?.course?.modules?.map(
                (module, index) =>
                  module?.isPublic && (
                    <AccordionItem
                      key={`coursesDetails-${module._id}`}
                      value={`item-${index}`}
                      className="border-b border-slate-300 last:border-b-0"
                    >
                      <AccordionTrigger
                        className={`px-4 text-left transition-colors ${openItem == `item-${index}` ? "bg-nad-logo text-white" : "bg-slate-100 hover:bg-nad-logo hover:text-white"} ${!module?.isEnabled && "opacity-60"}`}
                      >
                        <div className="flex flex-col gap-1.5">
                          <span>{module?.title}</span>
                          <span className="text-xs font-normal">
                            <span>{calculateTime(index)}</span> •{" "}
                            <span>{module?.videos?.length} lectures</span>
                          </span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="border-t border-slate-300 bg-white px-4">
                        {module?.videos?.map(
                          (item, idx) =>
                            item?.isPublic && (
                              <div className="w-full" key={item?._id}>
                                {module?.isEnabled ? (
                                  <button
                                    className={`flex w-full justify-between gap-1 border-b border-slate-300 px-2 py-3 text-left transition-all ${currentVideo == idx && currentModule == index ? "bg-blue-200" : "bg-white hover:bg-blue-100"} ${!module?.isEnabled && " !opacity-50"}`}
                                    onClick={async () => {
                                      setIsDefault(false);
                                      setVideoSources(module?.videos);
                                      setCurrentModule(index);
                                      setCurrentVideo(idx);
                                    }}
                                  >
                                    <span className="flex flex-col gap-1.5">
                                      <span>{item?.title}</span>
                                      <span className="text-xs">
                                        <span>
                                          {formatDurationString(item.duration)}
                                        </span>{" "}
                                        •{" "}
                                        <span>
                                          {formatDate(item?.updatedAt, true)}
                                        </span>
                                      </span>
                                    </span>
                                    {allWatchHistory?.history?.[module._id]?.[
                                      item._id
                                    ] != undefined && (
                                      <IoIosCheckmarkCircle className="text-xl text-green-600" />
                                    )}
                                    {/* {loggedInUser?.watchHistory?.[
                                      coursesDetails?.course?.title
                                    ]?.[index]?.includes(idx) && (
                                      <IoIosCheckmarkCircle className="text-xl text-green-600" />
                                    )} */}
                                  </button>
                                ) : (
                                  <button
                                    className={`flex w-full cursor-not-allowed justify-between gap-1 border-b border-slate-300 px-2 py-3 text-left transition-all ${!module?.isEnabled && "!opacity-50"}`}
                                  >
                                    <span className="flex flex-col gap-1.5">
                                      <span>{item?.title}</span>
                                      <span className="text-xs">
                                        <span>
                                          {formatDurationString(item.duration)}
                                        </span>{" "}
                                        •{" "}
                                        <span>
                                          {formatDate(item?.updatedAt, true)}
                                        </span>
                                      </span>
                                    </span>
                                    {allWatchHistory?.history?.[module._id]?.[
                                      item._id
                                    ] != undefined && (
                                      <IoIosCheckmarkCircle className="text-xl text-green-600" />
                                    )}
                                  </button>
                                )}
                              </div>
                            ),
                        )}
                      </AccordionContent>
                    </AccordionItem>
                  ),
              )}
            </Accordion>
          </ScrollArea>
        </div>
      </div>
    </>
  );
};

export default MyCourseDetails;
