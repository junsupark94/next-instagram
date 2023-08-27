'use client'
import { cn } from '@/utils/cn';
import React, { useState } from 'react';
import { Switch } from "@/components/ui/switch"


type PageProps = {

};
let timer : NodeJS.Timer;


const Page:React.FC<PageProps> = () => {
  const [foo, setFoo] = useState(false);
  const mouseEnterHandler : React.MouseEventHandler<HTMLDivElement> = () => {
    // clearTimeout(timer);
    timer = setTimeout(() => setFoo(true), 1000);
  }
  const mouseLeaveHandler : React.MouseEventHandler<HTMLDivElement> = () => {
    clearTimeout(timer);
    setFoo(false);
  }
  const [darkMode, setDarkMode] = useState(false);

  return <div>
    <div onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler} className='relative border p-4'>Hover for dialog</div>
    <div className={cn("absolute invisible opacity-0 transition bg-blue-300 p-3 rounded-xl", foo && "visible opacity-100")}>Shown!</div>
    <div>Test block</div>
    <Switch checked={darkMode} onCheckedChange={e => setDarkMode(e)}/>
    {darkMode ? <div>Dark Mode</div> : <div>Light Mode</div>}
  </div>
}
export default Page;