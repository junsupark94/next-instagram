import React, { useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { DUMMY_DATA, Post } from "@/util/dummy-data-posts";
import VideoIcon from "@/Icons/VideoIcon";
import CarouselIcon from "@/Icons/CarouselIcon";
import { USERS, User } from "@/util/dummy-data-users";
import PinnedIcon from "@/Icons/PinnedIcon";

type MorePostsProps = {
  user: User;
  startIndex?: number;
  endIndex?: number;
  exclude?: string;
};

const MorePosts: React.FC<MorePostsProps> = ({
  user,
  startIndex = 0,
  endIndex = 6,
  exclude,
}) => {
  const sortedUserPosts = useMemo(() => {
    const userPosts = DUMMY_DATA.filter((post) => {
      if (String(post.id) === exclude) {
        return false;
      }
      return post.account === user.account;
    });
    const pinnedPosts : Post[] = [];
    const otherPosts : Post[] = [];
    userPosts.forEach(post => {
      if (pinnedPosts.length !== 3 && user.pinned.includes(post.id)) {
        pinnedPosts.push(post);
      } else {
        otherPosts.push(post);
      }
    })
    const otherPostsSorted = otherPosts.sort(
      (a, b) => b.date.valueOf() - a.date.valueOf()
    );
    return [...pinnedPosts, ...otherPostsSorted];
  }, [user.account, user.pinned]);

  const displayPosts = sortedUserPosts.slice(startIndex, endIndex);

  if (exclude)
    return (
      <div className="grid grid-cols-3 gap-1">
        {displayPosts.map((post) => {
          const media = post.content[0];
          return (
            <Link key={post.id} href={`/p/${post.id}`} className="relative">
              {media.type === "image" && (
                <Image
                  src={post.content[0].src}
                  alt="image"
                  width={300}
                  height={300}
                  className="w-[300px] h-[300px] object-cover"
                />
              )}
              {media.type === "video" && (
                <video
                  src={post.content[0].src}
                  className="w-[300px] h-[300px] object-cover"
                  muted
                />
              )}
              {post.content.length > 1 ? (
                <CarouselIcon className="absolute top-2 right-2" />
              ) : (
                media.type === "video" && (
                  <VideoIcon className="absolute top-2 right-2" />
                )
              )}
            </Link>
          );
        })}
      </div>
    );

  return (
    <div className="grid grid-cols-3 gap-1">
      {displayPosts.map((post) => {
        const media = post.content[0];
        return (
          <Link key={post.id} href={`/p/${post.id}`} className="relative">
            {media.type === "image" && (
              <Image
                src={post.content[0].src}
                alt="image"
                width={300}
                height={300}
                className="w-[300px] h-[300px] object-cover"
              />
            )}
            {media.type === "video" && (
              <video
                src={post.content[0].src}
                className="w-[300px] h-[300px] object-cover"
                muted
              />
            )}
            {user.pinned.includes(post.id) ? (
              <PinnedIcon className="absolute top-2 right-2" />
            ) : post.content.length > 1 ? (
              <CarouselIcon className="absolute top-2 right-2" />
            ) : (
              media.type === "video" && (
                <VideoIcon className="absolute top-2 right-2" />
              )
            )}
          </Link>
        );
      })}
    </div>
  );
};

export default React.memo(MorePosts);