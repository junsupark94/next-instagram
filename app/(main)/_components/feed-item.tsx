"use client";
import { useState } from "react";
import FeedItemDescription from "./feed-item-description";
import Link from "next/link";
import { Media, Post, User, Comment } from "@prisma/client";
import Carousel from "@/components/Carousel";
import PostHeader from "@/components/PostHeader";
import PostIcons from "@/components/PostIcons";
import { useAuth } from "@/hooks/use-auth-hook";
import { convertText } from "@/utils/text";
import CommentForm from "./comment-form";

type FeedItemProps = {
  postWithUserWithMedia: {
    media: Media[];
    creator: User;
    comment: Comment[];
  } & Post;
};

const FeedItem: React.FC<FeedItemProps> = ({ postWithUserWithMedia }) => {
  const { creator, media, comment, ...post } = postWithUserWithMedia;
  const [liked, setLiked] = useState(false);
  const [newComments, setNewComments] = useState<Comment[]>([]);
  const user = useAuth();

  return (
    <div className="border-gray-200 pb-4 dark:border-gray-800 xs:border-b">
      <PostHeader user={creator} location={post.location_name} />
      <Carousel media={media} setLiked={setLiked} />

      <section className="mt-3 px-4">
        <PostIcons liked={liked} setLiked={setLiked} likes={100} />
        <FeedItemDescription
          username={creator.username}
          description={post.description}
        />
        <div className="my-1">
          <Link href={`/p/${post.id}`} className="text-gray-500">
            View all {comment.length + newComments.length} comments
          </Link>
        </div>
        {newComments.map((comment) => (
          <div className="flex gap-1" key={comment.id}>
            <span className="font-semibold">{user.username}</span>
            <span className="whitespace-pre-wrap">
              {convertText(comment.text)}
            </span>
          </div>
        ))}
        <CommentForm setNewComments={setNewComments} post={post} />
      </section>
    </div>
  );
};
export default FeedItem;
