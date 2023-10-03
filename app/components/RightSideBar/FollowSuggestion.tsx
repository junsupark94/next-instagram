import React from "react";
import Image from "next/image";
import Link from "next/link";

type FollowSuggestionProps = {
  imageSrc: string;
  name: string;
  url: string;
  reason: string;
};

const FollowSuggestion: React.FC<FollowSuggestionProps> = ({imageSrc, name, url, reason}) => {
  return (
    <li className="flex justify-between cursor-default">
      <section className="flex gap-2">
        <Image src={imageSrc} alt="image" width={40} height={40} className="rounded-full"/>
        <div>
          <Link href={url} className="font-bold cursor-default">{name}</Link>
          <div className="dark:text-[#a8a8a8] text-[#737373] text-xs">{reason}</div>
        </div>
      </section>
      <button className="text-xs text-[#0095f6] font-semibold cursor-default">Follow</button>
    </li>
  );
};
export default FollowSuggestion;
