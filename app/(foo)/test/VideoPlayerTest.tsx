"use client";
import { cn } from "@/utils/cn";
import React, { useEffect, useRef, useState } from "react";

type VideoPlayerProps = {};

const VideoPlayerTest: React.FC<VideoPlayerProps> = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [theaterMode, setTheaterMode] = useState(false);
  const [fullScreenMode, setFullScreenMode] = useState(true);
  const [miniMode, setMiniMode] = useState(false);
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

  function toggleTheaterMode() {
    setFullScreenMode(false);
    setTheaterMode((prev) => !prev);
  }

  function toggleFullScreenMode() {
    if (document.fullscreenElement === null) {
      videoContainerRef.current?.requestFullscreen();
      setFullScreenMode(true);
    } else {
      document.exitFullscreen();
      setFullScreenMode(false);
    }
  }

  function toggleMiniPlayerMode() {
    if (miniMode) {
      setMiniMode(false);
      document.exitPictureInPicture();
    } else {
      setMiniMode(true);
      videoRef.current?.requestPictureInPicture();
    }
  }

  useEffect(() => {
    function play(e: KeyboardEvent) {
      switch (e.key) {
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
        className={cn(
          "w-[90%] max-w-[1000px] border flex justify-center mx-auto relative bg-black",
          theaterMode && "w-full max-h-[90vh]",
          fullScreenMode && "w-full max-h-[100vh]"
        )}
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
            <PlayButton isPaused={isPaused} togglePlay={togglePlay} />
            <PauseButton isPaused={isPaused} togglePlay={togglePlay} />
            <button
              aria-label="mini-player-btn"
              onClick={toggleMiniPlayerMode}
              className="w-6 h-6 text-red-500"
            >
              <svg viewBox="0 0 24 24" className="w-6 h-6">
                <path
                  fill="currentColor"
                  d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h18v14zm-10-7h9v6h-9z"
                />
              </svg>
            </button>
            <button
              aria-label="theater-btn"
              onClick={toggleTheaterMode}
              className="w-6 h-6 text-blue-500"
            >
              <svg className={theaterMode ? "" : "hidden"} viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M19 6H5c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 10H5V8h14v8z"
                />
              </svg>
              <svg className={theaterMode ? "hidden" : ""} viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M19 7H5c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm0 8H5V9h14v6z"
                />
              </svg>
            </button>
            <button
              aria-label="full-screen-btn"
              className="w-6 h-6 text-green-500"
              onClick={toggleFullScreenMode}
            >
              <svg className={fullScreenMode ? "hidden" : ""} viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"
                />
              </svg>
              <svg className={fullScreenMode ? "" : "hidden"} viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z"
                />
              </svg>
            </button>
          </div>
        </div>
        <video
          src="/video1.mp4"
          className="w-full"
          ref={videoRef}
          onPlay={() => setIsPaused(false)}
          onPause={() => setIsPaused(true)}
          onClick={togglePlay}
        ></video>
      </div>
    </div>
  );
};
export default VideoPlayerTest;

function PlayButton({ isPaused, togglePlay }) {
  return (
    <button
      aria-label="play-pause-btn"
      className={`text-inherit h-[30px] w-[30px] text-[18px] ${
        !isPaused && "hidden"
      } opacity-80 transition-opacity hover:opacity-100`}
      onClick={togglePlay}
    >
      <PlayIcon />
    </button>
  );
}

function PauseButton({ isPaused, togglePlay }) {
  return (
    <button
      aria-label="play-pause-btn"
      className={`text-inherit h-[30px] w-[30px] text-[18px] ${
        isPaused && "hidden"
      } opacity-80 transition-opacity hover:opacity-100`}
      onClick={togglePlay}
    >
      <PauseIcon />
    </button>
  );
}

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
