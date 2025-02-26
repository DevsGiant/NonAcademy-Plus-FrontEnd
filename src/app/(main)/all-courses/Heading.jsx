"use client";
import { sendGTMEvent } from "@next/third-parties/google";
import React, { useEffect } from "react";

const Heading = () => {
  // gta
  useEffect(() => {
    sendGTMEvent({ event: "checkoutPageView", page: "checkout" });
  }, []);

  return (
    <h2 className="mb-6 text-center text-2xl font-bold capitalize text-nad-title md:text-4xl lg:mb-8">
      All Courses
    </h2>
  );
};

export default Heading;
