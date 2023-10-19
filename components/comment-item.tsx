"use client";
import Image from "next/image";
import Link from "next/link";
import { getShortenedRelative } from "@/utils/relative-time";
import { convertText } from "@/utils/text";
import { Button } from "react-aria-components";
import { useMemo, useState } from "react";
import { useReplyStore } from "@/hooks/use-reply-store";
import { Heart } from "lucide-react";
import { CommentWithReplies } from "@/app/(main)/p/[post_id]/page";
import { useAuth } from "@/hooks/use-auth-hook";

const CommentItem = ({
  comment,
  index,
}: {
  comment: CommentWithReplies;
  index: number;
}) => {
  const user = useAuth();
  const initialLikeStatus = useMemo(() => {
    return comment.Comment_interaction.some(
      (interaction) => interaction.user_id === user.id,
    );
  }, [user.id, comment.Comment_interaction]);
  const [viewReplies, setViewReplies] = useState(false);
  const [liked, setLiked] = useState(initialLikeStatus);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const set_reply_target = useReplyStore((state) => state.set_reply_target);

  const onLike = async (value: boolean) => {
    try {
      setIsSubmitting(true);
      const response = await fetch(`/api/comments/${comment.id}`, {
        method: "PATCH",
        body: JSON.stringify({
          user_id: user.id,
          liked: value,
        }),
      });
      if (!response.ok) throw new Error("Something went wrong!");
      setLiked(value);
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  let amountOfLikes = comment.Comment_interaction.length
  if (initialLikeStatus && !liked) {
    amountOfLikes -= 1
  } else if (!initialLikeStatus && liked) {
    amountOfLikes += 1
  }

  return (
    <div className="flex gap-2">
      <Image
        src={comment.user.profile_picture_url || "/default_profile.jpeg"}
        alt={comment.user.profile_name}
        width={32}
        height={32}
        className="self-start rounded-full"
      />
      <article className="w-full">
        <div>
          <h2 className="text-">
            <Link
              href={`/${comment.user.username}`}
              className="mr-2 font-semibold"
            >
              {comment.user.username}
            </Link>
            <span className="text-neutral-400">
              {getShortenedRelative(comment.created_at)}
            </span>
          </h2>
          <div className="flex w-full items-center justify-between">
            <p>{convertText(comment.text)}</p>
            <Button onPress={() => onLike(!liked)} isDisabled={isSubmitting}>
              <Heart
                className="h-4 w-4 text-muted-foreground"
                role="button"
                stroke={liked ? "red" : "currentColor"}
                fill="red"
                fillOpacity={liked ? "100" : "0"}
              />
            </Button>
          </div>
          <div className="flex gap-2 pb-4 pt-2 text-xs text-neutral-400">
            {!!amountOfLikes && (
              <Button className="font-semibold">
                {amountOfLikes} Like{amountOfLikes > 1 && "s"}
              </Button>
            )}
            {/* <Button
              className="font-semibold"
              onPress={() =>
                set_reply_target({
                  replying_to_id: comment.id,
                  username: comment.user.username,
                  index,
                  parent_comment_id: comment.id,
                })
              }
            >
              Reply
            </Button> */}
          </div>
        </div>
        {/* {comment.Children && !!comment.Children.length && (
          <Button
            onPress={() => setViewReplies((prev) => !prev)}
            className="flex items-center gap-2 text-xs"
          >
            <div className="w-5 border border-neutral-400" />
            <span>
              {viewReplies
                ? "Hide replies"
                : `View replies (${comment.Children.length})`}
            </span>
          </Button>
        )}
        {viewReplies && (
          <div className="mt-2">
            {comment.Children.map((reply) => (
              <div key={reply.id} className="flex gap-3">
                <Image
                  src={
                    reply.user.profile_picture_url || "/default_profile.jpeg"
                  }
                  alt={reply.user.username}
                  width={32}
                  height={32}
                  className="self-start rounded-full"
                />
                <div>
                  <div>
                    <span>{reply.user.username}</span>
                    <span className="ml-1 text-neutral-400">
                      {getShortenedRelative(reply.created_at)}
                    </span>
                  </div>
                  <div>{convertText(reply.text)}</div>
                  <div className="mt-2 flex gap-2 text-xs text-neutral-400">
                    <Button
                      className="font-semibold"
                      onPress={() =>
                        set_reply_target({
                          replying_to_id: reply.id,
                          username: reply.user.username,
                          index,
                          parent_comment_id: comment.id,
                        })
                      }
                    >
                      Reply
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )} */}
      </article>
    </div>
  );
};

export default CommentItem;
