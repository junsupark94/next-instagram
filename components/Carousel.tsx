/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import Image from "next/image";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import HeartIcon from "@/Icons/HeartIcon";
import VideoPlayer from "./VideoPlayer";
import { cn } from "@/lib/utils";
import createDoubleClick from "@/utils/double-click";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Media } from "@prisma/client";

type CarouselProps = {
  media: Media[];
  setLiked: React.Dispatch<React.SetStateAction<boolean>>;
  className?: string;
  width?: number;
  height?: number;
};

const Carousel: React.FC<CarouselProps> = ({
  media,
  setLiked,
  className = "h-carousel",
  width = 500,
  height = 500,
}) => {
  // console.log('Carousel render')
  const [opacity, setOpacity] = useState("opacity-0");
  const containerRef = useRef<HTMLElement>(null);
  const leftButtonRef = useRef<HTMLButtonElement>(null);
  const rightButtonRef = useRef<HTMLButtonElement>(null);
  const [index, setIndex] = useState(0);
  const router = useRouter();
  const path = usePathname();
  const searchParams = useSearchParams();
  const img_index = Number(searchParams.get('img_index'));

  useEffect(() => {
    if (!path.startsWith("/p/")) return;
    const containerWidth =
      containerRef.current?.getBoundingClientRect().width! - 2;
    containerRef.current?.scrollTo({
      left: img_index! * containerWidth,
      behavior: "instant",
    });
  }, [img_index]);

  const scrollHandler: React.UIEventHandler<HTMLElement> = useCallback((e) => {
    const containerWidth = e.currentTarget.getBoundingClientRect().width! - 2;
    const scrollLeft = e.currentTarget.scrollLeft;
    const newIndex = scrollLeft / containerWidth;

    if (newIndex % 1 !== 0) return;
    setIndex(newIndex);
    if (newIndex === 0) {
      leftButtonRef.current!.style.display = "none";
      rightButtonRef.current!.style.display = "flex";
    } else if (newIndex === media.length - 1) {
      rightButtonRef.current!.style.display = "none";
      leftButtonRef.current!.style.display = "flex";
    } else {
      leftButtonRef.current!.style.display = "flex";
      rightButtonRef.current!.style.display = "flex";
    }
    if (!path.startsWith("/p/")) return;
    if (newIndex === 0) return router.push(path);
    router.push(`${path}/?img_index=${newIndex}`);
  }, []);

  const doubleClick = useMemo(() => {
    return createDoubleClick(() => {
      let timer: NodeJS.Timeout;

      clearTimeout(timer!);
      setLiked(true);
      setOpacity("opacity-70 animate-swell");
      timer = setTimeout(() => setOpacity("opacity-0"), 1000);
    });
  }, []);

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
          {media.map((item, i) => {
            if (item.type === "IMAGE") {
              return (
                <Image
                  key={item.id}
                  src={item.src}
                  alt={item.alt_text}
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
                key={item.src}
                src={item.src}
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
            {media.length > 1 && (
              <>
                <button
                  ref={leftButtonRef}
                  className="absolute left-1 bg-gray-300/60 rounded-full w-7 h-7 hidden items-center justify-center pointer-events-auto"
                  onClick={() =>
                    containerRef.current!.scrollBy({
                      left: -(
                        containerRef.current?.getBoundingClientRect().width! - 2
                      ),
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
                      left:
                        containerRef.current?.getBoundingClientRect().width! -
                        2,
                      behavior: "smooth",
                    })
                  }
                >
                  {">"}
                </button>
                <div className="absolute flex bottom-4 gap-1">
                  {media.map((item, i) => {
                    return (
                      <div
                        key={item.src}
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
export default React.memo(Carousel);
