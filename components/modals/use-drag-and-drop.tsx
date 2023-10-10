"use client";

import { cn } from "@/lib/utils";
import {
  Dispatch,
  DragEventHandler,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { PicsAndVids } from "./create-post-modal";

export function useDragAndDrop(
  setFiles: Dispatch<SetStateAction<PicsAndVids[]>>,
  setInvalidFile: Dispatch<SetStateAction<File | undefined>>,
) {
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

  const onDragOver: DragEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };
  const onDragLeave: DragEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setShowDropZone(false);
  };

  const onDrop: DragEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const fileList = Array.from(e.dataTransfer.files);

    const allowedTypes = [
      "image/jpeg",
      "image/png",
      "image/heic",
      "image/heif",
      "video/mp4",
      "video/quicktime",
    ];

    let index;
    fileList.every((file, i) => {
      const isValid = allowedTypes.some((type) => type === file.type);
      if (!isValid) {
        index = i;
      }
      return isValid;
    });
    if (index !== undefined) {
      setInvalidFile(fileList[index]);
      setShowDropZone(false);
      return;
    } else {
      setInvalidFile(undefined);
    }

    const newFiles: PicsAndVids[] = [];
    fileList.forEach((file) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const src = e.target!.result as string;
        const type = file.type.split('/')[0];
        const name = file.name;

        newFiles.push({src, type, name});
        if (newFiles.length === fileList.length) {
          setFiles(newFiles);
        }
      };
      reader.readAsDataURL(file);
    });

    setShowDropZone(false);
  };

  const DnDZone = (
    <div
      className={cn("fixed inset-0 z-50 hidden", showDropZone && "block")}
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
    />
  );

  return { showDropZone, DnDZone };
}
