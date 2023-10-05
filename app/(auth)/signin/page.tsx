import InstagramLogo from "@/Icons/InstagramLogo";
import Link from "next/link";
import AuthPhones from "./_components/auth-phones";
import SignInForm from "./_components/sign-in-form";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const SignInPage = () => {
  const isAuth = cookies().get("JUNSU-AUTH")?.value === "some_secret";

  if (isAuth) {
    redirect("/");
  }

  return (
    <div className="flex items-center justify-center">
      <AuthPhones />
      <section className="flex h-screen flex-col items-center justify-center">
        <main className="mb-5 mt-10 flex w-[350px] flex-col items-center border border-zinc-300 py-5">
          <InstagramLogo className="mb-3 mt-9 h-[55px] w-[175px]" />
          <SignInForm />
        </main>
        <div className="mb-[10px] w-[350px] border border-neutral-300 py-4 text-center text-sm">
          <span className="">Don&apos;t have an account? </span>
          <Link href="/signup" className="font-semibold text-sky-500">
            Sign up
          </Link>
        </div>
      </section>
    </div>
  );
};

export default SignInPage;
