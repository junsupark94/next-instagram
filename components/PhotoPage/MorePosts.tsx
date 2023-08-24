import React from "react";
import Image from "next/image";
import Link from "next/link";
import { DUMMY_DATA, Post } from "@/util/dummy-data";
import VideoIcon from "../Icons/VideoIcon";
import CarouselIcon from "../Icons/CarouselIcon";

type MorePostsProps = {
  item: Post;
};

const MorePosts: React.FC<MorePostsProps> = ({ item }: { item: Post }) => {
  const accountItems = DUMMY_DATA.filter(
    (post) => post.account === item?.account
  ).slice(0, 6);
  return (
    <section className="border-t border-gray-500 w-[900px] pt-16">
      <h1 className="font-gray-500 mb-5">
        More posts from{" "}
        <span className="font-white font-bold">{item.account}</span>
      </h1>
      <div className="grid grid-cols-3 gap-1">
        {accountItems.map((accountItem) => {
          const media = accountItem.content[0];
          return (
            <Link
              key={accountItem.id}
              href={`/p/${accountItem.id}`}
              className="relative"
            >
              {media.type === "image" && (
                <Image
                  src={accountItem.content[0].src}
                  alt="image"
                  width={300}
                  height={300}
                  className="w-[300px] h-[300px] object-cover"
                />
              )}
              {media.type === "video" && (
                <video
                  src={accountItem.content[0].src}
                  className="w-[300px] h-[300px] object-cover"
                  muted
                />
              )}
              {accountItem.content.length > 1 ? (
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
    </section>
  );
};

export default React.memo(MorePosts);
