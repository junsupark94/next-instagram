"use client";
import React, { KeyboardEventHandler, useRef, useState } from "react";
import FeedItemDescription from "./feed-item-description";
import Link from "next/link";
import { cn } from "@/lib/utils";
import useAutoSizeTextArea from "@/utils/autoSizeTextArea";
import NewReply from "./new-reply";
import { Comment, Media, Post, User } from "@prisma/client";
import Carousel from "@/components/Carousel";
import PostHeader from "@/components/PostHeader";
import PostIcons from "@/components/PostIcons";

type FeedItemProps = {
  postWithUserWithMedia: {
    media: Media[];
    creator: User;
  } & Post
};

const FeedItem: React.FC<FeedItemProps> = ({ postWithUserWithMedia }) => {
  // console.log("FeedItem render", item.id)

  const {creator : user, media, ...post} = postWithUserWithMedia

  const [liked, setLiked] = useState(false);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const [value, setValue] = useState("");
  const [newReplies, setNewReplies] = useState<Comment[]>([]);
  useAutoSizeTextArea(textAreaRef, value);

  const submitHandler : React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

  }

  const enterKeyDown: KeyboardEventHandler<HTMLFormElement> = (e) => {
    if (e.key !== "Enter") return;
    if (e.shiftKey) {
      return;
    } else {
      submitHandler(e);
    }
  };


  return (
    <div className="pb-4 xs:border-b dark:border-gray-800 border-gray-200">
      <PostHeader user={user} location={post.location_name}/>
      <Carousel
        media={media}
        setLiked={setLiked}
      />

      <section className="px-4 mt-3">
        <PostIcons liked={liked} setLiked={setLiked} likes={100} />
        <FeedItemDescription
          username={user.username}
          description={post.description}
        />
        <Link href={`/p/${post.id}`} className="text-gray-500 my-1">
          View all {`insert number here`} comments
        </Link>
        {newReplies.map((reply, i) => <NewReply key={i} reply={reply}/>)}
        <form className="relative" onSubmit={submitHandler} onKeyDown={enterKeyDown}>
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
              >
                Post
              </button>
            </div>
          </article>
        </form>
      </section>
    </div>
  );
};
export default FeedItem;
