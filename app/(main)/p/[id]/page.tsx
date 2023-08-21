"use client";
import PostHeader from "@/components/PostHeader";
import PostIcons from "@/components/PostIcons";
import { useRef, useState } from "react";
import { DUMMY_DATA } from "@/util/dummy-data";
import ProfileIcon from "@/components/Icons/ProfileIcon";
import { getRelativeTimeString } from "@/util/relative-time";
import EmojiIcon from "@/components/Icons/EmojiIcon";
import { cn } from "@/util/cn";
import { Theme } from "emoji-picker-react";
import useAutoSizeTextArea from "@/util/autoSizeTextArea";
import { useAtom } from "jotai";
import { darkModeAtom } from "@/util/atoms";
import dynamic from "next/dynamic";
import Carousel from "@/components/Carousel";
import CommentItem from "@/components/CommentItem";

const EmojiPicker = dynamic(() => import("emoji-picker-react"), {
  ssr: false,
});

export default function Page({ params }: { params: any }) {
  const [darkMode] = useAtom(darkModeAtom);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const emojiRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const { value, setValue, textAreaRef } = useAutoSizeTextArea();
  const [liked, setLiked] = useState(false);

  const item = DUMMY_DATA.find(item => item.id === Number(params.id))
  if (!item) return <div>404 Post Not Found</div>;
  return (
    <main className="grow flex flex-col items-center justify-center">
        <div className="flex max-w-[817px] border border-gray-500">
          {/* height comes from carousel, currently hardcoded to 600px */}
          <div className="min-h-[450px] grow">
            <Carousel content={item.content} setLiked={setLiked}/>
          </div>
          <section className="w-[355px] h-[600px] flex flex-col">
            <div className="p-4 border-b border-gray-500">
              <PostHeader account={item.account} date={item.date} />
            </div>
            <div className="flex gap-1 p-4">
              <ProfileIcon />
              <article>
                <div>
                  <span>{item.account}</span>
                </div>
                <p>{item.description}</p>
              </article>
            </div>
            <article className="overflow-auto p-4 flex flex-col gap-2">
              <CommentItem />
              <CommentItem />
              <CommentItem />
              <CommentItem />
            </article>
            <div className="p-4 border-t border-gray-500">
              <PostIcons liked={liked} setLiked={setLiked} likes={10} />
              <span>{getRelativeTimeString(item.date)}</span>
            </div>
            <article className="relative flex p-4 gap-4 items-center">
              <div className="absolute right-6 bottom-0">
                <div
                  ref={emojiRef}
                  className={cn(
                    "absolute bottom-11 left-0 invisible",
                    showEmojiPicker && "visible"
                  )}
                >
                  <EmojiPicker
                    searchDisabled
                    lazyLoadEmojis
                    theme={darkMode ? Theme.DARK : Theme.LIGHT}
                    onEmojiClick={(e) => setValue((prev) => prev + e.emoji)}
                  />
                </div>
              </div>

              <form className="flex grow">
                <ProfileIcon className="mr-2" />
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
                      "font-bold text-[#0095f6] text-[14px]",
                      value === "" ? "invisible" : "hover:text-white"
                    )}
                  >
                    Post
                  </button>
                  <button
                    className="active:text-gray-500"
                    ref={buttonRef}
                    onClick={(e) => {
                      e.preventDefault();
                      setShowEmojiPicker((prev) => !prev);
                    }}
                  >
                    <EmojiIcon />
                  </button>
                </div>
              </form>
            </article>
          </section>
        </div>
      <div className="border border-blue-500">More posts</div>
    </main>
  );
}
