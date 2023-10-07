import { AriaButtonOptions, useButton } from "react-aria";
import { useRef } from "react";

export default function Button({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
} & AriaButtonOptions<"button">) {
  const ref = useRef<HTMLButtonElement>(null);
  const { buttonProps } = useButton(props, ref);

  return (
    <button {...buttonProps} className={className} ref={ref}>
      {children}
    </button>
  );
}