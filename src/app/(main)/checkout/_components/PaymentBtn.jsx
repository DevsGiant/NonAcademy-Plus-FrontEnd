"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AuthContext } from "@/contexts/AuthProvider";
import axiosInstance from "@/utils/axiosInstance";
import { handleRequestOtp } from "@/utils/requestOtp";
import { sendGTMEvent } from "@next/third-parties/google";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { CiLock } from "react-icons/ci";
import { FaAngleRight } from "react-icons/fa";
import Swal from "sweetalert2";

const PaymentBtn = ({ courseDetails }) => {
  const { loggedInUser } = useContext(AuthContext);
  const [couponCode, setCouponCode] = useState("");
  const [discountedAmount, setDiscountedAmount] = useState(0.0);
  const [isAgreed, setIsAgreed] = useState(false);

  const router = useRouter();
  const currentURL =
    typeof window !== "undefined" ? window.location : undefined;
  const search = currentURL?.search?.slice(1, currentURL?.search?.length);
  const path = currentURL?.pathname?.slice(1, currentURL?.pathname?.length);
  const fromUrl = path + `%` + search;

  const handlePayment = async () => {
    if (!loggedInUser) {
      return Swal.fire({
        title: "You are not logged in!",
        text: "Please login for checkout",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#0056d2",
        cancelButtonColor: "#D34053",
        confirmButtonText: "Login",
      }).then((result) => {
        if (result.isConfirmed) {
          router.push(`/auth/login?from=${fromUrl}`);
        }
      });
    }
    if (loggedInUser && !loggedInUser?.is_verified) {
      return Swal.fire({
        title: "You are not Verified!",
        text: "Please verify your number for checkout",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#0056d2",
        cancelButtonColor: "#D34053",
        confirmButtonText: "Verify",
      }).then(async (result) => {
        if (result.isConfirmed) {
          await handleRequestOtp(router);
          router.push(`/account-verification?from=${fromUrl}`);
        }
      });
    }

    try {
      // sending event to google tag =========>
      sendGTMEvent({ event: "clickedOnPaymentBtn", page: "checkout" });

      const response = await axiosInstance.post(
        `/purchase/course/${courseDetails?._id}`,
        {
          coupon: couponCode,
        },
      );

      if (response.status == 200) {
        window.location.href = response.data?.data?.url;
      }
    } catch (error) {
      return Promise.reject(error);
    }
  };

  const handleCoupon = async (e) => {
    e.preventDefault();
    setCouponCode(e.target.couponCode.value);

    if (!loggedInUser) {
      return Swal.fire({
        title: "You are not logged in!",
        text: "Please login for using coupon",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login",
      }).then((result) => {
        if (result.isConfirmed) {
          router.push(`/auth/login?from=${fromUrl}`);
        }
      });
    }

    try {
      const response = await axiosInstance.get(
        `/coupons/code/${e.target.couponCode.value}?id=${courseDetails?._id}`,
      );
      if (response?.data?.data?.status) {
        setDiscountedAmount(response?.data?.data?.discountedAmount);
        toast.success(response?.data?.data?.message);
      } else {
        toast.error(response?.data?.data?.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(
        error?.response?.data?.message || "An unexpected error occurred!",
      );
    }
  };

  const handleCheckboxChange = (e) => {
    setIsAgreed(e.target.checked);
  };

  // sending event to google tag manager
  useEffect(() => {
    sendGTMEvent({ event: "checkoutPageView", page: "checkout" });
  }, []);

  return (
    <div className="bg-white p-3 lg:px-4">
      <div className="p-0 lg:p-6"></div>
      <form onSubmit={handleCoupon} className="flex items-center gap-1">
        <Input
          type="text"
          name="couponCode"
          className="flex-1 rounded border-[#e9e9e9]"
          placeholder="Write valid coupon"
          required
        />
        <Button type="submit" className="rounded">
          Apply
        </Button>
      </form>
      <div className="mb-3 mt-3">
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium">Sub total:</p>{" "}
          <p className="font-bold">৳ {courseDetails?.price?.toFixed(2)}</p>
        </div>
        {discountedAmount > 0 && (
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium">Discount:</p>{" "}
            <p className="font-bold">৳ {discountedAmount}</p>
          </div>
        )}
      </div>

      <div className="my-4">
        <input
          type="checkbox"
          id="termsCheckbox"
          checked={isAgreed}
          onChange={handleCheckboxChange}
        />
        <label htmlFor="termsCheckbox" className="ml-2 text-sm text-gray-700">
          I agree to the{" "}
          <a
            href="/pages/terms-conditions"
            className="text-blue-600 underline"
            target="_blank"
          >
            Terms & Conditions
          </a>
          ,{" "}
          <a
            href="/pages/privacy-policy"
            className="text-blue-600 underline"
            target="_blank"
          >
            Privacy Policy
          </a>
          , and{" "}
          <a
            href="/pages/refund-policy"
            className="text-blue-600 underline"
            target="_blank"
          >
            Return Refund Policy
          </a>
        </label>
      </div>

      <div className="fixed bottom-0 left-0 right-0 z-[2] flex justify-between bg-white md:!pt-0 lg:!static lg:!flex-col lg:gap-3">
        <div className="flex flex-col items-center lg:!flex-row lg:justify-between">
          <p className="text-sm font-medium">Total Payment:</p>{" "}
          <p className="font-bold">
            ৳ {(courseDetails?.price - discountedAmount)?.toFixed(2)}
          </p>
        </div>
        <div className="w-full space-y-3">
          {loggedInUser?.courses?.includes(courseDetails?._id) ? (
            <Link href={`/dashboard`} className="w-full">
              <Button size="lg" className="w-full gap-1 rounded uppercase">
                Already Purchased, Go To Dashboard
              </Button>
            </Link>
          ) : (
            <Button
              onClick={handlePayment}
              size="lg"
              className="w-full gap-1 rounded uppercase"
              disabled={!isAgreed}
            >
              Complete Payment <FaAngleRight />
            </Button>
          )}
          <div className="hidden items-center justify-center gap-1 lg:flex">
            <CiLock className="text-green-600" />
            <span className="text-xs text-gray-500">Secured payment</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentBtn;
