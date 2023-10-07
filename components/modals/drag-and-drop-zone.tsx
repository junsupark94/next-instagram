"use client";
import { cn } from "@/lib/utils";
import { DragEventHandler } from "react";

const DragAndDropZone = ({
  showDropZone,
  setShowDropZone,
}: {
  showDropZone: boolean;
  setShowDropZone: (state: boolean) => void;
}) => {
  const onDragEnter: DragEventHandler<HTMLDivElement> = (e) => {};
  const onDragOver: DragEventHandler<HTMLDivElement> = (e) => {};
  const onDragLeave: DragEventHandler<HTMLDivElement> = (e) => {
    setShowDropZone(false);
  };
  const onDrop: DragEventHandler<HTMLDivElement> = (e) => {
    setShowDropZone(false);
  };

  return (
    <div
      className={cn("fixed inset-0 z-50 hidden", showDropZone && "block")}
      onDragEnter={onDragEnter}
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
    />
  );
};

export default DragAndDropZone;
