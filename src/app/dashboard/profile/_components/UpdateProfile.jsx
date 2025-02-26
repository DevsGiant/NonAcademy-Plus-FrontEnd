"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { AuthContext } from "@/contexts/AuthProvider";
import axiosInstance from "@/utils/axiosInstance";
import { handleRequestOtp } from "@/utils/requestOtp";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaPen } from "react-icons/fa";
import { LuLoader2 } from "react-icons/lu";

const UpdateProfile = () => {
  const { loggedInUser, fetchUser } = useContext(AuthContext);
  const [selectedImage, setSelectedImage] = useState(null);
  const [showDialog, setShowDialog] = useState(false);

  const {
    handleSubmit,
    register,
    setValue,
    formState: { isSubmitting },
  } = useForm({
    values: loggedInUser,
  });

  useEffect(() => {
    if (loggedInUser?.is_verified === false) {
      setShowDialog(true);
    }
  }, [loggedInUser]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
      setValue("avatar", file);
    }
  };

  const onSubmit = async (userData) => {
    try {
      const formData = new FormData();
      formData.append("name", userData.name);
      formData.append("bio", userData.bio);
      if (userData.avatar) {
        formData.append("avatar", userData.avatar);
      }

      const response = await axiosInstance.put(
        "/student/auth/update-profile",
        formData,
      );
      if (response?.data?.success) {
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
    <div className="col-span-5 xl:col-span-3">
      {/* Warning message if phone not verified */}
      {loggedInUser?.is_verified === false && (
        <div className="mb-4 rounded-lg bg-red-100 p-4 text-red-600">
          <p>
            Your phone number is not verified.{" "}
            <Link
              onClick={handleRequestOtp}
              href="/account-verification"
              className="text-nad-primary"
            >
              Click here to verify.
            </Link>
          </p>
        </div>
      )}

      {/* Popup Dialog for phone verification */}
      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className="w-[80%]">
          <DialogHeader>
            <DialogTitle>Phone Not Verified</DialogTitle>
            <DialogDescription>
              Your phone number is not verified. Please verify your phone number
              to continue using full features of your account.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button asChild>
              <Link onClick={handleRequestOtp} href="/account-verification">
                Verify Phone
              </Link>
            </Button>
            <Button variant="secondary" onClick={() => setShowDialog(false)}>
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Profile Update Form */}
      <div className="rounded-sm border border-stroke bg-white shadow">
        <h4 className="flex items-center justify-between border-b px-5 py-4 lg:px-7">
          <span>Personal Information</span>
          {/* {loggedInUser?.is_verified === false && (
            <Badge>
              <Link href="/account-verification">Verify Phone</Link>
            </Badge>
          )} */}
        </h4>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-3 p-5 lg:space-y-5 lg:p-7 2xl:space-y-7"
          encType="multipart/form-data"
        >
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="space-y-1.5">
              <Label>Full Name</Label>
              <Input
                {...register("name")}
                className="bg-gray-1 placeholder:text-gray-400"
                type="text"
                required
              />
            </div>
            <div className="space-y-1.5">
              <Label className="flex items-center gap-2">
                Phone{" "}
                {loggedInUser?.is_verified ? (
                  <p className="rounded-full border border-green-500 px-1.5 py-[2px] text-[11px] font-medium text-green-500">
                    Verified
                  </p>
                ) : (
                  <p className="rounded-full border border-red-500 px-1.5 py-[2px] text-[11px] font-medium text-red-500">
                    Not Verified
                  </p>
                )}
              </Label>
              <Input
                defaultValue={loggedInUser?.phone}
                className="cursor-not-allowed bg-gray-1 placeholder:text-gray-400 focus:border-input"
                type="number"
                readOnly
              />
            </div>
          </div>
          <div className="space-y-1.5">
            <Label>Email</Label>
            <Input
              defaultValue={loggedInUser?.email}
              className="cursor-not-allowed bg-gray-1 placeholder:text-gray-400 focus:border-input"
              type="email"
              readOnly
            />
          </div>
          <div className="space-y-1.5">
            <Label>BIO</Label>
            <Textarea
              {...register("bio")}
              className="bg-gray-1 placeholder:text-gray-400"
              placeholder="Write your bio here"
            />
          </div>
          <div className="space-y-1.5">
            <Label className="block pb-1.5">Change Picture</Label>
            <div className="relative inline-block">
              <Avatar className="h-14 w-14 lg:h-16 lg:w-16">
                <AvatarImage
                  src={
                    selectedImage ||
                    loggedInUser?.avatar ||
                    "/images/dashboard/avatar.png"
                  }
                  alt="Avatar"
                />
                <AvatarFallback>User</AvatarFallback>
              </Avatar>
              <div className="absolute bottom-0 right-0 flex size-6 cursor-pointer items-center justify-center rounded-full bg-nad-logo text-white md:size-7">
                <label htmlFor="avatar-upload" className="cursor-pointer">
                  <FaPen className="text-xs md:text-sm" />
                </label>
                <input
                  id="avatar-upload"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageChange}
                />
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
                "Save Changes"
              )}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
