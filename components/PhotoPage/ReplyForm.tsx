import useAutoSizeTextArea from "@/util/autoSizeTextArea";
import { cn } from "@/util/cn";
import React, { KeyboardEventHandler } from "react";
import ProfileIcon from "../Icons/ProfileIcon";

type ReplyFormProps = {
  submitHandler: (
    e: React.FormEvent<HTMLFormElement>,
    value: string,
    setValue: React.Dispatch<React.SetStateAction<string>>,
    textAreaRef: React.RefObject<HTMLTextAreaElement>
  ) => void;
};

const ReplyForm: React.FC<ReplyFormProps> = ({ submitHandler }) => {
  console.log("ReplyForm render");
  const { value, setValue, textAreaRef } = useAutoSizeTextArea();

  const enterKeyDown: KeyboardEventHandler<HTMLFormElement> = (e) => {
    if (e.code !== "Enter") return;
    submitHandler(e, value, setValue, textAreaRef);
  };

  return (
    <form
      className="flex grow"
      onSubmit={(e) => {
        submitHandler(e, value, setValue, textAreaRef);
      }}
      onKeyDown={enterKeyDown}
    >
      <ProfileIcon className="mr-2" />
      <textarea
        className="dark:bg-black dark:text-white resize-none outline-none grow"
        placeholder="Add a comment..."
        ref={textAreaRef}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <div className="flex gap-2">
        <button
          className={cn(
            "font-bold text-[#0095f6]",
            value === "" ? "invisible" : "hover:text-white"
          )}
          type="submit"
        >
          Post
        </button>
      </div>
    </form>
  );
};
export default React.memo(ReplyForm);
