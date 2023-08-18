import { Media } from "@/util/dummy-data";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import HeartIcon from "./Icons/HeartIcon";
import VideoPlayer from "./VideoPlayer";


type CarouselProps = {
  content: Media[];
  opacity: string;
};

const Carousel: React.FC<CarouselProps> = ({ content, opacity }) => {
  const containerRef = useRef<HTMLElement>(null);

  return (
    <>
      <div className="relative" >
        <section className="flex overflow-x-auto overflow-y-hidden snap-x snap-mandatory scroll-smooth items-center max-w-[468px] max-h-[468px] sm:border xs:border-gray-800 sm:rounded-md" ref={containerRef}>
          {content.map((media, i) => {
            if (media.type === "image") {
              return (
                <Image
                  key={media.src}
                  src={media.src}
                  alt={media.type}
                  width={470}
                  height={470}
                  className="snap-start shrink-0"
                />
              );
            }
            return (
              <VideoPlayer
                containerRef={containerRef}
                key={media.src}
                src={media.src}
                className="snap-start shrink-0"
              />
            );
          })}
          <div
            className={`text-white absolute top-0 left-0 flex w-full h-full items-center justify-center pointer-events-none`}
          >
            <HeartIcon
              className={`${opacity} transition-opacity w-20 h-20`}
              fill="currentColor"
            />
          </div>
        </section>
      </div>
    </>
  );
};
export default Carousel;
