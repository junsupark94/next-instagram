import ProfileIcon from "@/components/Icons/ProfileIcon";
import React from "react";

type PostHeaderProps = {};

const PostHeader: React.FC<PostHeaderProps> = () => {
  return (
    <header className="flex justify-between items-center p-4 border-b border-red-500">
      <div className="flex gap-2 justify-between items-center">
        <ProfileIcon />
        <div className="flex flex-col gap-2">
          <div>account name</div>
          <div className="text-xs">location</div>
        </div>
      </div>
      <button>...</button>
    </header>
  );
};
export default PostHeader;
