"use client";
import { createElement, useMemo, useState } from "react";
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
      <span className="font-bold">{account}</span>{" "}
      {!showMore && (
        <>
          <h1 className="whitespace-pre-wrap">{shortDescription}</h1>
          {isTruncated && (
            <button onClick={() => setShowMore(true)} className="text-gray-400">
              more
            </button>
          )}
        </>
      )}
      {showMore && <h1 className="whitespace-pre-wrap">{fullDescription}</h1>}
    </div>
  );
};
export default FeedItemDescription;

// #kpop
// (match) => (<Link href="/">{match}</Link>)
// string.replace(/#\w+/g, )
// <Link href="/">#kpop</Link>
