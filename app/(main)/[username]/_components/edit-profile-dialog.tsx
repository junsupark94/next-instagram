"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { Dispatch, SetStateAction, useRef, useState } from "react";
import { Button } from "react-aria-components";

const EditProfileDialog = ({
  router,
  setIsSubmitting,
  user_id,
  isSubmitting,
  bio,
  profile_name
}: {
  setIsSubmitting: Dispatch<SetStateAction<boolean>>;
  router: AppRouterInstance;
  user_id: string;
  isSubmitting: boolean;
  bio: string | null;
  profile_name: string;
}) => {
  const profileNameRef = useRef<HTMLInputElement>(null);
  const profileBioRef = useRef<HTMLTextAreaElement>(null);
  const [editProfileOpen, setEditProfileOpen] = useState(false);

  const onEditProfile = async () => {
    try {
      setIsSubmitting(true);

      const profile_name = profileNameRef.current?.value;
      const bio = profileBioRef.current?.value;

      const response = await fetch(`/api/user/${user_id}`, {
        method: "PATCH",
        body: JSON.stringify({
          profile_name,
          bio,
        }),
      });

      if (!response.ok) throw new Error("Something went wrong!");

      router.refresh();
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
      setEditProfileOpen(false);
    }
  };

  return (
    <Dialog
      open={editProfileOpen}
      onOpenChange={(open) => setEditProfileOpen(open)}
    >
      <DialogTrigger className="rounded-lg bg-neutral-800 px-4 py-1.5 text-sm font-semibold">
        Edit profile
      </DialogTrigger>
      <DialogContent className="flex max-w-[500px] flex-col items-center gap-4 bg-neutral-800 px-0">
        <DialogHeader className="flex w-full items-center border-b border-neutral-600 pb-4">
          Edit your profile
        </DialogHeader>
        <Label className="flex  w-full items-center px-4">
          <p className="w-28 pr-2">Change your profile name</p>
          <Input className="border border-neutral-500" ref={profileNameRef} defaultValue={profile_name}/>
        </Label>
        <Label className="flex w-full items-center px-4">
          <p className="w-28 pr-2">Change your bio</p>
          <Textarea
            className="resize-none border border-neutral-500"
            rows={4}
            ref={profileBioRef}
            defaultValue={bio || ""}
          />
        </Label>
        <Button
          className="w-full border-t border-neutral-700 pt-2 font-semibold text-sky-500"
          isDisabled={isSubmitting}
          onPress={onEditProfile}
        >
          Submit
        </Button>
        <Button
          className="w-full border-t border-neutral-700 pt-2 font-semibold text-rose-500"
          isDisabled={isSubmitting}
          onPress={() => setEditProfileOpen(false)}
        >
          Cancel
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default EditProfileDialog;
