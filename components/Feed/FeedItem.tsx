"use client";
import React, { useRef, useState } from "react";
import { Post } from "@/util/dummy-data";
import FeedItemDescription from "./FeedItemDescription";
import Carousel from "../Carousel";
import Link from "next/link";
import { cn } from "@/util/cn";
import EmojiIcon from "../Icons/EmojiIcon";
import useAutoSizeTextArea from "@/util/autoSizeTextArea";
import PostIcons from "../PostIcons";
import PostHeader from "../PostHeader";

type FeedItemProps = {
  item: Post;
};

const FeedItem: React.FC<FeedItemProps> = ({ item }) => {
  const [liked, setLiked] = useState(false);
  const { value, setValue, textAreaRef } = useAutoSizeTextArea();
  // const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const emojiRef = useRef<HTMLDivElement>(null);

  return (
    <div className="pb-4 xs:border-b dark:border-gray-800 border-gray-200">
      <PostHeader account={item.account} date={item.date} />
      <Carousel
        content={item.content}
        setLiked={setLiked}
      />

      <section className="px-4 mt-3">
        <PostIcons liked={liked} setLiked={setLiked} likes={item.likes} />
        <FeedItemDescription
          account={item.account}
          description={item.description}
        />
        <Link href={`/p/${item.id}`} className="text-gray-500 my-1">
          View all {item.replies.length} comments
        </Link>
        {/* todo: show submitted comment. Can show more than one */}
        {false && (
          <div className="flex gap-1">
            <span className="font-bold">account name</span>
            <span>comment</span>
          </div>
        )}
        {/* start of comment form */}
        <form className="relative">
          {/* <div
            ref={emojiRef}
            className={cn(
              "absolute -right-24 bottom-10",
              !showEmojiPicker && "hidden"
            )}
          >
            <Picker
              theme={darkMode ? Theme.DARK : Theme.LIGHT}
              onEmojiClick={(e) => setValue((prev) => prev + e.emoji)}
            />
          </div> */}

          <article className="flex grow gap-1">
            <textarea
              className="dark:bg-black dark:text-white resize-none outline-none grow"
              placeholder="Add a comment..."
              ref={textAreaRef}
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <div className="flex gap-2">
              <button
                className={cn(
                  "font-bold text-[#0095f6]",
                  value === "" ? "hidden" : "hover:text-white"
                )}
                onClick={(e) => e.preventDefault()}
              >
                Post
              </button>
              {/* <button
                className="active:text-gray-500"
                onClick={(e) => {
                  e.preventDefault();
                  setShowEmojiPicker((prev) => !prev);
                }}
              >
                <EmojiIcon className="w-3 h-3" />
              </button> */}
            </div>
          </article>
        </form>
      </section>
    </div>
  );
};
export default FeedItem;
