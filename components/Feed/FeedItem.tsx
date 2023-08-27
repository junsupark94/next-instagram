"use client";
import React, { useState } from "react";
import { Post, Reply, getReplyId } from "@/utils/dummy-data-posts";
import FeedItemDescription from "./FeedItemDescription";
import Carousel from "../Carousel";
import Link from "next/link";
import { cn } from "@/utils/cn";
import useAutoSizeTextArea from "@/utils/autoSizeTextArea";
import PostIcons from "../PostIcons";
import PostHeader from "../PostHeader";
import NewReply from "./NewReply";
import { USERS } from "@/utils/dummy-data-users";

type FeedItemProps = {
  item: Post;
};


const FeedItem: React.FC<FeedItemProps> = ({ item }) => {
  const [liked, setLiked] = useState(false);
  const { value, setValue, textAreaRef } = useAutoSizeTextArea();
  const [newReplies, setNewReplies] = useState<Reply[]>([]);

  const submitHandler : React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (value.trim() === '') return;
    const newReply = {
      account: item.account,
      text: value,
      likes: 0,
      date: new Date(),
      thread: [],
      id: getReplyId(),
    }
    //todo: add fetch POST request to backend, await that before updating UI, need replyID from db
    setNewReplies(prev => [...prev, newReply])
    setValue('');
  }
  const foo : React.KeyboardEventHandler<HTMLTextAreaElement> = (e) => {

  }

  const user = USERS.find(user => user.account === item.account)

  if (!user) return <div>Error unable to find user</div>

  return (
    <div className="pb-4 xs:border-b dark:border-gray-800 border-gray-200">
      <PostHeader user={user} date={item.date} />
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
        {newReplies.map((reply, i) => <NewReply key={i} reply={reply}/>)}
        <form className="relative" onSubmit={submitHandler}>
          <article className="flex grow gap-1">
            <textarea
              className="dark:bg-black dark:text-white resize-none outline-none grow"
              placeholder="Add a comment..."
              ref={textAreaRef}
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onKeyDown={foo}
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
