import { db } from "@/lib/db";
import FeedItems from "./feed-items";
import { Prisma } from "@prisma/client";

const postWithThings = Prisma.validator<Prisma.PostDefaultArgs>()({
  include: {
    media: true,
    creator: true,
    comment: true
  }
})

export type PostWithThings = Prisma.PostGetPayload<typeof postWithThings>


const Feed = async () => {
  const posts : PostWithThings[] = await db.post.findMany({
    take: 100,
    include: {
      media: true,
      creator: true,
      comment: true
    },
    orderBy: {
      created_at: "desc"
    }
  })

  if (!posts) return <div>404 Error</div>

  return <FeedItems posts={posts}/>
};
export default Feed;

