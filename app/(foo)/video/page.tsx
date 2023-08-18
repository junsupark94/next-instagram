"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const elementIsVisibleInViewport = (
  el: HTMLElement,
  partiallyVisible = false
) => {
  const { top, left, bottom, right } = el.getBoundingClientRect();
  const { innerHeight, innerWidth } = window;
  return partiallyVisible
    ? ((top > 0 && top < innerHeight) ||
        (bottom > 0 && bottom < innerHeight)) &&
        ((left > 0 && left < innerWidth) || (right > 0 && right < innerWidth))
    : top >= 0 && left >= 0 && bottom <= innerHeight && right <= innerWidth;
};

function playOneVideo(videoEl: HTMLVideoElement) {
  const videoHeight = videoEl.clientHeight;
  const videoClientRect = videoEl.getBoundingClientRect().top;
  if (
    videoClientRect <= window.innerHeight - videoHeight * 0.5 &&
    videoClientRect >= 0 - videoHeight * 0.5
  ) {
    videoEl.play();
  } else {
    videoEl.pause();
  }
}

function videoScroll() {
  const videoEls: NodeListOf<HTMLVideoElement> = document.querySelectorAll(
    "[data-play='autoplay']"
  );

  const visibleVideos: HTMLVideoElement[] = [];
  videoEls.forEach((videoEl) => {
    if (elementIsVisibleInViewport(videoEl, true)) visibleVideos.push(videoEl);
  });

  if (visibleVideos.length === 1) {
    playOneVideo(visibleVideos[0]);
  } else if (visibleVideos.length > 1) {
    const halfwayPoint = window.innerHeight / 2;
    const upperBound = halfwayPoint - 50;
    const lowerBound = halfwayPoint + 50;

    let target = -1;
    for (let i = visibleVideos.length - 1; i >= 0; i--) {
      const video = visibleVideos[i];
      const { top, bottom } = video.getBoundingClientRect();
      if (lowerBound > bottom && bottom > upperBound) {
        target = i;
        break;
      }
      if (top < lowerBound && upperBound < top) {
        target = i;
        break;
      }
    }
    if (target === -1) return;
    visibleVideos.forEach((video, index) => {
      if (index === target) {
        video.play();
      } else {
        video.pause();
      }
    });
  }
}

export default function VideoPage() {
  const videoRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    window.addEventListener("load", videoScroll);
    window.addEventListener("scroll", videoScroll);
    return () => {
      window.removeEventListener("load", videoScroll);
      window.removeEventListener("scroll", videoScroll);
    };
  });
  function scrollHandler() {
    if (!videoRef.current) return;
    const { top, bottom, left, right, x, y } =
      videoRef.current.getBoundingClientRect();
    // console.log('top', top, 'bottom', bottom, 'y', y)
    console.log("left", left, "right", right, "x", x);
    console.log(videoRef.current.scrollLeft);
  }

  return (
    <div className="ml-10">
      <div className="fixed h-screen w-[300px] top-0 left-0 flex items-center">
        <div className="h-[100px] min-w-[300px] border border-pink-400">
          <Link href="/video">Go Top</Link>
        </div>
      </div>
      <div className="flex items-center justify-center w-[400px] h-screen border">
        Hi
      </div>
      <div
        className="overflow-x-auto max-w-[400px] flex"
        onScroll={scrollHandler}
      >
        <Image
          src="/test1.jpg"
          width={300}
          height={300}
          alt="image"
          className="shrink-0"
        />

        <video
          src="video1.mp4"
          className="w-[400px] border shrink-0"
          data-play="autoplay"
        />
        <div className="w-[400px] h-[300px] shrink-0" ref={videoRef}>
          Test
        </div>
      </div>
      <div className="flex items-center justify-center w-[400px] h-[50px] border">
        Hi
      </div>
      <video
        src="video2.mp4"
        className="w-[400px] border"
        data-play="autoplay"
        loop
      />
    </div>
  );
}
