"use client";
import Image from "next/image";
import resetPassword from "@/public/resetpassword.png";
import { cn } from "@/lib/utils";
import { useState } from "react";
import Link from "next/link";
const ResetPasswordPage = () => {
  const [value, setValue] = useState("");

  const onClick = () => {

  }

  return (
    <div className="flex h-full items-center justify-center">
      <main className="flex w-[350px] flex-col border border-neutral-300">
        <article className="flex w-full flex-col items-center px-10">
          <Image
            alt="reset password"
            src={resetPassword}
            className="mb-4 mt-6"
          />
          <p className="mb-4 font-semibold">Trouble logging in?</p>
          <p className="mb-4 break-words text-center text-sm text-neutral-500">
            Enter your email, phone, or username and we&apos;ll send you a linkt
            to get back into your account.
          </p>
          <label className="relative mb-4 h-9 w-full">
            <span
              className={cn(
                "pointer-events-none absolute left-2 h-9 origin-left text-xs leading-9 text-neutral-500 transition-transform",
                value.length > 0 && "-translate-y-2 scale-[calc(10/12)]",
              )}
            >
              Email, Phone, or Username
            </span>
            <input
              className={cn(
                "h-full w-full rounded-md border border-zinc-300 bg-neutral-100/50 pb-[7px] pl-2 pt-[9px] leading-[18px] transition-transform focus:border-zinc-500  focus:outline-none",
                value.length > 0 && "pb-[2px] pt-[14px] text-[14px]",
              )}
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </label>
          <button
            onClick={onClick}
            className={cn(
              "mb-3 h-8 w-full rounded-md bg-sky-200 text-sm font-semibold text-white",
              value.length > 0 && "bg-sky-500",
            )}
          >
            Send login link
          </button>
          <p className="mb-3 text-xs text-[#00376b] line-through">
            Can&apos;t reset your password?
          </p>
          <div className="mb-[18px] mt-[10px] flex w-full items-center justify-center gap-4">
            <div className="h-[1px] grow bg-zinc-200" />
            <div className="text-sm font-semibold uppercase leading-[15px] text-neutral-500">
              OR
            </div>
            <div className="h-[1px] grow bg-zinc-200" />
          </div>
          <Link
            href="/signup"
            className="mb-4 text-sm font-semibold text-neutral-600"
          >
            Create new account
          </Link>
        </article>
        <Link
          href="/"
          className="border-neutral300 mt-16 w-full border bg-neutral-100 py-2 text-center text-sm font-semibold text-neutral-600"
        >
          Back to login
        </Link>
      </main>
    </div>
  );
};

export default ResetPasswordPage;
