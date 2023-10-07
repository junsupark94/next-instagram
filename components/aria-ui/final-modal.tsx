import { cn } from "@/lib/utils";
import { useRef } from "react";
import {
  Overlay,
  useDialog,
  useModalOverlay,
  useOverlayTrigger,
} from "react-aria";
import { useOverlayTriggerState } from "react-stately";
import Button from "./button";

const FinalModal = () => {
  const state = useOverlayTriggerState({});
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
            )}
            {...underlayProps}
          >
            <div
              {...modalProps}
              ref={modalRef}
              className="border border-purple-500"
            >
              <div
                {...dialogProps}
                ref={dialogRef}
                className="border border-red-500 p-10"
              >
                <h3 {...titleProps}>Title goes here</h3>
                <p>Content goes here</p>
                <form style={{ display: "flex", flexDirection: "column" }}>
                  <label htmlFor="first-name">First Name:</label>
                  <input id="first-name" />
                  <label htmlFor="last-name">Last Name:</label>
                  <input id="last-name" />
                  <Button onPress={state.close} className="mt-3">
                    Submit
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </Overlay>
      )}
    </>
  );
};

export default FinalModal;
