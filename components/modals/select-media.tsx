"use client";
import { useDragAndDrop } from "./use-drag-and-drop";
import { FileTrigger, Button } from "react-aria-components";
import { cn } from "@/lib/utils";
import { Dispatch, SetStateAction } from "react";

const SelectMedia = ({
  setFiles,
  invalidFile,
  setInvalidFile,
}: {
  setInvalidFile: Dispatch<SetStateAction<File | undefined>>;
  invalidFile: File | undefined;
  setFiles: Dispatch<SetStateAction<string[]>>;
}) => {
  const { showDropZone, DnDZone } = useDragAndDrop(setFiles, setInvalidFile);

  const onSelect = (files: FileList | null) => {
    if (!files) return;
    const fileList = Array.from(files);
    const newFiles: string[] = [];
    fileList.forEach((file) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        newFiles.push(e.target!.result as string);
        if (newFiles.length === fileList.length) {
          setFiles(newFiles);
        }
      };
      reader.readAsDataURL(file);
    });
  };

  return (
    <>
      <div
        className={cn(
          "flex w-full grow flex-col items-center justify-center rounded-xl",
          showDropZone && "bg-neutral-900",
        )}
      >
        {!invalidFile && (
          <>
            <PhotoVideoIcon className={cn(showDropZone && "text-sky-500")} />
            <span className="mt-4 text-xl">Drag photos and videos here</span>
          </>
        )}
        {invalidFile && (
          <>
            <WarningIcon />
            <span className="mt-2 text-xl">This file is not supported</span>
            <span className="text-sm text-[#a8a8a8]">
              <span className="font-semibold">{invalidFile.name}</span> could
              not be uploaded.
            </span>
          </>
        )}

        <FileTrigger
          onSelect={onSelect}
          allowsMultiple
          acceptedFileTypes={[
            "image/jpeg",
            "image/png",
            "image/heic",
            "image/heif",
            "video/mp4",
            "video/quicktime",
          ]}
        >
          <Button className="mt-4 rounded-lg bg-sky-500 px-4 py-1.5">
            Select from computer
          </Button>
        </FileTrigger>
      </div>
      {DnDZone}
    </>
  );
};

export default SelectMedia;

function PhotoVideoIcon({ className }: { className: string }) {
  return (
    <svg
      aria-label="Icon to represent media such as images or videos"
      color="currentColor"
      fill="currentColor"
      height="77"
      role="img"
      viewBox="0 0 97.6 77.3"
      width="96"
      className={className}
    >
      <title>Icon to represent media such as images or videos</title>
      <path
        d="M16.3 24h.3c2.8-.2 4.9-2.6 4.8-5.4-.2-2.8-2.6-4.9-5.4-4.8s-4.9 2.6-4.8 5.4c.1 2.7 2.4 4.8 5.1 4.8zm-2.4-7.2c.5-.6 1.3-1 2.1-1h.2c1.7 0 3.1 1.4 3.1 3.1 0 1.7-1.4 3.1-3.1 3.1-1.7 0-3.1-1.4-3.1-3.1 0-.8.3-1.5.8-2.1z"
        fill="currentColor"
      ></path>
      <path
        d="M84.7 18.4 58 16.9l-.2-3c-.3-5.7-5.2-10.1-11-9.8L12.9 6c-5.7.3-10.1 5.3-9.8 11L5 51v.8c.7 5.2 5.1 9.1 10.3 9.1h.6l21.7-1.2v.6c-.3 5.7 4 10.7 9.8 11l34 2h.6c5.5 0 10.1-4.3 10.4-9.8l2-34c.4-5.8-4-10.7-9.7-11.1zM7.2 10.8C8.7 9.1 10.8 8.1 13 8l34-1.9c4.6-.3 8.6 3.3 8.9 7.9l.2 2.8-5.3-.3c-5.7-.3-10.7 4-11 9.8l-.6 9.5-9.5 10.7c-.2.3-.6.4-1 .5-.4 0-.7-.1-1-.4l-7.8-7c-1.4-1.3-3.5-1.1-4.8.3L7 49 5.2 17c-.2-2.3.6-4.5 2-6.2zm8.7 48c-4.3.2-8.1-2.8-8.8-7.1l9.4-10.5c.2-.3.6-.4 1-.5.4 0 .7.1 1 .4l7.8 7c.7.6 1.6.9 2.5.9.9 0 1.7-.5 2.3-1.1l7.8-8.8-1.1 18.6-21.9 1.1zm76.5-29.5-2 34c-.3 4.6-4.3 8.2-8.9 7.9l-34-2c-4.6-.3-8.2-4.3-7.9-8.9l2-34c.3-4.4 3.9-7.9 8.4-7.9h.5l34 2c4.7.3 8.2 4.3 7.9 8.9z"
        fill="currentColor"
      ></path>
      <path
        d="M78.2 41.6 61.3 30.5c-2.1-1.4-4.9-.8-6.2 1.3-.4.7-.7 1.4-.7 2.2l-1.2 20.1c-.1 2.5 1.7 4.6 4.2 4.8h.3c.7 0 1.4-.2 2-.5l18-9c2.2-1.1 3.1-3.8 2-6-.4-.7-.9-1.3-1.5-1.8zm-1.4 6-18 9c-.4.2-.8.3-1.3.3-.4 0-.9-.2-1.2-.4-.7-.5-1.2-1.3-1.1-2.2l1.2-20.1c.1-.9.6-1.7 1.4-2.1.8-.4 1.7-.3 2.5.1L77 43.3c1.2.8 1.5 2.3.7 3.4-.2.4-.5.7-.9.9z"
        fill="currentColor"
      ></path>
    </svg>
  );
}

function WarningIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-label="Icon to represent media such as images or videos"
      className={className}
      color="rgb(245, 245, 245)"
      fill="rgb(245, 245, 245)"
      height="96"
      role="img"
      viewBox="0 0 96 96"
      width="96"
    >
      <title>Icon to represent media such as images or videos</title>
      <path d="M48 0c26.5 0 48 21.5 48 48S74.5 96 48 96 0 74.5 0 48 21.5 0 48 0zm0 2C22.6 2 2 22.6 2 48s20.6 46 46 46 46-20.6 46-46S73.4 2 48 2zm0 57.8c3.4 0 6.1 2.7 6.1 6.1 0 3.4-2.7 6.1-6.1 6.1s-6.1-2.7-6.1-6.1c0-3.3 2.7-6.1 6.1-6.1zm0 2c-2.3 0-4.1 1.8-4.1 4.1S45.7 70 48 70s4.1-1.8 4.1-4.1c0-2.2-1.8-4.1-4.1-4.1zM48 23c3.5 0 6.4 2.8 6.1 6.2l-1.6 22.5c-.2 2.3-2.2 4-4.5 4-2.4 0-4.4-1.7-4.5-4l-1.6-22.5c-.3-3.4 2.6-6.2 6.1-6.2zm0 2c-2.4 0-4.3 1.9-4.1 4l1.6 22.5c.1 1.2 1.2 2.1 2.5 2.1s2.4-.9 2.5-2.1L52.1 29c.2-2.1-1.7-4-4.1-4z"></path>
    </svg>
  );
}
