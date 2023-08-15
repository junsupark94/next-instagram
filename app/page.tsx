import SearchBar from "@/components/SearchBar";
import Stories from "@/components/Stories";
import Footer from "@/components/Footer";
import Image from "next/image";
import Feed from "@/components/Feed";
import InstagramIcon from "@/components/Icons/InstagramIcon";
import HeartIcon from "@/components/Icons/HeartIcon";

export default function Home() {
  return (
    <div>
      <header className="fixed top-0 flex items-center p-2 gap-4 border-b w-full bg-white">
        <InstagramIcon />
        <SearchBar className="grow" />
        <HeartIcon className="w-8 h-8"/>
      </header>
      <div className="mt-[58px]" />
      <div className="border-b">
        <Stories />
      </div>
      <div className="mb-10">
        <Feed />
      </div>
      <Footer />
    </div>
  );
}
