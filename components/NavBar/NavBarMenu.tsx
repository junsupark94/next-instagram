"use client";
import React, { useEffect, useRef, useState } from "react";
import CogIcon from "@/Icons/CogIcon";
import ActivityIcon from "@/Icons/ActivityIcon";
import BookmarkIcon from "@/Icons/BookmarkIcon";
import ShortcutsIcon from "@/Icons/ShortcutsIcon";
import DarkModeIcon from "@/Icons/DarkModeIcon";
import ProblemIcon from "@/Icons/ProblemIcon";
import { cn } from "@/utils/cn";
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/use-auth-hook";
import { revalidatePath } from "next/cache";

type NavBarMenuProps = {
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

const NavBarMenu: React.FC<NavBarMenuProps> = ({ setShowMenu }) => {
  const router = useRouter();
  const [showDarkMode, setShowDarkMode] = useState(false);
  const user = useAuth();
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

  const onToggleDarkMode = async () => {
    try {
      const response = await fetch(`/api/user/${user.id}`, {
        method: "PATCH",
        body: JSON.stringify({
          dark_mode: !user.dark_mode,
        }),
      });
      if (!response.ok) throw new Error("Something went wrong!");
      router.refresh();
    } catch (error) {
      console.log(error);
    }
  };

  const logout = async () => {
    await fetch("/api/auth/signout");
    router.refresh();
  };

  return (
    <div
      className={cn(
        "h-[440px] overflow-hidden rounded-2xl bg-white p-2 drop-shadow-around transition-[transform,height] dark:bg-[#262626]",
        showDarkMode && "h-[125px]",
      )}
      ref={menuRef}
    >
      <section
        className={cn("flex flex-col", showDarkMode && "translate-x-[-100%]")}
        ref={mainMenuRef}
      >
        <Button className="cursor-default line-through">
          <CogIcon className="h-4 w-4" />
          <span>Settings</span>
        </Button>
        <Button className="cursor-default line-through">
          <ActivityIcon className="h-4 w-4" />
          <span>Your activity</span>
        </Button>
        <Button>
          <BookmarkIcon className="h-4 w-4" />
          <span>Saved</span>
        </Button>
        <Button className="cursor-default line-through">
          <ShortcutsIcon className="h-4 w-4" />
          <span>Keyboard shortcuts</span>
        </Button>
        <Button onClick={() => setShowDarkMode(true)}>
          {user.dark_mode ? (
            <DarkModeIcon className="h-4 w-4" />
          ) : (
            <LightModeIcon />
          )}
          <span>Switch appearance</span>
        </Button>
        <Button className="cursor-default line-through">
          <ProblemIcon className="h-4 w-4" />
          <span>Report a problem</span>
        </Button>
        <div className="-mx-2 my-2 border-[3px] border-[#5555554c]" />
        <Button className="cursor-default line-through">
          <span>Switch accounts</span>
        </Button>
        <div className="-mx-2 my-2 border border-[#5555554c]" />
        <Button onClick={logout}>
          <span>Log out</span>
        </Button>
      </section>
      <div
        className={cn(
          "invisible absolute left-0 top-0 w-full translate-x-[100%] rounded-2xl opacity-0 transition",
          `${showDarkMode && "visible translate-x-0 opacity-100"}`,
        )}
      >
        <div className="flex items-center justify-between border-b border-[#555555] p-4">
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
              "h-4 w-4 transition",
              user.dark_mode ? "opacity-100" : "hidden opacity-0",
            )}
          />
          <LightModeIcon
            className={cn(
              "h-4 w-4 transition",
              user.dark_mode ? "hidden opacity-0" : "opacity-100",
            )}
          />
        </div>
        <div className="p-2 text-sm">
          <button
            onClick={onToggleDarkMode}
            className="flex w-full items-center justify-between rounded-lg p-4 transition hover:bg-gray-200 dark:hover:bg-gray-600/30"
          >
            <span>Dark mode</span>
            <div
              className={cn(
                "flex w-8 rounded-lg bg-gray-400 px-1 dark:bg-blue-500",
              )}
            >
              <div
                className={cn(
                  "rounded-full bg-white p-2 drop-shadow-around transition-transform",
                  user.dark_mode && "translate-x-[60%]",
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
        "flex items-center gap-2 rounded-lg p-4 text-[14px] leading-4 transition hover:bg-[#ffffff19]",
        className,
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
