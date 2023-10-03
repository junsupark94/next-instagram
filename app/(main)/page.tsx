import Stories from "@/components/Feed/Stories";
import Feed from "@/components/Feed/Feed";
import HeartIcon from "@/Icons/HeartIcon";
import InstagramLogo from "@/Icons/InstagramLogo";
import SearchBar from "@/components/SearchBar";
import RightSideBar from "@/components/RightSideBar/RightSideBar";
import { cookies } from "next/headers";


export default async function Home() {
  const isAuth = cookies().get("JUNSU-AUTH");

  if (!isAuth) {
    return <div>You need to sign up</div>
  }


  return (
    <>
      <header className="fixed top-0 flex items-center justify-between p-3 px-4 gap-4 border-b border-gray-500 w-full bg-white dark:bg-black dark:text-white z-10 sm:hidden border">
        <InstagramLogo />
        <div className="flex gap-3 items-center">
          <SearchBar />
          <HeartIcon className="w-8 h-8" />
        </div>
      </header>
      <section className="grow flex justify-center gap-16 mt-[52px] mb-10 sm:m-0">
        <div className="max-w-[630px] pt-[22px]">
          <div className="my-2 xs:border-0 border-b border-gray-800">
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
