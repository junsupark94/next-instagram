"use client";
import React, { useState } from "react";
import { cn } from "@/util/cn";
import useAutoSizeTextArea from "@/util/autoSizeTextArea";
import PostIcons from "@/components/PostIcons";
import { Reply, getReplyId } from "@/util/dummy-data-posts";

type ModalFooterProps = {
  account: string;
};

const ModalFooter: React.FC<ModalFooterProps> = ({ account }) => {
  const [liked, setLiked] = useState(false); // todo: initial state provided by database
  const { value, setValue, textAreaRef } = useAutoSizeTextArea();
  const [newReplies, setNewReplies] = useState<Reply[]>([]);

  const submitHandler: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (value.trim() === "") return;
    const newReply = {
      account: account,
      text: value,
      likes: 0,
      date: new Date(),
      id: getReplyId(),
      thread: []
    };
    //todo: add fetch POST request to backend, await that before updating UI, need replyID from db
    setNewReplies((prev) => [...prev, newReply]);
    setValue("");
  };

  return (
    <>
      <footer>
        <section className="border-b border-gray-500 p-4">
          <PostIcons liked={liked} setLiked={setLiked} likes={10} />
          <div>Time</div>
        </section>
        <section className="relative flex p-4 gap-4 items-center">
          <form className="flex grow" onSubmit={submitHandler}>
            <textarea
              className="dark:bg-black dark:text-white resize-none outline-none grow"
              placeholder="Add a comment..."
              ref={textAreaRef}
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <button
              className={cn(
                "font-bold text-[#0095f6]",
                value === ""
                  ? "brightness-50 cursor-default"
                  : "hover:text-white"
              )}
              onClick={(e) => e.preventDefault()}
            >
              Post
            </button>
          </form>
        </section>
      </footer>
    </>
  );
};
export default ModalFooter;
