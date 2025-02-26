"use client";

import { Button } from "@/components/ui/button";
import ErrorMessage from "@/components/ui/ErrorMessage";
import { Input } from "@/components/ui/input";
import axiosInstance from "@/utils/axiosInstance";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { LuLoader2 } from "react-icons/lu";
import { z } from "zod";

// Zod schema for validation
const resetPasswordSchema = z
  .object({
    newPassword: z
      .string()
      .trim()
      .min(6, "Password must be at least 6 characters")
      .max(12, "Password cannot exceed 12 characters"),
    confirmNewPassword: z
      .string()
      .trim()
      .min(6, "Confirm Password must be at least 6 characters")
      .max(12, "Confirm Password cannot exceed 12 characters"),
  })
  .refine((data) => data.newPassword === data.confirmNewPassword, {
    message: "Passwords do not match",
    path: ["confirmNewPassword"],
  });

const ResetPasswordForm = ({ resetToken }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const router = useRouter();

  // password show hide toggle
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  const handleToggleConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(resetPasswordSchema),
  });

  const onSubmit = async (data) => {
    try {
      const response = await axiosInstance.put(
        `/student/auth/reset-password/${resetToken}`,
        { newPassword: data.newPassword },
      );
      if (response?.data?.success) {
        toast.success(response.data.message);
        reset();
        router.push("/auth/login");
      }
    } catch (error) {
      console.log(error);
      toast.error(
        error?.response?.data?.message || "An unexpected error occurred!",
      );
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-3 md:space-y-4">
      <div>
        <div className="relative">
          <Input
            {...register("newPassword")}
            className="border-slate-300"
            type={showPassword ? "text" : "password"}
            placeholder="New Password"
            autoComplete="on"
          />
          <button
            onClick={handleTogglePassword}
            type="button"
            className="absolute right-3 top-3 text-gray-800"
          >
            {showPassword ? <FaEye /> : <FaEyeSlash />}
          </button>
        </div>
        <ErrorMessage className="text-left">
          {errors.newPassword?.message}
        </ErrorMessage>
      </div>
      <div>
        <div className="relative">
          <Input
            {...register("confirmNewPassword")}
            className="border-slate-300"
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Confirm Password"
            autoComplete="on"
          />
          <button
            onClick={handleToggleConfirmPassword}
            type="button"
            className="absolute right-3 top-3 text-gray-800"
          >
            {showConfirmPassword ? <FaEye /> : <FaEyeSlash />}
          </button>
        </div>
        <ErrorMessage className="text-left">
          {errors.confirmNewPassword?.message}
        </ErrorMessage>
      </div>
      <Button disabled={isSubmitting} type="submit" className="w-full rounded">
        {isSubmitting ? (
          <>
            <LuLoader2 className="mr-2 inline animate-spin-fast text-lg" />
            <span className="text-base">Please Wait</span>
          </>
        ) : (
          "Save New Password"
        )}
      </Button>
    </form>
  );
};

export default ResetPasswordForm;
