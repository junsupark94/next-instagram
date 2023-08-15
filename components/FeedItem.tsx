"use client";
import React, { useState } from "react";
import ProfileIcon from "./Icons/ProfileIcon";
import OptionsIcon from "./Icons/OptionsIcon";
import BookmarkIcon from "./Icons/BookmarkIcon";
import CommentIcon from "./Icons/CommentIcon";
import HeartIcon from "./Icons/HeartIcon";
import ShareIcon from "./Icons/ShareIcon";
import Image from "next/image";
import { Post } from "@/util/dummy-data";
import { getRelativeTimeString } from "@/util/relative-time";
import FeedItemDescription from "./FeedItemDescription";
import createDoubleClick from "@/util/double-click";

type FeedItemProps = {
  item: Post;
};

const FeedItem: React.FC<FeedItemProps> = ({ item }) => {
  const [liked, setLiked] = useState(false);
  const [opacity, setOpacity] = useState("opacity-0");
  let timer: NodeJS.Timeout;
  const doubleClickHandler = () => {
    clearTimeout(timer);
    setLiked(true);
    setOpacity("opacity-70 animate-swell");
    timer = setTimeout(() => setOpacity("opacity-0"), 1000);
  };
  const doubleClick = createDoubleClick(doubleClickHandler);

  const likeIconProps = {}
  if (liked) {
    likeIconProps.fill = "rgb(255, 48, 64)";
    likeIconProps.stroke = "rgb(255, 48, 64)";
  }

  return (
    <article>
      <div className="flex justify-between items-center px-4 py-[14px]">
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
      </div>
      <div className="relative" onClick={doubleClick}>
        {item.content.map((media, i) => {
          if (media.type === "image")
            return (
              <Image
                key={media.src}
                src={media.src}
                alt={media.type}
                height={450}
                width={450}
                priority={i === 0}
              />
            );
          return (
            <video
              key={media.src}
              src={media.src}
              controls
              height={450}
              width={450}
            />
          );
        })}
        <div className="text-white font-bold absolute top-0 left-0 flex w-full h-full items-center justify-center">
          <HeartIcon
            className={`${opacity} transition-opacity w-20 h-20`}
            fill="currentColor"
          ></HeartIcon>
        </div>
      </div>
      <div className="px-4 mt-3">
        <div className="flex justify-between items-center my-1">
          <div className="flex gap-3 items-center">
            <HeartIcon
              onClick={() => setLiked(prev => !prev)}
              className={`h-7 w-7 ${liked && "animate-swell"}`}
              {...likeIconProps}
            />
            <CommentIcon />
            <ShareIcon />
          </div>
          <BookmarkIcon />
        </div>
        <div>{item.likes.toLocaleString()} likes</div>
        <FeedItemDescription
          account={item.account}
          description={item.description}
        />
        <div className="text-gray-500">
          View all {item.replies.length} comments
        </div>
        <div className="text-gray-500 text-[10px]">
          {getRelativeTimeString(item.date)}
        </div>
      </div>
    </article>
  );
};
export default FeedItem;
