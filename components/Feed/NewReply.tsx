import { Reply } from "@/utils/dummy-data-posts";
import truncateText from "@/utils/truncateText";
import React, { useMemo, useState } from "react";

type NewReplyProps = {
  reply: Reply;
};

const NewReply: React.FC<NewReplyProps> = ({ reply }) => {
  const [showMore, setShowMore] = useState(false);
  const [shortText, fullText, isTruncated] = useMemo(
    () => truncateText(reply.text, 40),
    [reply.text]
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

const MemoizedNewReply = React.memo(NewReply)
export default MemoizedNewReply;
