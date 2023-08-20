"use client";
import { DUMMY_DATA } from "@/util/dummy-data";
import FeedItem from "./FeedItem";
import { useEffect } from "react";

type FeedProps = {};

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
    if (elementIsVisibleInViewport(videoEl, true))
      visibleVideos.push(videoEl);
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
const Feed: React.FC<FeedProps> = () => {
  useEffect(() => {
    window.addEventListener("load", videoScroll);
    window.addEventListener("scroll", videoScroll);
    return () => {
      window.removeEventListener("load", videoScroll);
      window.removeEventListener("scroll", videoScroll);
    };
  });

  return (
    <main>
      <section className="flex flex-col gap-2 text-[14px]">
        {DUMMY_DATA.map((item) => (
          <FeedItem key={item.id} item={item} />
        ))}
      </section>
    </main>
  );
};
export default Feed;