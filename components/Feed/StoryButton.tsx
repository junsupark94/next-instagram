import React from "react";
import Image from "next/image";

type StoryButtonProps = {};

const StoryButton: React.FC<StoryButtonProps> = () => {
  return (
    <li className="flex flex-col items-center gap-1 snap-start">
      <button className="rounded-full h-[66px] w-[66px] overflow-hidden bg-gradient-to-tr from-yellow-500 via-red-500 to-purple-700 flex items-center justify-center">
        <div className="h-[62px] w-[62px] rounded-full overflow-hidden flex justify-center items-center border-2 dark:border-black border-white">
          <Image src="/test4.jpg" alt="image" width={66} height={66}/>
        </div>
      </button>
      <div className="text-xs">Name</div>
    </li>
  );
};
export default StoryButton;
