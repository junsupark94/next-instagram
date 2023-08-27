import { cn } from "@/utils/cn";
import Link from "next/link";
import React from "react";

type FooterProps = {};

const links = [
  { text: "About", src: "https://about.instagram.com/" },
  { text: "Help", src: "https://help.instagram.com/" },
  { text: "Press", src: "https://about.instagram.com/blog" },
  { text: "API", src: "https://developers.facebook.com/docs/instagram" },
  { text: "Jobs", src: "https://about.instagram.com/about-us/careers" },
  {
    text: "Privacy",
    src: "https://privacycenter.instagram.com/policy/?entry_point=ig_help_center_data_policy_redirect",
  },
  { text: "Terms", src: "https://help.instagram.com/581066165581870/" },
  { text: "Locations", src: "https://www.instagram.com/explore/locations/" },
];

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="text-xs dark:text-[#737373] text-[#c7c7c7]">
      <ul className="flex flex-wrap">
        {links.map((link) => (
          <li
            key={link.text}
            className="after:content-['\00B7'] after:mx-[3px]"
          >
            <Link href={link.src} target="_blank" className="hover:underline">
              {link.text}
            </Link>
          </li>
        ))}
        <Languages />
        <li>
          <Link
            href="https://about.meta.com/technologies/meta-verified/"
            target="_blank"
            className="hover:underline"
          >
            Meta Verified
          </Link>
        </li>
      </ul>
      <div className="pt-5">© 2023 INSTAGRAM FROM META</div>
    </footer>
  );
};
export default Footer;

function Languages() {
  return (
    <div className="after:content-['\00B7'] after:mx-[3px] relative">
      <span className="after:content-['Language']" />

      <select
        aria-label="Switch Display Language"
        className="w-full opacity-0 h-full cursor-pointer left-0 top-0 absolute"
        defaultValue={"en"}
      >
        <option value="af">Afrikaans</option>
        <option value="cs">Čeština</option>
        <option value="da">Dansk</option>
        <option value="de">Deutsch</option>
        <option value="el">Ελληνικά</option>
        <option value="en">English</option>
        <option value="en-gb">English (UK)</option>
        <option value="es">Español (España)</option>
        <option value="es-la">Español</option>
        <option value="fi">Suomi</option>
        <option value="fr">Français</option>
        <option value="id">Bahasa Indonesia</option>
        <option value="it">Italiano</option>
        <option value="ja">日本語</option>
        <option value="ko">한국어</option>
        <option value="ms">Bahasa Melayu</option>
        <option value="nb">Norsk</option>
        <option value="nl">Nederlands</option>
        <option value="pl">Polski</option>
        <option value="pt-br">Português (Brasil)</option>
        <option value="pt">Português (Portugal)</option>
        <option value="ru">Русский</option>
        <option value="sv">Svenska</option>
        <option value="th">ภาษาไทย</option>
        <option value="tl">Filipino</option>
        <option value="tr">Türkçe</option>
        <option value="zh-cn">中文(简体)</option>
        <option value="zh-tw">中文(台灣)</option>
        <option value="bn">বাংলা</option>
        <option value="gu">ગુજરાતી</option>
        <option value="hi">हिन्दी</option>
        <option value="hr">Hrvatski</option>
        <option value="hu">Magyar</option>
        <option value="kn">ಕನ್ನಡ</option>
        <option value="ml">മലയാളം</option>
        <option value="mr">मराठी</option>
        <option value="ne">नेपाली</option>
        <option value="pa">ਪੰਜਾਬੀ</option>
        <option value="si">සිංහල</option>
        <option value="sk">Slovenčina</option>
        <option value="ta">தமிழ்</option>
        <option value="te">తెలుగు</option>
        <option value="vi">Tiếng Việt</option>
        <option value="zh-hk">中文(香港)</option>
        <option value="bg">Български</option>
        <option value="fr-ca">Français (Canada)</option>
        <option value="ro">Română</option>
        <option value="sr">Српски</option>
        <option value="uk">Українська</option>
      </select>
    </div>
  );
}
