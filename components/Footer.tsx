import Link from "next/link";
import React from "react";

type FooterProps = {};

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="text-xs text-[#737373]">
      <ul className="flex flex-wrap">
        <li className="after:content-['\00B7'] after:mx-[3px]">
          <Link href="/" className="hover:underline">About</Link>
        </li>
        <li className="after:content-['\00B7'] after:mx-[3px]">
          <Link href="/" className="hover:underline">Help</Link>
        </li>
        <li className="after:content-['\00B7'] after:mx-[3px]">
          <Link href="/" className="hover:underline">Press</Link>
        </li>
        <li className="after:content-['\00B7'] after:mx-[3px]">
          <Link href="/" className="hover:underline">API</Link>
        </li>
        <li className="after:content-['\00B7'] after:mx-[3px]">
          <Link href="/" className="hover:underline">Jobs</Link>
        </li>
        <li className="after:content-['\00B7'] after:mx-[3px]">
          <Link href="/" className="hover:underline">Privacy</Link>
        </li>
        <li className="after:content-['\00B7'] after:mx-[3px]">
          <Link href="/" className="hover:underline">Terms</Link>
        </li>
        <li className="after:content-['\00B7'] after:mx-[3px]">
          <Link href="/" className="hover:underline">Locations</Link>
        </li>
        <li className="after:content-['\00B7'] after:mx-[3px]">
          <Link href="/" className="hover:underline">Language</Link>
        </li>
        <li>
          <Link href="/" className="hover:underline">Meta Verified</Link>
        </li>
      </ul>
      <div className="pt-5">© 2023 INSTAGRAM FROM META</div>
    </footer>
  );
};
export default Footer;
