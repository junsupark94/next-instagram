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
  <nav className="w-[72px] lg:w-[244px]">
    <div className="w-[72px] lg:w-[244px] hidden h-screen fixed top-0 left-0 dark:text-white pt-2 px-3 pb-3 sm:flex flex-col items-center lg:items-start border-r border-gray-500 justify-between">
      <section className="w-full">
        <Link href="/">
          <div className="mt-4 p-3 lg:hidden hover:bg-hover transition rounded-lg group">
            <InstagramIcon className="w-6 h-6 group-hover:scale-110 transition-transform" />
          </div>
          <div className="hidden lg:block pt-8 px-3">
            <InstagramLogo />
          </div>
        </Link>
        <article className="flex flex-col gap-2 mt-8">
          <Link
            href="/"
            className="flex items-center gap-4 hover:bg-hover transition p-3 rounded-lg group"
          >
            <div className="group-hover:scale-110 transition-transform">
              <HomeIcon />
            </div>
            <span className="font-bold hidden lg:inline">Home</span>
          </Link>
          <Link
            href="/"
            className="flex items-center gap-4 hover:bg-hover transition p-3 rounded-lg group"
          >
            <SearchIcon className="group-hover:scale-110 transition-transform" />
            <span className="hidden lg:inline">Search</span>
          </Link>
          <Link
            href="/"
            className="flex items-center gap-4 hover:bg-hover transition p-3 rounded-lg group"
          >
            <div className="group-hover:scale-110 transition-transform">
              <ExploreIcon />
            </div>
            <span className="hidden lg:inline">Explore</span>
          </Link>
          <Link
            href="/"
            className="flex items-center gap-4 hover:bg-hover transition p-3 rounded-lg group"
          >
            <div className="group-hover:scale-110 transition-transform">
              <ReelsIcon />
            </div>
            <span className="hidden lg:inline">Reels</span>
          </Link>
          <Link
            href="/"
            className="flex items-center gap-4 hover:bg-hover transition p-3 rounded-lg group"
          >
            <div className="group-hover:scale-110 transition-transform">
              <MessengerIcon />
            </div>
            <span className="hidden lg:inline">Messages</span>
          </Link>
          <button className="flex items-center gap-4 hover:bg-hover transition p-3 rounded-lg group">
            <div className="group-hover:scale-110 transition-transform">
              <HeartIcon />
            </div>
            <span className="hidden lg:inline">Notifications</span>
          </button>
          <button className="flex items-center gap-4 hover:bg-hover transition p-3 rounded-lg group">
            <div className="group-hover:scale-110 transition-transform">
              <PostIcon />
            </div>
            <span className="hidden lg:inline">Create</span>
          </button>
          <Link
            href="/"
            className="flex items-center gap-4 hover:bg-hover transition p-3 rounded-lg group"
          >
            <div className="group-hover:scale-110 transition-transform">
              <ProfileIcon />
            </div>
            <span className="hidden lg:inline">Profile</span>
          </Link>
        </article>
      </section>
      <button className="p-3 mb-3 hover:bg-hover rounded-lg transition flex gap-4 w-full group">
        <div className="group-hover:scale-110 transition-transform">
          <MenuIcon />
        </div>
        <span className="hidden lg:inline">More</span>
      </button>
    </div>
  </nav>
);
export default NavBar;
