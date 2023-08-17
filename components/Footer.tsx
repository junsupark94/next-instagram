import Link from "next/link";
import React from "react";

type FooterProps = {};

const links = [
  "About",
  "Help",
  "Press",
  "API",
  "Jobs",
  "Privacy",
  "Terms",
  "Locations",
];

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="text-xs text-[#737373]">
      <ul className="flex flex-wrap">
        {links.map((link) => (
          <li key={link} className="after:content-['\00B7'] after:mx-[3px]">
            <Link href="/" className="hover:underline">
              {link}
            </Link>
          </li>
        ))}
        <li className="after:content-['\00B7'] after:mx-[3px]">
          <span>Languages</span>
        </li>
        <li>
          <Link href="/" className="hover:underline">
            Meta Verified
          </Link>
        </li>
      </ul>
      <div className="pt-5">© 2023 INSTAGRAM FROM META</div>
    </footer>
  );
};
export default Footer;
