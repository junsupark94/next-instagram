/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import Image from "next/image";

type UnfollowDialogProps = {
  setShowDialog: React.Dispatch<React.SetStateAction<boolean>>;
  setFollowing: React.Dispatch<React.SetStateAction<boolean>>;
  username: string;
  profile_picture_url: string | null;
};

const UnfollowDialog: React.FC<UnfollowDialogProps> = ({
  setShowDialog,
  setFollowing,
  username,
  profile_picture_url,
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
      className="fixed left-0 top-0 flex h-screen w-screen items-center justify-center backdrop-brightness-50"
      onClick={() => setShowDialog(false)}
    >
      <div
        className="flex w-[400px] flex-col items-center rounded-xl bg-[#262626] text-sm"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col items-center gap-6 p-6">
          <Image
            src={profile_picture_url || "/default_profile.jpeg"}
            alt="profile picture"
            width={90}
            height={90}
            className="h-[90px] w-[90px] rounded-full"
          />
          <div>Unfollow @{username}?</div>
        </div>
        <button
          className="w-full border-t border-[#363636] py-4 font-bold text-[#ed4956]"
          onClick={() => {
            setFollowing(false);
            setShowDialog(false);
          }}
        >
          Unfollow
        </button>
        <button
          className="w-full border-t border-[#363636] py-4"
          onClick={() => setShowDialog(false)}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};
export default UnfollowDialog;
