import { AriaButtonProps } from "react-aria";
import { create } from "zustand";

interface CreateModalStore {
  triggerProps: AriaButtonProps<"button">;
  setTriggerProps: (newTriggerProps: any) => void;
}

export const useCreateModal = create<CreateModalStore>(set => ({
  setTriggerProps: (newTriggerProps) => set({triggerProps: newTriggerProps}),
  triggerProps: {},
}))