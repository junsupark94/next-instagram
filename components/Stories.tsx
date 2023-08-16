import Image from "next/image";
import React from "react";
import ProfileIcon from "./Icons/ProfileIcon";

type Props = {};

export default function Stories({}: Props) {
  return (
    <section className="flex">
      <article className="flex flex-col items-center">
        <ProfileIcon  className="w-14 h-14"/>
        <div>Name</div>
      </article>
    </section>
  );
}
