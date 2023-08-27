"use client";
import ModalFooter from "./ModalFooter";
import useClickOutside from "@/utils/useClickOutside";
import { useRouter } from "next/navigation";
import PostHeader from "./PostHeader";
import PostDescription from "./PostDescription";
import ExitIcon from "@/Icons/ExitIcon";
import CommentItem from "@/components/ReplyItem";

export default function Page({ params }) {
  const router = useRouter();
  const modalRef = useClickOutside(() => router.back());
  return (
    <div className="flex w-[80%] h-[80%] dark:bg-black text-sm" ref={modalRef}>
      <section className="grow max-w-[55vw] bg-green-100">Modal Page</section>
      <section className="flex flex-col max-w-[500px] grow">
        <PostHeader />
        <PostDescription />
        <div className="border-b border-purple-500 grow p-4">
          <CommentItem />
        </div>
        <ModalFooter />
      </section>
      <button onClick={() => router.back()} className="absolute top-4 right-4">
        <ExitIcon />
      </button>
    </div>
  );
}
