"use client";
import React, {
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import Image from "next/image";
import Link from "next/link";
import VideoIcon from "@/Icons/VideoIcon";
import CarouselIcon from "@/Icons/CarouselIcon";
import PinnedIcon from "@/Icons/PinnedIcon";
import { Post, User } from "@prisma/client";


type MorePostsProps = {
  posts: Post[];
  exclude?: string;
};

const MorePosts: React.FC<MorePostsProps> = ({ posts, exclude }) => {
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(36);

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!setStartIndex || !setEndIndex) return;
    const scrollHandler = () => {
      const foo = containerRef.current!.getBoundingClientRect();
      if (foo.y <= -1515) {
        setStartIndex((prev) => {
          if (prev === posts.length - 36) return prev;
          return prev + 3;
        });
        setEndIndex((prev) => {
          if (prev === posts.length) return prev;
          return prev + 3;
        });
      } else if (foo.y >= -910) {
        setStartIndex((prev) => {
          if (prev === 0) return prev;
          return prev - 3;
        });
        setEndIndex((prev) => {
          if (prev === 36) return prev;
          return prev - 3;
        });
      }
    };
    document.addEventListener("scroll", scrollHandler);
    return () => {
      document.removeEventListener("scroll", scrollHandler);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const displayPosts = posts.slice(startIndex, endIndex);

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
                  className="h-[300px] w-[300px] object-cover"
                />
              )}
              {media.type === "video" && (
                <video
                  src={post.content[0].src}
                  className="h-[300px] w-[300px] object-cover"
                  muted
                />
              )}
              {post.content.length > 1 ? (
                <CarouselIcon className="absolute right-2 top-2" />
              ) : (
                media.type === "video" && (
                  <VideoIcon className="absolute right-2 top-2" />
                )
              )}
            </Link>
          );
        })}
      </div>
    );

  return (
    <div className="grid grid-cols-3 gap-1" ref={containerRef}>
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
                className="h-[300px] w-[300px] object-cover"
              />
            )}
            {media.type === "video" && (
              <video
                src={post.content[0].src}
                className="h-[300px] w-[300px] object-cover"
                muted
              />
            )}
            {user.pinned.includes(post.id) ? (
              <PinnedIcon className="absolute right-2 top-2" />
            ) : post.content.length > 1 ? (
              <CarouselIcon className="absolute right-2 top-2" />
            ) : (
              media.type === "video" && (
                <VideoIcon className="absolute right-2 top-2" />
              )
            )}
          </Link>
        );
      })}
    </div>
  );
};

export default React.memo(MorePosts);
