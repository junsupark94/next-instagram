import React from "react";
import ProfileIcon from "./Icons/ProfileIcon";

type CommentItemProps = {};

const CommentItem: React.FC<CommentItemProps> = () => {
  return (
    <div className="pt-4">
      <div className="flex gap-2">
        <ProfileIcon />
        <div>
          <div>
            <h1>account name</h1>
            <p>Comment</p>
          </div>
          <div className="flex gap-2">
            <div>time</div>
            <div>likes</div>
            <div>reply</div>
          </div>
          <div>--- View replies (#)</div>
        </div>
      </div>
    </div>
  );
};
export default CommentItem;
