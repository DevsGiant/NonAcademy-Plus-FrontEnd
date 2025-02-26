import { z } from "zod";

export const contactUsSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(1, "Full Name is required")
    .max(100, "Full Name cannot exceed 100 characters"),
  email: z.string().min(1, "Email is required").email("Invalid email address"),
  subject: z
    .string()
    .trim()
    .min(1, "Subject is required")
    .max(100, "Subject cannot exceed 100 characters"),
  message: z
    .string()
    .trim()
    .min(1, "Message is required")
    .max(500, "Message cannot exceed 500 characters"),
});
