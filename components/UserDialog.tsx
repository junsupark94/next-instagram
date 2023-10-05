"use client";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Close } from "@radix-ui/react-dialog";
import Image from "next/image";
import CalendarIcon from "@/Icons/CalendarIcon";
import VerifiedIcon from "@/Icons/VerifiedIcon";
import Link from "next/link";
import LocationIcon from "@/Icons/LocationIcon";
import { User } from "@prisma/client";
import ProfileIcon from "@/Icons/ProfileIcon";

type UserDialogProps = {
  user: User;
};

const UserDialog: React.FC<UserDialogProps> = ({ user }) => {
  return (
    <Dialog>
      <DialogTrigger>
        <h1 className="text-xl">{user.username}</h1>
      </DialogTrigger>
      <DialogContent className="flex max-w-[400px] flex-col items-center border-none bg-[#262626] p-0">
        <DialogTitle className="w-full border-b border-[#363636] py-3  text-center text-base font-semibold">
          About this account
        </DialogTitle>
        {!user.profile_picture_url && <ProfileIcon />}
        {user.profile_picture_url && (
          <Image
            src={user.profile_picture_url}
            alt="profile picture"
            width={200}
            height={200}
            className="h-[80px] w-[80px] rounded-full"
          />
        )}
        <div className="flex items-center gap-2">
          <div>{user.username}</div>
          {user.verified && <VerifiedIcon className="mt-0.5 h-3 w-3" />}
        </div>
        <p className="px-8 text-center text-xs text-[#a8a8a8]">
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
        <div className="flex grow flex-col gap-2 self-start px-3 text-base">
          <article className="flex items-center gap-2">
            <CalendarIcon className="h-7 w-7" />
            <div>
              <div>Date joined</div>
              <div className="text-sm text-[#a8a8a8]">
                {new Intl.DateTimeFormat("en-US", {
                  month: "long",
                  year: "numeric",
                }).format(user.created_at)}
              </div>
            </div>
          </article>
          {user.location && (
            <article className="flex items-center gap-2">
              <LocationIcon className="h-7 w-7" />
              <div>
                <div>Account based in</div>
                <div className="text-sm text-[#a8a8a8]">{user.location}</div>
              </div>
            </article>
          )}
          {user.verified && (
            <article>
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-7 w-7"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                  />
                </svg>
                <span>Verified</span>
              </div>
              <p className="mt-2 text-xs text-[#a8a8a8]">
                A verified badge now means an account has been verified with a
                valid ID and may not be well known. Meta Verified offers
                enhanced verification, proactive account protection, direct
                customer support and more.{" "}
                <Link
                  className="text-[#e0f1ff]"
                  href="https://help.instagram.com/733907830039577"
                >
                  Learn more
                </Link>
              </p>
              <button className="mt-5 w-full rounded-md bg-[#0095f6] p-3 text-sm font-semibold">
                Join the waitlist for Meta Verified
              </button>
            </article>
          )}
          <Close className="p-3 text-sm">Close</Close>
        </div>
      </DialogContent>
    </Dialog>
  );
};
export default UserDialog;
