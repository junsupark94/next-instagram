import Stories from "@/components/Stories";
import Feed from "@/components/Feed";
import HeartIcon from "@/components/Icons/HeartIcon";
import InstagramLogo from "@/components/Icons/InstagramLogo";
import SearchBar from "@/components/SearchBar";
import BottomNavBar from "@/components/BottomNavBar";
import RightSideBar from "@/components/RightSideBar";

export default function Home() {
  return (
    <>
      <header className="fixed top-0 flex items-center justify-between p-3 px-4 gap-4 border-b border-gray-500 w-full bg-white dark:bg-black dark:text-white z-10 sm:hidden border">
        <InstagramLogo />
        <div className="flex gap-3 items-center">
          <SearchBar />
          <HeartIcon className="w-8 h-8" />
        </div>
      </header>
      <div className="h-[52px] sm:hidden" />
      <section className="grow flex justify-center gap-16">
        <div className="max-w-[630px] pt-[22px]">
          <div className="my-2 xs:border-0 border-b border-gray-800">
            <Stories />
          </div>
          <article className="flex justify-center xs:mt-4">
            <div className="max-w-[470px]">
              <Feed />
            </div>
          </article>
        </div>
        <RightSideBar />
      </section>
      <div className="h-10" />
      <div className="sm:hidden fixed bottom-0 left-0 w-screen">
        <BottomNavBar />
      </div>
    </>
  );
}
