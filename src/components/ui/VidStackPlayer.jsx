"use client";
import Image from "next/image";
import { useEffect, useRef, useState, useCallback } from "react";
import "@vidstack/react/player/styles/default/theme.css";
import "@vidstack/react/player/styles/default/layouts/audio.css";
import "@vidstack/react/player/styles/default/layouts/video.css";

import { MediaPlayer, MediaProvider } from "@vidstack/react";
import {
  DefaultVideoLayout,
  defaultLayoutIcons,
} from "@vidstack/react/player/layouts/default";
import noVideo from "/public/images/video/no-video.svg";

const VidStackPlayer = ({
  isPreview, // for preview video
  userPhone,
  videoSrc,
  title,
  startingTime,
  onProgressSave,
  module,
  video,
  courseTitle,
  watchHistory,
  allWatchHistory,
  handleWatchHistory,
  currentModule,
  currentVideo,
}) => {
  const [isClient, setIsClient] = useState(false);
  const [phonePosition, setPhonePosition] = useState({ top: "0%", left: "0%" });

  const mediaPlayerRef = useRef(null);

  const changePhonePosition = useCallback(() => {
    const top = Math.random() * 90;
    const left = Math.random() * 90;
    setPhonePosition({ top: `${top}%`, left: `${left}%` });
  }, []);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient) {
      const interval = setInterval(changePhonePosition, 3000);

      const handleContextMenu = (e) => e.preventDefault();
      const handleBeforeUnload = () => {
        if (
          !isPreview &&
          mediaPlayerRef.current &&
          mediaPlayerRef.current?.currentTime >= 1
        ) {
          onProgressSave(
            mediaPlayerRef.current?.currentTime,
            title,
            module,
            video,
          );
        }
      };

      let hasAlerted = false; // Prevent multiple alerts

      // Polling the video progress every second
      const trackVideoProgress = async () => {
        const player = mediaPlayerRef.current;
        if (!isPreview && player) {
          const duration = player.duration;
          const currentTime = player.currentTime;
          const progress = currentTime / duration;

          if (progress >= 0.5 && !hasAlerted) {
            hasAlerted = true;
            // alert("You have watched 50% of the video!");

            const data = {
              title: courseTitle,
              module: currentModule,
              video: currentVideo,
            };

            await handleWatchHistory(data);
          }
        }
      };

      document.addEventListener("contextmenu", handleContextMenu);
      window.addEventListener("beforeunload", handleBeforeUnload);

      // Poll every second to track progress
      const progressInterval = setInterval(trackVideoProgress, 1000);

      return () => {
        clearInterval(interval);
        clearInterval(progressInterval); // Clear the progress tracking interval
        document.removeEventListener("contextmenu", handleContextMenu);
        window.removeEventListener("beforeunload", handleBeforeUnload);

        if (
          !isPreview &&
          mediaPlayerRef.current &&
          mediaPlayerRef.current?.currentTime >= 1
        ) {
          onProgressSave(
            mediaPlayerRef.current?.currentTime,
            title,
            module,
            video,
          );
        }
      };
    }
  }, [isClient, changePhonePosition, title, video]);

  // State variables for volume and playback rate
  const [volumeLevel, setVolumeLevel] = useState(1);
  const [playBackSpeed, setPlayBackSpeed] = useState(1);

  // Function to handle volume and playback rate changes
  const handleVolumeChange = (event) => {
    setVolumeLevel(event.volume);
    localStorage.setItem("volumeLevel", event.volume.toString());
  };

  const handleRateChange = (rate) => {
    setPlayBackSpeed(rate);
    localStorage.setItem("playBackSpeed", rate.toString());
  };

  useEffect(() => {
    if (isClient) {
      setVolumeLevel(parseFloat(localStorage.getItem("volumeLevel")) || 1);
      setPlayBackSpeed(parseFloat(localStorage.getItem("playBackSpeed")) || 1);
    }
  }, [isClient]);

  if (!isClient) {
    return null;
  }

  return (
    <div
      style={{ position: "relative", width: "100%", height: "100%" }}
      className="overflow-hidden"
    >
      {videoSrc ? (
        <MediaPlayer
          ref={mediaPlayerRef}
          src={videoSrc}
          viewType="video"
          streamType="on-demand"
          logLevel="warn"
          playsInline
          title={title || ""}
          autoPlay={true}
          currentTime={startingTime || 0}
          playbackRate={playBackSpeed || 1}
          volume={volumeLevel || 1}
          onVolumeChange={handleVolumeChange}
          onRateChange={handleRateChange}
        >
          <MediaProvider />
          <DefaultVideoLayout icons={defaultLayoutIcons} />
        </MediaPlayer>
      ) : (
        <div className="absolute top-0 z-10 h-full w-full bg-gray-400">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-center">
            <Image
              src={noVideo}
              alt="No Video"
              height={80}
              width={80}
              className="mx-auto"
            />
            <p>No video is available</p>
          </div>
        </div>
      )}

      <div
        style={{
          position: "absolute",
          top: phonePosition.top,
          left: phonePosition.left,
          color: "#0056d2",
          fontSize: "12px",
          pointerEvents: "none",
        }}
      >
        {userPhone}
      </div>
    </div>
  );
};

export default VidStackPlayer;
