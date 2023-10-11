"use client";
import { cn } from "@/lib/utils";
import { useRef } from "react";
import {
  Overlay,
  useDialog,
  useModalOverlay,
  useOverlayTrigger,
} from "react-aria";
import { Button } from "react-aria-components";
import { OverlayTriggerState, useOverlayTriggerState } from "react-stately";

const Modal = ({
  state,
  underlayStyle,
  children,
  title,
  dialogStyle,
  modalStyle,
}: {
  title?: string;
  dialogStyle?: string;
  modalStyle?: string;
  underlayStyle?: string;
  state: OverlayTriggerState;
  children: React.ReactNode;
}) => {
  // const state = useOverlayTriggerState({});
  const { triggerProps, overlayProps } = useOverlayTrigger(
    { type: "dialog" },
    state,
  );
  const modalRef = useRef(null);
  const { modalProps, underlayProps } = useModalOverlay(
    { isDismissable: true },
    state,
    modalRef,
  );
  const dialogRef = useRef(null);
  const { dialogProps, titleProps } = useDialog(overlayProps, dialogRef);

  return (
    <>
      <Button {...triggerProps}>Open Dialog</Button>
      {state.isOpen && (
        <Overlay>
          <div
            className={cn(
              "fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-neutral-600",
              underlayStyle
            )}
            {...underlayProps}
          >
            <div {...modalProps} ref={modalRef} className={modalStyle}>
              <div {...dialogProps} ref={dialogRef} className={dialogStyle}>
                {title && <h3 {...titleProps}>{title}</h3>}
                {children}
                <Button onPress={state.close} className="mt-3">
                  Submit
                </Button>
              </div>
            </div>
          </div>
        </Overlay>
      )}
    </>
  );
};

export default Modal;
