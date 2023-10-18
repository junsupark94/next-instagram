"use client";
import { useEffect, useState } from "react";
import CommentItem from "./comment-item";
import { CommentWithReplies } from "@/app/(main)/p/[post_id]/page";

type CommentItemsProps = {
  stateComments: CommentWithReplies[]
};

const CommentItems: React.FC<CommentItemsProps> = ({ stateComments }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return <div>Loading comments...</div>;

  return (
    <>
      {stateComments.map((comment, index) => (
        <CommentItem
          key={comment.id}
          comment={comment}
          index={index}
        />
      ))}
    </>
  );
};
export default CommentItems;
