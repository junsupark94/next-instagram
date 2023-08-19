"use client";
import useAutoSizeTextArea from "@/util/autoSizeTextArea";
import { cn } from "@/util/cn";
import EmojiPicker, { Theme } from "emoji-picker-react";
import React, { useEffect, useRef, useState } from "react";
import EmojiIcon from "./Icons/EmojiIcon";
import { useAtom } from "jotai";
import { darkModeAtom } from "@/util/atoms";
import dynamic from "next/dynamic";

const Picker = dynamic(() => import("emoji-picker-react"), { ssr: false });

type CommentFormProps = {
  className?: string;
};

const CommentForm: React.FC<CommentFormProps> = ({ className }) => {
  const [darkMode] = useAtom(darkModeAtom);
  const { value, setValue, textAreaRef } = useAutoSizeTextArea();
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const emojiRef = useRef<HTMLDivElement>(null);
  // const buttonRef = useRef<HTMLButtonElement>(null);

  return (
    <div className="relative">
      <div
        ref={emojiRef}
        className={cn(
          "absolute -right-24 bottom-10",
          !showEmojiPicker && "invisible"
        )}
      >
        <Picker
          theme={darkMode ? Theme.DARK : Theme.LIGHT}
          onEmojiClick={(e) => setValue((prev) => prev + e.emoji)}
        />
      </div>

      <section className="flex grow gap-1">
        <textarea
          className="dark:bg-black dark:text-white resize-none outline-none grow"
          placeholder="Add a comment..."
          ref={textAreaRef}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <div className="flex gap-2">
          <button
            className={`font-bold text-[#0095f6] ${value === "" && "hidden"}`}
          >
            Post
          </button>
          <button
            className="active:text-gray-500"
            // ref={buttonRef}
            onClick={(e) => {
              e.preventDefault();
              setShowEmojiPicker((prev) => !prev);
            }}
          >
            <EmojiIcon className="w-3 h-3" />
          </button>
        </div>
      </section>
    </div>
  );
};
export default CommentForm;
