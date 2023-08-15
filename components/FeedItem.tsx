import React from "react";
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

type FeedItemProps = {
  item: Post;
};

const FeedItem: React.FC<FeedItemProps> = ({ item }) => {
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
      {item.content.map((media, i) => {
        if (media.type === "image")
          return (
            <Image
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
      <div className="px-4 mt-3">
        <div className="flex justify-between my-1">
          <div className="flex gap-3">
            <HeartIcon />
            <CommentIcon />
            <ShareIcon />
          </div>
          <BookmarkIcon />
        </div>
        <div>{item.likes.toLocaleString()} likes</div>
        <FeedItemDescription account={item.account} description={item.description} />
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
