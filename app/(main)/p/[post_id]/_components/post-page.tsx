"use client";

import Carousel from "@/components/Carousel";
import Footer from "@/components/PhotoPage/Footer";
import PostDescription from "@/components/post-description";
import PostHeader from "@/components/post-header";
import PostIcons from "@/components/PostIcons";
import Link from "next/link";
import { useState } from "react";
import { getRelativeTimeString } from "@/utils/relative-time";
import { Media, Post, PostInteraction } from "@prisma/client";
import { useAuth } from "@/hooks/use-auth-hook";
import CommentItems from "@/components/comment-items";
import CommentForm from "@/components/comment-form";
import MorePosts from "@/components/more-posts";
import { PostWithMedia } from "@/app/(main)/[username]/page";
import { CommentWithReplies } from "../page";

const PostPage = ({
  media,
  comments,
  location_name,
  created_at,
  verified,
  profile_picture_url,
  username,
  description,
  id,
  post_interaction,
  creator,
  pinnedPosts,
  creator_id
}: {
  media: Media[];
  comments: CommentWithReplies[];
  location_name: string | null;
  created_at: Date;
  verified: boolean;
  profile_picture_url: string | null;
  username: string;
  description: string;
  id: string;
  post_interaction: PostInteraction[];
  creator: any;
  pinnedPosts: PostWithMedia[]
  creator_id: string;
}) => {
  const [stateComments, setStateComments] = useState(comments);
  const [liked, setLiked] = useState(false);
  const user = useAuth();

  return (
    <div className="mt-10 flex grow flex-col items-center text-sm">
      <div className="h-[44px] sm:hidden">
        <div className="fixed left-0 top-0 z-10 flex h-[44px] w-screen border bg-white dark:bg-black">
          <Link href="/" className="px-4 py-3 text-xl font-semibold">
            <LeftChevron />
          </Link>
          <span className="flex grow items-center justify-center text-base font-bold">
            Post
          </span>
        </div>
      </div>
      <main className="flex h-[600px] max-w-[850px] pb-10">
        <Carousel
          media={media}
          setLiked={setLiked}
          width={600}
          height={600}
          className="h-full"
        />
        <section className="flex w-[355px] flex-col border border-[#dbdbdb] dark:border-gray-800">
          <PostHeader
            profile_picture_url={profile_picture_url}
            username={username}
            verified={verified}
            location={location_name}
            follower_count={10}
            following_count={10}
            post_count={10}
            creator_id={creator_id}
          />
          <article className="flex grow flex-col gap-2 overflow-auto p-4">
            <PostDescription
              created_at={created_at}
              description={description}
              profile_picture_url={profile_picture_url}
              verified={verified}
              username={username}
            />
            <CommentItems stateComments={stateComments} />
          </article>

          <div className="border-t border-[#dbdbdb] px-4 py-2 dark:border-gray-800">
            <PostIcons
              liked={liked}
              setLiked={setLiked}
              likes={post_interaction.length}
            />
            <span className="text-xs">{getRelativeTimeString(created_at)}</span>
          </div>
          <CommentForm
            post_id={id}
            setStateComments={setStateComments}
            profile_picture_url={user.profile_picture_url}
          />
        </section>
      </main>
      <section className="w-[900px] border-t border-[#dbdbdb] pt-16 dark:border-gray-800">
        <h1 className="font-gray-500 mb-5">
          More posts from
          <Link href={`/${username}`} className="font-white font-bold">
            {" "}
            {username}
          </Link>
        </h1>
        <MorePosts creator={creator}  pinnedPosts={pinnedPosts}/>
      </section>
      <Footer />
      <span className="text-[#00376b] dark:text-[#e0f1ff]" />
    </div>
  );
};

export default PostPage;

function LeftChevron() {
  return (
    <svg
      aria-label="Back"
      color="currentColor"
      fill="currentColor"
      height="24"
      role="img"
      viewBox="0 0 24 24"
      width="24"
      className="-rotate-90"
    >
      <title>Back</title>
      <path d="M21 17.502a.997.997 0 0 1-.707-.293L12 8.913l-8.293 8.296a1 1 0 1 1-1.414-1.414l9-9.004a1.03 1.03 0 0 1 1.414 0l9 9.004A1 1 0 0 1 21 17.502Z"></path>
    </svg>
  );
}
