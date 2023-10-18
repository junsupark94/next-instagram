import { db } from "@/lib/db";
import { Profile } from "./_components/profile";
import { Prisma } from "@prisma/client";


const userWithPosts = Prisma.validator<Prisma.UserDefaultArgs>()({
  include: {
    Post: {
      take: 100,
      include: {
        media: true
      }
    }
  }
})

export type UserWithPosts = Prisma.UserGetPayload<typeof userWithPosts>

export default async function UserPage({
  params,
}: {
  params: { username: string };
}) {
  const { username } = params;
  const user : UserWithPosts | null = await db.user.findUnique({
    where: {
      username,
    },
    include: {
      Post: {
        take: 100,
        include: {
          media: true
        }
      }
    }
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