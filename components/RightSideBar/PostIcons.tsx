import { cn } from "@/util/cn";
import Link from "next/link";
import React, { useMemo, useState } from "react";
import BookmarkIcon from "../Icons/BookmarkIcon";
import CommentIcon from "../Icons/CommentIcon";
import HeartIcon from "../Icons/HeartIcon";
import ShareIcon from "../Icons/ShareIcon";

type PostIconsProps = {
  liked: boolean;
  setLiked: React.Dispatch<React.SetStateAction<boolean>>;
};

const PostIcons: React.FC<PostIconsProps> = ({ liked, setLiked }) => {
  const red = "rgb(255,48,64)"
  return (
    <div className="flex justify-between items-center my-1 border">
      <div className="flex gap-3 items-center">
        <button onClick={() => setLiked((prev) => !prev)}>
          <HeartIcon
            className={cn(
              "h-7 w-7 hover:text-icon-hover",
              liked && "animate-swell"
            )}
            fill={liked ? red: "none"}
            stroke={liked ? red: "currentColor"}
          />
        </button>
        <Link href={"/p/1"}>
          <CommentIcon className="hover:text-icon-hover" />
        </Link>
        <ShareIcon className="hover:text-icon-hover" />
      </div>
      <BookmarkIcon className="hover:text-icon-hover" />
    </div>
  );
};
export default PostIcons;
