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
import { useRouter } from "next/navigation";
import cookies from "js-cookie"

export default function Page({ params }: { params: { id: string } }) {
  const router = useRouter();
  const isAuth = cookies.get("JUNSU-AUTH") === "some_secret"
  if (!isAuth) {
    router.replace("/");
  }

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
    <div className="mt-10 flex grow flex-col items-center text-sm">
      <div className="h-[44px] sm:hidden">
        <div className="fixed left-0 top-0 z-10 flex h-[44px] w-screen border bg-white dark:bg-black">
          <Link href="/" className="px-4 py-3 text-xl font-semibold">
            <LeftChevron />
          </Link>
          <span className="flex grow items-center justify-center text-base font-bold">
            Post
          </span>
        </div>
      </div>
      <main className="flex h-[600px] max-w-[850px] pb-10">
        <Carousel
          content={post.content}
          setLiked={setLiked}
          width={600}
          height={600}
          className="h-full"
        />
        <section className="flex w-[355px] flex-col border border-[#dbdbdb] dark:border-gray-800">
          <PostHeader user={user} location={post.location} />
          <article className="flex flex-col gap-2 overflow-auto p-4">
            <PostDescription user={user} post={post} />
            <ReplyItems replies={replies} textAreaRef={textAreaRef} />
          </article>

          <div className="border-t border-[#dbdbdb] px-4 py-2 dark:border-gray-800">
            <PostIcons liked={liked} setLiked={setLiked} likes={post.likes} />
            <span>{getRelativeTimeString(post.date)}</span>
          </div>
          <ReplyForm setReplies={setReplies} textAreaRef={textAreaRef} />
        </section>
      </main>
      <section className="w-[900px] border-t border-[#dbdbdb] pt-16 dark:border-gray-800">
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
