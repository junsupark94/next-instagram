"use client";
import InstagramLogo from "@/Icons/InstagramLogo";
import Image from "next/image";
import Link from "next/link";
import AuthForm from "./auth-form";
import AuthPhones from "./auth-phones";

const AuthPage = () => {
  return (
    <div className="flex items-center justify-center">
      <AuthPhones />
      <section className="flex h-screen flex-col items-center justify-center">
        <main className="mb-5 mt-10 flex w-[350px] flex-col items-center border border-zinc-300 py-5">
          <InstagramLogo className="mb-3 mt-9 h-[55px] w-[175px]" />
          <div className="mt-6 flex w-full flex-col px-10">
            <AuthForm />
            <div className="mb-[18px] mt-[10px] flex items-center justify-center gap-4">
              <div className="h-[1px] grow bg-zinc-200" />
              <div className="text-sm font-semibold uppercase leading-[15px]">
                OR
              </div>
              <div className="h-[1px] grow bg-zinc-200" />
            </div>
            <button className="my-2 flex w-full cursor-default items-center justify-center gap-2">
              <Image
                alt="facebook"
                src="/facebook.png"
                width={16}
                height={16}
              />
              <span className="text-center text-[14px] font-semibold text-[#385185] line-through">
                Log in with Facebook
              </span>
            </button>
            <Link href="/" className="mt-3 text-center text-xs text-[#385185]">
              Forgot password?
            </Link>
          </div>
        </main>
        <div className="mb-[10px] w-[350px] border border-neutral-300 py-4 text-center text-sm">
          <span className="">Don&apos;t have an account? </span>
          <button onClick={() => {}} className="font-semibold text-sky-500">
            Sign up
          </button>
        </div>
        <article className="mb-14 flex flex-col">
          <p className="text-center text-sm line-through">Get the app.</p>
          <div className="my-[10px] flex justify-center gap-2">
            {/* <Link href="/"> */}
            <Image
              alt="Download Instagram on the App Store"
              src="/appstore.png"
              width={136}
              height={40}
            />
            {/* </Link> */}
            {/* <Link href="/"> */}
            <Image
              alt="Download Instagram on Google Play"
              src="/googleplay.png"
              width={136}
              height={40}
            />
            {/* </Link> */}
          </div>
        </article>
      </section>
    </div>
  );
};

export default AuthPage;
