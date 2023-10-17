import { db } from "@/lib/db";
import { Profile } from "./_components/profile";

export default async function UserPage({
  params,
}: {
  params: { userId: string };
}) {
  const user = await db.user.findUnique({
    where: {
      id: params.userId,
    },
  });

  if (!user) return <div>User not found</div>;

  return (
    <Profile
      user={user}
      postCount={100}
      followerCount={100}
      followingCount={100}
    />
  );
}