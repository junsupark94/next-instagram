import { cn, default_profile_picture } from "@/lib/utils";
import React, {  RefObject, useCallback, useState } from "react";
import useReplySubmitHandler from "@/utils/useReplySubmitHandler";
import useAutoSizeTextArea from "@/utils/autoSizeTextArea";
import Image from "next/image";

type ReplyFormProps = {
  setReplies: any;
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
      <Image src={default_profile_picture} alt="profile picture" className="mr-2" width={40} height={40}/>
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
