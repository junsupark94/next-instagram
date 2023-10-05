"use client";
import Link from "next/link";
import ExploreIcon from "@/Icons/ExploreIcon";
import HeartIcon from "@/Icons/HeartIcon";
import HomeIcon from "@/Icons/HomeIcon";
import InstagramIcon from "@/Icons/InstagramIcon";
import MessengerIcon from "@/Icons/MessengerIcon";
import PostIcon from "@/Icons/CreateIcon";
import Image from "next/image";
import ReelsIcon from "@/Icons/ReelsIcon";
import SearchIcon from "@/Icons/SearchIcon";
import InstagramLogo from "@/Icons/InstagramLogo";
import NavBarMenuButton from "./NavBarMenuButton";
import { useContext } from "react";
import BottomNavBar from "./BottomNavBar";
import { AuthContext } from "@/providers/auth-provider";

type NavBarProps = {};

const NavBar: React.FC<NavBarProps> = () => {
  const user = useContext(AuthContext);

  return (
    <nav className="w-[72px] lg:w-[244px] shrink-0 z-10">
      <div className="w-[72px] lg:w-[244px] hidden h-screen fixed top-0 left-0 dark:text-white pt-2 px-3 pb-3 sm:flex flex-col items-center lg:items-start border-r border-[#dbdbdb] dark:border-[#262626] justify-between">
        <section className="w-full">
          <Link href="/">
            <div className="mt-4 p-3 lg:hidden dark:hover:bg-hover hover:bg-gray-100 transition rounded-lg group">
              <InstagramIcon className="w-6 h-6 group-hover:scale-110 transition-transform group-active:scale-100" />
            </div>
            <div className="hidden lg:block pt-8 px-3">
              <InstagramLogo />
            </div>
          </Link>
          <article className="flex flex-col gap-2 mt-8">
            <Link
              href="/"
              className="flex items-center gap-4 dark:hover:bg-hover hover:bg-gray-100 transition p-3 rounded-lg group active:brightness-50"
            >
              <div className="group-hover:scale-110 transition-transform group-active:scale-100">
                <HomeIcon />
              </div>
              <span className="font-bold hidden lg:inline">Home</span>
            </Link>
            <button
              // href="/"
              className="flex items-center gap-4 dark:hover:bg-hover hover:bg-gray-100 transition p-3 rounded-lg group active:brightness-50 cursor-default"
            >
              <SearchIcon className="group-hover:scale-110 transition-transform group-active:scale-100" />
              <span className="hidden lg:inline line-through">Search</span>
            </button>
            <button
              // href="/"
              className="flex items-center gap-4 dark:hover:bg-hover hover:bg-gray-100 transition p-3 rounded-lg group active:brightness-50 cursor-default"
            >
              <div className="group-hover:scale-110 transition-transform group-active:scale-100">
                <ExploreIcon />
              </div>
              <span className="hidden lg:inline line-through">Explore</span>
            </button>
            <button
              // href="/"
              className="flex items-center gap-4 dark:hover:bg-hover hover:bg-gray-100 transition p-3 rounded-lg group active:brightness-50 cursor-default"
            >
              <div className="group-hover:scale-110 transition-transform group-active:scale-100">
                <ReelsIcon />
              </div>
              <span className="hidden lg:inline line-through">Reels</span>
            </button>
            <button
              // href="/"
              className="flex items-center gap-4 dark:hover:bg-hover hover:bg-gray-100 transition p-3 rounded-lg group active:brightness-50 cursor-default"
            >
              <div className="group-hover:scale-110 transition-transform group-active:scale-100">
                <MessengerIcon />
              </div>
              <span className="hidden lg:inline line-through">Messages</span>
            </button>
            <button className="flex items-center gap-4 dark:hover:bg-hover hover:bg-gray-100 transition p-3 rounded-lg group active:brightness-50 cursor-default">
              <div className="group-hover:scale-110 transition-transform group-active:scale-100">
                <HeartIcon />
              </div>
              <span className="hidden lg:inline line-through">
                Notifications
              </span>
            </button>
            <button className="flex items-center gap-4 dark:hover:bg-hover hover:bg-gray-100 transition p-3 rounded-lg group active:brightness-50 cursor-default">
              <div className="group-hover:scale-110 transition-transform group-active:scale-100">
                <PostIcon />
              </div>
              <span className="hidden lg:inline line-through">Create</span>
            </button>
            <Link
              href="/junsupark"
              className="flex items-center gap-4 dark:hover:bg-hover hover:bg-gray-100 transition p-3 rounded-lg group active:brightness-50"
            >
              <div className="group-hover:scale-110 transition-transform group-active:scale-100">
                <Image  src="/junsu park.jpeg" alt="profile picture" width={30} height={30} className="rounded-full"/>
              </div>
              <span className="hidden lg:inline">Profile</span>
            </Link>
          </article>
        </section>
        <NavBarMenuButton />
      </div>
      <div className="sm:hidden fixed bottom-0 left-0 w-screen">
        <BottomNavBar />
      </div>
    </nav>
  );
};
export default NavBar;
