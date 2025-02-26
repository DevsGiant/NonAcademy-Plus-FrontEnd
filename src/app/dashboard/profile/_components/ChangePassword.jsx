"use client";

import { Button } from "@/components/ui/button";
import ErrorMessage from "@/components/ui/ErrorMessage";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AuthContext } from "@/contexts/AuthProvider";
import axiosInstance from "@/utils/axiosInstance";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { LuLoader2 } from "react-icons/lu";
import { z } from "zod";

// Zod schema for validation
const resetPasswordSchema = z
  .object({
    currentPassword: z.string().trim().min(1, "Current password is required"),
    newPassword: z
      .string()
      .trim()
      .min(6, "New Password must be at least 6 characters ")
      .max(12, "New Password cannot exceed 12 characters"),
    confirmPassword: z
      .string()
      .trim()
      .min(6, "Confirm Password must be at least 6 characters ")
      .max(12, "Confirm Password cannot exceed 12 characters"),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

const ChangePassword = () => {
  const { fetchUser } = useContext(AuthContext);

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(resetPasswordSchema),
  });

  const onSubmit = async (data) => {
    const { currentPassword, newPassword } = data;
    try {
      const response = await axiosInstance.put(
        "/student/auth/change-password",
        { currentPassword, newPassword },
      );
      if (response?.data?.success) {
        reset();
        toast.success(response.data.message);
        await fetchUser();
      }
    } catch (error) {
      console.log(error);
      toast.error(
        error?.response?.data?.message || "An unexpected error occurred!",
      );
    }
  };

  return (
    <div className="col-span-5 xl:col-span-2">
      <div className="rounded-md border border-stroke bg-white drop-shadow-sm">
        <h4 className="border-b px-5 py-4 lg:px-7">Change Password</h4>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-3 p-5 lg:space-y-5 lg:p-7 2xl:space-y-7"
        >
          <div className="space-y-1.5">
            <Label>Current Password</Label>
            <div>
              <Input
                {...register("currentPassword")}
                className="bg-gray-1 placeholder:text-gray-400"
                type="password"
                placeholder="Current Password"
                autoComplete="on"
              />
              <ErrorMessage>{errors.currentPassword?.message}</ErrorMessage>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="space-y-1.5">
              <Label>New Password</Label>
              <div>
                <Input
                  {...register("newPassword")}
                  className="bg-gray-1 placeholder:text-gray-400"
                  type="password"
                  placeholder="New Password"
                  autoComplete="on"
                />
                <ErrorMessage>{errors.newPassword?.message}</ErrorMessage>
              </div>
            </div>
            <div className="space-y-1.5">
              <Label className="text-nowrap">Confirm Password</Label>
              <div>
                <Input
                  {...register("confirmPassword")}
                  className="whitespace-nowrap bg-gray-1 placeholder:text-gray-400"
                  type="password"
                  placeholder="Retype Password"
                  autoComplete="on"
                />
                <ErrorMessage>{errors.confirmPassword?.message}</ErrorMessage>
              </div>
            </div>
          </div>

          <div className="flex justify-end">
            <Button disabled={isSubmitting} type="submit">
              {isSubmitting ? (
                <>
                  <LuLoader2 className="mr-2 inline animate-spin-fast text-lg" />
                  <span className="text-base">Please Wait</span>
                </>
              ) : (
                "Change Password"
              )}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
