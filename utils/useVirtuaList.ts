import { useEffect } from "react";

export default function useVirtualList() {
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
}