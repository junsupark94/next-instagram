/* eslint-disable react-hooks/exhaustive-deps */
import React, { RefObject, useState } from "react";
import { getShortenedRelative } from "@/utils/relative-time";
import Link from "next/link";
import { convertText } from "@/utils/text";
import Image from "next/image";
import { Comment } from "@prisma/client";

type ReplyItemProps = {
  comment: Comment;
  textAreaRef: RefObject<HTMLTextAreaElement>;
};

const ReplyItem: React.FC<ReplyItemProps> = ({ comment, textAreaRef }) => {
  // console.log("ReplyItem render");
  const [showReplies, setShowReplies] = useState(false);


  const replyHandler = () => {
    textAreaRef.current!.setAttribute("data-reply", String(reply.id));
    textAreaRef.current!.value = `@${reply.account} `;
    textAreaRef.current!.focus();
  };

  const showMoreButton =
    comment.thread && reply.thread.length > 0 ? (
      <button
        className="flex items-center gap-2 mb-2"
        onClick={() => setShowReplies((prev) => !prev)}
      >
        <div className="border-b border-[#555555] w-[22px]" />{" "}
        <span className="text-xs text-gray-400">
          {!showReplies && `View all ${reply.thread.length} replies`}
          {showReplies && "Hide all replies"}
        </span>
      </button>
    ) : null;

  return (
    <article>
      <div className="flex gap-2 text-sm">
        <Image
          src={user!.profilePicture}
          width={30}
          height={30}
          alt="image"
          className="shrink-0 object-cover w-4 h-4 rounded-full"
        />
        <div>
          <div className="pb-2">
            <div className="flex gap-2">
              <h1 className="font-semibold text-[#262626]">
                <Link href={`/${reply.account}`}>{reply.account}</Link>
              </h1>{" "}
              <span className="text-gray-400 font-normal">
                {getShortenedRelative(reply.date)}
              </span>
            </div>
            <p className="font-normal whitespace-pre-wrap ">
              {convertText(reply.text)}
            </p>
          </div>
          <div className="flex gap-2 text-xs text-gray-400 pb-3">
            {reply.likes > 0 && (
              <span className="font-semibold text-[#737373]">
                {reply.likes} like{reply.likes > 1 && "s"}
              </span>
            )}
            <button
              className="dark:text-blue-300 text-[#737373] font-semibold"
              onClick={replyHandler}
            >
              Reply
            </button>
          </div>
          {showMoreButton}
          {showReplies &&
            reply.thread.map((threadItem) => (
              <MemoizedThreadItem
                key={threadItem.id}
                id={reply.id}
                account={reply.account}
                threadItem={threadItem}
                textAreaRef={textAreaRef}
              />
            ))}
        </div>
      </div>
    </article>
  );
};
// export default ReplyItem;
export default React.memo(ReplyItem);

function ThreadItem({
  threadItem,
  id,
  account,
  textAreaRef,
}: {
  threadItem: any;
  id: number;
  account: string;
  textAreaRef: RefObject<HTMLTextAreaElement>;
}) {
  const user = USERS.find(user => user.account === threadItem.account);

  const replyHandler = () => {
    textAreaRef.current!.setAttribute("data-reply", String(id));
    textAreaRef.current!.value = `@${account} `;
    textAreaRef.current!.focus();
  };

  return (
    <article>
      <div className="flex gap-2">
      <Image
          src={user!.profilePicture}
          width={30}
          height={30}
          alt="image"
          className="shrink-0 object-cover w-4 h-4 rounded-full"
        />
        <div>
          <div className="pb-2">
            <div className="flex gap-2">
              <h1 className="font-semibold">
                <Link href={`/${threadItem.account}`}>
                  {threadItem.account}
                </Link>
              </h1>{" "}
              <span className="text-gray-400">
                {getShortenedRelative(threadItem.date)}
              </span>
            </div>
            <p>{threadItem.text}</p>
          </div>
          <div className="flex gap-2 text-xs text-gray-400 pb-3">
            {threadItem.likes > 0 && (
              <span>
                {threadItem.likes} like{threadItem.likes > 1 && "s"}
              </span>
            )}
            <button onClick={replyHandler}>Reply</button>
          </div>
        </div>
      </div>
    </article>
  );
}

const MemoizedThreadItem = React.memo(ThreadItem);
