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
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import FollowDialog from "@/components/FollowDialog";
import UserDialog from "@/components/UserDialog";

export default function ProfilePage({ params }: { params: { user: string } }) {
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(27);
  const [following, setFollowing] = useState(false);
  const [showFollowDialog, setShowFollowDialog] = useState(false);

  const user = USERS.find((user) => user.account === params.user);
  if (!user) return <div>Error could not find user: {params.user}</div>;

  return (
    <div className="mx-auto max-w-[935px] grow border border-red-500 px-5 pt-8">
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
            <UserDialog user={user}/>
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
                className="ml-5 px-5 py-1.5 font-semibold bg-[#0095f6] rounded-lg text-sm"
              >
                Follow
              </button>
            )}
            {following && <FollowDialog user={user} setFollowing={setFollowing} setShowFollowDialog={setShowFollowDialog} />}
            <button className="px-4 py-1.5 font-semibold bg-[#363636] rounded-lg text-sm">
              Message
            </button>
            <button className="p-2 bg-[#363636] rounded-lg">
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
          <div className="border-2 border-[#121212] rounded-full p-0.5">
            <div className="bg-[#121212] h-[77px] w-[77px] flex justify-center items-center rounded-full">
              <PlusIcon />
            </div>
          </div>
          <span className="text-xs">New</span>
        </button>
      </section>
      <section className="border-t border-gray-500 text-xs font-semibold flex justify-center gap-16">
        <button className="flex h-12 items-center gap-2 text-[#f5f5f5] border-t">
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
      <MorePosts user={user} startIndex={startIndex} endIndex={endIndex} />
    </div>
  );
}
