"use client";
import { KeyboardEventHandler, useLayoutEffect, useRef, useState } from "react";
import FeedItemDescription from "./feed-item-description";
import Link from "next/link";
import { Media, Post, User, Comment } from "@prisma/client";
import Carousel from "@/components/Carousel";
import PostHeader from "@/components/PostHeader";
import PostIcons from "@/components/PostIcons";
import { useController, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CommentType, commentSchema } from "@/lib/zod";
import { cn } from "@/lib/utils";
import { Button } from "react-aria-components";
import { useAuth } from "@/hooks/use-auth-hook";
import { convertText } from "@/utils/text";

type FeedItemProps = {
  postWithUserWithMedia: {
    media: Media[];
    creator: User;
  } & Post;
};

const FeedItem: React.FC<FeedItemProps> = ({ postWithUserWithMedia }) => {
  const { creator, media, ...post } = postWithUserWithMedia;
  const [liked, setLiked] = useState(false);

  const user = useAuth();

  const {
    handleSubmit,
    control,
    formState: { isSubmitting },
  } = useForm<CommentType>({
    resolver: zodResolver(commentSchema),
    defaultValues: {
      user_id: user.id,
      content_type: "POST",
      post_id: post.id,
    },
  });
  const { field } = useController({
    control,
    name: "text",
  });
  const [commentText, setCommentText] = useState("");
  const [newComments, setNewComments] = useState<Comment[]>([]);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  useLayoutEffect(() => {
    if (!textareaRef.current) return;
    textareaRef.current.style.height = "0";
    const height = Math.min(textareaRef.current.scrollHeight, 80);
    textareaRef.current.style.height = `${height}px`;
  }, [commentText]);

  const onSubmit = async (formData: CommentType) => {
    console.log('formData', formData)
    try {
      const response = await fetch("/api/comments", {
        method: "POST",
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const data = await response.json();
      setNewComments(state => [...state, data])
      setCommentText("");
    } catch (error) {
      console.error(error);
    }
  };

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
        {/* <Link href={`/p/${post.id}`} className="my-1 text-gray-500">
          View all {`insert number here`} comments
        </Link> */}
        {newComments.map((comment) => (
          <div className="flex gap-1" key={comment.id}>
            <span className="font-semibold">{user.username}</span>
            <span className="whitespace-pre-wrap">{convertText(comment.text)}</span>
          </div>
        ))}
        <form
          onSubmit={handleSubmit(onSubmit)}
          ref={formRef}
          className="mt-2 flex w-full items-center justify-between"
        >
          <textarea
            className="grow resize-none focus:outline-none dark:bg-black"
            placeholder="Add a comment..."
            rows={1}
            value={commentText}
            onChange={(e) => {
              setCommentText(e.target.value);
              field.onChange(e.target.value);
            }}
            ref={textareaRef}
          />
          <Button
            className={cn(
              "hidden font-semibold text-sky-500",
              commentText.length && "block",
            )}
            type="submit"
            isDisabled={isSubmitting}
          >
            Post
          </Button>
        </form>
      </section>
    </div>
  );
};
export default FeedItem;
