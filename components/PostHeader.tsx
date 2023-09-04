import React, { useState } from "react";
import OptionsIcon from "@/Icons/OptionsIcon";
import Link from "next/link";
import HoverDialog from "./HoverDialog";
import { User } from "@/utils/dummy-data-users";
import Image from "next/image";
import { createPortal } from "react-dom";
import UnfollowDialog from "./UnfollowDialog";
import { Post } from "@/utils/dummy-data-posts";
import VerifiedIcon from "@/Icons/VerifiedIcon";
import { cn } from "@/utils/cn";

type PostHeaderProps = {
  user: User;
  location?: string;
  className?: string;
};

const PostHeader: React.FC<PostHeaderProps> = ({ user, location, className }) => {
  // console.log("PostHeader render");
  const [following, setFollowing] = useState(false);
  const [showDialog, setShowDialog] = useState(false);

  return (
    <header className={cn("flex justify-between items-center xs:py-2 px-4 border-b dark:border-gray-800 border-[#dbdbdb]", className)}>
      <div className="flex gap-2 items-center">
        <HoverDialog>
          <Link href={`/${user.account}`}>
            <Image
              src={user.profilePicture}
              alt="profile picture"
              width={50}
              height={50}
              className="w-8 h-8 rounded-full"
            />
          </Link>
        </HoverDialog>
        <div className="flex flex-col">
          <div className="flex gap-2 items-center">
            <HoverDialog>
              <Link
                href={`/${user.account}`}
                className="hover:opacity-50 font-semibold"
              >
                {user.account}
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
