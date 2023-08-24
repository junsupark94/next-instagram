import Link from "next/link";
import React from "react";

function Footer() {
  console.log("PhotoPageFooter render")
  return (
    <footer className="my-10 text-xs dark:text-[#737373] text-[#c7c7c7] flex flex-col gap-4 items-center">
      <ul className="flex gap-4">
        <li>
          <Link href="/">Meta</Link>
        </li>
        <li>
          <Link href="/">About</Link>
        </li>
        <li>
          <Link href="/">Blog</Link>
        </li>
        <li>
          <Link href="/">Jobs</Link>
        </li>
        <li>
          <Link href="/">Help</Link>
        </li>
        <li>
          <Link href="/">API</Link>
        </li>
        <li>
          <Link href="/">Privacy</Link>
        </li>
        <li>
          <Link href="/">Terms</Link>
        </li>
        <li>
          <Link href="/">Top Accounts</Link>
        </li>
        <li>
          <Link href="/">Locations</Link>
        </li>
        <li>
          <Link href="/">Instagram Lite</Link>
        </li>
        <li>
          <Link href="/">Threads</Link>
        </li>
        <li>
          <Link href="/">Contact Uploading & Non-Users</Link>
        </li>
        <li>
          <Link href="/">Meta Verified</Link>
        </li>
      </ul>
      <div className="flex gap-4">
        <Languages />
        <span>© 2023 Instagram from Meta</span>
      </div>
    </footer>
  );
}
export default React.memo(Footer)


function Languages() {
  return (
    <span className="relative">
      <div className="flex items-center">
        <span>English</span>
        <svg
          aria-label="Down chevron icon"
          color="rgb(168, 168, 168)"
          fill="rgb(168, 168, 168)"
          height="12"
          role="img"
          viewBox="0 0 24 24"
          width="12"
          className="ml-1 inline-block rotate-180"
        >
          <title>Down chevron icon</title>
          <path d="M21 17.502a.997.997 0 0 1-.707-.293L12 8.913l-8.293 8.296a1 1 0 1 1-1.414-1.414l9-9.004a1.03 1.03 0 0 1 1.414 0l9 9.004A1 1 0 0 1 21 17.502Z"></path>
        </svg>
      </div>
      <select
        aria-label="Switch Display Language"
        className="w-full opacity-0 h-full cursor-pointer absolute left-0 top-0"
        defaultValue="en"
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
    </span>
  );
}