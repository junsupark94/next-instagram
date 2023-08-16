import React from "react";
import ProfileIcon from "./Icons/ProfileIcon";

type StoryButtonProps = {};

const StoryButton: React.FC<StoryButtonProps> = () => {
  return (
    <li className="flex flex-col items-center">
      <button className="rounded-full bg-gradient-to-tr from-yellow-500 via-red-500 to-purple-700">
        <ProfileIcon className="w-14 h-14 -m-0.5" />
      </button>
      <div>Name</div>
    </li>
  );
};
export default StoryButton;
