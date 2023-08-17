import Stories from "@/components/Stories";
import Footer from "@/components/Footer";
import Feed from "@/components/Feed";
import HeartIcon from "@/components/Icons/HeartIcon";
import InstagramLogo from "@/components/Icons/InstagramLogo";
import SearchBar from "@/components/SearchBar";
import InstagramIcon from "@/components/Icons/InstagramIcon";
import Link from "next/link";
import ExploreIcon from "@/components/Icons/ExploreIcon";
import MessengerIcon from "@/components/Icons/MessengerIcon";
import PostIcon from "@/components/Icons/PostIcon";
import ProfileIcon from "@/components/Icons/ProfileIcon";
import HomeIcon from "@/components/Icons/HomeIcon";
import ReelsIcon from "@/components/Icons/ReelsIcon";
import SearchIcon from "@/components/Icons/SearchIcon";

export default function Home() {
  return (
    <div className="flex-col flex sm:flex-row items-center">
      <nav className="w-[72px]">
        <div className="w-[72px] hidden h-screen fixed top-0 left-0 dark:text-white pt-9 px-3 pb-5 sm:flex flex-col items-center border-r border-gray-500 gap-14">
          <Link href="/">
            <InstagramIcon className="w-6 h-6" />
          </Link>
          <div className="flex flex-col gap-8">
            <HomeIcon />
            <SearchIcon />
            <ExploreIcon />
            <ReelsIcon />
            <MessengerIcon />
            <HeartIcon />
            <PostIcon />
            <ProfileIcon />
          </div>
        </div>
      </nav>
      <header className="fixed top-0 flex items-center justify-between p-2 px-4 gap-4 border-b border-gray-500 w-full bg-white dark:bg-black dark:text-white z-10 sm:hidden">
        <InstagramLogo />
        <div className="flex gap-3 items-center">
          {/* <PostIcon className="w-6 h-6"/> */}
          <SearchBar />
          <HeartIcon className="w-8 h-8" />
        </div>
      </header>
      <div className="h-[52px]" />
      <section className="flex justify-center w-full pt-[40px]">
        <div className="max-w-[630px]">
          <Stories />
          <div className="h-[16px]" />
          <article className="flex justify-center">
            <div className="max-w-[470px]">
              <Feed />
            </div>
          </article>
        </div>
      </section>
      <div className="h-10" />
      <div className="sm:hidden fixed bottom-0 left-0 w-screen">
        <Footer />
      </div>
    </div>
  );
}
