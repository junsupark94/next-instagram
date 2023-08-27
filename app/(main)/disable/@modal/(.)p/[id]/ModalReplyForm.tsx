"use client";
import React, { useState } from "react";
import useAutoSizeTextArea from "@/utils/autoSizeTextArea";
import { Reply, getReplyId } from "@/utils/dummy-data-posts";

type ModalReplyFormProps = {
  account: string;
};

const ModalReplyForm: React.FC<ModalReplyFormProps> = ({ account }) => {
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
      thread: [],
    };
    //todo: add fetch POST request to backend, await that before updating UI, need replyID from db
    setNewReplies((prev) => [...prev, newReply]);
    setValue("");
  };

  return (
    <div className="relative flex p-4 gap-4 items-center">
      <form action="" className="flex grow" onSubmit={submitHandler}>
        <textarea
          className="dark:bg-black dark:text-white resize-none outline-none grow"
          placeholder="Add a comment..."
          ref={textAreaRef}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button
          className={`font-bold text-[#0095f6] ${value === "" && "invisible"}`}
        >
          Post
        </button>
      </form>
    </div>
  );
};
export default ModalReplyForm;
