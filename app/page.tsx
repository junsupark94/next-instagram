import Stories from "@/components/Stories";
import Footer from "@/components/Footer";
import Feed from "@/components/Feed";
import HeartIcon from "@/components/Icons/HeartIcon";
import InstagramLogo from "@/components/Icons/InstagramLogo";
import SearchBar from "@/components/SearchBar";
import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <div className="flex-col flex sm:flex-row items-center">
      <NavBar />
      <header className="fixed top-0 flex items-center justify-between p-3 px-4 gap-4 border-b border-gray-500 w-full bg-white dark:bg-black dark:text-white z-10 sm:hidden">
        <InstagramLogo />
        <div className="flex gap-3 items-center">
          {/* <PostIcon className="w-6 h-6"/> */}
          <SearchBar />
          <HeartIcon className="w-8 h-8" />
        </div>
      </header>
      <div className="h-[52px]" />
      <section className="flex justify-center w-full pt-6">
        <div className="max-w-[630px]">
          <div className="my-2">
            <Stories />
          </div>
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
