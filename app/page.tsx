import Stories from "@/components/Stories";
import Footer from "@/components/Footer";
import Feed from "@/components/Feed";
import HeartIcon from "@/components/Icons/HeartIcon";
import InstagramLogo from "@/components/Icons/InstagramLogo";
import PostIcon from "@/components/Icons/PostIcon";

export default function Home() {
  return (
    <div>
      <header className="fixed top-0 flex items-center justify-between p-2 px-4 gap-4 border-b border-gray-500 w-full bg-white dark:bg-black dark:text-white z-10">
        <InstagramLogo />
        <div className="flex gap-3 items-center">
          <PostIcon className="w-6 h-6"/>
          <HeartIcon className="w-8 h-8"/>
        </div>
      </header>
      <div className="mt-[58px]" />
      <div className="border-b border-gray-500">
        <Stories />
      </div>
      <div className="mb-10">
        <Feed />
      </div>
      <Footer />
    </div>
  );
}
