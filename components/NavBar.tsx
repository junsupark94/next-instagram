import Link from "next/link";
import React from "react";
import ExploreIcon from "./Icons/ExploreIcon";
import HeartIcon from "./Icons/HeartIcon";
import HomeIcon from "./Icons/HomeIcon";
import InstagramIcon from "./Icons/InstagramIcon";
import MenuIcon from "./Icons/MenuIcon";
import MessengerIcon from "./Icons/MessengerIcon";
import PostIcon from "./Icons/PostIcon";
import ProfileIcon from "./Icons/ProfileIcon";
import ReelsIcon from "./Icons/ReelsIcon";
import SearchIcon from "./Icons/SearchIcon";
import InstagramLogo from "./Icons/InstagramLogo";

type NavBarProps = {};

const NavBar: React.FC<NavBarProps> = () => (
  <nav className="w-[72px]">
    <div className="w-[72px] lg:w-[244px] hidden h-screen fixed top-0 left-0 dark:text-white pt-2 px-6 pb-5 sm:flex flex-col items-center lg:items-start border-r border-gray-500 justify-between">
      <div>
        <Link href="/">
          <div className="pt-7 lg:hidden">
            <InstagramIcon className="w-6 h-6" />
          </div>
          <div className="hidden lg:block pt-8">
            <InstagramLogo />
          </div>
        </Link>
        <div className="flex flex-col gap-8 mt-14">
          <Link href="/" className="flex items-center gap-4">
            <HomeIcon />
            <span className="font-bold hidden lg:inline">Home</span>
          </Link>
          <Link href="/" className="flex items-center gap-4">
            <SearchIcon />
            <span className="hidden lg:inline">Search</span>
          </Link>
          <Link href="/" className="flex items-center gap-4">
            <ExploreIcon />
            <span className="hidden lg:inline">Explore</span>
          </Link>
          <Link href="/" className="flex items-center gap-4">
            <ReelsIcon />
            <span className="hidden lg:inline">Reels</span>
          </Link>
          <Link href="/" className="flex items-center gap-4">
            <MessengerIcon />
            <span className="hidden lg:inline">Messages</span>
          </Link>
          <button className="flex items-center gap-4">
            <HeartIcon />
            <span className="hidden lg:inline">Notifications</span>
          </button>
          <button className="flex items-center gap-4">
            <PostIcon />
            <span className="hidden lg:inline">Create</span>
          </button>
          <Link href="/" className="flex items-center gap-4">
            <ProfileIcon />
            <span className="hidden lg:inline">Profile</span>
          </Link>
        </div>
      </div>
      <button className="p-3 mb-3 hover:bg-gray-800 rounded-lg transition flex gap-4">
        <MenuIcon />
        <span className="hidden lg:inline">More</span>
      </button>
    </div>
  </nav>
);
export default NavBar;
