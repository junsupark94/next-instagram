import React, { useState } from "react";
import OptionsIcon from "@/Icons/OptionsIcon";
import Link from "next/link";
import HoverDialog from "./HoverDialog";
import Image from "next/image";
import { createPortal } from "react-dom";
import UnfollowDialog from "./UnfollowDialog";
import VerifiedIcon from "@/Icons/VerifiedIcon";
import { cn, default_profile_picture } from "@/lib/utils";
import { User } from "@prisma/client";

type PostHeaderProps = {
  user: User;
  location: string | null;
  className?: string;
};

const PostHeader: React.FC<PostHeaderProps> = ({ user, location, className }) => {
  // console.log("PostHeader render");
  const [following, setFollowing] = useState(false);
  const [showDialog, setShowDialog] = useState(false);

  return (
    <header className={cn("flex justify-between items-center xs:py-2 px-4 border-b dark:border-gray-800 border-[#dbdbdb]", className)}>
      <div className="flex gap-2 items-center">
        <HoverDialog user={user}>
          <Link href={`/${user.username}`}>
            <Image
              src={user.profile_picture_url || default_profile_picture}
              alt="profile picture"
              width={50}
              height={50}
              className="w-8 h-8 rounded-full"
            />
          </Link>
        </HoverDialog>
        <div className="flex flex-col">
          <div className="flex gap-2 items-center">
            <HoverDialog user={user}>
              <Link
                href={`/${user.username}`}
                className="hover:opacity-50 font-semibold"
              >
                {user.username}
              </Link>
            </HoverDialog>
            {user.verified && <VerifiedIcon className="w-3 h-3"/>}
            <span>{` • `}</span>
            {!following && (
              <button
                className="text-[#0095f6] hover:text-[#e0f1ff] font-semibold"
                onClick={() => setFollowing(true)}
              >
                Follow
              </button>
            )}
            {following && (
              <button
                className="text-[#FAFAFA] hover:opacity-50 font-semibold"
                onClick={() => setShowDialog(true)}
              >
                Following
              </button>
            )}
            {showDialog &&
              createPortal(
                <UnfollowDialog setFollowing={setFollowing} setShowDialog={setShowDialog} user={user}/>,
                document.body
              )}
          </div>
          {location && <div className="text-[12px]">{location}</div>}
        </div>
      </div>
      <OptionsIcon />
    </header>
  );
};
export default React.memo(PostHeader);
