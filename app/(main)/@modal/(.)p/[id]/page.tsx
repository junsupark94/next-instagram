'use client'
import CommentItem from "@/components/CommentItem";
import ProfileIcon from "@/components/Icons/ProfileIcon";
import ModalFooter from "@/components/ModalFooter";
import useClickOutside from "@/util/useClickOutside";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Page({ params }) {
  const router = useRouter();
  const modalRef = useClickOutside(() => router.back());
  return (
    <div className="flex w-[80%] h-[80%] dark:bg-black text-sm" ref={modalRef}>
      <section className="grow max-w-[55vw] bg-green-100">Modal Page</section>
      <div className="flex flex-col justify-between max-w-[500px] grow">
        <section className="border-b border-gray-500 grow">
          <header className="flex justify-between items-center p-4 border-b border-gray-500">
            <div className="flex gap-2 justify-between items-center">
              <ProfileIcon className="w-8 h-8" />
              <div className="flex flex-col gap-2">
                <div>account name</div>
                <div className="text-xs">location</div>
              </div>
            </div>
            <button>...</button>
          </header>
          <article className="p-4">
            <div className="flex gap-2 pb-4">
              <ProfileIcon />
              <div className="grow">
                <div>
                  <h1>accout name</h1>
                  <p>description</p>
                </div>
                <div className="flex gap-2">
                  <div>time</div>
                </div>
              </div>
            </div>
            <CommentItem />
          </article>
        </section>
        <ModalFooter />
      </div>
      <button onClick={() => router.back()} className="absolute top-4 right-4">
        <svg
          aria-label="Close"
          color="currentColor"
          fill="currentColor"
          height="18"
          role="img"
          viewBox="0 0 24 24"
          width="18"
        >
          <title>Close</title>
          <polyline
            fill="none"
            points="20.643 3.357 12 12 3.353 20.647"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3"
          ></polyline>
          <line
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3"
            x1="20.649"
            x2="3.354"
            y1="20.649"
            y2="3.354"
          ></line>
        </svg>
      </button>
    </div>
  );
}
