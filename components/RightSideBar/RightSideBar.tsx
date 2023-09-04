import React from "react";
import FollowSuggestion from "./FollowSuggestion";
import Footer from "./Footer";
import Image from "next/image";

type RightSideBarProps = {};

const RightSideBar: React.FC<RightSideBarProps> = () => {
  return (
    <aside className="hidden md:block w-[319px] px-4 mt-9 mb-[46px] h-fit text-[14px]">
      <article className="flex justify-between mb-6">
        <section className="flex gap-2">
          <Image
            src="/junsu park.jpeg"
            alt="Junsu Park"
            width={40}
            height={40}
            className="rounded-full"
          />
          <div>
            <div className="font-bold">junsupark</div>
            <div className="dark:text-[#a8a8a8] text-[#737373]">Junsu Park</div>
          </div>
        </section>
        <button className="text-xs text-[#0095f6] cursor-default">
          Switch
        </button>
      </article>
      <article className="flex justify-between py-1">
        <div className="dark:text-[#a8a8a8] text-[#737373] font-semibold">
          Suggested for you
        </div>
        <button className="text-xs font-semibold cursor-default">
          See All
        </button>
      </article>
      <ul className="py-2 gap-4 flex flex-col">
        <FollowSuggestion
          imageSrc="/radix.png"
          name="Radix UI"
          reason="Headless accessible UI library"
          url="https://www.radix-ui.com/primitives"
        />
        <FollowSuggestion
          imageSrc="/shadcn.jpg"
          name="Shadcn"
          reason="Accessible UI components"
          url="https://ui.shadcn.com/"
        />
        <FollowSuggestion
          imageSrc="/antonio.jpg"
          name="Code with Antonio"
          url="https://twitter.com/YTCodeAntonio"
          reason="Great full stack tutorials"
        />
        <FollowSuggestion
          imageSrc="/astro.png"
          name="Astro"
          url="https://astro.build/"
          reason="Exciting frontend framework"
        />
      </ul>
      <div className="pt-6">
        <Footer />
      </div>
    </aside>
  );
};
export default RightSideBar;
