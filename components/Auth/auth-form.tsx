"use client";
import { cn } from "@/lib/utils";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { useState } from "react";
import FormInput from "./form-input";
import PasswordInput from "./password-input";

const signInSchema = z.object({
  login: z.string().min(1).max(30),
  password: z.string().min(6).max(75),
});

type SignInType = z.infer<typeof signInSchema>;

const AuthForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting, isValid },
  } = useForm<SignInType>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      login: "",
      password: "",
    },
  });

  const onSubmit = (formData: SignInType) => {
    console.log(formData);
    console.log(watch("password"));
  };

  return (
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
      <PasswordInput watch={watch} register={register}/>
      <button
        disabled={!isValid || isSubmitting}
        className={cn(
          "my-2 w-full rounded-lg bg-sky-500 px-4 py-[6px] text-sm font-semibold text-white disabled:bg-sky-400",
        )}
      >
        Log in
      </button>
    </form>
  );
};

export default AuthForm;
