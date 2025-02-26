import { z } from "zod";

export const loginSchema = z.object({
  email_or_phone: z.string().trim().min(1, "Email or Phone is required"),
  // phone: z.string().regex(/^\d{11}$/, "Phone number must be exactly 11 digits"),
  password: z
    .string()
    .trim()
    .min(6, "Password must be at least 6 characters")
    .max(12, "Password cannot exceed 12 characters"),
});
