"use client";

import { cn } from "@/lib/utils";
import { DragEventHandler, useEffect, useState } from "react";

export function useDragAndDrop() {
  const [showDropZone, setShowDropZone] = useState(false);
  useEffect(() => {
    const dragEnter = () => {
      setShowDropZone(true);
    };
    window.addEventListener("dragenter", dragEnter);

    return () => {
      window.removeEventListener("dragenter", dragEnter);
    };
  }, []);

  const onDragEnter: DragEventHandler<HTMLDivElement> = (e) => {};
  const onDragOver: DragEventHandler<HTMLDivElement> = (e) => {};
  const onDragLeave: DragEventHandler<HTMLDivElement> = (e) => {
    setShowDropZone(false);
  };
  const onDrop: DragEventHandler<HTMLDivElement> = (e) => {
    setShowDropZone(false);
  };

  const DnDZone = (
    <div
      className={cn("fixed inset-0 z-50 hidden", showDropZone && "block")}
      onDragEnter={onDragEnter}
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
    />
  );

  return {showDropZone, DnDZone}
}
