"use client";

import { Button } from "@/components/ui/button";
import ErrorMessage from "@/components/ui/ErrorMessage";
import { Input } from "@/components/ui/input";
import axiosInstance from "@/utils/axiosInstance";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { LuLoader2 } from "react-icons/lu";
import { z } from "zod";

// Zod schema for validation
const forgotPasswordSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

const ForgotPasswordForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(forgotPasswordSchema),
  });

  const onSubmit = async (data) => {
    try {
      const response = await axiosInstance.post(
        "/student/auth/forgot-password",
        { email: data.email },
      );
      if (response?.data?.success) {
        toast.success(response.data.message);
        reset();
      }
    } catch (error) {
      console.log(error);
      toast.error(
        error?.response?.data?.message || "An unexpected error occurred!",
      );
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-4">
        <Input
          {...register("email")}
          type="email"
          placeholder="Enter your email"
        />
        <ErrorMessage className="text-left">
          {errors.email?.message}
        </ErrorMessage>
      </div>
      <Button disabled={isSubmitting} type="submit" className="w-full rounded">
        {isSubmitting ? (
          <>
            <LuLoader2 className="mr-2 inline animate-spin-fast text-lg" />
            <span className="text-base">Please Wait</span>
          </>
        ) : (
          "Send Reset Link"
        )}
      </Button>
    </form>
  );
};

export default ForgotPasswordForm;
