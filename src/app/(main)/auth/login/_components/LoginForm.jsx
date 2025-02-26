"use client";

import { Button } from "@/components/ui/button";
import ErrorMessage from "@/components/ui/ErrorMessage";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AuthContext } from "@/contexts/AuthProvider";
import { loginSchema } from "@/lib/loginSchema";
import axiosInstance from "@/utils/axiosInstance";
import { zodResolver } from "@hookform/resolvers/zod";
import Cookies from "js-cookie";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { LuLoader2 } from "react-icons/lu";
import DeviceLimitationModal from "./DeviceLimitatoinModal";

const LoginForm = () => {
  const { fetchUser, loggedInUser } = useContext(AuthContext);
  const [loggedInDevices, setLoggedInDevices] = useState([]);
  const [loginCredentials, setLoginCredentials] = useState({});
  const [openModal, seOpenModal] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data) => {
    setLoginCredentials(data);
    try {
      const currentURL = typeof window !== "undefined" ? window.location : "";
      let url = "/";

      if (currentURL?.search?.slice(0, 6) == "?from=") {
        url =
          "/" +
          currentURL?.search
            ?.slice(6, currentURL?.search?.length)
            ?.split("%")
            .join("?");
      }

      const response = await axiosInstance.post("/student/auth/login", data);
      if (response?.data?.success) {
        Cookies.set("nad_auth_token", response.data?.data?.token, {
          expires: 70,
        });
        sessionStorage.removeItem("loginAlert");
        await fetchUser();
        router.push(url);
        reset();
        toast.success(response.data.message);
      } else {
        console.log({ err: response.data });
        toast.error(response.data.message);

        // for device limitation
        if (response?.data?.data?.length == 3) {
          setLoggedInDevices(response?.data?.data);
          seOpenModal(true);
        }
      }
    } catch (error) {
      console.log(error);
      toast.error(
        error?.response?.data?.message || "An unexpected error occurred!",
      );
    }
  };

  const handleLogoutOtherDevices = async (email_or_phone, password) => {
    if (!email_or_phone || !password) {
      return toast.success("Missing login credentials");
    }

    try {
      const currentURL = typeof window !== "undefined" ? window.location : "";
      let url = "/";

      if (currentURL?.search?.slice(0, 6) == "?from=") {
        url =
          "/" +
          currentURL?.search
            ?.slice(6, currentURL?.search?.length)
            ?.split("%")
            .join("?");
        // console.log({ url });
      }

      const response = await axiosInstance.post(
        "/student/auth/logout-other-devices",
        { email_or_phone, password },
      );

      if (response?.data?.success) {
        Cookies.set("nad_auth_token", response.data?.data?.token);
        await fetchUser();
        router.push(url);
        reset();
        toast.success(response.data.message);
        seOpenModal(false);
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
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-3 lg:space-y-4"
      >
        <div>
          <Label htmlFor="email_or_phone" className="block pb-2.5">
            Email or Phone
          </Label>
          <Input
            {...register("email_or_phone")}
            className="border-slate-300"
            type="text"
          />
          <ErrorMessage>{errors.email_or_phone?.message}</ErrorMessage>
        </div>
        <div>
          <Label htmlFor="password" className="block pb-2.5">
            Password
          </Label>
          <Input
            {...register("password")}
            className="border-slate-300"
            type="password"
            autoComplete="on"
          />
          <ErrorMessage>{errors.password?.message}</ErrorMessage>
        </div>
        {!loggedInUser && (
          <div>
            <Link
              href="/auth/forgot-password"
              className="text-sm font-medium text-primary hover:text-opacity-90"
            >
              Forgot password?
            </Link>
          </div>
        )}
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
            "Login"
          )}
        </Button>
      </form>
      <DeviceLimitationModal
        seOpenModal={seOpenModal}
        openModal={openModal}
        handleLogoutOtherDevices={handleLogoutOtherDevices}
        loginCredentials={loginCredentials}
        loggedInDevices={loggedInDevices}
      />
    </>
  );
};

export default LoginForm;
