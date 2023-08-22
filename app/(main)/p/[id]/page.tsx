"use client";
import PostHeader from "@/components/PostHeader";
import PostIcons from "@/components/PostIcons";
import { useState } from "react";
import { DUMMY_DATA } from "@/util/dummy-data";
import ProfileIcon from "@/components/Icons/ProfileIcon";
import { getRelativeTimeString } from "@/util/relative-time";
import { cn } from "@/util/cn";
import useAutoSizeTextArea from "@/util/autoSizeTextArea";
import Carousel from "@/components/Carousel";
import CommentItem from "@/components/CommentItem";

export default function Page({ params }: { params: any }) {
  const { value, setValue, textAreaRef } = useAutoSizeTextArea();
  const [liked, setLiked] = useState(false);

  const item = DUMMY_DATA.find((item) => item.id === Number(params.id));
  if (!item) return <div>404 Post Not Found</div>;
  return (
    <main className="grow flex flex-col items-center border border-red-500">
      <div className="flex max-w-[850px] h-[600px] border border-purple-500">
        {/* height comes from carousel, currently hardcoded to 600px */}
        {/* <div className="growz border border-red-500"> */}
        <Carousel content={item.content} setLiked={setLiked} width={600} height={600} className="h-full"/>
        {/* </div> */}
        <section className="w-[355px] flex flex-col bg-blue-300 shrink-0">
          {/* <div className="p-4 border-b border-gray-500">
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
          <article className="overflow-auto p-4 flex flex-col gap-2 border">
            <CommentItem />
            <CommentItem />
            <CommentItem />
            <CommentItem />
          </article>
          <div className="p-4 border-t border-gray-500">
            <PostIcons liked={liked} setLiked={setLiked} likes={10} />
            <span>{getRelativeTimeString(item.date)}</span>
          </div>
          <article className=" flex p-4 gap-4 items-center">
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
              </div>
            </form>
          </article> */}
        </section>
      </div>
      <div className="border border-blue-500">More posts</div>
    </main>
  );
}
