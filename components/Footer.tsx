import Image from "next/image";
import React from "react";
import HomeIcon from "./Icons/HomeIcon";
import ExploreIcon from "./Icons/ExploreIcon";
import ReelsIcon from "./Icons/ReelsIcon";
import PostIcon from "./Icons/PostIcon";
import MessengerIcon from "./Icons/MessengerIcon";
import ProfileIcon from "./Icons/ProfileIcon";

type Props = {};

export default function Footer({}: Props) {
  return (
    <footer className="fixed bottom-0 p-2 bg-white w-full">
      <nav className="flex justify-between">
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
