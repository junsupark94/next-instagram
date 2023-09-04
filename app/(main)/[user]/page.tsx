"use client";
import GuidesIcon from "@/Icons/GuidesIcon";
import OptionsIcon from "@/Icons/OptionsIcon";
import PlusIcon from "@/Icons/PlusIcon";
import PostsIcon from "@/Icons/PostsIcon";
import ReelsIcon from "@/Icons/ReelsIcon";
import SuggestedProfileIcon from "@/Icons/SuggestedProfileIcon";
import TaggedIcon from "@/Icons/TaggedIcon";
import VerifiedIcon from "@/Icons/VerifiedIcon";
import MorePosts from "@/components/MorePosts";
import { USERS } from "@/utils/dummy-data-users";
import Image from "next/image";
import { useState } from "react";
import FollowDialog from "@/components/FollowDialog";
import UserDialog from "@/components/UserDialog";
import CogIcon from "@/Icons/CogIcon";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export default function ProfilePage({ params }: { params: { user: string } }) {
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(36);
  const [following, setFollowing] = useState(false);

  const user = USERS.find((user) => user.account === params.user);
  if (!user) return <div>Error could not find user: {params.user}</div>;

  return (
    <div className="mx-auto max-w-[935px] grow px-5 pt-8">
      <div className="h-[44px] sm:hidden">
        <div className="h-[44px] fixed top-0 left-0 w-screen border z-10 bg-white dark:bg-black flex">
          <button className="cursor-default p-2">
            <CogIcon />
          </button>
          <span className="grow flex items-center justify-center font-bold text-base">
            {user.account}
          </span>
          <div className="p-2"><DiscoverPeopleIcon/></div>
        </div>
      </div>
      <header className="flex items-center justify-between pb-11">
        <div className="grow flex justify-center">
          <Image
            src={user.profilePicture}
            alt="profile picture"
            width={200}
            height={200}
            className="w-[150px] h-[150px] rounded-full"
          />
        </div>
        <section className="grow-[2] flex flex-col">
          <div className="flex gap-2 items-center">
            <UserDialog user={user} />
            {user.verified && (
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <VerifiedIcon />
                  </TooltipTrigger>
                  <TooltipContent>Verified</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            )}

            {!following && (
              <button
                onClick={() => setFollowing(true)}
                className="ml-5 px-5 py-1.5 font-semibold bg-[#0095f6] text-white rounded-lg text-sm"
              >
                Follow
              </button>
            )}
            {following && (
              <FollowDialog user={user} setFollowing={setFollowing} />
            )}
            <button className="px-4 py-1.5 font-semibold bg-[#efefef] dark:bg-[#363636] rounded-lg text-sm">
              Message
            </button>
            <button className="p-2 bg-[#efefef] dark:bg-[#363636] rounded-lg">
              <SuggestedProfileIcon />
            </button>
            <button>
              <OptionsIcon className="w-8 h-8" />
            </button>
          </div>
          <ul className="flex gap-8 my-5">
            <li>{user.postCount} posts</li>
            <li>{user.followerCount} followers</li>
            <li>{user.followingCount} following</li>
          </ul>
          <div>Bio</div>
          <div>Followed by</div>
        </section>
      </header>
      <section className="pb-11">
        <button className="p-3">
          <div className="border-2 dark:border-[#121212] border-gray-300 rounded-full p-0.5">
            <div className="dark:bg-[#121212] bg-[#fafafa] h-[77px] w-[77px] flex justify-center items-center rounded-full">
              <PlusIcon />
            </div>
          </div>
          <span className="text-xs">New</span>
        </button>
      </section>
      <section className="border-t border-[#8e8e8e] text-xs font-semibold flex justify-center gap-16">
        <button className="flex h-12 items-center gap-2 dark:text-[#f5f5f5] border-t border-black dark:border-white">
          <PostsIcon />
          <span>POSTS</span>
        </button>
        <button className="flex h-12 items-center gap-2 text-[#a8a8a8] cursor-default">
          <ReelsIcon className="w-3 h-3" />
          <span className="line-through">REELS</span>
        </button>
        <button className="flex h-12 items-center gap-2 text-[#a8a8a8] cursor-default">
          <GuidesIcon />
          <span className="line-through">GUIDES</span>
        </button>
        <button className="flex h-12 items-center gap-2 text-[#a8a8a8] cursor-default">
          <TaggedIcon />
          <span className="line-through">TAGGED</span>
        </button>
      </section>
      <MorePosts
        user={user}
        startIndex={startIndex}
        endIndex={endIndex}
        setStartIndex={setStartIndex}
        setEndIndex={setEndIndex}
      />
    </div>
  );
}

function DiscoverPeopleIcon() {
  return (
    <svg
      aria-label="Discover People"
      color="currentColor"
      fill="currentColor"
      height="24"
      role="img"
      viewBox="0 0 48 48"
      width="24"
      className="w-7 h-7"
    >
      <title>Discover People</title>
      <path d="M32 25.5c5.2 0 9.5-4.3 9.5-9.5S37.2 6.5 32 6.5s-9.5 4.3-9.5 9.5 4.3 9.5 9.5 9.5zm0-16c3.6 0 6.5 2.9 6.5 6.5s-2.9 6.5-6.5 6.5-6.5-2.9-6.5-6.5 2.9-6.5 6.5-6.5zm5.5 19h-11c-5.5 0-10 4.5-10 10V40c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5v-1.5c0-3.9 3.1-7 7-7h11c3.9 0 7 3.1 7 7V40c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5v-1.5c0-5.5-4.5-10-10-10zm-20-4.5c0-.8-.7-1.5-1.5-1.5h-5.5V17c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5v5.5H2c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h5.5V31c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5v-5.5H16c.8 0 1.5-.7 1.5-1.5z"></path>
    </svg>
  );
}
