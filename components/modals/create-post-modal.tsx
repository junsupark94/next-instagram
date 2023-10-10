"use client";

import { useEffect, useRef, useState } from "react";
import {
  Overlay,
  useDialog,
  useModalOverlay,
  useOverlayTrigger,
} from "react-aria";
import SelectMedia from "./select-media";
import { cn } from "@/lib/utils";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import { Button } from "react-aria-components";
import EditPost from "./edit-post";
import { useCreateModalStore } from "@/hooks/use-create-modal-store";
import { useOverlayTriggerState } from "react-stately";

export type PicsAndVids = {
  src: string;
  type: string;
  name: string;
};

const CreatePostModal = () => {
  const [files, setFiles] = useState<PicsAndVids[]>([]);
  const [showWarning, setShowWarning] = useState(false);
  const [invalidFile, setInvalidFile] = useState<File>();

  const state = useOverlayTriggerState({
    onOpenChange: (isOpen: boolean) => {
      if (!isOpen) {
        setFiles([]);
      }
    },
  });
  const setTriggerProps = useCreateModalStore((state) => state.setTriggerProps);
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

  if (!state.isOpen) return null;

  return (
    <Overlay>
      <div
        className="fixed inset-0 z-40 flex items-center justify-center bg-black/40"
        {...underlayProps}
      >
        <div
          {...modalProps}
          ref={modalRef}
          className={cn(
            "m-5 flex aspect-square max-h-[855px] min-h-[348px] min-w-[348px] max-w-[855px] grow",
            files.length &&
              "aspect-auto max-h-[898px] min-h-[391px] min-w-[688px] max-w-[1195px]",
          )}
        >
          <div
            {...dialogProps}
            ref={dialogRef}
            className="flex grow flex-col rounded-xl bg-[#262626]"
          >
            <article className="flex items-center justify-between border-b border-[#363636] px-3">
              {!!files.length && (
                <Button onPress={() => setShowWarning(true)}>
                  <ArrowLeftIcon className="h-6 w-6" />
                </Button>
              )}
              <h1
                {...titleProps}
                className=" grow py-2 text-center font-semibold"
              >
                {invalidFile ? "File couldn't be uploaded" : "Create new post"}
              </h1>
              {!!files.length && (
                <Button className="text-sm font-semibold text-sky-500">
                  Share
                </Button>
              )}
            </article>
            {!files.length && (
              <SelectMedia
                invalidFile={invalidFile}
                setFiles={setFiles}
                setInvalidFile={setInvalidFile}
              />
            )}
            {!!files.length && <EditPost files={files} />}
            {showWarning && (
              <div
                className="fixed inset-0 flex items-center justify-center bg-black/40"
                onClick={() => setShowWarning(false)}
              >
                <div className="flex h-[200px] w-[400px] flex-col rounded-lg bg-neutral-800">
                  <div className="flex grow flex-col items-center justify-center">
                    <h1 className="text-xl">Discard post?</h1>
                    <p className="mt-1 text-sm text-neutral-400">
                      If you leave, your edits wont' be saved.
                    </p>
                  </div>
                  <Button
                    className="border-y border-neutral-700 py-3 text-sm font-semibold text-red-500"
                    onPress={() => {
                      setFiles([]);
                      setShowWarning(false);
                    }}
                  >
                    Discard
                  </Button>
                  <Button
                    onPress={() => setShowWarning(false)}
                    className="py-3 text-sm"
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Overlay>
  );
};

export default CreatePostModal;
