import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const default_profile_picture = "https://instagram.fsyd11-2.fna.fbcdn.net/v/t51.2885-19/44884218_345707102882519_2446069589734326272_n.jpg?_nc_ht=instagram.fsyd11-2.fna.fbcdn.net&_nc_cat=1&_nc_ohc=Pp5hp7kbPTMAX_AT_Q5&edm=ABmJApABAAAA&ccb=7-5&ig_cache_key=YW5vbnltb3VzX3Byb2ZpbGVfcGlj.2-ccb7-5&oh=00_AfCFTLhpui9SJaYLyq4xXgxFYuk7oUDUsKd-bsBA--b1aw&oe=652BF3CF&_nc_sid=b41fef"