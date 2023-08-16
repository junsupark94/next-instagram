import React, { useEffect, useRef, useState } from "react";

type CommentFormProps = {};

const CommentForm: React.FC<CommentFormProps> = () => {
  const [value, setValue] = useState("");
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  useEffect(() => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = `18px`;
      const scrollHeight = Math.min(textAreaRef.current.scrollHeight, 80);
      textAreaRef.current.style.height = scrollHeight + "px";
    }
  }, [textAreaRef, value]);


  return (
    <form action="" className="flex">
      <textarea
        className="dark:bg-black dark:text-white resize-none outline-none grow"
        placeholder="Add a comment..."
        ref={textAreaRef}
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      <button className="font-bold text-[#0095f6]">Post</button>
    </form>
  );
};
export default CommentForm;
