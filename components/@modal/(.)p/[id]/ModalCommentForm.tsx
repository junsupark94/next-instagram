"use client";
import EmojiPicker from "emoji-picker-react";
import React, { useEffect, useRef, useState } from "react";
import EmojiIcon from "@/components/Icons/EmojiIcon";
import { cn } from "@/util/cn";
import useAutoSizeTextArea from "@/util/autoSizeTextArea";

type ModalCommentFormProps = {};

const ModalCommentForm: React.FC<ModalCommentFormProps> = () => {
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const emojiRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const {value, setValue, textAreaRef} = useAutoSizeTextArea();

  useEffect(() => {
    if (!showEmojiPicker) return;
    function clickOutside(e: MouseEvent) {
      if (buttonRef.current?.contains(e.target as Node)) return;
      if (!emojiRef.current?.contains(e.target as Node)) {
        setShowEmojiPicker(false);
      }
    }
    document.addEventListener("mousedown", clickOutside);
    return () => {
      document.removeEventListener("mousedown", clickOutside);
    };
  }, [showEmojiPicker]);

  return (
    <div className="relative flex p-4 gap-4 items-center">
      <div
        ref={emojiRef}
        className={cn(
          "absolute left-2 bottom-11",
          !showEmojiPicker && "hidden"
        )}
      >
        <EmojiPicker />
      </div>
      <button
        className="active:text-gray-500"
        ref={buttonRef}
        onClick={(e) => {
          setShowEmojiPicker((prev) => !prev);
        }}
      >
        <EmojiIcon />
      </button>
      <form action="" className="flex grow">
        <textarea
          className="dark:bg-black dark:text-white resize-none outline-none grow"
          placeholder="Add a comment..."
          ref={textAreaRef}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button
          className={`font-bold text-[#0095f6] ${value === "" && "invisible"}`}
        >
          Post
        </button>
      </form>
    </div>
  );
};
export default ModalCommentForm;
