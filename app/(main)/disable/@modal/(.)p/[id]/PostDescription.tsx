import ProfileIcon from "@/components/Icons/ProfileIcon";
import React from "react";

type PostDescriptionProps = {};

const PostDescription: React.FC<PostDescriptionProps> = () => {
  return (
    <div className="flex gap-2 p-4">
      <ProfileIcon />
      <div className="grow">
        <div>
          <h1>accout name</h1>
          <p>description</p>
        </div>
        <div className="flex gap-2">
          <div>time</div>
        </div>
      </div>
    </div>
  );
};
export default PostDescription;
