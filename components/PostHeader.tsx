import React from "react";
import OptionsIcon from "./Icons/OptionsIcon";
import ProfileIcon from "./Icons/ProfileIcon";
import { getRelativeTimeString } from "@/util/relative-time";

type PostHeaderProps = {
  account: string;
  date: Date;
};

const PostHeader: React.FC<PostHeaderProps> = ({ account, date }) => {
  console.log('PostHeader render')
  return (
    <header className="flex justify-between items-center xs:py-2">
      <div className="flex gap-2 items-center">
        <ProfileIcon className="w-8 h-8" />
        <div className="flex flex-col">
          <div className="flex gap-2 items-center">
            <span>{`${account} • `}</span>
            <span className="text-blue-400">Follow</span>
          </div>
          <div className="text-[12px]">Location or Original Audio</div>
        </div>
      </div>
      <OptionsIcon />
    </header>
  );
};
export default React.memo(PostHeader);
