import truncateText from "@/utils/text";
import { Comment } from "@prisma/client";
import React, { useMemo, useState } from "react";

type NewCommentProps = {
  comment: Comment;
};

const NewComment: React.FC<NewCommentProps> = ({ comment }) => {
  const [showMore, setShowMore] = useState(false);
  const [shortText, fullText, isTruncated] = useMemo(
    () => truncateText(comment.text, 40),
    [comment.text]
  );

  return (
    <div className="">
      <span className="font-bold mr-1">{reply.account}</span>
      {!showMore && (
        <>
          <span className="whitespace-pre-wrap">{shortText}</span>
          {isTruncated && (
            <button
              onClick={() => setShowMore(true)}
              className="block text-gray-400"
            >
              Show more
            </button>
          )}
        </>
      )}
      {showMore && (
        <span className="inline whitespace-pre-wrap">{fullText}</span>
      )}
    </div>
  );
};

const MemoizedNewComment = React.memo(NewComment)
export default MemoizedNewComment;
