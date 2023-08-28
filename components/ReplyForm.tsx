import useAutoSizeTextArea from "@/utils/autoSizeTextArea";
import { cn } from "@/utils/cn";
import React, { KeyboardEventHandler, useCallback } from "react";
import ProfileIcon from "@/Icons/ProfileIcon";
import { Post, Reply, ThreadItem, getReplyId } from "@/utils/dummy-data-posts";
import useReplySubmitHandler from "@/utils/useReplySubmitHandler";

type ReplyFormProps = {
  setReplies: React.Dispatch<React.SetStateAction<Reply[]>>;
  account: string;
};

const ReplyForm: React.FC<ReplyFormProps> = ({ setReplies, account }) => {
  console.log("ReplyForm render");
  const { value, setValue, textAreaRef } = useAutoSizeTextArea();
  const submitHandler = useReplySubmitHandler();

  const enterKeyDown: KeyboardEventHandler<HTMLFormElement> = (e) => {
    console.log(e.key, e.shiftKey);
    if (e.key !== "Enter") return;
    if (e.shiftKey) {
      return;
    } else {
      submitHandler(e, value, setReplies, setValue, textAreaRef);
    }
  };

  return (
    <form
      className="flex p-4 py-2 gap-4 items-center"
      onSubmit={(e) => submitHandler(e, value, setReplies, setValue, textAreaRef)}
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
