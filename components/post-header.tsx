import React, { useState } from "react";
import OptionsIcon from "@/Icons/OptionsIcon";
import Link from "next/link";
import HoverDialog from "./hover-dialog";
import Image from "next/image";
import { createPortal } from "react-dom";
import UnfollowDialog from "./unfollow-dialog";
import VerifiedIcon from "@/Icons/VerifiedIcon";
import { cn } from "@/lib/utils";

type PostHeaderProps = {
  location: string | null;
  className?: string;
  username: string;
  profile_picture_url: string | null;
  verified: boolean;
  follower_count: number;
  following_count: number;
  post_count: number;
};

const PostHeader: React.FC<PostHeaderProps> = ({
  location,
  className,
  username,
  profile_picture_url,
  verified,
  follower_count,
  following_count,
  post_count,
}) => {
  const [following, setFollowing] = useState(false);
  const [showDialog, setShowDialog] = useState(false);

  return (
    <header
      className={cn(
        "flex items-center justify-between border-b border-[#dbdbdb] px-4 dark:border-gray-800 xs:py-2",
        className,
      )}
    >
      <div className="flex items-center gap-2">
        <HoverDialog
          follower_count={follower_count}
          following_count={following_count}
          post_count={post_count}
        >
          <Link href={`/${username}`}>
            <Image
              src={profile_picture_url || "/default_profile.jpeg"}
              alt="profile picture"
              width={50}
              height={50}
              className="h-8 w-8 rounded-full"
            />
          </Link>
        </HoverDialog>
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <HoverDialog
              follower_count={follower_count}
              following_count={following_count}
              post_count={post_count}
            >
              <Link
                href={`/${username}`}
                className="font-semibold hover:opacity-50"
              >
                {username}
              </Link>
            </HoverDialog>
            {verified && <VerifiedIcon className="h-3 w-3" />}
            <span>{` • `}</span>
            {!following && (
              <button
                className="font-semibold text-[#0095f6] hover:text-[#e0f1ff]"
                onClick={() => setFollowing(true)}
              >
                Follow
              </button>
            )}
            {following && (
              <button
                className="font-semibold text-[#FAFAFA] hover:opacity-50"
                onClick={() => setShowDialog(true)}
              >
                Following
              </button>
            )}
            {showDialog &&
              createPortal(
                <UnfollowDialog
                  setFollowing={setFollowing}
                  setShowDialog={setShowDialog}
                  profile_picture_url={profile_picture_url}
                  username={username}
                />,
                document.body,
              )}
          </div>
          {location && <div className="text-[12px]">{location}</div>}
        </div>
      </div>
      <OptionsIcon />
    </header>
  );
};
export default PostHeader;
