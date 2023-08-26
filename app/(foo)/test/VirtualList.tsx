"use client";
import FeedItem from "@/components/Feed/FeedItem";
import { cn } from "@/util/cn";
import { DUMMY_DATA } from "@/util/dummy-data-posts";
import React, { useEffect, useRef, useState } from "react";

type PageProps = {};
const data = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

let width = 9;
let offset = 0;
// let cutoff;

const Page: React.FC<PageProps> = () => {
  console.log("render");
  const containerRef = useRef<HTMLDivElement>(null);
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(startIndex + 9);

  // useEffect(() => {
  //   console.log('new startIndex, useEffect reruns, width = ', width, 'offset', offset)
  //   const bar = document.querySelectorAll("[data-row]");

  //   for (let i = 0; i < bar.length; i++) {
  //     offset += bar[i].clientHeight;
  //     if (offset >= 1500) {
  //       width = Number(bar[i].getAttribute("data-row"));
  //       console.log("width", width, 'offset', offset);
  //       break;
  //     }
  //   }
  // }, [startIndex]);

  useEffect(() => {
    console.log("scroll useEffect");
    const scrollHandler = () => {
      const foo = containerRef.current!.getBoundingClientRect();
      console.log(foo.y);
      if (foo.y <= -600) {
        setStartIndex((prev) => {
          if (prev === data.length - width) return prev;
          return prev + 1;
        });
        setEndIndex((prev) => {
          if (prev === 20) return prev;
          return prev + 1;
        });
      }
      else if (foo.y >= -300) {
        setStartIndex((prev) => {
          if (prev === 0) return prev;
          return prev - 1;
        });
        setEndIndex((prev) => {
          if (prev === width) return prev;
          return prev - 1;
        });
      }
    };
    document.addEventListener("scroll", scrollHandler);
    return () => {
      document.removeEventListener("scroll", scrollHandler);
    };
  });

  return (
    // <div
    //   className="w-[600px] overflow-auto h-[600px] border border-red-500 mx-auto mt-20 relative"
    //   onScroll={scrollHandler}
    // >
    <div className="relative flex justify-center">
      {/* <header>Header</header> */}
      <div
        ref={containerRef}
        className="w-[400px] border bg-pink-400"
      >
        {data.slice(startIndex, endIndex).map((item, index) => (
          <Row key={item} item={item} index={index} />
        ))}
      </div>
    </div>
    // </div>
  );
};
export default Page;

function Row({ item, index }: { item: number; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    console.log("Row", item, "rerender")
    const foo = getRandomArbitrary(200, 300);
    ref.current!.style.height = `${foo}px`
    ref.current?.setAttribute("data-row", String(index));
    // ref.current?.setAttribute("data-height", String(foo));
  }, []);
  return (
    <div
      ref={ref}
      className={cn(
        "h-[500px] w-full flex items-center justify-center",
        item % 2 === 0 ? "bg-green-500" : "bg-blue-500",
        // index  < 2 && "h-[300px]"
      )}
      onScroll={() => console.log("test")}
    >
      Row {item}
    </div>
  );
}
function getRandomArbitrary(min: number, max: number) {
  return Math.floor(Math.random() * (max - min) + min);
}
