/* eslint-disable react-hooks/exhaustive-deps */
import { cn, default_profile_picture } from "@/lib/utils";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import MessengerIcon from "@/Icons/MessengerIcon";
import { User } from "@prisma/client";

type HoverDialogProps = {
  children: JSX.Element;
  user: User;
};

const HoverDialog: React.FC<HoverDialogProps> = ({ children, user }) => {
  let timer: NodeJS.Timeout;
  const dialogRef = useRef<HTMLDivElement>(null);
  const mouseEnterHandler: React.MouseEventHandler<HTMLDivElement> = () => {
    clearTimeout(timer);
    timer = setTimeout(async () => {
      dialogRef.current!.style.display = "block";
      await new Promise((res) => setTimeout(res, 1));
      dialogRef.current!.style.opacity = "100";
    }, 1000);
  };
  const mouseLeaveHandler: React.MouseEventHandler<HTMLDivElement> = () => {
    clearTimeout(timer);
    timer = setTimeout(async () => {
      dialogRef.current!.style.opacity = "0";
      await new Promise((res) => setTimeout(res, 150));
      dialogRef.current!.style.display = "none";
    }, 600);
  };
  useEffect(() => {
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
      className="relative"
    >
      {children}
      <div className="absolute bottom-0 left-0 z-10">
        <div
          ref={dialogRef}
          className={cn(
            "absolute hidden w-[340px] rounded-lg bg-black text-sm text-[#f5f5f5] opacity-0 transition",
          )}
        >
          <div className="flex items-center gap-3 p-3 pb-1">
            <Image
              src={default_profile_picture}
              width={44}
              height={44}
              alt="image"
            />
            <div>
              <div className="text-base">account</div>
              <div className="text-[#a8a8a8]">display name</div>
            </div>
          </div>
          <article className="flex justify-around p-3">
            <div className="text-center">
              <div>{user.postCount}</div>
              <div>posts</div>
            </div>
            <div className="flex flex-col items-center">
              <div>{user.followerCount}</div>
              <div>followers</div>
            </div>
            <div className="flex flex-col items-center">
              <div>{user.followingCount}</div>
              <div>following</div>
            </div>
          </article>
          <div className="grid grid-cols-3 gap-1">
            <Link href={`/p/1`}>
              <Image
                src="/posts/post1.jpg"
                alt="image"
                width={120}
                height={120}
                className="h-[120px] w-[120px] object-cover"
              />
            </Link>
            <Link href={`/p/2`}>
              <Image
                src="/posts/post2.jpg"
                alt="image"
                width={120}
                height={120}
                className="h-[120px] w-[120px] object-cover"
              />
            </Link>
            <Link href={`/p/3`}>
              <Image
                src="/posts/post3.jpg"
                alt="image"
                width={120}
                height={120}
                className="h-[120px] w-[120px] object-cover"
              />
            </Link>
          </div>
          <div className="flex gap-2 p-3 font-semibold">
            <button className="flex grow items-center justify-center gap-2 rounded-lg bg-[#0095f6] py-1.5">
              <MessengerIcon /> Message
            </button>
            <button className="grow rounded-lg bg-[#363636] py-2">
              Following
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HoverDialog;
