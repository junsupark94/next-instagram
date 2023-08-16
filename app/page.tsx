import Stories from "@/components/Stories";
import Footer from "@/components/Footer";
import Feed from "@/components/Feed";
import HeartIcon from "@/components/Icons/HeartIcon";
import InstagramLogo from "@/components/Icons/InstagramLogo";
import PostIcon from "@/components/Icons/PostIcon";

export default function Home() {
  return (
    <div>
      <header className="fixed top-0 flex items-center justify-between p-2 px-4 gap-4 border-b border-gray-500 w-full bg-white dark:bg-black dark:text-white z-10 sm:hidden">
        <InstagramLogo />
        <div className="flex gap-3 items-center">
          <PostIcon className="w-6 h-6"/>
          <HeartIcon className="w-8 h-8"/>
        </div>
      </header>
      <div className="mt-[58px]" />
      <div className="mb-10 max-w-[630px] mx-auto border">
        <div className="border border-green-500 mb-4 mt-6">
          <Stories />
        </div>
        <div className="flex justify-center border border-blue-500">
          <div className="max-w-[470px] border border-red-500">
            <Feed />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
