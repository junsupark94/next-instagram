import { AriaButtonProps } from "react-aria";
import { create } from "zustand";

interface CreateModalStore {
  triggerProps: AriaButtonProps<"button">;
  setTriggerProps: (triggerProps: any) => void;
}

export const useCreateModalStore = create<CreateModalStore>(set => ({
  setTriggerProps: (triggerProps) => set({triggerProps}),
  triggerProps: {},
}))