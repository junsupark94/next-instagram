'use client'

import FormInput from "@/components/Auth/form-input";
import PasswordInput from "@/components/Auth/password-input";
import { cn } from "@/lib/utils";
import { SignUpType, signUpSchema } from "@/lib/zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

const SignUpForm = () => {
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
      console.error(error);
      setServerError("Something wen't wrong, please try again!");
    }
  };
  return (
    <>
      {" "}
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
    </>
  );
};

export default SignUpForm;
