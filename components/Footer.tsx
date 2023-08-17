import React from "react";
import HomeIcon from "./Icons/HomeIcon";
import MessengerIcon from "./Icons/MessengerIcon";
import ProfileIcon from "./Icons/ProfileIcon";
import ExploreIcon from "./Icons/ExploreIcon";
import ReelsIcon from "./Icons/ReelsIcon";
import PostIcon from "./Icons/PostIcon";

type Props = {};

export default function Footer({}: Props) {
  return (
    <footer className="p-3 bg-white dark:bg-black border-t border-gray-500">
      <nav className="flex justify-evenly">
        <HomeIcon />
        <ExploreIcon />
        <ReelsIcon />
        <PostIcon />
        <MessengerIcon />
        <ProfileIcon />
      </nav>
    </footer>
  );
}
