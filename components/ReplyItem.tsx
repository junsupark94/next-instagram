import React from "react";
import ProfileIcon from "@/components/Icons/ProfileIcon";
import { Reply } from "@/util/dummy-data";
import { getRelativeTimeString } from "@/util/relative-time";

type CommentItemProps = {
  reply: Reply
};

const CommentItem: React.FC<CommentItemProps> = ({reply}) => {
  return (
    <article className="">
      <div className="flex gap-2">
        <ProfileIcon />
        <div>
          <div>
            <h1>{reply.account}</h1>
            <p>{reply.text}</p>
          </div>
          <div className="flex gap-2">
            <div>{getRelativeTimeString(reply.date)}</div>
            <div>{reply.likes}</div>
            {reply.replying && <div>{reply.replying}</div>}
          </div>
          <div>--- View replies (#)</div>
        </div>
      </div>
    </article>
  );
};
export default React.memo(CommentItem);
