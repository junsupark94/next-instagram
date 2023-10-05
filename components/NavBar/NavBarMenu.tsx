import React, { useEffect, useRef, useState } from "react";
import CogIcon from "@/Icons/CogIcon";
import ActivityIcon from "@/Icons/ActivityIcon";
import BookmarkIcon from "@/Icons/BookmarkIcon";
import ShortcutsIcon from "@/Icons/ShortcutsIcon";
import DarkModeIcon from "@/Icons/DarkModeIcon";
import ProblemIcon from "@/Icons/ProblemIcon";
import { cn } from "@/utils/cn";
import { useGlobalStore } from "@/utils/zustand";
import { useRouter } from "next/navigation";


type NavBarMenuProps = {
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

const NavBarMenu: React.FC<NavBarMenuProps> = ({ setShowMenu }) => {
  const router = useRouter();
  const [showDarkMode, setShowDarkMode] = useState(false);
  const [darkMode, toggleDarkMode] = useGlobalStore((state) => [
    state.darkMode,
    state.toggleDarkMode,
  ]);
  const menuRef = useRef<HTMLDivElement>(null);
  const mainMenuRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    function clickOutside(e: MouseEvent) {
      if (!menuRef.current?.contains(e.target as Node)) {
        setShowMenu(false);
      }
    }
    document.addEventListener("mousedown", clickOutside);
    return () => {
      document.removeEventListener("mousedown", clickOutside);
    };
  }, [menuRef, setShowMenu]);


  const logout = async () => {
    await fetch('/api/auth/signout')
    router.refresh();
  }

  return (
    <div
      className={cn(
        "rounded-2xl p-2 dark:bg-[#262626] bg-white drop-shadow-around overflow-hidden h-[440px] transition-[transform,height]",
        showDarkMode && "h-[125px]"
      )}
      ref={menuRef}
    >
      <section
        className={cn("flex flex-col", showDarkMode && "translate-x-[-100%]")}
        ref={mainMenuRef}
      >
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
        <Button onClick={() => setShowDarkMode(true)}>
          {darkMode ? <DarkModeIcon className="w-4 h-4" /> : <LightModeIcon />}
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
        <Button onClick={logout}>
          <span>Log out</span>
        </Button>
      </section>
      <div
        className={cn(
          "translate-x-[100%] invisible opacity-0 w-full top-0 left-0 absolute rounded-2xl transition",
          `${showDarkMode && "translate-x-0 visible opacity-100"}`
        )}
      >
        <div className="flex items-center justify-between border-b p-4 border-[#555555]">
          <div className="flex gap-2">
            <button
              className="text-[#737373]"
              onClick={() => setShowDarkMode(false)}
            >
              {"<"}
            </button>
            <span className="font-semibold">Switch appearance</span>
          </div>
          <DarkModeIcon
            className={cn(
              "w-4 h-4 transition",
              darkMode ? "opacity-100" : "opacity-0 hidden"
            )}
          />
          <LightModeIcon
            className={cn(
              "w-4 h-4 transition",
              darkMode ? "opacity-0 hidden" : "opacity-100"
            )}
          />
        </div>
        <div className="p-2 text-sm">
          <button
            onClick={toggleDarkMode}
            className="flex w-full justify-between items-center p-4 dark:hover:bg-gray-600/30 hover:bg-gray-200 rounded-lg transition"
          >
            <span>Dark mode</span>
            <div
              className={cn(
                "flex w-8 dark:bg-blue-500 bg-gray-400 rounded-lg px-1"
              )}
            >
              <div
                className={cn(
                  "p-2 bg-white drop-shadow-around rounded-full transition-transform",
                  darkMode && "translate-x-[60%]"
                )}
              />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};
export default NavBarMenu;

function Button({
  className,
  children,
  onClick,
}: {
  children: any;
  className?: string;
  onClick?: any;
}) {
  return (
    <button
      className={cn(
        "flex items-center gap-2 p-4 rounded-lg hover:bg-[#ffffff19] transition text-[14px] leading-4",
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

function LightModeIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-label="Theme icon"
      className={className}
      color="rgb(0, 0, 0)"
      fill="rgb(0, 0, 0)"
      height="18"
      role="img"
      viewBox="0 0 24 24"
      width="18"
    >
      <title>Theme icon</title>
      <path d="M12.00018,4.5a1,1,0,0,0,1-1V2a1,1,0,0,0-2,0V3.5A1.00005,1.00005,0,0,0,12.00018,4.5ZM5.28241,6.69678A.99989.99989,0,1,0,6.69647,5.28271l-1.06054-1.061A.99989.99989,0,0,0,4.22186,5.63574ZM4.50018,12a1,1,0,0,0-1-1h-1.5a1,1,0,0,0,0,2h1.5A1,1,0,0,0,4.50018,12Zm.78223,5.30322-1.06055,1.061a.99989.99989,0,1,0,1.41407,1.41406l1.06054-1.061a.99989.99989,0,0,0-1.41406-1.41407ZM12.00018,19.5a1.00005,1.00005,0,0,0-1,1V22a1,1,0,0,0,2,0V20.5A1,1,0,0,0,12.00018,19.5Zm6.71729-2.19678a.99989.99989,0,0,0-1.41406,1.41407l1.06054,1.061A.99989.99989,0,0,0,19.778,18.36426ZM22.00018,11h-1.5a1,1,0,0,0,0,2h1.5a1,1,0,0,0,0-2ZM18.01044,6.98975a.996.996,0,0,0,.707-.293l1.06055-1.061A.99989.99989,0,0,0,18.364,4.22168l-1.06054,1.061a1,1,0,0,0,.707,1.707ZM12.00018,6a6,6,0,1,0,6,6A6.00657,6.00657,0,0,0,12.00018,6Zm0,10a4,4,0,1,1,4-4A4.00458,4.00458,0,0,1,12.00018,16Z"></path>
    </svg>
  );
}
