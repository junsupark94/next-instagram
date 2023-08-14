import Image from "next/image";
import React from "react";

type Props = {};

export default function Stories({}: Props) {
  return (
    <section className="flex">
      <article className="flex flex-col items-center border-red-500">
        <Image src="/profile.svg" alt="story" width={50} height={50} />
        <div>Name</div>
      </article>
      <article className="flex flex-col items-center border-red-500">
        <Image src="/profile.svg" alt="story" width={50} height={50} />
        <div>Name</div>
      </article>
    </section>
  );
}
