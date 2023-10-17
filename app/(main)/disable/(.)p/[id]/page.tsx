"use client";
import { useRouter } from "next/navigation";
import ExitIcon from "@/Icons/ExitIcon";
import PostHeader from "@/components/post-header";
import PostDescription from "@/components/post-description";
import ReplyItems from "@/components/comment-items";
import PostIcons from "@/components/PostIcons";
import ReplyForm from "@/components/comment-form";
import { getRelativeTimeString } from "@/utils/relative-time";
import { useRef, useState } from "react";
import Carousel from "@/components/Carousel";
import { useGlobalStore } from "@/utils/zustand";

export default function Page({ params }: { params: { id: string } }) {
  // const [isModalOpen] = useGlobalStore(state => [state.isModalOpen])
  const router = useRouter();
  const [liked, setLiked] = useState(false);
  const [replies, setReplies] = useState<Reply[]>(post!.replies);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);


  // if (!isModalOpen) return null;

  return (
    <div
      className="fixed backdrop-brightness-50 top-0 left-0 w-screen h-screen flex justify-center items-center z-10"
      onClick={() => router.back()}
    >
      <div
        className="flex justify-center max-w-[80%] max-h-[80%] w-fit h-full dark:bg-black bg-white text-sm"
        onClick={(e) => e.stopPropagation()}
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
          <article className="overflow-auto p-4 flex flex-col gap-2 grow">
            <PostDescription user={user} post={post} />
            <ReplyItems replies={replies} textAreaRef={textAreaRef} />
          </article>
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