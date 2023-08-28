import React, { RefObject } from "react";
import ReplyItem from "./ReplyItem";
import { Reply } from "@/utils/dummy-data-posts";

type ReplyItemsProps = {
  replies: Reply[];
  textAreaRef: RefObject<HTMLTextAreaElement>;
};

const ReplyItems: React.FC<ReplyItemsProps> = ({ replies, textAreaRef }) => {
  return (
    <article className="overflow-auto p-4 flex flex-col gap-2 grow">
      {replies.map((reply) => (
        <ReplyItem key={reply.id} reply={reply} textAreaRef={textAreaRef}/>
      ))}
    </article>
  );
};
export default React.memo(ReplyItems);
