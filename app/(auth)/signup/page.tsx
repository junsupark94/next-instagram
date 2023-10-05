"use client";
import InstagramLogo from "@/Icons/InstagramLogo";
import FacebookIcon from "@/public/facebookIcon.png";
import Image from "next/image";

import { cn } from "@/lib/utils";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { useState } from "react";
import Link from "next/link";
import { SignUpType, signUpSchema } from "@/lib/zod";
import { redirect, useRouter } from "next/navigation";
import FormInput from "@/components/Auth/form-input";
import PasswordInput from "@/components/Auth/password-input";

const SignUpPage = () => {
  const router = useRouter();
  const [serverError, setServerError] = useState("");
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<SignUpType>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      login: "1112223333",
      password: "123456jP!",
      username: "junsumoney",
      fullname: "Junsu Park",
    },
    mode: "onBlur",
  });

  const onSubmit = async (formData: SignUpType) => {
    setServerError("");
    try {
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        const serverError = await response.text();
        setServerError(serverError);
      } else {
        router.push("/");
      }
    } catch (error) {
      console.log("WTF");
      console.error(error);
      setServerError("Something wen't wrong, please try again!");
    }
  };

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
          {serverError !== "" && (
            <p className="text-xs text-red-500">{serverError}</p>
          )}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex w-full flex-col items-center gap-y-[6px]"
          >
            <FormInput
              watch={watch}
              register={register}
              field="login"
              label="Mobile number or Email"
            />
            {errors.login && (
              <p className="text-xs text-red-500">{errors.login.message}</p>
            )}
            <FormInput
              watch={watch}
              register={register}
              field="fullname"
              label="Full Name"
            />
            {errors.fullname && (
              <p className="text-xs text-red-500">{errors.fullname.message}</p>
            )}
            <FormInput
              watch={watch}
              register={register}
              field="username"
              label="Username"
            />
            {errors.username && (
              <p className="text-xs text-red-500">{errors.username.message}</p>
            )}
            <PasswordInput watch={watch} register={register} />
            {errors.password && (
              <p className="text-xs text-red-500">{errors.password.message}</p>
            )}
            <p className="my-2 text-center text-xs text-neutral-500">
              This would be where legalese terms go but this is just a clone
              project.
              <Link
                href="www.linkedin.com/in/junsupark-swe"
                className="text-blue-600"
              >
                {" "}
                Learn more.
              </Link>
            </p>
            <button
              disabled={isSubmitting}
              className={cn(
                "mb-10 w-full rounded-md bg-sky-400 py-2 text-sm font-semibold text-white",
                isSubmitting && "brightness-75",
              )}
            >
              {isSubmitting ? "Submitting" : "Sign up"}
            </button>
          </form>
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
