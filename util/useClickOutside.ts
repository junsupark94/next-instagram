import { useEffect, useRef } from "react";

export default function useClickOutside(cb) {
  const targetRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    function clickOutside(e: MouseEvent) {
      if (!targetRef.current?.contains(e.target)) {
        cb();
      }
    }
    document.addEventListener("mousedown", clickOutside);
    return () => {
      document.removeEventListener("mousedown", clickOutside);
    };
  }, [targetRef]);
  return targetRef;
}