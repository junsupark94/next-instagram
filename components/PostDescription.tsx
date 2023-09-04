import React from "react";
import Image from "next/image";
import VerifiedIcon from "@/Icons/VerifiedIcon";
import { getShortenedRelative } from "@/utils/relative-time";
import { User } from "@/utils/dummy-data-users";
import { Post } from "@/utils/dummy-data-posts";
import { cn } from "@/utils/cn";
import Link from "next/link";

type PostDescriptionProps = {
  user: User;
  post: Post;
  className?: string;
};

const PostDescription: React.FC<PostDescriptionProps> = ({ user, post, className }) => {
  return (
    <div className={cn("flex gap-2 p-4 pb-1", className)}>
      <Image
        src={user.profilePicture}
        alt="profile picture"
        width={50}
        height={50}
        className="w-6 h-6 rounded-full"
      />
      <article>
        <div className="flex gap-1 items-center">
          <Link href={`/${user.account}`} className="font-semibold">{user.account}</Link>
          {user.verified && <VerifiedIcon className="w-3 h-3" />}
          <span className="text-[#a8a8a8]">
            {getShortenedRelative(post.date)}
          </span>
        </div>
        <p>{post.description}</p>
      </article>
    </div>
  );
};
export default React.memo(PostDescription);
