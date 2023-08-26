import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/UI/Dialog";
import Image from "next/image";
import CalendarIcon from "@/Icons/CalendarIcon";
import VerifiedIcon from "@/Icons/VerifiedIcon";
import Link from "next/link";

type UserDialogProps = {};

const UserDialog: React.FC<UserDialogProps> = ({user}) => {
  return (
    <Dialog>
      <DialogTrigger>
        <h1 className="text-xl">{user.name}</h1>
      </DialogTrigger>
      <DialogContent className="bg-[#262626] border-none max-w-[400px] p-0 flex flex-col items-center">
        <DialogTitle className="border-b border-[#363636] w-full text-center  font-semibold py-3 text-base">
          About this account
        </DialogTitle>
        <Image
          src={user.profilePicture}
          alt="profile picture"
          width={200}
          height={200}
          className="w-[80px] h-[80px] rounded-full"
        />
        <div className="flex items-center gap-2">
          <div>{user.name}</div>
          {user.verified && <VerifiedIcon className="w-3 h-3 mt-0.5" />}
        </div>
        <p className="text-xs text-[#a8a8a8] px-8 text-center">
          To help keep our community authentic, we’re showing information about
          accounts on Instagram.{" "}
          <Link
            href="https://help.instagram.com/697961817256175"
            target="_blank"
            className="text-[#e0f1ff]"
          >
            See why this information is important.
          </Link>
        </p>
        <div className="text-base grow self-start px-3">
          <article className="flex gap-2 items-center">
            <CalendarIcon className="w-7 h-7" />
            <div>
              <div>Date joined</div>
              <div className="text-sm text-[#a8a8a8]">
                {user.date.toDateString()}
              </div>
            </div>
          </article>
          <article className="flex gap-2 items-center">
            <CalendarIcon className="w-7 h-7" />
            <div>
              <div>Date joined</div>
              <div className="text-sm text-[#a8a8a8]">
                {user.date.toDateString()}
              </div>
            </div>
          </article>
        </div>
      </DialogContent>
    </Dialog>
  );
};
export default UserDialog;
