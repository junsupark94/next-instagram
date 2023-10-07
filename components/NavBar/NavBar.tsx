"use client";
import Link from "next/link";
import ExploreIcon from "@/Icons/ExploreIcon";
import HeartIcon from "@/Icons/HeartIcon";
import HomeIcon from "@/Icons/HomeIcon";
import InstagramIcon from "@/Icons/InstagramIcon";
import MessengerIcon from "@/Icons/MessengerIcon";
import Image from "next/image";
import ReelsIcon from "@/Icons/ReelsIcon";
import SearchIcon from "@/Icons/SearchIcon";
import InstagramLogo from "@/Icons/InstagramLogo";
import NavBarMenuButton from "./NavBarMenuButton";
import BottomNavBar from "./BottomNavBar";
import { useAuth } from "@/hooks/use-auth-hook";
import ProfileIcon from "@/Icons/ProfileIcon";
import {Button} from "react-aria-components";
import PostButton from "./post-button";


type NavBarProps = {};

const NavBar: React.FC<NavBarProps> = () => {
  const user = useAuth();

  return (
    <nav className="z-10 w-[72px] shrink-0 lg:w-[244px]">
      <div className="fixed left-0 top-0 hidden h-screen w-[72px] flex-col items-center justify-between border-r border-[#dbdbdb] px-3 pb-3 pt-2 dark:border-[#262626] dark:text-white sm:flex lg:w-[244px] lg:items-start">
        <section className="w-full">
          <Link href="/">
            <div className="group mt-4 rounded-lg p-3 transition hover:bg-gray-100 dark:hover:bg-hover lg:hidden">
              <InstagramIcon className="h-6 w-6 transition-transform group-hover:scale-110 group-active:scale-100" />
            </div>
            <div className="hidden px-3 pt-8 lg:block">
              <InstagramLogo />
            </div>
          </Link>
          <article className="mt-8 flex flex-col gap-2">
            <Link
              href="/"
              className="group flex items-center gap-4 rounded-lg p-3 transition hover:bg-gray-100 active:brightness-50 dark:hover:bg-hover"
            >
              <div className="transition-transform group-hover:scale-110 group-active:scale-100">
                <HomeIcon />
              </div>
              <span className="hidden font-bold lg:inline">Home</span>
            </Link>
            <button
              // href="/"
              className="group flex cursor-default items-center gap-4 rounded-lg p-3 transition hover:bg-gray-100 active:brightness-50 dark:hover:bg-hover"
            >
              <SearchIcon className="transition-transform group-hover:scale-110 group-active:scale-100" />
              <span className="hidden line-through lg:inline">Search</span>
            </button>
            <button
              // href="/"
              className="group flex cursor-default items-center gap-4 rounded-lg p-3 transition hover:bg-gray-100 active:brightness-50 dark:hover:bg-hover"
            >
              <div className="transition-transform group-hover:scale-110 group-active:scale-100">
                <ExploreIcon />
              </div>
              <span className="hidden line-through lg:inline">Explore</span>
            </button>
            <button
              // href="/"
              className="group flex cursor-default items-center gap-4 rounded-lg p-3 transition hover:bg-gray-100 active:brightness-50 dark:hover:bg-hover"
            >
              <div className="transition-transform group-hover:scale-110 group-active:scale-100">
                <ReelsIcon />
              </div>
              <span className="hidden line-through lg:inline">Reels</span>
            </button>
            <Button
              // href="/"
              className="group flex cursor-default items-center gap-4 rounded-lg p-3 transition hover:bg-gray-100 active:brightness-50 dark:hover:bg-hover"
            >
              <div className="transition-transform group-hover:scale-110 group-active:scale-100">
                <MessengerIcon />
              </div>
              <span className="hidden line-through lg:inline">Messages</span>
            </Button>
            <button className="group flex cursor-default items-center gap-4 rounded-lg p-3 transition hover:bg-gray-100 active:brightness-50 dark:hover:bg-hover">
              <div className="transition-transform group-hover:scale-110 group-active:scale-100">
                <HeartIcon />
              </div>
              <span className="hidden line-through lg:inline">
                Notifications
              </span>
            </button>
            {/* OVER HERE JUNSU */}
            <PostButton />
            <Link
              href={user.username}
              className="group flex items-center gap-4 rounded-lg p-3 transition hover:bg-gray-100 active:brightness-50 dark:hover:bg-hover"
            >
              <div className="transition-transform group-hover:scale-110 group-active:scale-100">
                {!user.profile_picture_url && <ProfileIcon />}
                {user.profile_picture_url && (
                  <Image
                    src={user.profile_picture_url}
                    alt="profile picture"
                    width={30}
                    height={30}
                    className="rounded-full"
                  />
                )}
              </div>
              <span className="hidden lg:inline">Profile</span>
            </Link>
          </article>
        </section>
        <NavBarMenuButton />
      </div>
      <div className="fixed bottom-0 left-0 w-screen sm:hidden">
        <BottomNavBar />
      </div>
    </nav>
  );
};
export default NavBar;
