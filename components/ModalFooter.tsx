"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
import BookmarkIcon from "./Icons/BookmarkIcon";
import CommentIcon from "./Icons/CommentIcon";
import HeartIcon from "./Icons/HeartIcon";
import ShareIcon from "./Icons/ShareIcon";
import { cn } from "@/util/cn";
import EmojiPicker from "emoji-picker-react";
import EmojiIcon from "./Icons/EmojiIcon";
import useAutoSizeTextArea from "@/util/autoSizeTextArea";
import { darkModeAtom } from "@/util/atoms";
import { Theme } from "emoji-picker-react";
import { useAtom } from "jotai";

type ModalFooterProps = {};

const ModalFooter: React.FC<ModalFooterProps> = () => {
  const [liked, setLiked] = useState(false); // todo: initial state provided by database
  const likeIconProps = useMemo(() => {
    const props: { fill?: string; stroke?: string } = {};
    if (liked) {
      props.fill = "rgb(255, 48, 64)";
      props.stroke = "rgb(255, 48, 64)";
    }
    return props;
  }, [liked]);
  const [darkMode] = useAtom(darkModeAtom)

  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const emojiRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const { value, setValue, textAreaRef } = useAutoSizeTextArea();

  useEffect(() => {
    if (!showEmojiPicker) return;
    function clickOutside(e: MouseEvent) {
      if (buttonRef.current?.contains(e.target)) return;
      if (!emojiRef.current?.contains(e.target)) {
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
          <article className="flex justify-between">
            <div className="flex gap-3">
              <button onClick={() => setLiked((prev) => !prev)}>
                <HeartIcon
                  className={cn(
                    "-m-0.5 w-7 h-7 hover:text-icon-hover",
                    liked && "animate-swell"
                  )}
                  {...likeIconProps}
                />
              </button>
              <button onClick={() => textAreaRef.current?.focus()}>
                <CommentIcon className="hover:text-icon-hover" />
              </button>
              <ShareIcon className="hover:text-icon-hover" />
            </div>
            <BookmarkIcon />
          </article>
          <div className="pt-3">Likes</div>
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
            <EmojiPicker theme={darkMode ? Theme.DARK: Theme.LIGHT} onEmojiClick={e => setValue(prev => prev + e.emoji)}/>
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
          <div className="flex grow">
            <textarea
              className="dark:bg-black dark:text-white resize-none outline-none grow"
              placeholder="Add a comment..."
              ref={textAreaRef}
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <button
              className={`font-bold text-[#0095f6] ${
                value === "" && "invisible"
              }`}
            >
              Post
            </button>
          </div>
        </section>
      </footer>
    </>
  );
};
export default ModalFooter;
