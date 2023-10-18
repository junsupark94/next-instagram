import { db } from "@/lib/db";
import { Profile } from "./_components/profile";

export default async function UserPage({
  params,
}: {
  params: { username: string };
}) {
  const { username } = params;
  const user = await db.user.findUnique({
    where: {
      username,
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