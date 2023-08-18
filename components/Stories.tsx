"use client";
import React, { useRef } from "react";
import StoryButton from "./StoryButton";

type Props = {};

export default function Stories({}: Props) {
  const containerRef = useRef<HTMLUListElement>(null);
  const leftButtonRef = useRef<HTMLButtonElement>(null);
  const rightButtonRef = useRef<HTMLButtonElement>(null);

  const scrollHandler: React.UIEventHandler<HTMLElement> = function (e) {
    const scrollLeft = e.currentTarget.scrollLeft;
    const scrolledAllToTheRight =
      e.currentTarget.scrollWidth - scrollLeft <= 630;
    if (scrollLeft > 0) leftButtonRef.current!.style.display = "block";
    else {
      leftButtonRef.current!.style.display = "none";
    }
    if (scrolledAllToTheRight) {
      rightButtonRef.current!.style.display = "none";
    } else rightButtonRef.current!.style.display = "block";
  };

  return (
    <div className="relative">
      <ul
        className="flex gap-[14px] snap-mandatory scroll-smooth w-[630px] overflow-auto"
        ref={containerRef}
        onScroll={scrollHandler}
      >
        <StoryButton />
        <StoryButton />
        <StoryButton />
        <StoryButton />
        <StoryButton />
        <StoryButton />
        <StoryButton />
        <StoryButton />
        <StoryButton />
        <StoryButton />
        <StoryButton />
        <StoryButton />
        <StoryButton />
        <StoryButton />
        <StoryButton />
        <StoryButton />
        <StoryButton />
      </ul>
      <div className="pointer-events-none absolute w-full h-full -top-2 left-0 flex items-center">
        <button
          ref={leftButtonRef}
          className="absolute bg-white/80 text-gray-400 w-7 h-7 rounded-full left-0 pointer-events-auto hidden"
          onClick={() => {
            containerRef.current!.classList.add("snap-x");
            containerRef.current!.scrollBy({
              left: -300,
              behavior: "smooth",
            });
            containerRef.current!.classList.remove("snap-x");
          }}
        >
          {"<"}
        </button>
        <button
          ref={rightButtonRef}
          className="absolute bg-white/80 text-gray-400 w-7 h-7 rounded-full right-0 pointer-events-auto"
          onClick={() => {
            containerRef.current!.classList.add("snap-x");
            containerRef.current!.scrollBy({
              left: 300,
              behavior: "smooth",
            });
            containerRef.current!.classList.remove("snap-x");
          }}
        >
          {">"}
        </button>
      </div>
    </div>
  );
}
