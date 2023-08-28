import React from "react";
import HomeIcon from "@/Icons/HomeIcon";
import MessengerIcon from "@/Icons/MessengerIcon";
import Image from "next/image";
import ExploreIcon from "@/Icons/ExploreIcon";
import ReelsIcon from "@/Icons/ReelsIcon";
import PostIcon from "@/Icons/CreateIcon";

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
        <Image
          src="/junsu park.jpeg"
          alt="profile picture"
          width={30}
          height={30}
          className="rounded-full"
        />
      </div>
    </nav>
  );
}
