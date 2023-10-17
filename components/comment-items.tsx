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
          profile_name={comment.user.profile_name}
          profile_picture_url={comment.user.profile_picture_url}
          created_at={comment.created_at}
          text={comment.text}
          replying_to_id={comment.id}
          username={comment.user.username}
          replies={comment.children}
          index={index}
          id={comment.id}
        />
      ))}
    </>
  );
};
export default CommentItems;
