import { z } from "zod";

export const webinarSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(1, "Full Name is required")
    .max(100, "Full Name cannot exceed 100 characters"),
  email: z.string().min(1, "Email is required").email("Invalid email address"),
  phone: z
    .string()
    .trim()
    .min(1, "Phone Number is required")
    .max(20, "Phone number cannot exceed 20 characters"),
  facebook: z.string().trim().min(1, "Facebook Profile Link is required"),
  student_level: z.string().trim().min(1, "Education level is required"),
  institution: z
    .string()
    .trim()
    .min(1, "Institution Name is required")
    .max(50, "Institution cannot exceed 50 characters"),
});
