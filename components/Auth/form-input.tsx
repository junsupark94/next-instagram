"use client"

import { cn } from "@/lib/utils";

type FormInputProps = {
  watch: (name: string, defaultValue?: string) => string;
  register: any;
  field: string;
  label: string;
}

const FormInput = ({watch, register, field, label} : FormInputProps) => {
  return (
    <label className="relative h-9 w-full">
      <span
        className={cn(
          "pointer-events-none absolute left-2 h-9 origin-left text-xs leading-9 text-neutral-500 transition-transform",
          watch(field).trim().length !== 0 &&
            "-translate-y-2 scale-[calc(10/12)]",
        )}
      >
        {label}
      </span>
      <input
        className={cn(
          "h-full w-full rounded-sm border border-zinc-300 bg-neutral-100 pb-[7px] pl-2 pt-[9px] leading-[18px] transition-transform focus:border-zinc-500  focus:outline-none",
          watch(field) !== "" && "pb-[2px] pt-[14px] text-[12px]",
        )}
        {...register(field)}
      />
    </label>
  );
};

export default FormInput;
