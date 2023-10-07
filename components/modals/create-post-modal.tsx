"use client";

import { useState } from "react";
import { Overlay } from "react-aria";
import { useModalDialog } from "./use-modal-dialog";
import SelectMedia from "./select-media";

const CreatePostModal = () => {
  const {
    state,
    underlayProps,
    modalProps,
    modalRef,
    dialogRef,
    dialogProps,
    titleProps,
  } = useModalDialog();

  const [files, setFiles] = useState<string[]>([]);
  const [invalidFile, setInvalidFile] = useState<File>();

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
            className="flex grow flex-col rounded-xl bg-[#262626]"
          >
            <h1
              {...titleProps}
              className="border-b border-[#363636] py-2 text-center font-semibold"
            >
              {invalidFile ? "File couldn't be uploaded" : "Create new post"}
            </h1>
            {!files && (
              <SelectMedia
                invalidFile={invalidFile}
                setFiles={setFiles}
                setInvalidFile={setInvalidFile}
              />
            )}
          </div>
        </div>
      </div>
    </Overlay>
  );
};

export default CreatePostModal;
