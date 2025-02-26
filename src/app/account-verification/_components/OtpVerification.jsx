"use client";

import { Button } from "@/components/ui/button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { AuthContext } from "@/contexts/AuthProvider";
import axiosInstance from "@/utils/axiosInstance";
import { handleRequestOtp } from "@/utils/requestOtp";
import { REGEXP_ONLY_DIGITS } from "input-otp";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { LuLoader2 } from "react-icons/lu";

const OtpVerification = () => {
  const { fetchUser } = useContext(AuthContext);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { isSubmitting },
  } = useForm();

  const otpCode = watch("otpCode", "");

  // Check if all slots are filled
  const isOtpComplete = otpCode.length === 5;

  const handleVerifyOtp = async (data) => {
    const currentURL = typeof window !== "undefined" ? window.location : "";
    let url = "/dashboard";

    if (currentURL?.search?.slice(0, 6) == "?from=") {
      url =
        "/" +
        currentURL?.search
          ?.slice(6, currentURL?.search?.length)
          ?.split("%")
          .join("?");
    }

    try {
      const response = await axiosInstance.post(
        "/student/auth/verify-otp",
        data,
      );
      if (response?.data?.success) {
        toast.success(response.data.message);
        reset();
        router.push(url);
        await fetchUser();
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
    <>
      <div className="flex justify-center">
        <InputOTP
          maxLength={5}
          pattern={REGEXP_ONLY_DIGITS}
          onChange={(value) => setValue("otpCode", value)}
        >
          <InputOTPGroup>
            {Array.from({ length: 5 }).map((_, index) => (
              <InputOTPSlot
                key={index}
                index={index}
                className="md:h-12 md:w-12 lg:h-[70px] lg:w-[70px]"
                {...register("otpCode")}
              />
            ))}
          </InputOTPGroup>
        </InputOTP>
      </div>
      <div className="text-sm lg:text-base">
        Did not receive a code?{" "}
        <button
          className="cursor-pointer font-medium text-nad-primary"
          onClick={handleRequestOtp}
        >
          Resend OTP
        </button>
      </div>
      <Button
        onClick={handleSubmit(handleVerifyOtp)}
        disabled={!isOtpComplete || isSubmitting}
        className="w-full md:text-base lg:h-12 lg:rounded-lg"
      >
        {isSubmitting ? (
          <>
            <LuLoader2 className="mr-2 inline animate-spin-fast text-lg" />
            <span className="text-base">Please Wait</span>
          </>
        ) : (
          "Account Verify"
        )}
      </Button>
    </>
  );
};

export default OtpVerification;
