import GuidesIcon from "@/Icons/GuidesIcon";
import OptionsIcon from "@/Icons/OptionsIcon";
import PlusIcon from "@/Icons/PlusIcon";
import PostsIcon from "@/Icons/PostsIcon";
import ReelsIcon from "@/Icons/ReelsIcon";
import SuggestedProfileIcon from "@/Icons/SuggestedProfileIcon";
import TaggedIcon from "@/Icons/TaggedIcon";
import VerifiedIcon from "@/Icons/VerifiedIcon";
import Image from "next/image";
import UserDialog from "@/components/UserDialog";
import CogIcon from "@/Icons/CogIcon";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { db } from "@/lib/db";
import Following from "./_components/following";
import MorePosts from "./_components/more-posts";
import { default_profile_picture } from "@/lib/utils";

export default async function ProfilePage({
  params,
}: {
  params: { user: string };
}) {
  const user = await db.user.findUnique({
    where: {
      username: params.user,
    },
    include: {
      post: true,
      agent: true,
      target: true,
    },
  });

  if (!user) return <div>Error could not find user: {params.user}</div>;

  console.log("user.post", user.post);
  console.log("user.agent", user.agent);
  console.log("user.target", user.target);

  return (
    <div className="mx-auto max-w-[935px] grow px-5 pt-8">
      <div className="h-[44px] sm:hidden">
        <div className="fixed left-0 top-0 z-10 flex h-[44px] w-screen border bg-white dark:bg-black">
          <button className="cursor-default p-2">
            <CogIcon />
          </button>
          <span className="flex grow items-center justify-center text-base font-bold">
            {user.username}
          </span>
          <div className="p-2">
            <DiscoverPeopleIcon />
          </div>
        </div>
      </div>
      <header className="flex items-center justify-between pb-11">
        <div className="mr-10 flex shrink-0 grow justify-center">

            <Image
              src={user.profile_picture_url || default_profile_picture}
              alt="profile picture"
              width={200}
              height={200}
              className="h-[150px] w-[150px] rounded-full object-cover"
            />
        </div>
        <section className="flex grow-[2] flex-col">
          <div className="flex items-center gap-2">
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

            <Following user={user} />
            <button className="cursor-default rounded-lg bg-[#efefef] px-4 py-1.5 text-sm font-semibold line-through dark:bg-[#363636]">
              Message
            </button>
            <button className="cursor-default rounded-lg bg-[#efefef] p-2 dark:bg-[#363636]">
              <SuggestedProfileIcon />
            </button>
            <button className="cursor-default">
              <OptionsIcon className="h-8 w-8" />
            </button>
          </div>
          <ul className="my-5 flex gap-8">
            <li>{user.post.length} posts</li>
            <li>{user.target.length} followers</li>
            <li>{user.agent.length} following</li>
          </ul>
          <div className="whitespace-pre-wrap">{user.bio}</div>
          {/* <div>Followed by</div> */}
        </section>
      </header>
      <section className="pb-11">
        <button className="cursor-default p-3">
          <div className="rounded-full border-2 border-gray-300 p-0.5 dark:border-[#121212]">
            <div className="flex h-[77px] w-[77px] items-center justify-center rounded-full bg-[#fafafa] dark:bg-[#121212]">
              <PlusIcon />
            </div>
          </div>
          <span className="text-xs">New</span>
        </button>
      </section>
      <section className="flex justify-center gap-16 border-t border-[#8e8e8e] text-xs font-semibold">
        <button className="flex h-12 items-center gap-2 border-t border-black dark:border-white dark:text-[#f5f5f5]">
          <PostsIcon />
          <span>POSTS</span>
        </button>
        <button className="flex h-12 cursor-default items-center gap-2 text-[#a8a8a8]">
          <ReelsIcon className="h-3 w-3" />
          <span className="line-through">REELS</span>
        </button>
        <button className="flex h-12 cursor-default items-center gap-2 text-[#a8a8a8]">
          <GuidesIcon />
          <span className="line-through">GUIDES</span>
        </button>
        <button className="flex h-12 cursor-default items-center gap-2 text-[#a8a8a8]">
          <TaggedIcon />
          <span className="line-through">TAGGED</span>
        </button>
      </section>
      {/* <MorePosts posts={user.post} /> */}
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
      className="h-7 w-7"
    >
      <title>Discover People</title>
      <path d="M32 25.5c5.2 0 9.5-4.3 9.5-9.5S37.2 6.5 32 6.5s-9.5 4.3-9.5 9.5 4.3 9.5 9.5 9.5zm0-16c3.6 0 6.5 2.9 6.5 6.5s-2.9 6.5-6.5 6.5-6.5-2.9-6.5-6.5 2.9-6.5 6.5-6.5zm5.5 19h-11c-5.5 0-10 4.5-10 10V40c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5v-1.5c0-3.9 3.1-7 7-7h11c3.9 0 7 3.1 7 7V40c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5v-1.5c0-5.5-4.5-10-10-10zm-20-4.5c0-.8-.7-1.5-1.5-1.5h-5.5V17c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5v5.5H2c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h5.5V31c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5v-5.5H16c.8 0 1.5-.7 1.5-1.5z"></path>
    </svg>
  );
}
