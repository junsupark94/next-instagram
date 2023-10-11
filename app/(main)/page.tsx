import HeartIcon from "@/Icons/HeartIcon";
import InstagramLogo from "@/Icons/InstagramLogo";
import SearchBar from "@/components/SearchBar";
import RightSideBar from "@/components/RightSideBar/RightSideBar";
import Stories from "./_components/stories";
import Feed from "./_components/feed";

export default async function Home() {

  return (
    <>
      <header className="fixed top-0 z-10 flex w-full items-center justify-between gap-4 border border-b border-gray-500 bg-white p-3 px-4 dark:bg-black dark:text-white sm:hidden">
        <InstagramLogo />
        <div className="flex items-center gap-3">
          <SearchBar />
          <HeartIcon className="h-8 w-8" />
        </div>
      </header>
      <section className="mb-10 mt-[52px] flex grow justify-center gap-16 sm:m-0">
        <div className="max-w-[630px] pt-[22px]">
          <div className="my-2 border-b border-gray-800 xs:border-0">
            <Stories />
          </div>
          <div className="flex justify-center xs:mt-4">
            <Feed />
          </div>
        </div>
        <RightSideBar />
      </section>
    </>
  );
}
