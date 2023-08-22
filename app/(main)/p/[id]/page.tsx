"use client";
import PostHeader from "@/components/PostHeader";
import PostIcons from "@/components/PostIcons";
import { useState } from "react";
import { DUMMY_DATA } from "@/util/dummy-data";
import ProfileIcon from "@/components/Icons/ProfileIcon";
import { getRelativeTimeString } from "@/util/relative-time";
import { cn } from "@/util/cn";
import useAutoSizeTextArea from "@/util/autoSizeTextArea";
import Carousel from "@/components/Carousel";
import Image from "next/image";
import CommentItem from "@/components/CommentItem";
import Link from "next/link";
import CarouselIcon from "@/components/Icons/CarouselIcon";
import VideoIcon from "@/components/Icons/VideoIcon";

export default function Page({ params }: { params: any }) {
  const { value, setValue, textAreaRef } = useAutoSizeTextArea();
  const [liked, setLiked] = useState(false);

  const item = DUMMY_DATA.find((item) => item.id === Number(params.id));
  const accountItems = DUMMY_DATA.filter(
    (post) => post.account === item?.account
  ).slice(0, 6);

  if (!item) return <div>404 Post Not Found</div>;


  return (
    <div className="grow flex flex-col items-center mt-10">
      <main className="flex max-w-[850px] h-[600px] pb-10">
        <Carousel
          content={item.content}
          setLiked={setLiked}
          width={600}
          height={600}
          className="h-full"
        />
        <section className="w-[355px] flex flex-col border border-gray-800 shrink-0">
          <div className="p-4 border-b border-gray-500">
            <PostHeader account={item.account} date={item.date} />
          </div>
          <div className="flex gap-1 p-4">
            <ProfileIcon />
            <article>
              <div>
                <span>{item.account}</span>
              </div>
              <p>{item.description}</p>
            </article>
          </div>
          <article className="overflow-auto p-4 flex flex-col gap-2">
            <CommentItem />
            <CommentItem />
            <CommentItem />
            <CommentItem />
          </article>
          <div className="p-4 border-t border-gray-500">
            <PostIcons liked={liked} setLiked={setLiked} likes={10} />
            <span>{getRelativeTimeString(item.date)}</span>
          </div>
          <article className=" flex p-4 gap-4 items-center">
            <form className="flex grow">
              <ProfileIcon className="mr-2" />
              <textarea
                className="dark:bg-black dark:text-white resize-none outline-none grow"
                placeholder="Add a comment..."
                ref={textAreaRef}
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
              <div className="flex gap-2">
                <button
                  className={cn(
                    "font-bold text-[#0095f6] text-[14px]",
                    value === "" ? "invisible" : "hover:text-white"
                  )}
                >
                  Post
                </button>
              </div>
            </form>
          </article>
        </section>
      </main>
      <section className="border-t border-gray-500 w-[900px] pt-16">
        <h1 className="text-sm font-gray-500 mb-5">
          More posts from{" "}
          <span className="font-white font-bold">{item.account}</span>
        </h1>
        <div className="grid grid-cols-3 gap-1">
          {accountItems.map((accountItem) => {
            const media = accountItem.content[0];
            return (
              <Link key={accountItem.id} href={`/p/${accountItem.id}`} className="relative">
                {media.type === 'image' && <Image src={accountItem.content[0].src} alt="image" width={300} height={300} className="w-[300px] h-[300px] object-cover"/>}
                {media.type === 'video' && <video src={accountItem.content[0].src} className="w-[300px] h-[300px] object-cover" muted/>}
                {accountItem.content.length > 1 ? <CarouselIcon className="absolute top-2 right-2"/> : media.type === 'video' && <VideoIcon className="absolute top-2 right-2"/>}
              </Link>
            );
          })}
        </div>
      </section>
      <PhotoPageFooter />
    </div>
  );
}

function PhotoPageFooter() {
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
