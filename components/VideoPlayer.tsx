import { cn } from "@/util/cn";
import React, { useEffect, useRef, useState } from "react";
import PlayIcon from "./Icons/PlayIcon";
import MutedIcon from "./Icons/MutedIcon";
import UnmutedIcon from "./Icons/UnmutedIcon";

import { useGlobalStore } from "@/util/zustand";
import { usePathname } from "next/navigation";

type VideoPlayerProps = {
  src: string;
  className?: string;
  containerRef: React.RefObject<HTMLElement>;
};

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  className,
  src,
  containerRef,
}) => {
  const [isPaused, setIsPaused] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, toggleMuted] = useGlobalStore(state => [state.muted, state.toggleMuted])
  const path = usePathname();

  useEffect(() => {
    const { x: containerX } = containerRef.current!.getBoundingClientRect();
    const { x: videoX } = videoRef.current!.getBoundingClientRect();
    if (Math.abs(containerX - videoX) <= 10) {
      if (path.startsWith('/p/')) videoRef.current?.play();
      videoRef.current!.setAttribute("data-play", "autoplay");
    }
  }, []);

  useEffect(() => {
    function isScrolledIntoView() {
      const { x: containerX } = containerRef.current!.getBoundingClientRect();
      const { x: videoX } = videoRef.current!.getBoundingClientRect();
      if (Math.abs(containerX - videoX) <= 10) {
        const videoEls: NodeListOf<HTMLVideoElement> =
          document.querySelectorAll("[data-play='autoplay']");
        videoEls.forEach((video) => video.pause());
        videoRef.current!.setAttribute("data-play", "autoplay");
        videoRef.current!.play();
      } else {
        videoRef.current!.removeAttribute("data-play");
        videoRef.current!.pause();
      }
    }
    containerRef.current!.addEventListener("scroll", isScrolledIntoView);
    let copyContainerRef = containerRef;

    return () => {
      copyContainerRef.current?.removeEventListener(
        "scroll",
        isScrolledIntoView
      );
    };
  }, [containerRef]);

  const togglePlayHandler: React.MouseEventHandler<HTMLButtonElement> =
    function (e) {
      e.stopPropagation();
      if (isPaused) {
        videoRef.current!.play();
      } else {
        videoRef.current!.pause();
      }
    };
  const toggleMuteHandler: React.MouseEventHandler<HTMLButtonElement> =
    function (e) {
      e.stopPropagation();
      toggleMuted();
    };

  const playHandler = () => {
    setIsPaused(false);
  };
  const pauseHandler = () => {
    setIsPaused(true);
  };

  return (
    <div className={cn("relative text-white h-full w-full", className)}>
      <video
        onPlay={playHandler}
        onPause={pauseHandler}
        muted={muted}
        src={src}
        ref={videoRef}
        className="w-full h-full"
        loop
      />
      <button
        className="absolute top-0 left-0 flex w-full h-full items-center justify-center"
        onClick={togglePlayHandler}
      >
        {isPaused && <PlayIcon className="w-20 h-20" />}
      </button>
      <button
        onClick={toggleMuteHandler}
        className="absolute bottom-2 right-2 bg-[#262626] rounded-full w-6 h-6 flex items-center justify-center"
      >
        {muted ? <MutedIcon /> : <UnmutedIcon className="w-4 h-4" />}
      </button>
    </div>
  );
};
export default VideoPlayer;
