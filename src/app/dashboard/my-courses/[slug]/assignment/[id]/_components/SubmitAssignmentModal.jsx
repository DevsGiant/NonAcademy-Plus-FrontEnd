"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
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
import axiosInstance from "@/utils/axiosInstance";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { LuLoader2 } from "react-icons/lu";
import { z } from "zod";

// Zod schema for validation
const assignmentSubmitSchema = z.object({
  code_url: z.string().trim().min(1, "GitHub or Code Link is required"),
  live_url: z.string().trim().optional(),
  additional_url: z.string().trim().optional(),
});

const SubmitAssignmentModal = ({ assignmentId, setUpdatedSubmission }) => {
  const [open, setOpen] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(assignmentSubmitSchema),
  });

  const onSubmit = async (data) => {
    try {
      data.assignmentId = assignmentId;
      const response = await axiosInstance.post("/assignments/submit", data);
      if (response?.data?.success) {
        reset();
        setOpen(false);
        toast.success(response.data.message);
        setUpdatedSubmission(response?.data?.data);
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
        <Button>Submit Assignment</Button>
      </DialogTrigger>
      <DialogContent className="no-scrollbar max-w-[85%] overflow-y-auto bg-gray-1 sm:max-w-[400px] md:max-w-[500px] lg:max-w-[550px]">
        <DialogHeader>
          <DialogTitle>Submit Your Assignment</DialogTitle>
          <DialogDescription className="text-xs md:text-sm">
            Submit your assignment links carefully. Check before submitting.
          </DialogDescription>
        </DialogHeader>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-2 lg:space-y-3"
        >
          <div className="space-y-1.5">
            <Label>GitHub or Code Link</Label>
            <div>
              <Input
                {...register("code_url")}
                type="text"
                className="border-gray-300"
              />
              <ErrorMessage>{errors.code_url?.message}</ErrorMessage>
            </div>
          </div>
          <div className="space-y-1.5">
            <Label>Live Link (optional)</Label>
            <div>
              <Input
                {...register("live_url")}
                type="text"
                className="border-gray-300"
              />
              <ErrorMessage>{errors.live_url?.message}</ErrorMessage>
            </div>
          </div>
          <div className="space-y-1.5">
            <Label>Additional Link (optional)</Label>
            <div>
              <Input
                {...register("additional_url")}
                type="text"
                className="border-gray-300"
              />
              <ErrorMessage>{errors.additional_url?.message}</ErrorMessage>
            </div>
          </div>
          <DialogFooter className="sm:justify-center">
            <Button
              disabled={isSubmitting}
              className="font-semibold"
              type="submit"
            >
              {isSubmitting ? (
                <>
                  <LuLoader2 className="mr-2 inline animate-spin-fast text-lg" />
                  <span className="text-base">Please Wait</span>
                </>
              ) : (
                "Submit"
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default SubmitAssignmentModal;
