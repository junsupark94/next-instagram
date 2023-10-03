/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import Image from "next/image";
import { User } from "@/utils/dummy-data-users";

type UnfollowDialogProps = {
  setShowDialog: React.Dispatch<React.SetStateAction<boolean>>;
  setFollowing: React.Dispatch<React.SetStateAction<boolean>>;
  user: User;
};

const UnfollowDialog: React.FC<UnfollowDialogProps> = ({
  setShowDialog,
  setFollowing,
  user,
}) => {
  useEffect(() => {
    function escHandler(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setShowDialog(false);
      }
    }
    document.addEventListener("keydown", escHandler);
    return () => document.removeEventListener("keydown", escHandler);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center backdrop-brightness-50"
      onClick={() => setShowDialog(false)}
    >
      <div
        className="bg-[#262626] rounded-xl flex flex-col items-center w-[400px] text-sm"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6 flex flex-col items-center gap-6">
          <Image
            src={user.profilePicture}
            alt="profile picture"
            width={90}
            height={90}
            className="w-[90px] h-[90px] rounded-full"
          />
          <div>Unfollow @{user.account}?</div>
        </div>
        <button
          className="text-[#ed4956] font-bold border-[#363636] border-t w-full py-4"
          onClick={() => {
            setFollowing(false);
            setShowDialog(false);
          }}
        >
          Unfollow
        </button>
        <button
          className="border-t border-[#363636] w-full py-4"
          onClick={() => setShowDialog(false)}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};
export default UnfollowDialog;
