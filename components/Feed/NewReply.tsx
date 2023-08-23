import { Reply } from "@/util/dummy-data";
import truncateText from "@/util/truncateText";
import React, { useMemo, useState } from "react";

type NewReplyProps = {
  reply: Reply;
};

const NewReply: React.FC<NewReplyProps> = ({ reply }) => {
  const [showMore, setShowMore] = useState(false);
  const [shortText, fullText, isTruncated] = useMemo(
    () => {console.log('useMemo'); return truncateText(reply.text, 40)},
    [reply.text]
  );

  return (
    <div className="flex gap-1">
      <span className="font-bold">{reply.account}</span>
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
