"use client";
import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/util/cn";
import EmojiPicker from "emoji-picker-react";
import EmojiIcon from "@/components/Icons/EmojiIcon";
import useAutoSizeTextArea from "@/util/autoSizeTextArea";
import { Theme } from "emoji-picker-react";
import PostIcons from "@/components/PostIcons";
import { useGlobalStore } from "@/util/zustand";

type ModalFooterProps = {};

const ModalFooter: React.FC<ModalFooterProps> = () => {
  const [liked, setLiked] = useState(false); // todo: initial state provided by database
  const darkMode = useGlobalStore(state => state.darkMode);

  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const emojiRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const { value, setValue, textAreaRef } = useAutoSizeTextArea();

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
    <>
      <footer>
        <section className="border-b border-gray-500 p-4">
          <PostIcons liked={liked} setLiked={setLiked} likes={10} />
          <div>Time</div>
        </section>
        <section className="relative flex p-4 gap-4 items-center">
          <div
            ref={emojiRef}
            className={cn(
              "absolute left-2 bottom-11",
              !showEmojiPicker && "hidden"
            )}
          >
            <EmojiPicker
              searchDisabled
              lazyLoadEmojis
              theme={darkMode ? Theme.DARK : Theme.LIGHT}
              onEmojiClick={(e) => setValue((prev) => prev + e.emoji)}
            />
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
          <form className="flex grow">
            <textarea
              className="dark:bg-black dark:text-white resize-none outline-none grow"
              placeholder="Add a comment..."
              ref={textAreaRef}
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <button
              className={cn(
                "font-bold text-[#0095f6]",
                value === ""
                  ? "brightness-50 cursor-default"
                  : "hover:text-white"
              )}
              onClick={(e) => e.preventDefault()}
            >
              Post
            </button>
          </form>
        </section>
      </footer>
    </>
  );
};
export default ModalFooter;
