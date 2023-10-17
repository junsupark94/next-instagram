import React from "react";
import Image from "next/image";
import VerifiedIcon from "@/Icons/VerifiedIcon";
import { getShortenedRelative } from "@/utils/relative-time";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { convertText } from "@/utils/text";

type PostDescriptionProps = {
  profile_picture_url: string | null;
  username: string;
  verified: boolean;
  description: string;
  created_at: Date;
  className?: string;
};

const PostDescription: React.FC<PostDescriptionProps> = ({
  profile_picture_url,
  username,
  verified,
  description,
  created_at,
  className,
}) => {
  return (
    <div className={cn("flex gap-2 pb-1", className)}>
      <Image
        src={profile_picture_url || "/default_profile.jpeg"}
        alt="profile picture"
        width={32}
        height={32}
        className="self-start rounded-full object-cover"
      />
      <div>
        <div className="flex items-center gap-1">
          <Link href={`/${username}`} className="font-semibold">
            {username}
          </Link>
          {verified && <VerifiedIcon className="h-3 w-3" />}
          <p className="whitespace-pre-wrap">{convertText(description)}</p>
        </div>
        <span className="pb-1 text-xs text-neutral-400">
          {getShortenedRelative(created_at)}
        </span>
      </div>
    </div>
  );
};
export default PostDescription;
