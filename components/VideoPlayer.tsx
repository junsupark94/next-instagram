import { cn } from "@/util/cn";
import React, { useRef, useState } from "react";
import PlayIcon from "./Icons/PlayIcon";
import MutedIcon from "./Icons/MutedIcon";
import UnmutedIcon from "./Icons/UnmutedIcon";

import { atom, useAtom } from "jotai";

const mutedAtom = atom(true);

type VideoPlayerProps = {
  src: string;
  className?: string;
};

const VideoPlayer: React.FC<VideoPlayerProps> = ({ className, src}) => {
  const [isPaused, setIsPaused] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useAtom(mutedAtom);


  const  togglePlayHandler: React.MouseEventHandler<HTMLButtonElement> = function(e) {
    e.stopPropagation();
    if (isPaused) {
      videoRef.current!.play();
    } else {
      videoRef.current!.pause();
    }
  }
  const toggleMuteHandler: React.MouseEventHandler<HTMLButtonElement> = function(e) {
    e.stopPropagation();
    setIsMuted(prev => !prev)
  }

  const playHandler = () => {
    setIsPaused(false);
  }
  const pauseHandler = () => {
    setIsPaused(true);
  }


  return (
    <div className={cn("relative", className)}>
      <video onPlay={playHandler} onPause={pauseHandler} muted={isMuted} src={src} ref={videoRef} data-play="autoplay" className="w-[470px] h-[470px]"/>
      <button
        className="absolute top-0 left-0 flex w-full h-full items-center justify-center"
        onClick={togglePlayHandler}
      >
        {isPaused && <PlayIcon className="w-20 h-20" />}
      </button>
      <button onClick={toggleMuteHandler} className="absolute bottom-2 right-2 bg-[#262626] rounded-full w-6 h-6 flex items-center justify-center">
        {isMuted ? <MutedIcon /> : <UnmutedIcon className="w-4 h-4"/>}
      </button>
    </div>
  );
};
export default VideoPlayer;
