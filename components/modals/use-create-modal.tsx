import { useCreateModalStore } from "@/hooks/use-create-modal-store";
import { useEffect, useRef } from "react";
import { useOverlayTrigger, useModalOverlay, useDialog } from "react-aria";
import { useOverlayTriggerState } from "react-stately";

export function useCreateModal() {
  const state = useOverlayTriggerState({});
  const setTriggerProps = useCreateModalStore((state) => state.setTriggerProps);
  const { triggerProps, overlayProps } = useOverlayTrigger(
    { type: "dialog" },
    state,
  );
  useEffect(() => {
    setTriggerProps(triggerProps);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const modalRef = useRef(null);
  const { modalProps, underlayProps } = useModalOverlay(
    { isDismissable: true },
    state,
    modalRef,
  );

  const dialogRef = useRef(null);
  const { dialogProps, titleProps } = useDialog(overlayProps, dialogRef);

  return {
    state,
    underlayProps,
    modalProps,
    modalRef,
    dialogRef,
    dialogProps,
    titleProps,
  };
}
