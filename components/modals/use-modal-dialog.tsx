import { useCreateModal } from "@/hooks/use-create-modal";
import { useEffect, useRef } from "react";
import { useOverlayTrigger, useModalOverlay, useDialog } from "react-aria";
import { useOverlayTriggerState } from "react-stately";

export function useModalDialog() {
  const [setTriggerProps] = useCreateModal((state) => [state.setTriggerProps]);
  const state = useOverlayTriggerState({});

  const { triggerProps, overlayProps } = useOverlayTrigger(
    { type: "dialog" },
    state,
  );
  useEffect(() => {
    setTriggerProps(triggerProps);
  }, []);

  const modalRef = useRef(null);
  const { modalProps, underlayProps } = useModalOverlay(
    { isDismissable: true },
    state,
    modalRef,
  );

  const dialogRef = useRef(null);
  const { dialogProps, titleProps } = useDialog(overlayProps, dialogRef);

  return { state, underlayProps, modalProps, modalRef, dialogRef, dialogProps, titleProps };
}
