import { create } from "zustand";

type ReplyTarget = { replying_to_id: string; username: string, index: number, parent_comment_id: string };

interface ReplyStore {
  reply_target: ReplyTarget | null;
  set_reply_target: (reply_target: ReplyTarget | null) => void;
}

export const useReplyStore = create<ReplyStore>((set) => ({
  reply_target: null,
  set_reply_target: (reply_target) => set({ reply_target }),
}));
