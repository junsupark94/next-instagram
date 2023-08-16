import Image from "next/image";
import React from "react";
import ProfileIcon from "./Icons/ProfileIcon";
import StoryButton from "./StoryButton";

type Props = {};

export default function Stories({}: Props) {
  return (
    <ul className="flex gap-2">
      <StoryButton />
      <StoryButton />
      <StoryButton />
      <StoryButton />
    </ul>
  );
}
