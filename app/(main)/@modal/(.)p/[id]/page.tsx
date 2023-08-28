"use client";
import { useRouter } from "next/navigation";
import ExitIcon from "@/Icons/ExitIcon";
import PostHeader from "@/components/PostHeader";
import { DUMMY_DATA, Reply } from "@/utils/dummy-data-posts";
import { USERS } from "@/utils/dummy-data-users";
import PostDescription from "@/components/PostDescription";
import ReplyItems from "@/components/ReplyItems";
import PostIcons from "@/components/PostIcons";
import ReplyForm from "@/components/ReplyForm";
import { getRelativeTimeString } from "@/utils/relative-time";
import { useRef, useState } from "react";
import Carousel from "@/components/Carousel";

export default function Page({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [liked, setLiked] = useState(false);
  const post = DUMMY_DATA.find((item) => item.id === Number(params.id));
  const [replies, setReplies] = useState<Reply[]>(post!.replies);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  if (!post) return <div>404 Unable to find post</div>;
  const user = USERS.find((item) => item.account === post.account);
  if (!user) return <div>404 Unable to find user</div>;

  return (
    <div className="fixed backdrop-brightness-50 top-0 left-0 w-screen h-screen flex justify-center items-center z-10" onClick={() => router.back()}>
      <div
        className="flex justify-center max-w-[80%] max-h-[80%] w-fit h-full dark:bg-black bg-white text-sm"
        onClick={e => e.stopPropagation()}
      >
        <Carousel
          content={post.content}
          setLiked={setLiked}
          width={1200}
          height={1200}
          className="bg-black"
        />
        <section className="flex flex-col max-w-[500px] w-full">
          <PostHeader user={user} location={post.location} />
          <PostDescription user={user} post={post} />
          <ReplyItems replies={replies} textAreaRef={textAreaRef} />
          <div className="px-4 py-2 border-t dark:border-gray-800 border-[#dbdbdb]">
            <PostIcons liked={liked} setLiked={setLiked} likes={post.likes} />
            <span>{getRelativeTimeString(post.date)}</span>
          </div>
          <ReplyForm setReplies={setReplies} textAreaRef={textAreaRef} />
        </section>
        <button
          onClick={() => router.back()}
          className="absolute top-4 right-4"
        >
          <ExitIcon />
        </button>
      </div>
    </div>
  );
}
