import { cn } from "@/lib/utils";
import React, { KeyboardEventHandler, RefObject, useCallback, useEffect, useState } from "react";
import ProfileIcon from "@/Icons/ProfileIcon";
import { Reply} from "@/utils/dummy-data-posts";
import useReplySubmitHandler from "@/utils/useReplySubmitHandler";
import useAutoSizeTextArea from "@/utils/autoSizeTextArea";

type ReplyFormProps = {
  setReplies: React.Dispatch<React.SetStateAction<Reply[]>>;
  textAreaRef: RefObject<HTMLTextAreaElement>;
};

const ReplyForm: React.FC<ReplyFormProps> = ({ setReplies, textAreaRef }) => {
  // console.log("ReplyForm render");
  const [value, setValue] = useState("");
  const submitHandler = useReplySubmitHandler();
  useAutoSizeTextArea(textAreaRef, value);

  const enterKeyDown = useCallback((e: React.KeyboardEvent<HTMLFormElement>, value: string) => {
    if (e.key !== "Enter") return;
    if (e.shiftKey) {
      return;
    } else {
      submitHandler(e, value, setReplies, setValue, textAreaRef);
    }
  }, [setReplies, submitHandler, textAreaRef]);

  return (
    <form
      className="flex p-4 py-2 gap-4 items-center"
      onSubmit={(e) =>
        submitHandler(e, value, setReplies, setValue, textAreaRef)
      }
      onKeyDown={e => enterKeyDown(e, value)}
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
