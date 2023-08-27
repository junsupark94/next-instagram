import ProfileIcon from "@/Icons/ProfileIcon";
import { cn } from "@/util/cn";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import MessengerIcon from "@/Icons/MessengerIcon";

type HoverDialogProps = {
  children: JSX.Element;
};

let timer: NodeJS.Timer;
const HoverDialog: React.FC<HoverDialogProps> = ({ children }) => {
  const dialogRef = useRef<HTMLDivElement>(null);
  const mouseEnterHandler: React.MouseEventHandler<HTMLDivElement> = () => {
    clearTimeout(timer);
    timer = setTimeout(async () => {
      dialogRef.current!.style.display = "block";
      await new Promise(res => setTimeout(res, 1))
      dialogRef.current!.style.opacity = "100";
    }, 1000);
  };
  const mouseLeaveHandler: React.MouseEventHandler<HTMLDivElement> = () => {
    clearTimeout(timer);
    timer = setTimeout(async () => {
      dialogRef.current!.style.opacity = "0";
      await new Promise(res => setTimeout(res, 150))
      dialogRef.current!.style.display = "none";
    }, 600);
  };
  useEffect(() => {
    return () => clearTimeout(timer);
  }, [])

  return (
    <div
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
      className="relative"
    >
      {children}
      <div className="absolute bottom-0 left-0">
        <div
          ref={dialogRef}
          className={cn(
            "absolute hidden opacity-0 transition bg-black w-[340px] text-[#f5f5f5] rounded-lg text-sm"
          )}
        >
          <div className="flex p-3 pb-1 items-center gap-3">
            <ProfileIcon className="w-12 h-12" />
            <div>
              <div className="text-base">account</div>
              <div className="text-[#a8a8a8]">display name</div>
            </div>
          </div>
          <article className="p-3 flex justify-around">
            <div className="text-center">
              <div>603</div>
              <div>posts</div>
            </div>
            <div className="flex flex-col items-center">
              <div>251M</div>
              <div>followers</div>
            </div>
            <div className="flex flex-col items-center">
              <div>0</div>
              <div>following</div>
            </div>
          </article>
          <div className="grid grid-cols-3 gap-1">
            <Link href={`/p/1`}>
              <Image
                src="/test1.jpg"
                alt="image"
                width={120}
                height={120}
                className="w-[120px] h-[120px]"
              />
            </Link>
            <Link href={`/p/2`}>
              <Image
                src="/test2.jpg"
                alt="image"
                width={120}
                height={120}
                className="w-[120px] h-[120px]"
              />
            </Link>
            <Link href={`/p/3`}>
              <Image
                src="/test3.jpg"
                alt="image"
                width={120}
                height={120}
                className="w-[120px] h-[120px]"
              />
            </Link>
          </div>
          <div className="flex gap-2 p-3 font-semibold">
            <button className="grow rounded-lg bg-[#0095f6] py-1.5 flex justify-center items-center gap-2">
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
