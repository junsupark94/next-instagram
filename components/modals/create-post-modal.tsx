"use client";

import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";
import {
  Overlay,
  useDialog,
  useModalOverlay,
  useOverlayTrigger,
} from "react-aria";
import { useOverlayTriggerState } from "react-stately";
import Button from "@/components/aria-ui/button";
import { useCreateModal } from "@/hooks/use-create-modal";

const CreatePostModal = () => {
  const [setTriggerProps] = useCreateModal((state) => [state.setTriggerProps]);

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

  useEffect(() => {
    setTriggerProps(triggerProps);
  }, []);


  if (!state.isOpen) return null;

  return (
    <Overlay>
      <div
        className="fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-black/40"
        {...underlayProps}
      >
        <div
          {...modalProps}
          ref={modalRef}
          className="m-5 flex aspect-square max-h-[855px] min-h-[348px] min-w-[348px] max-w-[855px] grow"
        >
          <div
            {...dialogProps}
            ref={dialogRef}
            className="grow rounded-xl bg-[#262626]"
          >
            <h1 className="border-b border-[#363636] py-2 text-center font-semibold">
              Create new post
            </h1>
            <article className="flex h-full w-full flex-col items-center justify-center">
              <PhotoVideoIcon />
              <p className="mt-4 text-xl">Drag photos and videos here</p>
              <form className="mt-4 rounded-lg bg-sky-500 px-4 py-1.5" onChange={e => console.log(e)}>
                <label>
                  <span className="text-sm cursor-pointer">Select from computer</span>
                  <input type="file" className="hidden"/>
                </label>
              </form>
            </article>
          </div>
        </div>
      </div>
    </Overlay>
  );
};

export default CreatePostModal;

function PhotoVideoIcon() {
  return (
    <svg
      aria-label="Icon to represent media such as images or videos"
      color="rgb(245, 245, 245)"
      fill="rgb(245, 245, 245)"
      height="77"
      role="img"
      viewBox="0 0 97.6 77.3"
      width="96"
    >
      <title>Icon to represent media such as images or videos</title>
      <path
        d="M16.3 24h.3c2.8-.2 4.9-2.6 4.8-5.4-.2-2.8-2.6-4.9-5.4-4.8s-4.9 2.6-4.8 5.4c.1 2.7 2.4 4.8 5.1 4.8zm-2.4-7.2c.5-.6 1.3-1 2.1-1h.2c1.7 0 3.1 1.4 3.1 3.1 0 1.7-1.4 3.1-3.1 3.1-1.7 0-3.1-1.4-3.1-3.1 0-.8.3-1.5.8-2.1z"
        fill="currentColor"
      ></path>
      <path
        d="M84.7 18.4 58 16.9l-.2-3c-.3-5.7-5.2-10.1-11-9.8L12.9 6c-5.7.3-10.1 5.3-9.8 11L5 51v.8c.7 5.2 5.1 9.1 10.3 9.1h.6l21.7-1.2v.6c-.3 5.7 4 10.7 9.8 11l34 2h.6c5.5 0 10.1-4.3 10.4-9.8l2-34c.4-5.8-4-10.7-9.7-11.1zM7.2 10.8C8.7 9.1 10.8 8.1 13 8l34-1.9c4.6-.3 8.6 3.3 8.9 7.9l.2 2.8-5.3-.3c-5.7-.3-10.7 4-11 9.8l-.6 9.5-9.5 10.7c-.2.3-.6.4-1 .5-.4 0-.7-.1-1-.4l-7.8-7c-1.4-1.3-3.5-1.1-4.8.3L7 49 5.2 17c-.2-2.3.6-4.5 2-6.2zm8.7 48c-4.3.2-8.1-2.8-8.8-7.1l9.4-10.5c.2-.3.6-.4 1-.5.4 0 .7.1 1 .4l7.8 7c.7.6 1.6.9 2.5.9.9 0 1.7-.5 2.3-1.1l7.8-8.8-1.1 18.6-21.9 1.1zm76.5-29.5-2 34c-.3 4.6-4.3 8.2-8.9 7.9l-34-2c-4.6-.3-8.2-4.3-7.9-8.9l2-34c.3-4.4 3.9-7.9 8.4-7.9h.5l34 2c4.7.3 8.2 4.3 7.9 8.9z"
        fill="currentColor"
      ></path>
      <path
        d="M78.2 41.6 61.3 30.5c-2.1-1.4-4.9-.8-6.2 1.3-.4.7-.7 1.4-.7 2.2l-1.2 20.1c-.1 2.5 1.7 4.6 4.2 4.8h.3c.7 0 1.4-.2 2-.5l18-9c2.2-1.1 3.1-3.8 2-6-.4-.7-.9-1.3-1.5-1.8zm-1.4 6-18 9c-.4.2-.8.3-1.3.3-.4 0-.9-.2-1.2-.4-.7-.5-1.2-1.3-1.1-2.2l1.2-20.1c.1-.9.6-1.7 1.4-2.1.8-.4 1.7-.3 2.5.1L77 43.3c1.2.8 1.5 2.3.7 3.4-.2.4-.5.7-.9.9z"
        fill="currentColor"
      ></path>
    </svg>
  );
}
