"use client";
import { useAuth } from "@/hooks/use-auth-hook";
import { cn } from "@/lib/utils";
import { CommentType, commentSchema } from "@/lib/zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Comment, Post } from "@prisma/client";
import {
  Dispatch,
  SetStateAction,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { Button } from "react-aria-components";
import { useController, useForm } from "react-hook-form";

const CommentForm = ({
  setNewComments,
  post,
}: {
  post: Post;
  setNewComments: Dispatch<SetStateAction<Comment[]>>;
}) => {
  const [commentText, setCommentText] = useState("");
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

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useLayoutEffect(() => {
    if (!textareaRef.current) return;
    textareaRef.current.style.height = "0";
    const height = Math.min(textareaRef.current.scrollHeight, 80);
    textareaRef.current.style.height = `${height}px`;
  }, [commentText]);

  const onSubmit = async (formData: CommentType) => {
    console.log("formData", formData);
    try {
      const response = await fetch("/api/comments", {
        method: "POST",
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const data = await response.json();
      setNewComments((state) => [...state, data]);
      setCommentText("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-full items-center justify-between"
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
  );
};

export default CommentForm;
