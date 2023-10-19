"use client";
import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useRef
} from "react";
import Image from "next/image";
import Link from "next/link";
import VideoIcon from "@/Icons/VideoIcon";
import CarouselIcon from "@/Icons/CarouselIcon";
import { PostWithMedia, UserWithPosts } from "@/app/(main)/[username]/page";
import PinnedIcon from "@/Icons/PinnedIcon";

type MorePostsProps = {
  creator: UserWithPosts;
  startIndex?: number;
  endIndex?: number;
  pinnedPosts: PostWithMedia[];
  setStartIndex?: Dispatch<SetStateAction<number>>;
  setEndIndex?: Dispatch<SetStateAction<number>>;
};

const MorePosts: React.FC<MorePostsProps> = ({
  creator,
  startIndex = 0,
  endIndex = 6,
  setStartIndex,
  setEndIndex,
  pinnedPosts,
}) => {

  const containerRef = useRef<HTMLDivElement>(null);

  const totalPosts = [...pinnedPosts, ...creator.Post]

  useEffect(() => {
    if (!setStartIndex || !setEndIndex) return;
    const scrollHandler = () => {
      const foo = containerRef.current!.getBoundingClientRect();
      if (foo.y <= -1515) {
        setStartIndex((prev) => {
          if (prev === totalPosts.length - 36) return prev;
          return prev + 3;
        });
        setEndIndex((prev) => {
          if (prev === totalPosts.length) return prev;
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

  const displayPosts = totalPosts.slice(startIndex, endIndex);

  return (
    <div className="grid grid-cols-3 gap-1" ref={containerRef}>
      {displayPosts.map((post) => {
        const firstItem = post.media[0];
        return (
          <Link key={post.id} href={`/p/${post.id}`} className="relative">
            {firstItem.type === "IMAGE" && (
              <Image
                src={firstItem.src}
                alt="image"
                width={300}
                height={300}
                className="h-[300px] w-[300px] object-cover"
              />
            )}
            {firstItem.type === "VIDEO" && (
              <video
                src={firstItem.src}
                className="h-[300px] w-[300px] object-cover"
                muted
              />
            )}
            {post.pinned ? (
              <PinnedIcon className="absolute top-2 right-2" />
            ) : post.media.length > 1 ? (
              <CarouselIcon className="absolute top-2 right-2" />
            ) : (
              firstItem.type === "VIDEO" && (
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