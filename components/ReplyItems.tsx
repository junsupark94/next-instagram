import React, { RefObject } from "react";
import ReplyItem from "./ReplyItem";
import { Reply } from "@/utils/dummy-data-posts";

type ReplyItemsProps = {
  replies: Reply[];
  textAreaRef: RefObject<HTMLTextAreaElement>;
};

const ReplyItems: React.FC<ReplyItemsProps> = ({ replies, textAreaRef }) => {
  return (
    <>
      {replies.map((reply) => (
        <ReplyItem key={reply.id} reply={reply} textAreaRef={textAreaRef} />
      ))}
    </>
  );
};
export default React.memo(ReplyItems);
