"use client";
import Image from "next/image";
import ProfileIcon from "@/Icons/ProfileIcon";
import LocationIcon from "@/Icons/LocationIcon";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { useRef, useState } from "react";
import EmojiIcon from "@/Icons/EmojiIcon";
import { cn } from "@/lib/utils";
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronUpIcon,
} from "@radix-ui/react-icons";
import { Button } from "react-aria-components";
import { useAuth } from "@/hooks/use-auth-hook";
import { PicsAndVids } from "./create-post-modal";
import PlayIcon from "@/Icons/PlayIcon";
import { Switch } from "@/components/ui/switch";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { PostType, postSchema } from "@/lib/zod";

const EditPost = ({ files }: { files: PicsAndVids[] }) => {
  const [description, setDescription] = useState("");
  const [index, setIndex] = useState(0);
  const user = useAuth();

  const { src, type, name } = files[index];
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div className="flex h-[100vmin] max-h-[736px] min-h-[348px] grow rounded-xl">
      <div className="relative flex aspect-square grow items-center overflow-hidden">
        {index !== 0 && (
          <Button
            onPress={() => setIndex((prev) => prev - 1)}
            className="absolute left-2 z-50 rounded-full bg-black/30 p-2"
          >
            <ChevronLeftIcon />
          </Button>
        )}
        {type === "image" && (
          <Image src={src} alt={name} fill className="object-contain" />
        )}
        {type === "video" && (
          <div className="relative h-full w-full">
            <video
              src={src}
              className="h-full w-full"
              ref={videoRef}
              autoPlay
              loop
              controls={false}
              onPlay={() => setIsPaused(false)}
              onPause={() => setIsPaused(true)}
            />

            <Button
              onPress={() => {
                if (isPaused) {
                  videoRef.current!.play();
                } else {
                  videoRef.current!.pause();
                }
              }}
              className="absolute left-0 top-0 flex h-full w-full items-center justify-center"
            >
              {isPaused && <PlayIcon className="h-20 w-20" />}
            </Button>
          </div>
        )}
        {!!files.length && index !== files.length - 1 && (
          <Button
            onPress={() => setIndex((prev) => prev + 1)}
            className="absolute right-2 rounded-full bg-black/30 p-2"
          >
            <ChevronRightIcon />
          </Button>
        )}
      </div>
      <ScrollArea className="border-l border-neutral-500">
        <form className="flex w-[340px] flex-col gap-y-3 p-3">
          <div className="flex items-center gap-2">
            {!user.profile_picture_url && <ProfileIcon />}
            {user.profile_picture_url && (
              <Image
                src={user.profile_picture_url}
                alt="Your profile picture"
                className="rounded-full"
                height={28}
                width={28}
              />
            )}
            <span className="text-sm font-semibold">{user.username}</span>
          </div>
          <div className="relative">
            <textarea
              className="h-[168px] w-full resize-none bg-transparent outline-none"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <div
              className={cn(
                "pointer-events-none absolute left-0 top-0 text-neutral-500",
                description.length && "hidden",
              )}
            >
              Write a caption...
            </div>
          </div>
          <div className="flex justify-between text-xs text-neutral-500">
            <EmojiIcon className="h-5 w-5" />
            <div>{description.length}/2,200</div>
          </div>
          <div className="flex justify-between gap-2">
            <input
              type="text"
              placeholder="Add location"
              className="grow bg-transparent placeholder:text-neutral-500 focus:outline-none"
            />
            <LocationIcon className="h-4 w-4" />
          </div>
          <Collapsible>
            <CollapsibleTrigger className="group flex w-full items-center justify-between">
              <div className="font-semibold">Accessibility</div>
              <ChevronDownIcon className="group-data-[state=open]:hidden" />
              <ChevronUpIcon className="group-data-[state=closed]:hidden" />
            </CollapsibleTrigger>
            <CollapsibleContent>
              <div className="my-2 break-words text-xs text-neutral-500">
                Alt text describes your photos for people with visual
                impairments. Alt text will be automatically created for your
                photos or you can choose to write your own.
              </div>
              <div className="flex flex-col gap-2">
                {files.map((file) => (
                  <div key={file.name} className="flex items-center gap-3">
                    {file.type === "image" && (
                      <Image
                        src={file.src}
                        alt={file.name}
                        width={44}
                        height={44}
                      />
                    )}
                    {file.type === "video" && (
                      <video
                        src={file.src}
                        muted
                        controls={false}
                        className="pointer-events-none h-11 w-11 shrink-0 bg-black"
                      />
                    )}
                    <input
                      type="text"
                      placeholder="Write alt text"
                      className="w-full rounded-md bg-transparent p-3 text-sm placeholder:text-neutral-500 focus:outline focus:outline-1 focus:outline-[#555555]"
                    />
                  </div>
                ))}
              </div>
            </CollapsibleContent>
          </Collapsible>
          <Collapsible>
            <CollapsibleTrigger className="group flex w-full items-center justify-between">
              <div className="font-semibold">Advanced Settings</div>
              <ChevronDownIcon className="group-data-[state=open]:hidden" />
              <ChevronUpIcon className="group-data-[state=closed]:hidden" />
            </CollapsibleTrigger>
            <CollapsibleContent>
              <section className="mt-3">
                <div className="mb-2 flex">
                  <div>Hide like and view counts on this post</div>
                  <Switch />
                </div>
                <div className="text-xs text-neutral-500">
                  Only you will see the total number of likes and views on this
                  post. You can change this later by going to the ··· menu at
                  the top of the post. To hide like counts on other people's
                  posts, go to your account settings. Learn more
                </div>
              </section>
              <section className="mt-3">
                <div className="mb-2 flex justify-between">
                  <div>Turn off commenting</div>
                  <Switch />
                </div>
                <div className="text-xs text-neutral-500">
                  You can change this later by going to the ··· menu at the top
                  of your post.
                </div>
              </section>
            </CollapsibleContent>
          </Collapsible>
        </form>
      </ScrollArea>
    </div>
  );
};

export default EditPost;
