import React, { Dispatch, SetStateAction, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Close } from "@radix-ui/react-dialog";
import { User } from "@/utils/dummy-data-users";
import Image from "next/image";
import { cn } from "@/utils/cn";
import { Cross2Icon } from "@radix-ui/react-icons";

type FollowDialogProps = {
  user: User;
  setFollowing: Dispatch<SetStateAction<boolean>>;
};

const FollowDialog: React.FC<FollowDialogProps> = ({
  user,
  setFollowing,
}) => {
  const [isCloseFriend, setIsCloseFriend] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  return (
    <Dialog>
      <DialogTrigger className="ml-5 px-5 py-1.5 font-semibold bg-[#363636] rounded-lg text-sm flex gap-2 items-center">
        Following
        <svg
          aria-label="Down chevron icon"
          className="rotate-180"
          color="rgb(0, 0, 0)"
          fill="rgb(0, 0, 0)"
          height="12"
          role="img"
          viewBox="0 0 24 24"
          width="12"
        >
          <title>Down chevron icon</title>
          <path d="M21 17.502a.997.997 0 0 1-.707-.293L12 8.913l-8.293 8.296a1 1 0 1 1-1.414-1.414l9-9.004a1.03 1.03 0 0 1 1.414 0l9 9.004A1 1 0 0 1 21 17.502Z"></path>
        </svg>
      </DialogTrigger>
      <DialogContent className="p-0 max-w-[400px] bg-[#262626]">
        <DialogHeader>
          <DialogTitle className="flex flex-col items-center text-sm gap-1 py-4">
            <Image
              src={user.profilePicture}
              alt="profile picture"
              width={56}
              height={56}
              className="rounded-full"
            />
            <span>{user.account}</span>
          </DialogTitle>
          <DialogDescription className="text-[#f5f5f5]">
            <button
              className="hover:bg-[#ffffff19] transition p-4 flex justify-between items-center w-full"
              onClick={() => setIsCloseFriend((prev) => !prev)}
            >
              <span>
                {isCloseFriend ? "Close friend" : "Add to close friends list"}
              </span>
              <span
                className={cn(
                  "rounded-full border border-white text-black w-5 h-5 flex items-center justify-center",
                  isCloseFriend && "border-0 bg-[#1cd14f] text-white"
                )}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-3 h-3"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </button>
            <button
              className="hover:bg-[#ffffff19] transition p-4 flex justify-between items-center w-full"
              onClick={() => setIsFavorite((prev) => !prev)}
            >
              <span>
                {isFavorite ? "Remove from favorites" : "Add to favorites"}
              </span>
              {isFavorite && (
                <svg
                  aria-label="Favorited"
                  fill="url(#favorite_icon_gradient)"
                  height="20"
                  role="img"
                  viewBox="0 0 24 24"
                  width="20"
                >
                  <defs>
                    <linearGradient
                      gradientUnits="userSpaceOnUse"
                      id="favorite_icon_gradient"
                      x1="11.0831"
                      x2="20.5113"
                      y1="20.7141"
                      y2="4.71407"
                    >
                      <stop stopColor="#FDCB5C"></stop>
                      <stop offset="1" stopColor="#D10869"></stop>
                    </linearGradient>
                  </defs>
                  <path d="M18.18 22.51a.99.99 0 01-.513-.142L12 18.975l-5.667 3.393a1 1 0 01-1.492-1.062l1.37-6.544-4.876-4.347a.999.999 0 01.536-1.737l6.554-.855 2.668-5.755a1 1 0 011.814 0l2.668 5.755 6.554.855a.999.999 0 01.536 1.737l-4.876 4.347 1.37 6.544a1 1 0 01-.978 1.205z"></path>
                </svg>
              )}
              {!isFavorite && (
                <svg
                  aria-label="Favorited"
                  color="rgb(245, 245, 245)"
                  fill="rgb(245, 245, 245)"
                  height="20"
                  role="img"
                  viewBox="0 0 24 24"
                  width="20"
                >
                  <path d="M18.18 22.51a.99.99 0 0 1-.513-.142L12 18.975l-5.667 3.393a1 1 0 0 1-1.492-1.062l1.37-6.544-4.876-4.347a.999.999 0 0 1 .536-1.737l6.554-.855 2.668-5.755a1 1 0 0 1 1.814 0l2.668 5.755 6.554.855a.999.999 0 0 1 .536 1.737l-4.876 4.347 1.37 6.544a1 1 0 0 1-.978 1.205ZM12 16.81a1 1 0 0 1 .514.142l4.22 2.528-1.021-4.873a.998.998 0 0 1 .313-.952l3.676-3.276-4.932-.644a1 1 0 0 1-.778-.57L12 4.867l-1.992 4.297a1 1 0 0 1-.779.57l-4.931.644 3.676 3.276a.998.998 0 0 1 .313.951l-1.02 4.873 4.22-2.527A1 1 0 0 1 12 16.81Z"></path>
                </svg>
              )}
            </button>
            <button className="hover:bg-[#ffffff19] transition p-4 flex justify-between items-center w-full cursor-default">
              <span className="line-through">Mute</span>
              <svg
                aria-label="Right chevron"
                color="rgb(168, 168, 168)"
                fill="rgb(168, 168, 168)"
                height="14"
                role="img"
                viewBox="0 0 24 24"
                width="14"
                className="rotate-90"
              >
                <path d="M21 17.502a.997.997 0 0 1-.707-.293L12 8.913l-8.293 8.296a1 1 0 1 1-1.414-1.414l9-9.004a1.03 1.03 0 0 1 1.414 0l9 9.004A1 1 0 0 1 21 17.502Z"></path>
              </svg>
            </button>
            <button className="hover:bg-[#ffffff19] transition p-4 flex justify-between items-center w-full cursor-default">
              <span className="line-through ">Restrict</span>
              <svg
                aria-label="Right chevron"
                color="rgb(168, 168, 168)"
                fill="rgb(168, 168, 168)"
                height="14"
                role="img"
                viewBox="0 0 24 24"
                width="14"
                className="rotate-90"
              >
                <path d="M21 17.502a.997.997 0 0 1-.707-.293L12 8.913l-8.293 8.296a1 1 0 1 1-1.414-1.414l9-9.004a1.03 1.03 0 0 1 1.414 0l9 9.004A1 1 0 0 1 21 17.502Z"></path>
              </svg>
            </button>
            <Close
              className="hover:bg-[#ffffff19] transition p-4 flex w-full"
              onClick={() => {
                setFollowing(false);
              }}
            >
              Unfollow
            </Close>
          </DialogDescription>
        </DialogHeader>
        <Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
          <Cross2Icon className="h-6 w-6 text-white" />
          <span className="sr-only">Close</span>
        </Close>
      </DialogContent>
    </Dialog>
  );
};
export default FollowDialog;
