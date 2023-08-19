"use client";
import React, { useMemo, useRef, useState } from "react";
import ProfileIcon from "../Icons/ProfileIcon";
import OptionsIcon from "../Icons/OptionsIcon";
import BookmarkIcon from "../Icons/BookmarkIcon";
import CommentIcon from "../Icons/CommentIcon";
import HeartIcon from "../Icons/HeartIcon";
import ShareIcon from "../Icons/ShareIcon";
import { Post } from "@/util/dummy-data";
import { getRelativeTimeString } from "@/util/relative-time";
import FeedItemDescription from "./FeedItemDescription";
import createDoubleClick from "@/util/double-click";
import Carousel from "../Carousel";
import Link from "next/link";
import { cn } from "@/util/cn";
import EmojiIcon from "../Icons/EmojiIcon";
import dynamic from "next/dynamic";
import { darkModeAtom } from "@/util/atoms";
import useAutoSizeTextArea from "@/util/autoSizeTextArea";
import { Theme } from "emoji-picker-react";
import { useAtom } from "jotai";
import PostIcons from "../RightSideBar/PostIcons";

const Picker = dynamic(() => import("emoji-picker-react"), { ssr: false });

type FeedItemProps = {
  item: Post;
};

const FeedItem: React.FC<FeedItemProps> = ({ item }) => {
  const [opacity, setOpacity] = useState("opacity-0");
  const [liked, setLiked] = useState(false);

  let timer: NodeJS.Timeout;
  const doubleClickHandler = () => {
    clearTimeout(timer);
    setLiked(true);
    setOpacity("opacity-70 animate-swell");
    timer = setTimeout(() => setOpacity("opacity-0"), 1000);
  };
  const doubleClick = createDoubleClick(doubleClickHandler);



  const [darkMode] = useAtom(darkModeAtom);
  const { value, setValue, textAreaRef } = useAutoSizeTextArea();
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const emojiRef = useRef<HTMLDivElement>(null);

  return (
    <article className="pb-4 xs:border-b dark:border-gray-800 border-gray-200">
      <section className="flex justify-between items-center px-4 xs:py-[14px]">
        <div className="flex gap-2 items-center">
          <ProfileIcon className="w-8 h-8" />
          <div className="flex flex-col">
            <div className="flex gap-2">
              <div>{item.account}</div>
              <div>
                • <span className="text-blue-400">Follow</span>
              </div>
            </div>
            <div className="text-[12px]">Location or Original Audio</div>
          </div>
        </div>
        <OptionsIcon />
      </section>
      <div onClick={doubleClick}>
        <Carousel content={item.content} opacity={opacity} />
      </div>
      <div className="px-4 mt-3 border border-green-500">
        {/* start of icons */}
        <PostIcons liked={liked} setLiked={setLiked}/>
        {/* end of icons */}
        <div>{item.likes.toLocaleString()} likes</div>
        <FeedItemDescription
          account={item.account}
          description={item.description}
        />
        <Link href="/p/1" className="text-gray-500 my-1">
          View all {item.replies.length} comments
        </Link>
        {/* todo: show submitted comment. Can show more than one */}
        {false && (
          <div className="flex gap-1">
            <span className="font-bold">account name</span>
            <span>comment</span>
          </div>
        )}
        <div className="text-gray-500 text-[10px] sm:hidden">
          {getRelativeTimeString(item.date).toUpperCase()}
        </div>
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
                className={`font-bold text-[#0095f6] ${
                  value === "" && "hidden"
                }`}
              >
                Post
              </button>
              <button
                className="active:text-gray-500"
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
      </div>
    </article>
  );
};
export default FeedItem;
