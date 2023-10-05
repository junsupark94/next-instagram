"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";

type FormInputProps = {
  watch: (name: string, defaultValue?: string) => string;
  register: any;
};

const PasswordInput = ({ watch, register }: FormInputProps) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
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
  );
};

export default PasswordInput;
