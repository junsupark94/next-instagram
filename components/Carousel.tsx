import { Media } from "@/util/dummy-data";
import Image from "next/image";
import React, { useRef, useState } from "react";
import HeartIcon from "./Icons/HeartIcon";
import VideoPlayer from "./VideoPlayer";
import { cn } from "@/util/cn";
import createDoubleClick from "@/util/double-click";

type CarouselProps = {
  content: Media[];
  setLiked: React.Dispatch<React.SetStateAction<boolean>>;
  className?: string;
  width?: number;
  height?: number;
};

const Carousel: React.FC<CarouselProps> = ({
  content,
  setLiked,
  className = "h-carousel",
  width = 500,
  height = 500,
}) => {
  const [opacity, setOpacity] = useState("opacity-0");

  const containerRef = useRef<HTMLElement>(null);
  const leftButtonRef = useRef<HTMLButtonElement>(null);
  const rightButtonRef = useRef<HTMLButtonElement>(null);
  const [index, setIndex] = useState(0);

  const scrollHandler: React.UIEventHandler<HTMLElement> = function (e) {
    const scrollLeft = e.currentTarget.scrollLeft;
    const containerWidth =
      containerRef.current?.getBoundingClientRect().width! - 2;
    const index = scrollLeft / containerWidth;

    if (index % 1 === 0) {
      setIndex(index);
      if (index === 0) {
        leftButtonRef.current!.style.display = "none";
        rightButtonRef.current!.style.display = "flex";
      } else if (index === content.length - 1) {
        rightButtonRef.current!.style.display = "none";
        leftButtonRef.current!.style.display = "flex";
      } else {
        leftButtonRef.current!.style.display = "flex";
        rightButtonRef.current!.style.display = "flex";
      }
    }
  };

  let timer: NodeJS.Timeout;
  const doubleClickHandler = () => {
    clearTimeout(timer);
    setLiked(true);
    setOpacity("opacity-70 animate-swell");
    timer = setTimeout(() => setOpacity("opacity-0"), 1000);
  };
  const doubleClick = createDoubleClick(doubleClickHandler);

  return (
    <>
      <div className={cn("relative", className)} onClick={doubleClick}>
        <section
          className={
            "flex overflow-x-auto snap-x snap-mandatory scroll-smooth items-center sm:border dark:border-gray-800 w-full h-full"
          }
          ref={containerRef}
          onScroll={scrollHandler}
        >
          {content.map((media, i) => {
            if (media.type === "image") {
              return (
                <Image
                  key={media.src}
                  src={media.src}
                  alt={media.type}
                  width={width}
                  height={height}
                  // priority={i < 3}
                  className="snap-start shrink-0 object-contain w-full h-full"
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
            {content.length > 1 && (
              <>
                <button
                  ref={leftButtonRef}
                  className="absolute left-1 bg-gray-300/60 rounded-full w-7 h-7 hidden items-center justify-center pointer-events-auto"
                  onClick={() =>
                    containerRef.current!.scrollBy({
                      left: -466,
                      behavior: "smooth",
                    })
                  }
                >
                  {"<"}
                </button>
                <button
                  ref={rightButtonRef}
                  className="absolute right-1 bg-gray-300/60 rounded-full w-7 h-7 flex items-center justify-center pointer-events-auto"
                  onClick={() =>
                    containerRef.current!.scrollBy({
                      left: 466,
                      behavior: "smooth",
                    })
                  }
                >
                  {">"}
                </button>
                <div className="absolute flex bottom-4 gap-1">
                  {content.map((media, i) => {
                    return (
                      <div
                        key={media.src}
                        className={cn(
                          "rounded-full p-[3px] bg-white/30",
                          i === index && "bg-white"
                        )}
                      />
                    );
                  })}
                </div>
              </>
            )}
          </div>
        </section>
      </div>
    </>
  );
};
export default Carousel;
