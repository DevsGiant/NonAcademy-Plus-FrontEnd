"use client";

import { Button } from "@/components/ui/button";
import ErrorMessage from "@/components/ui/ErrorMessage";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AuthContext } from "@/contexts/AuthProvider";
import { signupSchema } from "@/lib/signupSchema";
import axiosInstance from "@/utils/axiosInstance";
import { zodResolver } from "@hookform/resolvers/zod";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { LuLoader2 } from "react-icons/lu";

const SignUpForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const router = useRouter();
  const { fetchUser, loggedInUser } = useContext(AuthContext);

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
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = async (data) => {
    const { name, email, phone, password } = data;
    try {
      const response = await axiosInstance.post("/student/auth/register", {
        name,
        email,
        phone,
        password,
      });
      if (response?.data?.success) {
        Cookies.set("nad_auth_token", response.data?.data?.token);
        await fetchUser();
        router.push("/");
        reset();
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(
        error?.response?.data?.message || "An unexpected error occurred!",
      );
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-3 lg:space-y-4">
      <div>
        <Label htmlFor="name" className="block pb-2.5">
          Full Name
        </Label>
        <Input {...register("name")} className="border-slate-300" type="text" />
        <ErrorMessage>{errors.name?.message}</ErrorMessage>
      </div>
      <div>
        <Label htmlFor="email" className="block pb-2.5">
          Email
        </Label>
        <Input
          {...register("email")}
          className="border-slate-300"
          type="email"
        />
        <ErrorMessage>{errors.email?.message}</ErrorMessage>
      </div>
      <div>
        <Label htmlFor="phone" className="block pb-2.5">
          Phone
        </Label>
        <div className="flex">
          <span className="rounded-l border border-slate-300 bg-slate-200 px-2 py-1.5">
            +88
          </span>
          <Input
            {...register("phone")}
            className="rounded-l-none border-slate-300"
            type="number"
            maxLength={11}
          />
        </div>
        <ErrorMessage>{errors.phone?.message}</ErrorMessage>
      </div>
      <div>
        <Label htmlFor="password" className="block pb-2.5">
          Password
        </Label>
        <div className="relative">
          <Input
            {...register("password")}
            className="border-slate-300"
            type={showPassword ? "text" : "password"}
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
        <ErrorMessage>{errors.password?.message}</ErrorMessage>
      </div>
      <div>
        <Label htmlFor="confirmPassword" className="block pb-2.5">
          Confirm Password
        </Label>
        <div className="relative">
          <Input
            {...register("confirmPassword")}
            className="border-slate-300"
            type={showConfirmPassword ? "text" : "password"}
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
        <ErrorMessage>{errors.confirmPassword?.message}</ErrorMessage>
      </div>
      <Button
        disabled={isSubmitting || loggedInUser}
        type="submit"
        className="w-full"
      >
        {isSubmitting ? (
          <>
            <LuLoader2 className="mr-2 inline animate-spin-fast text-lg" />
            <span className="text-base">Please Wait</span>
          </>
        ) : (
          "Sign up"
        )}
      </Button>
    </form>
  );
};

export default SignUpForm;
