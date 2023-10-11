import parse from "html-react-parser";
import Link from "next/link";

export default function truncateText(text: string, cutoff: number = 100) {
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

  const shortText = convertText(truncatedText);
  const fullText = convertText(text);
  return [shortText, fullText, isTruncated];
}

export function convertText(text: string) {
  const atRegex = /@\w+/g;
  function atReplacer(match: string) {
    return `<at>${match}</at>`;
  }
  const textWithAtLinks = text.replace(atRegex, atReplacer);

  const hashtagRegex = /#\w+/g;
  function hashtagReplacer(match: string) {
    return `<tag>${match}</tag>`;
  }
  const textWithBoth = textWithAtLinks.replace(hashtagRegex, hashtagReplacer);

  const convertedText = parse(textWithBoth, {
    replace: (node : any) => {
      if (node.name === "tag") {
        const tag = node.children[0].data;
        return (
          <Link
            target="_blank"
            className="text-[#00376b] dark:text-[#e0f1ff]"
            href={`https://www.instagram.com/explore/tags/${tag.slice(1)}`}
          >
            {tag}
          </Link>
        );
      } else if (node.name === "at") {
        const tag = node.children[0].data;
        return (
          <Link
            target="_blank"
            className="text-[#00376b] dark:text-[#e0f1ff]"
            href={`https://www.instagram.com/${tag.slice(1)}`}
          >
            {tag}
          </Link>
        );
      }
    },
  });
  return convertedText;
}