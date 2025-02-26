"use client";

import axiosInstance from "@/utils/axiosInstance";
import { formatDateAndTime } from "@/utils/formateDate";
import { sendGTMEvent } from "@next/third-parties/google";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const PaymentInfo = () => {
  const searchParams = useSearchParams();
  const [paymentInfo, setPaymentInfo] = useState({});

  useEffect(() => {
    const transId = searchParams.get("transId");
    const paymentFor = searchParams.get("paymentFor");

    if (!transId && !paymentFor) {
      console.error("Missing id or transId in search parameters");
      return;
    }

    const updatePaymentInfo = async () => {
      try {
        const result = await axiosInstance.get(
          `/purchase/transaction?transId=${transId}&paymentFor=${paymentFor}`,
        );

        // console.log({ d: result?.data?.data?.transaction });
        setPaymentInfo(result?.data?.data?.transaction);
      } catch (error) {
        console.error("Error fetching payment info:", error);
      }
    };

    updatePaymentInfo();
  }, [searchParams]);

  // gta
  useEffect(() => {
    sendGTMEvent({ event: "paymentSuccessful", page: "payment-success" });
  }, []);

  return (
    <div className="mt-6 w-full max-w-md rounded-lg border p-4">
      <div className="flex justify-between text-sm">
        <span>Amount Paid:</span>
        <span className="font-medium">৳{paymentInfo?.amount}</span>
      </div>
      <div className="mt-2 flex justify-between text-sm">
        <span>Date & Time:</span>
        <span className="font-medium">
          {formatDateAndTime(paymentInfo?.createdAt)}
        </span>
      </div>
      <div className="mt-2 flex justify-between text-sm">
        <span>Payment Method</span>
        <span className="font-medium">{paymentInfo?.paymentMethod}</span>
      </div>
      <div className="mt-2 flex justify-between text-sm">
        <span>Transaction ID:</span>
        <span className="font-medium">{paymentInfo?.transId}</span>
      </div>
    </div>
  );
};

export default PaymentInfo;
