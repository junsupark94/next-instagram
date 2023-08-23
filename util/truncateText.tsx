import parse from "html-react-parser";
import Link from "next/link";

export default function truncateText(text : string, cutoff : number = 100) {
    let truncatedText = text;
    let isTruncated = false;
    if (text.length > 100) {
      truncatedText = text.slice(0, cutoff);
      isTruncated = true;
    }
    const newLineIndex = truncatedText.indexOf("\n");
    if (newLineIndex !== -1) {
      truncatedText = truncatedText.slice(0, newLineIndex);
      isTruncated = true;
    }
    if (isTruncated) {
      truncatedText += "...";
    }

    const regex = /#\w+/g;
    function replacer(match: string) {
      return `<a href="/">${match}</a>`;
    }
    truncatedText = truncatedText.replace(regex, replacer);
    const shortText = parse(truncatedText, {
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

    const fullText = parse(text.replace(regex, replacer), {
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

    return [shortText, fullText, isTruncated];
}