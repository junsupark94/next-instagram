"use client";
import PostHeader from "@/components/PostHeader";
import PostIcons from "@/components/PostIcons";
import { useMemo, useRef, useState } from "react";
import { DUMMY_DATA, Reply } from "@/utils/dummy-data-posts";
import { getRelativeTimeString } from "@/utils/relative-time";
import Carousel from "@/components/Carousel";
import React from "react";
import Footer from "@/components/PhotoPage/Footer";
import ReplyForm from "@/components/ReplyForm";
import MorePosts from "@/components/MorePosts";
import { USERS } from "@/utils/dummy-data-users";
import Link from "next/link";
import PostDescription from "@/components/PostDescription";
import ReplyItems from "@/components/ReplyItems";

export default function Page({ params }: { params: { id: string } }) {
  // console.log("Page render");
  const post = useMemo(() => {
    return DUMMY_DATA.find((item) => item.id === Number(params.id));
  }, [params.id]);
  const [replies, setReplies] = useState<Reply[]>(post!.replies);
  const [liked, setLiked] = useState(false);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  if (!post) return <div>404 Post Not Found</div>;
  const user = USERS.find((user) => user.account === post.account);
  if (!user) return <div>404 User Not Found</div>;

  return (
    <div className="grow flex flex-col items-center mt-10 text-sm">
      <div className="h-[44px] sm:hidden">
        <div className="h-[44px] fixed top-0 left-0 w-screen border z-10 bg-white dark:bg-black flex">
          <Link href="/" className="py-3 px-4 text-xl font-semibold">
            <LeftChevron />
          </Link>
          <span className="grow flex items-center justify-center font-bold text-base">
            Post
          </span>
        </div>
      </div>
      <main className="flex max-w-[850px] h-[600px] pb-10">
        <Carousel
          content={post.content}
          setLiked={setLiked}
          width={600}
          height={600}
          className="h-full"
        />
        <section className="w-[355px] flex flex-col border dark:border-gray-800 border-[#dbdbdb]">
          <PostHeader user={user} location={post.location} />
          <article className="overflow-auto p-4 flex flex-col gap-2">
            <PostDescription user={user} post={post} />
            <ReplyItems replies={replies} textAreaRef={textAreaRef} />
          </article>

          <div className="px-4 py-2 border-t dark:border-gray-800 border-[#dbdbdb]">
            <PostIcons liked={liked} setLiked={setLiked} likes={post.likes} />
            <span>{getRelativeTimeString(post.date)}</span>
          </div>
          <ReplyForm setReplies={setReplies} textAreaRef={textAreaRef} />
        </section>
      </main>
      <section className="border-t dark:border-gray-800 border-[#dbdbdb] w-[900px] pt-16">
        <h1 className="font-gray-500 mb-5">
          More posts from
          <Link href={`/${post.account}`} className="font-white font-bold">
            {" "}
            {post.account}
          </Link>
        </h1>
        <MorePosts user={user!} exclude={params.id} />
      </section>
      <Footer />
      <span className="text-[#00376b] dark:text-[#e0f1ff]" />
    </div>
  );
}

function LeftChevron() {
  return (
    <svg
      aria-label="Back"
      color="currentColor"
      fill="currentColor"
      height="24"
      role="img"
      viewBox="0 0 24 24"
      width="24"
      className="-rotate-90"
    >
      <title>Back</title>
      <path d="M21 17.502a.997.997 0 0 1-.707-.293L12 8.913l-8.293 8.296a1 1 0 1 1-1.414-1.414l9-9.004a1.03 1.03 0 0 1 1.414 0l9 9.004A1 1 0 0 1 21 17.502Z"></path>
    </svg>
  );
}
