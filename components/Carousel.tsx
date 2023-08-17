import { Media } from "@/util/dummy-data";
import Image from "next/image";
import React from "react";
import HeartIcon from "./Icons/HeartIcon";

type CarouselProps = {
  content: Media[];
  opacity: string;
};

const Carousel: React.FC<CarouselProps> = ({ content, opacity }) => {
  return (
    <>
      <section className="flex overflow-x-auto overflow-y-hidden snap-x snap-mandatory scroll-smooth items-center max-w-[468px] max-h-[468px] sm:border sm:border-gray-500 sm:rounded-md">
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
            <video
              key={media.src}
              src={media.src}
              controls
              className="snap-start shrink-0"
            />
          );
        })}
        <div
          className={`text-white absolute top-0 left-0 flex w-full h-full items-center justify-center ${
            opacity === "opacity-0" ? "-z-10" : ""
          }`}
        >
          <HeartIcon
            className={`${opacity} transition-opacity w-20 h-20`}
            fill="currentColor"
          />
        </div>
      </section>
    </>
  );
};
export default Carousel;
