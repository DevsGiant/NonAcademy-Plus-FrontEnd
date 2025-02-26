"use client";
import { Button } from "@/components/ui/button";
import { sendGTMEvent } from "@next/third-parties/google";
import Link from "next/link";
import React, { useEffect } from "react";

const TryAgainBtn = () => {
  // gta
  useEffect(() => {
    sendGTMEvent({ event: "paymentFailed", page: "payment-failed" });
  }, []);

  return (
    <div className="mt-6">
      <Button className="w-full" asChild>
        <Link href="/">Try Again</Link>
      </Button>
    </div>
  );
};

export default TryAgainBtn;
