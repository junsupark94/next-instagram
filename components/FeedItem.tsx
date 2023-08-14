import React from "react";
import ProfileIcon from "./Icons/ProfileIcon";
import OptionsIcon from "./Icons/OptionsIcon";
import BookmarkIcon from "./Icons/BookmarkIcon";
import CommentIcon from "./Icons/CommentIcon";
import HeartIcon from "./Icons/HeartIcon";
import ShareIcon from "./Icons/ShareIcon";
import Image from "next/image";
import { Post } from "@/util/dummy-data";

type FeedItemProps = {
  item: Post
};

const FeedItem: React.FC<FeedItemProps> = ({item}) => {
  return (
    <article>
      <div className="flex justify-between">
        <div className="flex gap-2">
          <ProfileIcon />
          <div>{item.account}</div>
          <div>{item.date.toLocaleDateString()}</div>
          <div>Follow</div>
        </div>
        <OptionsIcon />
      </div>
      <Image src={item.content[0].src} alt={item.content[0].type} height={450} width={450} />
      <div className="flex justify-between">
        <div className="flex">
          <HeartIcon />
          <CommentIcon />
          <ShareIcon />
        </div>
        <BookmarkIcon />
      </div>
      <div>{item.likes} likes</div>
      <p>{item.description}</p>
    </article>
  );
};
export default FeedItem;
