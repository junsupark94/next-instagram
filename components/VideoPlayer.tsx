"use client";
import React, { useEffect, useRef, useState } from "react";

type VideoPlayerProps = {};

const VideoPlayer: React.FC<VideoPlayerProps> = () => {
  const [isPaused, setIsPaused] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);

  function togglePlay() {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  }

  function playHandler() {
    if (!videoContainerRef.current) return;
    // videoContainerRef.current.classList.remove("paused");
    setIsPaused(false);
  }
  function pauseHandler() {
    if (!videoContainerRef.current) return;
    // videoContainerRef.current.classList.add("paused");
    setIsPaused(true);
  }

  useEffect(() => {
    function play(e: KeyboardEvent) {
      switch (e.key.toLowerCase()) {
        case " ":
        case "k":
          togglePlay();
          break;
      }
    }

    document.addEventListener("keydown", play);
    document.removeEventListener("keydown", play);
  }, []);

  return (
    <div>
      <div
        aria-label="video-container"
        className="w-[90%] max-w-[1000px] border flex justify-center mx-auto relative"
        ref={videoContainerRef}
      >
        <div
          aria-label="vide-controls-container"
          className={`absolute bottom-0 left-0 right-0 z-10 opacity-0 transition-opacity hover:opacity-100 focus-within:opacity-100 ${
            isPaused && "opacity-100"
          } before:absolute before:bottom-0 before:bg-gradient-to-t before:from-black/70 before:to-transparent before:w-full before:aspect-[6/1] before:-z-10 before:pointer-events-none`}
        >
          <div aria-label="timeline-container"></div>
          <div aria-label="controls" className="flex gap-2 p-1 items-center">
            <button
              aria-label="play-pause-btn"
              className={`text-inherit h-[30px] w-[30px] text-[18px] ${
                !isPaused && "hidden"
              } opacity-80 transition-opacity hover:opacity-100`}
              onClick={togglePlay}
            >
              <PlayIcon />
            </button>
            <button
              aria-label="play-pause-btn"
              className={`text-inherit h-[30px] w-[30px] text-[18px] ${
                isPaused && "hidden"
              } opacity-80 transition-opacity hover:opacity-100`}
              onClick={togglePlay}
            >
              <PauseIcon />
            </button>
          </div>
        </div>
        <video
          src="/video1.mp4"
          className="w-full"
          ref={videoRef}
          onPlay={playHandler}
          onPause={pauseHandler}
          onClick={togglePlay}
        ></video>
      </div>
    </div>
  );
};
export default VideoPlayer;

function PlayIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
      />
    </svg>
  );
}

function PauseIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 5.25v13.5m-7.5-13.5v13.5"
      />
    </svg>
  );
}
