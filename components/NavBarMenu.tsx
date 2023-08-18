import React, { useEffect, useRef } from "react";
import CogIcon from "./Icons/CogIcon";
import ActivityIcon from "./Icons/ActivityIcon";
import BookmarkIcon from "./Icons/BookmarkIcon";
import ShortcutsIcon from "./Icons/ShortcutsIcon";
import DarkModeIcon from "./Icons/DarkModeIcon";
import ProblemIcon from "./Icons/ProblemIcon";
import { cn } from "@/util/cn";

type NavBarMenuProps = {
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

const NavBarMenu: React.FC<NavBarMenuProps> = ({setShowMenu}) => {
  const menuRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    function clickOutside(e: MouseEvent) {
      if (!menuRef.current?.contains(e.target)) {
        setShowMenu(false);
      }
    }
    document.addEventListener("mousedown", clickOutside);
    return () => {
      document.removeEventListener("mousedown", clickOutside);
    };
  }, [menuRef, setShowMenu]);

  return (
    <div className="flex flex-col rounded-2xl p-2 bg-[#262626]" ref={menuRef}>
      <Button className="cursor-default line-through">
        <CogIcon className="w-4 h-4" />
        <span>Settings</span>
      </Button>
      <Button className="cursor-default line-through">
        <ActivityIcon className="w-4 h-4" />
        <span>Your activity</span>
      </Button>
      <Button>
        <BookmarkIcon className="w-4 h-4" />
        <span>Saved</span>
      </Button>
      <Button className="cursor-default line-through">
        <ShortcutsIcon className="w-4 h-4" />
        <span>Keyboard shortcuts</span>
      </Button>
      <Button>
        <DarkModeIcon className="w-4 h-4" />
        <span>Switch appearance</span>
      </Button>
      <Button className="cursor-default line-through">
        <ProblemIcon className="w-4 h-4" />
        <span>Report a problem</span>
      </Button>
      <div className="border-[3px] border-[#5555554c] -mx-2 my-2" />
      <Button className="cursor-default line-through">
        <span>Switch accounts</span>
      </Button>
      <div className="border border-[#5555554c] -mx-2 my-2" />
      <Button className="cursor-default line-through">
        <span>Log out</span>
      </Button>
    </div>
  );
};
export default NavBarMenu;

function Button({
  className,
  children,
}: {
  children: any;
  className?: string;
}) {
  return (
    <button
      className={cn(
        "flex items-center gap-2 p-4 rounded-lg hover:bg-[#ffffff19] transition text-[14px] leading-4",
        className
      )}
    >
      {children}
    </button>
  );
}
