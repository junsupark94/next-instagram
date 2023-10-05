"use client"
import FollowDialog from "@/components/FollowDialog";
import { User } from "@prisma/client";
import { useState } from "react";

const Following = ({ user }: { user: User }) => {
  const [following, setFollowing] = useState(false);

  return (
    <div>
      {!following && (
        <button
          onClick={() => setFollowing(true)}
          className="ml-5 rounded-lg bg-[#0095f6] px-5 py-1.5 text-sm font-semibold text-white"
        >
          Follow
        </button>
      )}
      {following && <FollowDialog user={user} setFollowing={setFollowing} />}
    </div>
  );
};

export default Following;
