"use client";
import useClickOutside from "@/utils/useClickOutside";
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
  const modalRef = useClickOutside(() => router.back());
  const [liked, setLiked] = useState(false);
  const post = DUMMY_DATA.find((item) => item.id === Number(params.id));
  const [replies, setReplies] = useState<Reply[]>(post!.replies);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  if (!post) return <div>404 Unable to find post</div>;
  const user = USERS.find((item) => item.account === post.account);
  if (!user) return <div>404 Unable to find user</div>;

  return (
    <div className="flex w-[80%] border border-red-500 h-[80%] dark:bg-black text-sm" ref={modalRef}>
      <Carousel
        content={post.content}
        setLiked={setLiked}
        width={600}
        height={600}
        className="h-full max-w-[55vw] border border-green-500"
      />
      <section className="flex flex-col max-w-[500px] grow border border-blue-500">
        <PostHeader user={user} location={post.location} />
        <PostDescription user={user} post={post} />
        <ReplyItems replies={replies} textAreaRef={textAreaRef}/>
        <div className="px-4 py-2 border-t dark:border-gray-800 border-[#dbdbdb]">
          <PostIcons liked={liked} setLiked={setLiked} likes={post.likes} />
          <span>{getRelativeTimeString(post.date)}</span>
        </div>
        <ReplyForm setReplies={setReplies} textAreaRef={textAreaRef}/>
      </section>
      <button onClick={() => router.back()} className="absolute top-4 right-4">
        <ExitIcon />
      </button>
    </div>
  );
}
