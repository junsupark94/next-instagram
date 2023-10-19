import { cn } from "@/lib/utils";
import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import Image from "next/image";
import { useController, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CommentType, commentSchema } from "@/lib/zod";
import { useAuth } from "@/hooks/use-auth-hook";
import { useReplyStore } from "@/hooks/use-reply-store";
import { Button } from "react-aria-components";
import { CommentWithReplies } from "@/app/(main)/p/[post_id]/page";

type ReplyFormProps = {
  setStateComments: Dispatch<SetStateAction<CommentWithReplies[]>>;
  post_id: string;
  profile_picture_url: string | null;
};

const ReplyForm: React.FC<ReplyFormProps> = ({
  setStateComments,
  post_id,
  profile_picture_url,
}) => {
  const user = useAuth();
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [reply_target, set_reply_target] = useReplyStore((state) => [
    state.reply_target,
    state.set_reply_target,
  ]);
  const [commentText, setCommentText] = useState("");
  const [error, setError] = useState(false);
  const {
    control,
    handleSubmit,
    setValue,
    formState: { isSubmitting },
    reset
  } = useForm<CommentType>({
    resolver: zodResolver(commentSchema),
    defaultValues: {
      content_type: "POST",
      post_id,
      user_id: user.id,
    },
  });
  const { field } = useController({
    control,
    name: "text",
  });

  useEffect(() => {
    if (!reply_target) return;
    setCommentText(`@${reply_target.username} `);
    setValue("replying_to_id", reply_target.replying_to_id);
    setValue("parent_comment_id", reply_target.parent_comment_id)
  }, [setValue, reply_target]);

  const onSubmit = async (formData: CommentType) => {
    try {
      setError(false);
      const response = await fetch("/api/comments", {
        method: "POST",
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const data = await response.json();
      if (reply_target) {
        const { index } = reply_target;
        setStateComments((prev) => {
          const target = prev[index];
          if (!target.Children) target.Children = [];
          target.Children = [...target.Children, data];
          return [...prev];
        });
      } else {
        setStateComments((prev) => [data, ...prev]);
      }
      setCommentText("");
      reset();
      set_reply_target(null);
    } catch (error) {
      console.error(error);
      setError(true);
    }
  };

  useLayoutEffect(() => {
    if (!textareaRef.current) return;
    textareaRef.current.style.height = "0";
    const height = Math.min(textareaRef.current.scrollHeight, 80);
    textareaRef.current.style.height = `${height}px`;
  }, [commentText, textareaRef]);

  return (
    <form
      className="flex items-center gap-3 px-3 pb-3 pt-1"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Image
        src={profile_picture_url || "/default_profile.jpeg"}
        alt="profile picture"
        className="rounded-full"
        width={32}
        height={32}
      />
      <textarea
        className="grow resize-none outline-none dark:bg-black dark:text-white"
        placeholder="Add a comment..."
        ref={textareaRef}
        value={commentText}
        onChange={(e) => {
          setCommentText(e.target.value);
          field.onChange(e.target.value);
        }}
      />
      <Button
        className={cn(
          "font-bold text-[#0095f6]",
          commentText.length ? "hover:text-white" : "invisible",
        )}
        type="submit"
        isDisabled={isSubmitting}
      >
        Post
      </Button>
    </form>
  );
};
export default ReplyForm;
