import { z } from "zod";

export const scholarshipSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(1, "Full Name is required")
    .max(50, "Full Name cannot exceed 50 characters"),
  gender: z.string().trim().min(1, "Gender is required"),
  emailAddress: z
    .string()
    .trim()
    .min(1, "Email is required")
    .email("Invalid email address"),
  phoneNumber: z
    .string()
    .trim()
    .min(1, "Phone Number is required")
    .max(20, "Phone number cannot exceed 20 characters"),
  currentEducationLevel: z
    .string()
    .trim()
    .min(1, "Current Education is required"),
  institutionName: z
    .string()
    .trim()
    .min(1, "Institution Name is required")
    .max(50, "Institution cannot exceed 50 characters"),
  homeAddress: z.object({
    address: z
      .string()
      .trim()
      .min(1, "Home Address is required")
      .max(50, "Home Address cannot exceed 50 characters"),
    district: z
      .string()
      .trim()
      .min(1, "District is required")
      .max(50, "District cannot exceed 50 characters"),
  }),
  fbProfile: z.string().trim().optional(),
  reasonsForApplying: z.string().trim().min(1, "apply reasons is required"),
  helpInCareer: z.string().trim().min(1, "Helpful for Career is required"),
});
