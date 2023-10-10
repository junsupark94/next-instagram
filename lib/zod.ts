import z from "zod";

export const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*\W).+$/;
export const loginRegex =
  /^(?:[0-9]{10}|[a-zA-Z][a-zA-Z0-9._-]*@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
export const phoneRegex = /^\d{10}$/;
export const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export const signUpSchema = z.object({
  login: z
    .string()
    .regex(loginRegex, { message: "Must be a valid phone number or email" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" })
    .max(75, { message: "Password cannot be longer than 75 characters" })
    .regex(passwordRegex, {
      message:
        "Password must have at least uppercase, one lowercase, one digit, and one special character ",
    }),
  username: z
    .string()
    .min(5, { message: "Name must be at least 5 characters" })
    .max(30, "Name cannot be longer than 30 characters"),
  fullname: z
    .string()
    .min(2, { message: "Full name must be at least 2 characters" })
    .max(30, { message: "Full name cannot be longer than 30 characters" }),
});

export type SignUpType = z.infer<typeof signUpSchema>;

export const signInSchema = z.object({
  login: z.string().min(1),
  password: z.string().min(6),
});

export type SignInType = z.infer<typeof signInSchema>;

export const postSchema = z.object({
  description : z.string(),
  location: z.string().optional(),
  creator_id: z.string(),
  hide_stats: z.boolean(),
  disable_comments: z.boolean(),
  media: z.array(z.object({
    name: z.string(),
    alt_text: z.string().optional()
  }))
})

export type PostType = z.infer<typeof postSchema>;