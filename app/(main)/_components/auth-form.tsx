"use client";
import TextField from "@/app/components/react-aria/text-field";
import { cn } from "@/lib/utils";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { useState } from "react";

const signInSchema = z.object({
  login: z.string().min(1).max(75),
  password: z.string().min(6),
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

  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (formData: SignInType) => {
    console.log(formData);
    console.log(watch("password"));
  };

  return (
    <form
      className="flex flex-col items-center gap-y-[6px]"
      onSubmit={handleSubmit(onSubmit)}
    >
      <label className="relative h-9 w-full">
        <span
          className={cn(
            "pointer-events-none absolute left-2 h-9 origin-left text-xs leading-9 text-neutral-500 transition-transform",
            watch("login").trim().length !== 0 &&
              "-translate-y-2 scale-[calc(10/12)]",
          )}
        >
          Phone number, username, or email
        </span>
        <input
          className={cn(
            "h-full w-full rounded-sm border border-zinc-300 bg-neutral-100 pb-[7px] pl-2 pt-[9px] leading-[18px] transition-transform focus:border-zinc-500  focus:outline-none",
            watch("login") !== "" && "pb-[2px] pt-[14px] text-[12px]",
          )}
          {...register("login")}
        />
      </label>
      <label className="relative flex h-9 w-full border border-zinc-300">
        <span
          className={cn(
            "pointer-events-none absolute left-2 h-9 origin-left text-xs leading-9 text-neutral-500 transition-transform",
            watch("password").trim().length !== 0 &&
              "-translate-y-2 scale-[calc(10/12)]",
          )}
        >
          Password
        </span>
        <input
          className={cn(
            "h-full w-full rounded-sm bg-neutral-100 pb-[7px] pl-2 pt-[9px] leading-[18px] transition-transform focus:border-zinc-500  focus:outline-none",
            watch("password") !== "" && "pb-[2px] pt-[14px] text-[12px]",
          )}
          {...register("password")}
          type={showPassword ? "text" : "password"}
        />
        {watch("password") !== "" && (
          <button
            className="bg-neutral-100 pr-1 text-sm font-semibold"
            onClick={() => setShowPassword((prev) => !prev)}
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        )}
      </label>
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
