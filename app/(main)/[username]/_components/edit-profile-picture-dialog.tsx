"use client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FileTrigger, Button } from "react-aria-components";
import Image from "next/image";
import { v4 as uuid } from "uuid";
import { Dispatch, SetStateAction, useState } from "react";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

const EditProfilePictureDialog = ({
  isAuthorized,
  setIsSubmitting,
  user_id,
  router,
  profile_picture_url,
  isSubmitting,
}: {
  isAuthorized: boolean;
  setIsSubmitting: Dispatch<SetStateAction<boolean>>;
  user_id: string;
  router: AppRouterInstance;
  profile_picture_url: string | null;
  isSubmitting: boolean;
}) => {
  const [profilePictureOpen, setProfilePictureOpen] = useState(false);
  const onRemoveProfilePic = async () => {
    try {
      setIsSubmitting(true);
      const response = await fetch(`/api/user/${user_id}`, {
        method: "PATCH",
        body: JSON.stringify({
          profile_picture_url: null,
        }),
      });

      if (!response.ok) throw new Error("Something went wrong!");
      router.refresh();
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
      setProfilePictureOpen(false);
    }
  };

  const onAddProfilePic = async (files: FileList | null) => {
    try {
      setIsSubmitting(true);
      if (files === null) return;
      const uniqueId = uuid();
      await supabase?.storage.from("media").upload(uniqueId, files[0]);

      const url = supabase?.storage.from("media").getPublicUrl(uniqueId).data
        .publicUrl;

      const response = await fetch(`/api/user/${user_id}`, {
        method: "PATCH",
        body: JSON.stringify({
          profile_picture_url: url,
        }),
      });

      if (!response.ok) throw new Error("Something went wrong!");

      router.refresh();
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
      setProfilePictureOpen(false);
    }
  };

  return (
    <Dialog
      open={profilePictureOpen}
      onOpenChange={(open) => setProfilePictureOpen(open)}
    >
      <DialogTrigger disabled={!isAuthorized}>
        <Image
          src={profile_picture_url || "/default_profile.jpeg"}
          alt="profile picture"
          width={200}
          height={200}
          className="h-[150px] w-[150px] rounded-full object-cover"
        />
      </DialogTrigger>
      <DialogContent className="flex max-w-[400px] flex-col items-center gap-0 bg-neutral-800 p-0">
        <DialogHeader className="py-6 text-xl">
          Change Profile Photo
        </DialogHeader>
        <FileTrigger
          onSelect={onAddProfilePic}
          acceptedFileTypes={["image/jpeg", "image/png"]}
        >
          <Button
            className=" w-full rounded-none border-t border-neutral-700 bg-transparent py-3 text-sm font-semibold text-sky-500"
            isDisabled={isSubmitting}
          >
            Upload Photo
          </Button>
        </FileTrigger>
        <Button
          isDisabled={isSubmitting}
          onPress={onRemoveProfilePic}
          className="w-full rounded-none border-t border-neutral-700 py-3 text-sm font-semibold text-rose-500"
        >
          Remove Current Photo
        </Button>
        <Button
          isDisabled={isSubmitting}
          className="w-full rounded-none border-t border-neutral-700 py-3 text-sm text-neutral-300"
          onPress={() => {
            setProfilePictureOpen(false);
          }}
        >
          Cancel
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default EditProfilePictureDialog;
