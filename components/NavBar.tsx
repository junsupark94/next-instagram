import Link from 'next/link';
import React from 'react';
import ExploreIcon from './Icons/ExploreIcon';
import HeartIcon from './Icons/HeartIcon';
import HomeIcon from './Icons/HomeIcon';
import InstagramIcon from './Icons/InstagramIcon';
import MenuIcon from './Icons/MenuIcon';
import MessengerIcon from './Icons/MessengerIcon';
import PostIcon from './Icons/PostIcon';
import ProfileIcon from './Icons/ProfileIcon';
import ReelsIcon from './Icons/ReelsIcon';
import SearchIcon from './Icons/SearchIcon';

type NavBarProps = {

};

const NavBar:React.FC<NavBarProps> = () => <nav className="w-[72px]">
  <div className="w-[72px] hidden h-screen fixed top-0 left-0 dark:text-white pt-9 px-3 pb-5 sm:flex flex-col items-center border-r border-gray-500 justify-between">
    <div>
      <Link href="/">
        <InstagramIcon className="w-6 h-6" />
      </Link>
      <div className="flex flex-col gap-8 mt-14">
        <HomeIcon />
        <SearchIcon />
        <ExploreIcon />
        <ReelsIcon />
        <MessengerIcon />
        <HeartIcon />
        <PostIcon />
        <ProfileIcon />
      </div>
    </div>
    <button className='p-3 mb-3 hover:bg-gray-800 rounded-lg transition'>
      <MenuIcon />
    </button>
  </div>
</nav>
export default NavBar;