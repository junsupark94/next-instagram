"use client";
import Image from "next/image";
import Link from "next/link";
import { getShortenedRelative } from "@/utils/relative-time";
import { convertText } from "@/utils/text";
import { Button } from "react-aria-components";
import { useState } from "react";
import { useReplyStore } from "@/hooks/use-reply-store";
import { $Enums, Comment } from "@prisma/client";

const CommentItem = ({
  profile_name,
  profile_picture_url,
  created_at,
  text,
  replies,
  replying_to_id,
  username,
  index,
  id,
}: {
  profile_picture_url: string | null;
  profile_name: string;
  replying_to_id: string;
  username: string;
  created_at: Date;
  text: string;
  replies: ({
    user: {
      profile_name: string;
      username: string;
      profile_picture_url: string | null;
    };
  } & {
    id: string;
    text: string;
    user_id: string;
    content_type: $Enums.ContentType;
    post_id: string | null;
    reel_id: string | null;
    parent_comment_id: string | null;
    replying_to_id: string | null;
    created_at: Date;
    updated_at: Date;
  })[];
  index: number;
  id: string;
}) => {
  const [viewReplies, setViewReplies] = useState(false);
  const set_reply_target = useReplyStore((state) => state.set_reply_target);

  return (
    <div className="flex gap-2">
      <Image
        src={profile_picture_url || "/default_profile.jpeg"}
        alt={profile_name}
        width={32}
        height={32}
        className="self-start rounded-full"
      />
      <article>
        <h2 className="text-">
          <Link href={`/${username}`} className="mr-2 font-semibold">
            {username}
          </Link>
          <span className="text-neutral-400">
            {getShortenedRelative(created_at)}
          </span>
        </h2>
        <p>{convertText(text)}</p>
        <div className="flex gap-2 pb-4 pt-2 text-xs text-neutral-400">
          <Button className="font-semibold">Like</Button>
          <Button
            className="font-semibold"
            onPress={() =>
              set_reply_target({
                replying_to_id,
                username,
                index,
                parent_comment_id: id,
              })
            }
          >
            Reply
          </Button>
        </div>
        {replies && !!replies.length && (
          <Button
            onPress={() => setViewReplies((prev) => !prev)}
            className="flex items-center gap-2 text-xs"
          >
            <div className="w-5 border border-neutral-400" />
            <span>
              {viewReplies
                ? "Hide replies"
                : `View replies (${replies.length})`}
            </span>
          </Button>
        )}
        {viewReplies && (
          <div className="mt-2">
            {replies.map((reply) => (
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
                          replying_to_id,
                          username,
                          index,
                          parent_comment_id: id,
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
        )}
      </article>
    </div>
  );
};

export default CommentItem;
