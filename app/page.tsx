import SearchBar from "@/components/SearchBar";
import FocusBlurTest from "@/components/FocusBlurTest";
import Image from "next/image";
import StackingTest from "@/components/StackingTest";

export default function Home() {
  return (
    <div>
      <div className="flex p-2 gap-4 border-b">
        <Image src="/instagram.svg" alt="icon" width={30} height={30} />
        <SearchBar className="grow" />
        <Image src="/heart.svg" alt="notifications" width={30} height={30} />
      </div>
      <div>Stories</div>
      <div>Feed</div>
      <div>Footer Nav</div>
    </div>
  );
}
