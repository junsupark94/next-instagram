"use client";
import React, { useMemo, useState } from "react";
import ProfileIcon from "./Icons/ProfileIcon";
import OptionsIcon from "./Icons/OptionsIcon";
import BookmarkIcon from "./Icons/BookmarkIcon";
import CommentIcon from "./Icons/CommentIcon";
import HeartIcon from "./Icons/HeartIcon";
import ShareIcon from "./Icons/ShareIcon";
import { Post } from "@/util/dummy-data";
import { getRelativeTimeString } from "@/util/relative-time";
import FeedItemDescription from "./FeedItemDescription";
import createDoubleClick from "@/util/double-click";
import Carousel from "./Carousel";
import CommentForm from "./CommentForm";

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

  const likeIconProps = useMemo(() => {
    const props: { fill?: string; stroke?: string } = {};
    if (liked) {
      props.fill = "rgb(255, 48, 64)";
      props.stroke = "rgb(255, 48, 64)";
    }
    return props;
  }, [liked]);

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
      <div className="px-4 mt-3">
        <div className="flex justify-between items-center my-1">
          <div className="flex gap-3 items-center">
            <HeartIcon
              onClick={() => setLiked((prev) => !prev)}
              className={`h-7 w-7 hover:text-icon-hover ${liked && "animate-swell"}`}
              {...likeIconProps}
            />
            <CommentIcon className="hover:text-icon-hover"/>
            <ShareIcon className="hover:text-icon-hover"/>
          </div>
          <BookmarkIcon className="hover:text-icon-hover"/>
        </div>
        <div>{item.likes.toLocaleString()} likes</div>
        <FeedItemDescription
          account={item.account}
          description={item.description}
        />
        <button className="text-gray-500 my-1">
          View all {item.replies.length} comments
        </button>
        <div className="text-gray-500 text-[10px] sm:hidden">
          {getRelativeTimeString(item.date).toUpperCase()}
        </div>
        <CommentForm />
      </div>
    </article>
  );
};
export default FeedItem;
