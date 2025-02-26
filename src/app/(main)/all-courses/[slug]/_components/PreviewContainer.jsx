"use client";
import VideoPlayer from "@/components/ui/VideoPlayer";
import { AuthContext } from "@/contexts/AuthProvider";
import React, { useContext, useState } from "react";
import { IoPlayCircleSharp } from "react-icons/io5";

const PreviewContainer = ({
  setIsOpenOverview,
  previewVideos,
  currentVideo,
  setCurrentVideo,
  courseTitle,
}) => {
  return (
    <div className="mt-7 flex h-max w-full justify-center">
      <div className="relative bg-gray-800 p-7">
        <button
          className="absolute -right-2 -top-2 rounded-full bg-white px-3 py-[6px] text-red-600"
          onClick={() => {
            setIsOpenOverview(false);
          }}
        >
          X
        </button>

        {/* title  */}
        <p>Course Preview</p>
        <h1 className="mb-2 mt-1 text-lg font-semibold">{courseTitle}</h1>

        <div className="w-[500px]">
          <VideoPlayer
            // userPhone={"018354654"}
            // currentVideo?.videoUrl ||
            videoSrc={currentVideo?.videoUrl}
            // videoSrc={
            //   "https://res.cloudinary.com/dqxjhomqb/video/upload/v1723485646/samples/dance-2.mp4"
            // }
          />
        </div>

        {/* other videos  */}

        <div className="max-h-[32vh] overflow-y-scroll">
          {previewVideos?.map((video, index) => (
            <div key={video?._id} className="w-full">
              <button
                className={`flex w-full justify-between gap-1 border-b border-stroke px-2 py-3 text-left transition-all hover:bg-whiten/50 ${video?._id == currentVideo?._id && "bg-gray-700"}`}
                onClick={() => setCurrentVideo(video)}
              >
                <div className="flex items-center gap-2">
                  {video?._id == currentVideo?._id && (
                    <IoPlayCircleSharp className="h-6 w-6 drop-shadow" />
                  )}
                  <div className="">
                    <p>{video?.title} </p>
                    <p className="text-xs">{video?.duration} hours</p>
                  </div>
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PreviewContainer;
