"use client";

import { Button } from "@/components/ui/button";
import ErrorMessage from "@/components/ui/ErrorMessage";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { webinarSchema } from "@/lib/webinarSchema";
import axiosInstance from "@/utils/axiosInstance";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaSpinner } from "react-icons/fa";

const BlockchainWebinarForm = () => {
  const router = useRouter();
  // const { loggedInUser } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(webinarSchema),
  });

  const onSubmit = async (data) => {
    try {
      const response = await axiosInstance.post("/webinars", data);
      if (response?.data?.success) {
        reset();
        router.push("/complete-registration");
        // toast.success(response.data.message);
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
      {/* {loggedInUser && loggedInUser?.is_verified ? (
        <h5 className="mb-2 text-lg font-medium md:font-semibold lg:text-xl">
          Fill out this form for join blockchain webinar
        </h5>
      ) : (
        <div className="mb-2 border-l-2 border-red-400 bg-red-100/80 p-2 text-xs font-normal text-red-600 md:mb-4 md:border-l-4 md:text-sm md:font-medium">
          Without Login cannot registration for the webinar and must verify your
          number
        </div>
      )} */}

      <h5 className="mb-2 text-lg font-medium md:font-semibold lg:text-xl">
        Fill out this form for join blockchain webinar
      </h5>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-2 lg:space-y-3"
      >
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="space-y-1.5">
            <Label htmlFor="fullName">
              Full Name <span className="text-red-500">*</span>
            </Label>
            <div>
              <Input
                {...register("fullName")}
                type="text"
                placeholder="Full Name"
                className="placeholder:text-muted-foreground/80"
              />
              <ErrorMessage>{errors.fullName?.message}</ErrorMessage>
            </div>
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="email">
              Email <span className="text-red-500">*</span>
            </Label>
            <div>
              <Input
                {...register("email")}
                type="email"
                placeholder="Email"
                className="placeholder:text-muted-foreground/80"
              />
              <ErrorMessage>{errors.email?.message}</ErrorMessage>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="space-y-1.5">
            <Label htmlFor="phone">
              Phone <span className="text-red-500">*</span>
            </Label>
            <div>
              <Input
                {...register("phone")}
                type="string"
                placeholder="Phone"
                className="placeholder:text-muted-foreground/80"
              />
              <ErrorMessage>{errors.phone?.message}</ErrorMessage>
            </div>
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="facebook">
              Facebook Profile Link <span className="text-red-500">*</span>
            </Label>
            <div>
              <Input
                {...register("facebook")}
                type="url"
                placeholder="Facebook Profile Link"
                className="placeholder:text-muted-foreground/80"
              />
              <ErrorMessage>{errors.facebook?.message}</ErrorMessage>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="space-y-1.5">
            <Label>
              Education Level <span className="text-red-500">*</span>
            </Label>
            <div>
              <Controller
                name="student_level"
                defaultValue=""
                control={control}
                render={({ field }) => (
                  <Select onValueChange={field.onChange}>
                    <SelectTrigger>
                      <SelectValue placeholder="Education Level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="school">School</SelectItem>
                      <SelectItem value="college">College</SelectItem>
                      <SelectItem value="university">University</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                )}
              />
              <ErrorMessage>{errors.student_level?.message}</ErrorMessage>
            </div>
          </div>
          <div className="space-y-1.5">
            <Label>
              Institution Name <span className="text-red-500">*</span>
            </Label>
            <div>
              <Input
                {...register("institution")}
                className="placeholder:text-muted-foreground/80"
                placeholder="Institution Name"
                type="text"
              />
              <ErrorMessage>{errors.institution?.message}</ErrorMessage>
            </div>
          </div>
        </div>
        <div className="pt-1.5">
          <Button disabled={isSubmitting} className="w-full">
            {isSubmitting ? (
              <>
                <FaSpinner className="mr-2 inline animate-spin" />
                <span className="text-base">Please Wait</span>
              </>
            ) : (
              "Register Now"
            )}
          </Button>
        </div>
      </form>
    </>
  );
};

export default BlockchainWebinarForm;
