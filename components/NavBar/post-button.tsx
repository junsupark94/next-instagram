"use client";
import PostIcon from "@/Icons/CreateIcon";
import { useCreateModal } from "@/hooks/use-create-modal";
import Button from "../aria-ui/button";
const PostButton = () => {
  const triggerProps = useCreateModal((state) => state.triggerProps);
  return (
    <Button
      {...triggerProps}
      className="group flex cursor-default items-center gap-4 rounded-lg p-3 transition hover:bg-gray-100 active:brightness-50 dark:hover:bg-hover"
    >
      <div className="transition-transform group-hover:scale-110 group-active:scale-100">
        <PostIcon />
      </div>
      <span className="hidden lg:inline">Create</span>
    </Button>
  );
};

export default PostButton;
