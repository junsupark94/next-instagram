import React from "react";
import HomeIcon from "../Icons/HomeIcon";
import MessengerIcon from "../Icons/MessengerIcon";
import ProfileIcon from "../Icons/ProfileIcon";
import ExploreIcon from "../Icons/ExploreIcon";
import ReelsIcon from "../Icons/ReelsIcon";
import PostIcon from "../Icons/CreateIcon";

type Props = {};

export default function BottomNavBar({}: Props) {
  return (
    <nav className="p-3 bg-white dark:bg-black border-t border-gray-500">
      <div className="flex justify-evenly">
        <HomeIcon />
        <ExploreIcon />
        <ReelsIcon />
        <PostIcon />
        <MessengerIcon />
        <ProfileIcon />
      </div>
    </nav>
  );
}
