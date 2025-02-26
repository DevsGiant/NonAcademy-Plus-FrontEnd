"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
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
import { Textarea } from "@/components/ui/textarea";
import { AuthContext } from "@/contexts/AuthProvider";
import { scholarshipSchema } from "@/lib/scholarshipSchema";
import axiosInstance from "@/utils/axiosInstance";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useContext, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { LuLoader2 } from "react-icons/lu";

const ScholarshipModal = () => {
  const [open, setOpen] = useState(false);
  const { loggedInUser } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(scholarshipSchema),
  });

  const onSubmit = async (data) => {
    try {
      const response = await axiosInstance.post(
        "/scholarship-requests/create",
        data,
      );
      if (response?.data?.success) {
        reset();
        setOpen(false);
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
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <p className="cursor-pointer">Apply Scholarship</p>
      </DialogTrigger>
      <DialogContent className="no-scrollbar h-[80%] max-w-[85%] overflow-y-auto bg-nad-primary-lite-1 sm:max-w-[425px] md:max-w-[500px] lg:max-w-[550px] xl:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Apply for Scholarship</DialogTitle>
          <DialogDescription className="text-xs md:text-sm">
            {loggedInUser && loggedInUser?.is_verified ? (
              <span>
                Provide accurate and detailed information to increase your
                chances of approval.
              </span>
            ) : (
              <span className="mb-4 mt-2 block rounded-lg border border-red-400 bg-red-100 p-2 font-normal text-red-600 md:font-semibold">
                Without Login cannot Apply for the Scholarship and must verify
                your number
              </span>
            )}
          </DialogDescription>
        </DialogHeader>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-2 lg:space-y-3"
        >
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="space-y-1.5">
              <Label>Full Name</Label>
              <div>
                <Input
                  {...register("fullName")}
                  className="placeholder:text-gray-400"
                  placeholder="Enter your full name"
                  type="text"
                />
                <ErrorMessage>{errors.fullName?.message}</ErrorMessage>
              </div>
            </div>
            <div className="space-y-1.5">
              <Label>Gender</Label>
              <div>
                <Controller
                  name="gender"
                  defaultValue=""
                  control={control}
                  render={({ field }) => (
                    <Select onValueChange={field.onChange}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Gender" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Male">Male</SelectItem>
                        <SelectItem value="Female">Female</SelectItem>
                        <SelectItem value="Other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  )}
                />
                <ErrorMessage>{errors.gender?.message}</ErrorMessage>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="space-y-1.5">
              <Label>Email</Label>
              <div>
                <Input
                  {...register("emailAddress")}
                  className="placeholder:text-gray-400"
                  placeholder="Enter your email address"
                  type="email"
                />
                <ErrorMessage>{errors.emailAddress?.message}</ErrorMessage>
              </div>
            </div>
            <div className="space-y-1.5">
              <Label>Phone</Label>
              <div>
                <Input
                  {...register("phoneNumber")}
                  className="placeholder:text-gray-400"
                  placeholder="Enter your phone number"
                  type="text"
                />
                <ErrorMessage>{errors.phoneNumber?.message}</ErrorMessage>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="space-y-1.5">
              <Label>Current Education Level</Label>
              <div>
                <Controller
                  name="currentEducationLevel"
                  defaultValue=""
                  control={control}
                  render={({ field }) => (
                    <Select onValueChange={field.onChange}>
                      <SelectTrigger>
                        <SelectValue placeholder="Education Level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="high school">High School</SelectItem>
                        <SelectItem value="undergraduate">
                          Undergraduate
                        </SelectItem>
                        <SelectItem value="graduate">Graduate</SelectItem>
                      </SelectContent>
                    </Select>
                  )}
                />
                <ErrorMessage>
                  {errors.currentEducationLevel?.message}
                </ErrorMessage>
              </div>
            </div>
            <div className="space-y-1.5">
              <Label>Institution Name</Label>
              <div>
                <Input
                  {...register("institutionName")}
                  className="placeholder:text-gray-400"
                  placeholder="Enter your Institution name"
                  type="text"
                />
                <ErrorMessage>{errors.institutionName?.message}</ErrorMessage>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="space-y-1.5">
              <Label>Home Address</Label>
              <div>
                <Input
                  {...register("homeAddress.address")}
                  className="placeholder:text-gray-400"
                  placeholder="Enter your home address"
                  type="text"
                />
                <ErrorMessage>
                  {errors.homeAddress?.address?.message}
                </ErrorMessage>
              </div>
            </div>
            <div className="space-y-1.5">
              <Label>District</Label>
              <div>
                <Input
                  {...register("homeAddress.district")}
                  className="placeholder:text-gray-400"
                  placeholder="Enter your district"
                  type="text"
                />
                <ErrorMessage>
                  {errors.homeAddress?.district?.message}
                </ErrorMessage>
              </div>
            </div>
          </div>
          <div className="space-y-1.5">
            <Label>Facebook Profile</Label>
            <div>
              <Input
                {...register("fbProfile")}
                className="placeholder:text-gray-400"
                placeholder="Enter your Facebook profile link"
                type="url"
              />
              <ErrorMessage>{errors.fbProfile?.message}</ErrorMessage>
            </div>
          </div>
          <div className="space-y-1.5">
            <Label>Reasons for applying for Scholarship</Label>
            <div>
              <Textarea
                {...register("reasonsForApplying")}
                className=" placeholder:text-gray-400"
                // rows="5"
                placeholder="Write details here"
              />
              <ErrorMessage>{errors.reasonsForApplying?.message}</ErrorMessage>
            </div>
          </div>
          <div className="space-y-1.5">
            <Label>How will this scholarship help you in your career?</Label>
            <div>
              <Textarea
                {...register("helpInCareer")}
                className=" placeholder:text-gray-400"
                // rows="5"
                placeholder="Write details here"
              />
              <ErrorMessage>{errors.helpInCareer?.message}</ErrorMessage>
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button
                className="border border-stroke bg-slate-300 font-semibold"
                type="button"
                variant="secondary"
              >
                Cancel
              </Button>
            </DialogClose>
            <Button
              disabled={
                isSubmitting || !loggedInUser || !loggedInUser?.is_verified
              }
              className="font-semibold"
              type="submit"
            >
              {isSubmitting ? (
                <>
                  <LuLoader2 className="mr-2 inline animate-spin-fast text-lg" />
                  <span>Wait</span>
                </>
              ) : (
                "Apply"
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ScholarshipModal;
