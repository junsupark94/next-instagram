import React from "react";
import HomeIcon from "./Icons/HomeIcon";
import MessengerIcon from "./Icons/MessengerIcon";
import ProfileIcon from "./Icons/ProfileIcon";
import SearchIcon from "./Icons/SearchIcon";

type Props = {};

export default function Footer({}: Props) {
  return (
    <footer className="fixed bottom-0 p-2 bg-white dark:bg-black w-full border-t border-gray-500">
      <nav className="flex justify-between">
        <HomeIcon />
        <SearchIcon />
        <MessengerIcon />
        <ProfileIcon />
      </nav>
    </footer>
  );
}
