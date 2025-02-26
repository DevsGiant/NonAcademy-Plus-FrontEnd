import { z } from "zod";

export const signupSchema = z
  .object({
    name: z
      .string()
      .trim()
      .min(1, "Full Name is required")
      .max(50, "Full Name cannot exceed 50 characters"),
    email: z
      .string()
      .trim()
      .min(1, "Email is required")
      .email("Invalid email address"),
    phone: z
      .string()
      .trim()
      .min(1, "Phone number is required")
      .refine((value) => value.startsWith("01"), {
        message: "Phone number must start with 01",
      })
      .refine((value) => /^\d{11}$/.test(value), {
        message: "Phone number must be exactly 11 digits",
      }),
    // phone: z
    //   .string()
    //   .regex(
    //     /^01\d{9}$/,
    //     "Phone number must start with 01 and be exactly 11 digits",
    //   ),
    password: z
      .string()
      .trim()
      .min(6, "Password must be at least 6 characters ")
      .max(12, "Password cannot exceed 12 characters"),
    confirmPassword: z
      .string()
      .trim()
      .min(6, "Confirm Password must be at least 6 characters ")
      .max(12, "Confirm Password cannot exceed 12 characters"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });
