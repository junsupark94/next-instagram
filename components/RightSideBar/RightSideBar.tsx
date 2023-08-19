import React from "react";
import FollowSuggestion from "./FollowSuggestion";
import Footer from "./Footer";
import ProfileIcon from "../Icons/ProfileIcon";

type RightSideBarProps = {};

const RightSideBar: React.FC<RightSideBarProps> = () => {
  return (
    <aside className="hidden md:block w-[319px] px-4 mt-9 mb-[46px] h-fit text-[14px]">
      <article className="flex justify-between mb-6">
        <section className="flex gap-2">
          <ProfileIcon className="w-10 h-10" />
          <div>
            <div className="font-bold">account name</div>
            <div className="dark:text-[#a8a8a8] text-[#737373]">display name</div>
          </div>
        </section>
        <button className="text-xs text-[#0095f6] cursor-default">Switch</button>
      </article>
      <article className="flex justify-between py-1">
        <div className="dark:text-[#a8a8a8] text-[#737373] font-semibold">Suggested for you</div>
        <button className="text-xs font-semibold cursor-default">See All</button>
      </article>
      <ul className="py-2 gap-4 flex flex-col">
        <FollowSuggestion />
        <FollowSuggestion />
        <FollowSuggestion />
        <FollowSuggestion />
      </ul>
      <div className="pt-6">
        <Footer />
      </div>
    </aside>
  );
};
export default RightSideBar;
