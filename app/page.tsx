import SearchBar from "@/components/SearchBar";
import Stories from "@/components/Stories";
import Footer from "@/components/Footer";
import Image from "next/image";
import Feed from "@/components/Feed";

export default function Home() {
  return (
    <div>
      <header className="fixed top-0 flex p-2 gap-4 border-b w-full bg-white">
        <Image src="/instagram.svg" alt="icon" width={30} height={30} />
        <SearchBar className="grow" />
        <Image src="/heart.svg" alt="notifications" width={30} height={30} />
      </header>
      <div className="mt-[58px]" />
      <Stories />
      <Feed />
      <Footer />
    </div>
  );
}
