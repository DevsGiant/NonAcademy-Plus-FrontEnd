"use client";
import { Button } from "@/components/ui/button";
import { AuthContext } from "@/contexts/AuthProvider";
import axiosInstance from "@/utils/axiosInstance";
import { useRouter } from "next/navigation";

import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const PricingBtn = ({ id, courseId }) => {
  const { loggedInUser } = useContext(AuthContext);
  const router = useRouter();
  const [isTrail, setIsTrail] = useState(false);
  const [isPurchased, setIsPurchased] = useState(false);

  const handleSubscription = async (id) => {
    const currentURL =
      typeof window !== "undefined" ? window.location : undefined;
    const search = currentURL?.search?.slice(1, currentURL?.search?.length);
    const path = currentURL?.pathname?.slice(1, currentURL?.pathname?.length);
    const fromUrl = path + `%` + search;

    if (!loggedInUser) {
      return Swal.fire({
        title: "Your are not logged in!",
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

    if (isPurchased) {
      return toast.error("Already Purchased!");
    }
    if (!loggedInUser?.is_verified && isTrail) {
      return toast.error("Please Verify Your Number");
    }

    try {
      if (courseId == "trail") {
        const response = await axiosInstance.post(
          `/purchase/trail/${loggedInUser._id}`,
        );
        if (response?.data?.success) {
          toast.success(response.data.message);
        } else {
          toast.error(response.data.message);
        }
      } else {
        const response = await axiosInstance.post(
          `/purchase/subscription/${id}`,
        );

        if (response.status == 200) {
          window.location.href = response.data?.data?.url;
        }
      }
    } catch (error) {
      console.log(error);
      toast.error(
        error?.response?.data?.message || "An unexpected error occurred!",
      );
    }
  };

  useEffect(() => {
    let isTrail = false;
    // =============================
    if (courseId == "trail") {
      isTrail = true;
    } else {
      isTrail = false;
    }

    // =====================
    let isPurchased = false;
    if (loggedInUser) {
      if (
        loggedInUser?.subscription == id &&
        (loggedInUser?.membership == "premium" ||
          loggedInUser?.subscriptionTrailed)
      ) {
        isPurchased = true;
      } else {
        isPurchased = false;
      }
    }
    // =================
    setIsTrail(isTrail);
    setIsPurchased(isPurchased);
  }, [loggedInUser, courseId, id]);

  return (
    <>
      {isTrail ? (
        <Button
          onClick={() => handleSubscription(id, courseId)}
          className="w-full md:font-semibold"
        >
          {isPurchased ? "Already purchased" : "Sign Up For Free"}
        </Button>
      ) : (
        <Button
          onClick={() => handleSubscription(id, courseId)}
          className="w-full md:font-semibold"
        >
          {isPurchased ? "Already purchased" : "Subscribe Now"}
        </Button>
      )}
    </>
  );
};

export default PricingBtn;
