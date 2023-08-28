import React, { useCallback } from 'react';
import { Reply, ThreadItem, getReplyId } from './dummy-data-posts';


export default function useReplySubmitHandler() {
  return useCallback(
    (
      e: React.FormEvent<HTMLFormElement>,
      value: string,
      setReplies: React.Dispatch<React.SetStateAction<Reply[]>>,
      setValue: React.Dispatch<React.SetStateAction<string>>,
      textAreaRef: React.RefObject<HTMLTextAreaElement>
    ) => {
      e.preventDefault();
      if (value.trim() === "") return;

      const targetReplyId = textAreaRef.current?.getAttribute("data-reply");
      if (targetReplyId) {
        setReplies((replies) => {
          const targetIndex = replies.findIndex(
            (reply) => reply.id === Number(targetReplyId)
          );
          const targetReply = replies.at(targetIndex);

          if (!targetReply) {
            console.error(
              "error, unable to find reply with id of ",
              targetReplyId
            );
            return replies;
          }
          console.log("targetReply", targetReply);
          const newThreadItem: ThreadItem = {
            // todo: account should be logged in user
            account: "junsupark",
            text: value,
            likes: 0,
            date: new Date(),
            id: getReplyId(),
          };

          targetReply.thread.push(newThreadItem);
          replies[targetIndex] = { ...targetReply };
          return [...replies];
        });
        textAreaRef.current?.removeAttribute("data-reply");
        setValue("");
        return;
      }

      const newReply = {
        // todo: account should be logged in user
        account: "junsupark",
        text: value,
        likes: 0,
        date: new Date(),
        thread: [],
        id: getReplyId(),
      };
      //todo: add fetch POST request to backend, await that before updating UI, need replyID from db
      setReplies((prev) => [newReply, ...prev]);
      setValue("");
    },
    []
  );
}