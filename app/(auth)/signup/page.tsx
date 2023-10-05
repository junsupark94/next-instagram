import InstagramLogo from "@/Icons/InstagramLogo";
import FacebookIcon from "@/public/facebookIcon.png";
import Image from "next/image";
import Link from "next/link";
import SignUpForm from "./_components/sign-up-form";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const SignUpPage = () => {
  const isAuth = cookies().get("JUNSU-AUTH")?.value === "some_secret";

  if (isAuth) {
    redirect("/");
  }

  return (
    <div className="flex h-full items-center justify-center">
      <main className="flex w-[350px] flex-col items-center ">
        <article className="flex flex-col items-center border border-zinc-300 px-10">
          <InstagramLogo className="mb-3 mt-9 h-[55px] w-[175px]" />
          <h1 className="mb-3 text-center font-semibold text-neutral-500">
            Sign up to see photos and videos from your friends.
          </h1>
          <button className="my-2 flex w-full items-center justify-center gap-2 rounded-md bg-[#0095f6] px-4 py-2">
            <Image alt="Log in with Facebook" src={FacebookIcon} />
            <span className="text-sm font-semibold text-white">
              Log in with Facebook
            </span>
          </button>
          <div className="mb-[18px] mt-[10px] flex w-full items-center justify-center gap-4">
            <div className="h-[1px] grow bg-zinc-200" />
            <div className="text-sm font-semibold uppercase leading-[15px] text-neutral-500">
              OR
            </div>
            <div className="h-[1px] grow bg-zinc-200" />
          </div>
          <SignUpForm />
        </article>
        <article className="my-2 w-full border border-zinc-300 py-4 text-center text-sm">
          <p>
            Have an account?{" "}
            <Link href="/" className="text-sky-500">
              Log in
            </Link>
          </p>
        </article>
      </main>
    </div>
  );
};

export default SignUpPage;
