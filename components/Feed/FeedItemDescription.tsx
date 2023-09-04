"use client";
import React, { useMemo, useState } from "react";
import parse from "html-react-parser";
import Link from "next/link";

type FeedItemDescriptionProps = {
  account: string;
  description: string;
};

const FeedItemDescription: React.FC<FeedItemDescriptionProps> = ({
  account,
  description,
}) => {
  const [showMore, setShowMore] = useState(false);
  const [shortDescription, fullDescription, isTruncated] = useMemo(() => {
    let truncateDescription = description;
    let isTruncated = false;
    if (description.length > 100) {
      truncateDescription = description.slice(0, 100);
      isTruncated = true;
    }
    const newLineIndex = truncateDescription.indexOf("\n");
    if (newLineIndex !== -1) {
      truncateDescription = truncateDescription.slice(0, newLineIndex);
      truncateDescription += "\n...";
    } else if (isTruncated) {
      truncateDescription += "...";
    }

    const regex = /#\w+/g;
    function replacer(match: string) {
      return `<a href="/">${match}</a>`;
    }
    truncateDescription = truncateDescription.replace(regex, replacer);
    const shortDescription = parse(truncateDescription, {
      replace: (node) => {
        if (node.name === "a") {
          const tag = node.children[0].data;
          return (
            <Link
              target="_blank"
              className="text-blue-500"
              href={`https://www.instagram.com/explore/tags/${tag.slice(1)}`}
            >
              {tag}
            </Link>
          );
        }
      },
    });

    const fullDescription = parse(description.replace(regex, replacer), {
      replace: (node) => {
        if (node.name === "a") {
          const tag = node.children[0].data;
          return (
            <Link
              target="_blank"
              className="text-blue-500"
              href={`https://www.instagram.com/explore/tags/${tag.slice(1)}`}
            >
              {tag}
            </Link>
          );
        }
      },
    });
    return [shortDescription, fullDescription, isTruncated];
  }, [description]);

  return (
    <div className="mt-2">
      <Link href={`/${account}`} className="font-bold dark:hover:brightness-50 hover:text-gray-700">{account}</Link>{" "}
      {!showMore && (
        <>
          <h1 className="inline whitespace-pre-wrap">{shortDescription}</h1>
          {isTruncated && (
            <button onClick={() => setShowMore(true)} className="block text-gray-400">
              more
            </button>
          )}
        </>
      )}
      {showMore && <h1 className="inline whitespace-pre-wrap">{fullDescription}</h1>}
    </div>
  );
};

export default React.memo(FeedItemDescription);
