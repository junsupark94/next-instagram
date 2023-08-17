import React from "react";
import ProfileIcon from "./Icons/ProfileIcon";

type FollowSuggestionProps = {};

const FollowSuggestion: React.FC<FollowSuggestionProps> = () => {
  return (
    <li className="flex justify-between">
      <section className="flex gap-2">
        <ProfileIcon className="w-10 h-10" />
        <div>
          <div className="font-bold">account name</div>
          <div className="text-[#a8a8a8] text-xs">Reason to follow them</div>
        </div>
      </section>
      <button className="text-xs text-[#0095f6] font-semibold">Follow</button>
    </li>
  );
};
export default FollowSuggestion;
