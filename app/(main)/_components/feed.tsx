import { db } from "@/lib/db";
import FeedItems from "./feed-items";


const Feed = async () => {
  const posts = await db.post.findMany({
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

