import Link from "next/link";
import React from "react";

type FooterProps = {};

const links = [
  {text: "About", src: "https://about.instagram.com/"},
  {text: "Help", src: "https://help.instagram.com/"},
  {text: "Press", src: "https://about.instagram.com/blog"},
  {text: "API", src: "https://developers.facebook.com/docs/instagram"},
  {text: "Jobs", src: "https://about.instagram.com/about-us/careers"},
  {text: "Privacy", src: "https://privacycenter.instagram.com/policy/?entry_point=ig_help_center_data_policy_redirect"},
  {text: "Terms", src: "https://help.instagram.com/581066165581870/"},
  {text: "Locations", src: "https://www.instagram.com/explore/locations/"},
];

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="text-xs text-[#737373]">
      <ul className="flex flex-wrap">
        {links.map((link) => (
          <li key={link.text} className="after:content-['\00B7'] after:mx-[3px]">
            <Link href={link.src} target="_blank" className="hover:underline">
              {link.text}
            </Link>
          </li>
        ))}
        <li className="after:content-['\00B7'] after:mx-[3px]">
          <span>Languages</span>
        </li>
        <li>
          <Link href="https://about.meta.com/technologies/meta-verified/" target="_blank" className="hover:underline">
            Meta Verified
          </Link>
        </li>
      </ul>
      <div className="pt-5">© 2023 INSTAGRAM FROM META</div>
    </footer>
  );
};
export default Footer;
