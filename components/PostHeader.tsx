import React from "react";
import OptionsIcon from "@/Icons/OptionsIcon";
import Link from "next/link";
import HoverDialog from "./HoverDialog";
import ProfileIcon from "@/Icons/ProfileIcon";
import { User } from "@/util/dummy-data-users";
import Image from "next/image";

type PostHeaderProps = {
  user: User;
  date: Date;
};

const PostHeader: React.FC<PostHeaderProps> = ({ user, date }) => {
  console.log("PostHeader render");
  return (
    <header className="flex justify-between items-center xs:py-2">
      <div className="flex gap-2 items-center">
        <HoverDialog>
          <Link href={`/${user.account}`}>
            <Image
              src={user.profilePicture}
              alt="profile picture"
              width={50}
              height={50}
              className="w-8 h-8 rounded-full"
            />
          </Link>
        </HoverDialog>
        <div className="flex flex-col">
          <div className="flex gap-2 items-center">
            <HoverDialog>
              <Link
                href={`/${user.account}`}
                className="hover:opacity-50 font-semibold"
              >
                {user.account}
              </Link>
            </HoverDialog>
            {}
            <span>{` • `}</span>
            <button className="text-[#0095f6] hover:text-[#e0f1ff] font-semibold">
              Follow
            </button>
          </div>
          <div className="text-[12px]">Location or Original Audio</div>
        </div>
      </div>
      <OptionsIcon />
    </header>
  );
};
export default React.memo(PostHeader);
