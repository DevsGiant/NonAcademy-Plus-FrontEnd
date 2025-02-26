"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css"; // Import Video.js styles
import noVideo from "/public/images/video/no-video.svg";

const VideoPlayer = ({ userPhone, videoSrc }) => {
  const videoRef = useRef(null);
  const playerRef = useRef(null);
  const [isClient, setIsClient] = useState(false);
  const [phonePosition, setPhonePosition] = useState({ top: "0%", left: "0%" });

  // Function to randomly change the position of the phone
  const changePhonePosition = () => {
    const top = Math.random() * 90;
    const left = Math.random() * 90;
    setPhonePosition({ top: `${top}%`, left: `${left}%` });
  };

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient && videoRef.current && !playerRef.current) {
      // Initialize Video.js player after client-side rendering
      playerRef.current = videojs(videoRef.current, {
        controls: true,
        autoplay: true,
        fluid: true, // Makes the video player responsive
        playbackRates: [0.5, 0.75, 1, 1.25, 1.5, 1.75, 2], // Specify playback rates
        controlBar: {
          fullscreenToggle: true,
          volumePanel: true,
          playToggle: true,
          currentTimeDisplay: true,
          timeDivider: true,
          durationDisplay: true,
          playbackRateMenuButton: true, // Ensure playback rate button is enabled
        },
      });

      // Handle custom controls for forward and backward
      const handleForward = () => {
        playerRef.current.currentTime(playerRef.current.currentTime() + 5);
      };

      const handleBackward = () => {
        playerRef.current.currentTime(playerRef.current.currentTime() - 5);
      };

      // Add custom forward and backward buttons
      const forwardButton = videojs.dom.createEl("button", {
        className: "vjs-control vjs-button",
        innerHTML: `<svg width="18px" height="18px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#ffff" stroke-width="1.584"> <path d="M13.98 4.46997L12 2" stroke="#fffff" stroke-width="1.488" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M19.0894 7.79974C20.1994 9.27974 20.8894 11.1097 20.8894 13.1097C20.8894 18.0197 16.9094 21.9998 11.9994 21.9998C7.08939 21.9998 3.10938 18.0197 3.10938 13.1097C3.10938 8.19974 7.08939 4.21973 11.9994 4.21973C12.6794 4.21973 13.3394 4.30978 13.9794 4.45978" stroke="#fffff" stroke-width="1.488" stroke-linecap="round" stroke-linejoin="round"></path> <path opacity="0.4" d="M13.9098 10.8301H10.8498L10.0898 13.1201H12.3798C13.2198 13.1201 13.9098 13.8001 13.9098 14.6501C13.9098 15.4901 13.2298 16.1801 12.3798 16.1801H10.0898" stroke="#fffff" stroke-width="1.488" stroke-linecap="round" stroke-linejoin="round"></path> </g><g id="SVGRepo_iconCarrier"> <path d="M13.98 4.46997L12 2" stroke="#fffff" stroke-width="1.488" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M19.0894 7.79974C20.1994 9.27974 20.8894 11.1097 20.8894 13.1097C20.8894 18.0197 16.9094 21.9998 11.9994 21.9998C7.08939 21.9998 3.10938 18.0197 3.10938 13.1097C3.10938 8.19974 7.08939 4.21973 11.9994 4.21973C12.6794 4.21973 13.3394 4.30978 13.9794 4.45978" stroke="#fffff" stroke-width="1.488" stroke-linecap="round" stroke-linejoin="round"></path> <path opacity="0.4" d="M13.9098 10.8301H10.8498L10.0898 13.1201H12.3798C13.2198 13.1201 13.9098 13.8001 13.9098 14.6501C13.9098 15.4901 13.2298 16.1801 12.3798 16.1801H10.0898" stroke="#fffff" stroke-width="1.488" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>`, // Forward symbol (>>)
        onclick: handleForward,
      });

      const backwardButton = videojs.dom.createEl("button", {
        className: "vjs-control vjs-button",
        innerHTML: `<svg width="18px" height="18px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M13.91 10.8301H10.85L10.09 13.1201H12.38C13.22 13.1201 13.91 13.8001 13.91 14.6501C13.91 15.4901 13.23 16.1801 12.38 16.1801H10.09" stroke="#ffff" stroke-width="1.44" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M10.02 4.46997L12 2" stroke="#ffff" stroke-width="1.44" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M4.91 7.79999C3.8 9.27999 3.10999 11.11 3.10999 13.11C3.10999 18.02 7.09 22 12 22C16.91 22 20.89 18.02 20.89 13.11C20.89 8.19999 16.91 4.21997 12 4.21997C11.32 4.21997 10.66 4.31002 10.02 4.46002" stroke="#ffff" stroke-width="1.44" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>`, // Backward symbol (<<)
        onclick: handleBackward,
      });

      // Get the playToggle control and insert the custom buttons around it
      const playButton = playerRef.current.controlBar
        .getChild("playToggle")
        .el();
      playButton.parentNode.insertBefore(backwardButton, playButton);
      playButton.parentNode.insertBefore(forwardButton, playButton.nextSibling);

      // Change the position of the phone watermark
      const interval = setInterval(
        changePhonePosition,
        Math.random() * (5000 - 2000) + 2000,
      );

      // Disable right-click context menu
      const handleContextMenu = (e) => e.preventDefault();
      document.addEventListener("contextmenu", handleContextMenu);

      // Disable key combinations (F12, Ctrl+Shift+I, etc.)
      const handleKeyDown = (e) => {
        if (
          e.keyCode === 123 || // F12
          (e.ctrlKey && e.shiftKey && e.keyCode === 73) || // Ctrl+Shift+I
          (e.ctrlKey && e.keyCode === 83) || // Ctrl+S
          (e.ctrlKey && e.keyCode === 80) || // Ctrl+P
          (e.ctrlKey && e.keyCode === 67) || // Ctrl+C
          (e.ctrlKey && e.keyCode === 74) || // Ctrl+Shift+J
          (e.ctrlKey && e.keyCode === 85) // Ctrl+U
        ) {
          e.preventDefault();
        } // Detect and handle ArrowLeft and ArrowRight keys for navigation
        else if (e.key === "ArrowLeft") {
          handleBackward();
        } else if (e.key === "ArrowRight") {
          handleForward();
        } else if (e.key === " " || e.key === "Spacebar") {
          if (playerRef.current.paused()) {
            playerRef.current.play();
          } else {
            playerRef.current.pause();
          }
        }

        // Toggle fullscreen using "f"
        else if (e.key === "f" || e.key === "F") {
          if (playerRef.current.isFullscreen()) {
            playerRef.current.exitFullscreen();
          } else {
            playerRef.current.requestFullscreen();
          }
        } else if (e.key === "ArrowUp") {
          // Up arrow to increase volume
          const volume = playerRef.current.volume();
          if (volume < 1) {
            playerRef.current.volume(Math.min(volume + 0.05, 1));
          }
        } else if (e.key === "ArrowDown") {
          // Down arrow to decrease volume
          const volume = playerRef.current.volume();
          if (volume > 0) {
            playerRef.current.volume(Math.max(volume - 0.05, 0));
          }
        }
      };
      document.addEventListener("keydown", handleKeyDown);

      return () => {
        if (playerRef.current) {
          playerRef.current.dispose(); // Dispose of the player when component is unmounted
        }
        document.removeEventListener("contextmenu", handleContextMenu);
        document.removeEventListener("keydown", handleKeyDown);
        clearInterval(interval); // Clean up interval on component unmount
      };
    }
  }, [isClient]);

  // Update video source when videoSrc changes
  useEffect(() => {
    if (playerRef.current) {
      playerRef.current.src({ type: "video/mp4", src: videoSrc });
    }
  }, [videoSrc]); // Depend on videoSrc

  if (!isClient) {
    return null;
  }

  // console.log({ userPhone, videoSrc });

  return (
    <div
      style={{ position: "relative", width: "100%", height: "100%" }}
      className="overflow-hidden"
    >
      <video
        autoPlay={true}
        ref={videoRef}
        className="video-js vjs-default-skin"
        controls
        preload="auto"
        data-setup="{}"
        style={{ width: "100%", height: "100%" }}
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
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

      {!videoSrc && (
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
    </div>
  );
};

export default VideoPlayer;
