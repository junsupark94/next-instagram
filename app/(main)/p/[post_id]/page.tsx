import { db } from "@/lib/db";
import PostPage from "./_components/post-page";
import { Prisma } from "@prisma/client";

const commentWithReplies = Prisma.validator<Prisma.CommentDefaultArgs>()({
  select: {
    created_at: true,
    text: true,
    id: true,
    user: {
      select: {
        username: true,
        profile_name: true,
        profile_picture_url: true,
      },
    },
    children: {
      include: {
        user: {
          select: {
            username: true,
            profile_name: true,
            profile_picture_url: true,
          },
        },
      },
    },
  },
});

export type CommentWithReplies = Prisma.CommentGetPayload<
  typeof commentWithReplies
>;

export default async function Page({
  params,
}: {
  params: { post_id: string };
}) {
  const post = await db.post.findUnique({
    where: {
      id: params.post_id,
    },
    select: {
      id: true,
      media: true,
      created_at: true,
      description: true,
      creator: true,
      location_name: true,
      post_interaction: true,
    },
  });
  if (!post) return <div>404 Post Not Found</div>;

  const comments: CommentWithReplies[] = await db.comment.findMany({
    take: 100,
    where: {
      post_id: params.post_id,
      replying_to_id: null,
    },
    select: {
      user: {
        select: {
          username: true,
          profile_name: true,
          profile_picture_url: true,
        },
      },
      created_at: true,
      text: true,
      id: true,
      children: {
        include: {
          user: {
            select: {
              username: true,
              profile_name: true,
              profile_picture_url: true,
            },
          },
        },
      },
    },
  });


  return (
    <PostPage
      id={post.id}
      media={post.media}
      created_at={post.created_at}
      description={post.description}
      username={post.creator.username}
      verified={post.creator.verified}
      location_name={post.location_name}
      post_interaction={post.post_interaction}
      profile_picture_url={post.creator.profile_picture_url}
      comments={comments}
    />
  );
}
