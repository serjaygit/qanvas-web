import { z } from "zod";

export const registerSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(128, "Name is too long"),

  email: z.email("Invalid email address"),

  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .max(128, "Password must be at most 128 characters"),
});

export const loginSchema = z.object({
  email: z.email("Invalid Email or Password"),
  password: z.string().min(1, "Invalid Email or Password"),
});

export type TRegisterBody = z.infer<typeof registerSchema>;

export type TLoginBody = z.infer<typeof loginSchema>;
