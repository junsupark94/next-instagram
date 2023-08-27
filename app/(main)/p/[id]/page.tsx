"use client";
import PostHeader from "@/components/PostHeader";
import PostIcons from "@/components/PostIcons";
import { useCallback, useMemo, useState } from "react";
import { DUMMY_DATA, Reply, ThreadItem, getReplyId } from "@/util/dummy-data-posts";
import ProfileIcon from "@/Icons/ProfileIcon";
import { getRelativeTimeString, getShortenedRelative } from "@/util/relative-time";
import Carousel from "@/components/Carousel";
import ReplyItem from "@/components/ReplyItem";
import React from "react";
import Footer from "@/components/PhotoPage/Footer";
import ReplyForm from "@/components/ReplyForm";
import MorePosts from "@/components/MorePosts";
import { USERS } from "@/util/dummy-data-users";
import Link from "next/link";
import VerifiedIcon from "@/Icons/VerifiedIcon";
import Image from "next/image";

export default function Page({ params }: { params: { id: string } }) {
  console.log("Page render");
  const item = useMemo(() => {
    return DUMMY_DATA.find((item) => item.id === Number(params.id));
  }, [params.id]);
  const [replies, setReplies] = useState<Reply[]>(item!.replies);
  const [liked, setLiked] = useState(false);
  // useEffect(() => {
  //   // todo: this will be replaced by refactoring this page into a server component
  //   setReplies(item!.replies);
  // }, [setReplies, item]);

  const submitHandler = useCallback(
    (
      e: React.FormEvent<HTMLFormElement>,
      value: string,
      setValue: React.Dispatch<React.SetStateAction<string>>,
      textAreaRef: React.RefObject<HTMLTextAreaElement>
    ) => {
      e.preventDefault();
      if (value.trim() === "") return;

      const targetReplyId = textAreaRef.current?.getAttribute("data-reply");
      if (targetReplyId) {
        const targetIndex = replies.findIndex(
          (reply) => reply.id === Number(targetReplyId)
        );
        const targetReply = replies[targetIndex];
        if (!targetReply) {
          console.error(
            "error, unable to find reply with id of ",
            targetReplyId
          );
          return;
        }
        console.log("targetReply", targetReply);
        const newThreadItem: ThreadItem = {
          // todo: account should be logged in user
          account: item!.account,
          text: value,
          likes: 0,
          date: new Date(),
          id: getReplyId(),
        };

        targetReply.thread.push(newThreadItem);
        replies[targetIndex] = { ...targetReply };
        setReplies((prev) => [...prev]);
        textAreaRef.current?.removeAttribute("data-reply");
        setValue("");
        return;
      }

      const newReply = {
        account: item!.account,
        text: value,
        likes: 0,
        date: new Date(),
        thread: [],
        id: getReplyId(),
      };
      //todo: add fetch POST request to backend, await that before updating UI, need replyID from db
      setReplies((prev) => [newReply, ...prev]);
      setValue("");
    },
    [replies]
  );

  if (!item) return <div>404 Post Not Found</div>;

  const user = USERS.find(user => user.account === item.account);

  if (!user) return <div>404 User Not Found</div>

  return (
    <div className="grow flex flex-col items-center mt-10 text-sm">
      <main className="flex max-w-[850px] h-[600px] pb-10">
        <Carousel
          content={item.content}
          setLiked={setLiked}
          width={600}
          height={600}
          className="h-full"
        />
        <section className="w-[355px] flex flex-col border border-gray-800 shrink-0">
          <div className="px-4 border-b border-gray-500">
            <PostHeader user={user} date={item.date} />
          </div>
          <div className="flex gap-2 p-4 pb-1">
            <Image src={user.profilePicture} alt="profile picture" width={50} height={50} className="w-6 h-6 rounded-full"/>
            <article>
              <div className="flex gap-1 items-center">
                <span>{user.account}</span>
                {user.verified && <VerifiedIcon className="w-3 h-3"/>}
                <span className="text-[#a8a8a8]">{getShortenedRelative(item.date)}</span>
              </div>
              <p>{item.description}</p>
            </article>
          </div>
          <article className="overflow-auto p-4 flex flex-col gap-2 grow">
            {replies.map((reply) => (
              <ReplyItem key={reply.id} reply={reply} />
            ))}
          </article>
          <div className="px-4 py-2 border-t border-gray-500">
            <PostIcons liked={liked} setLiked={setLiked} likes={item.likes} />
            <span>{getRelativeTimeString(item.date)}</span>
          </div>
          <article className=" flex p-4 py-2 gap-4 items-center">
            <ReplyForm submitHandler={submitHandler} />
          </article>
        </section>
      </main>
      <section className="border-t border-gray-500 w-[900px] pt-16">
        <h1 className="font-gray-500 mb-5">
          More posts from
          <Link href={`/${item.account}`} className="font-white font-bold"> {item.account}</Link>
        </h1>
        <MorePosts user={user!} exclude={params.id}/>
      </section>
      <Footer />
      <span className="text-[#00376b] dark:text-[#e0f1ff]" />
    </div>
  );
}
