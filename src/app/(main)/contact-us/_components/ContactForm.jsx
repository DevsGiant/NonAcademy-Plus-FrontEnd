"use client";

import { Button } from "@/components/ui/button";
import ErrorMessage from "@/components/ui/ErrorMessage";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { contactUsSchema } from "@/lib/contactUsSchema";
import axiosInstance from "@/utils/axiosInstance";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaSpinner } from "react-icons/fa6";
import assets from "../../../../../public/images/images";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(contactUsSchema),
  });

  const onSubmit = async (data) => {
    const response = await axiosInstance.post("/student/contact-mail", data);
    if (response.data?.success) {
      toast.success("Message sended successfully");
      reset();
    } else {
      toast.error("Unable to send message");
    }
  };

  return (
    <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
      <div className="w-full md:w-1/2">
        <Image
          src={assets?.images?.contactOne}
          alt="Contact Us"
          className="h-auto w-full rounded-lg shadow-md"
        />
      </div>
      <div className="w-full md:w-1/2">
        <div className="mx-auto w-full max-w-lg md:ml-auto">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold capitalize text-nad-title md:text-4xl md:font-bold">
              Get In Touch
            </h3>
            <p className="my-2 text-gray-500 md:my-3">
              Fill out the form below and we&apos;ll get back to you as soon as
              possible.
            </p>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-2 lg:space-y-4"
          >
            <div className="space-y-1">
              <Label htmlFor="fullName">Full Name</Label>
              <Input
                {...register("fullName")}
                type="text"
                placeholder="Enter your full name"
              />
              <ErrorMessage>{errors.fullName?.message}</ErrorMessage>
            </div>
            <div className="space-y-1">
              <Label htmlFor="email">Email</Label>
              <Input
                {...register("email")}
                type="email"
                placeholder="Enter your email"
              />
              <ErrorMessage>{errors.email?.message}</ErrorMessage>
            </div>
            <div className="space-y-1">
              <Label htmlFor="subject">Subject</Label>
              <Input
                {...register("subject")}
                type="text"
                placeholder="Enter the subject"
              />
              <ErrorMessage>{errors.subject?.message}</ErrorMessage>
            </div>
            <div className="space-y-1">
              <Label htmlFor="message">Message</Label>
              <Textarea
                {...register("message")}
                placeholder="Enter your message"
              />
              <ErrorMessage>{errors.message?.message}</ErrorMessage>
            </div>
            <Button disabled={isSubmitting} className="w-full">
              {isSubmitting ? (
                <>
                  <FaSpinner className="mr-2 inline animate-spin" />
                  <span className="text-base">Please Wait</span>
                </>
              ) : (
                "Send Message"
              )}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
