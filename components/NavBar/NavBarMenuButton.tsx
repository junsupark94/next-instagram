"use client";
import React, { useState } from "react";
import MenuIcon from "../Icons/MenuIcon";
import NavBarMenu from "./NavBarMenu";

type NavBarMenuButtonProps = {};

const NavBarMenuButton: React.FC<NavBarMenuButtonProps> = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="relative w-full">
      <button
        className="p-3 mb-3 dark:hover:bg-hover hover:bg-gray-100 rounded-lg transition flex gap-4 w-full group"
        onClick={() => setShowMenu((prev) => !prev)}
      >
        <div className="group-hover:scale-110 transition-transform">
          <MenuIcon />
        </div>
        <span className="hidden lg:inline">More</span>
      </button>
      {showMenu && <section className="absolute top-0 left-0">
        <div className="absolute bottom-2 left-0 w-[266px]">
          <NavBarMenu setShowMenu={setShowMenu}/>
        </div>
      </section>}
    </div>
  );
};
export default NavBarMenuButton;
