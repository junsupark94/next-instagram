"use client";
import { cn } from "@/lib/utils";
import background from "@/public/home-phones.png";
import shot1 from "@/public/screenshot1.png";
import shot2 from "@/public/screenshot2.png";
import shot3 from "@/public/screenshot3.png";
import shot4 from "@/public/screenshot4.png";
import Image from "next/image";
import { useEffect, useState } from "react";

const AuthPhones = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIndex((curr) => {
        return (curr + 1) % 4;
      });
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [index]);

  return (
    <div className="auth:block relative mr-8 hidden">
      <Image alt="background phones" src={background} />
      <div className="">
        <Image
          alt="screenshot of Instagram"
          src={shot1}
          className={cn(
            "duration-1500 absolute right-[60px] top-6 transition-opacity",
            index === 0 ? "opacity-100" : "opacity-0",
          )}
        />
        <Image
          alt="screenshot of Instagram"
          src={shot2}
          className={cn(
            "duration-1500 absolute right-[60px] top-6 transition-opacity opacity-0",
            index === 1 ? "opacity-100" : "opacity-0",
          )}
        />
        <Image
          alt="screenshot of Instagram"
          src={shot3}
          className={cn(
            "duration-1500 absolute right-[60px] top-6 transition-opacity opacity-0",
            index === 2 ? "opacity-100" : "opacity-0",
          )}
        />
        <Image
          alt="screenshot of Instagram"
          src={shot4}
          className={cn(
            "duration-1500 absolute right-[60px] top-6 transition-opacity opacity-0",
            index === 3 ? "opacity-100" : "opacity-0",
          )}
        />
      </div>
    </div>
  );
};

export default AuthPhones;
