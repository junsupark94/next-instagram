"use client";
import FormInput from "@/components/Auth/form-input";
import PasswordInput from "@/components/Auth/password-input";
import { cn } from "@/lib/utils";
import { SignInType, signInSchema } from "@/lib/zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";

const SignInForm = () => {
  const [error, setError] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { isSubmitting, isValid },
  } = useForm<SignInType>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      login: "",
      password: "",
    },
  });

  const onSubmit = async (formData: SignInType) => {
    setError(false);
    const response = await fetch("/api/auth/signin", {
      method: "POST",
      body: JSON.stringify(formData),
    });
    if (!response.ok) {
      setError(true);
    }
  };
  return (
    <>
      <form
        className="flex flex-col items-center gap-y-[6px]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <FormInput
          watch={watch}
          register={register}
          field="login"
          label="Phone number, username, or email"
        />
        <PasswordInput watch={watch} register={register} />
        <button
          disabled={!isValid || isSubmitting}
          className={cn(
            "my-2 w-full rounded-lg bg-sky-500 px-4 py-[6px] text-sm font-semibold text-white disabled:bg-sky-400",
          )}
        >
          Log in
        </button>
      </form>
      <div className="mt-6 flex w-full flex-col px-10">
        <div className="mb-[18px] mt-[10px] flex items-center justify-center gap-4">
          <div className="h-[1px] grow bg-zinc-200" />
          <div className="text-sm font-semibold uppercase leading-[15px]">
            OR
          </div>
          <div className="h-[1px] grow bg-zinc-200" />
        </div>
        <button className="my-2 flex w-full cursor-default items-center justify-center gap-2">
          <Image alt="facebook" src="/facebook.png" width={16} height={16} />
          <span className="text-center text-[14px] font-semibold text-[#385185] line-through">
            Log in with Facebook
          </span>
        </button>
        {error && (
          <p className="text-center text-sm text-red-500">
            Sorry, your password was incorrect. Please double-check your
            password.
          </p>
        )}
        <Link
          href="/resetpassword"
          className="mt-3 text-center text-xs text-[#385185]"
        >
          Forgot password?
        </Link>
      </div>
    </>
  );
};

export default SignInForm;
