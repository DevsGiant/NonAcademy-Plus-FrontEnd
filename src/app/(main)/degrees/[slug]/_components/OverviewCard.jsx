"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";
import { IoBookOutline } from "react-icons/io5";
import { SlGraduation } from "react-icons/sl";

const OverviewCard = ({ slug, modules, totalPoints }) => {
  const router = useRouter();

  const handleSeeModule = () => {
    if (modules?.length == 0) {
      return toast.error("No module found!");
    }

    router.push(
      `/degrees/${slug}/${modules?.[0]?.lessons?.[0]?.slug}?course=${modules?.[0]?.slug}`,
    );
  };

  return (
    <div className="sticky top-[90px] h-max space-y-2 rounded-md border px-5 py-3 text-nad-gray-8">
      <h3 className="text-lg font-semibold">
        {/* This degree includes: */}
        এই মডিউলে যা যা থাকবে:
      </h3>
      <div className="flex items-center gap-2 text-sm">
        <SlGraduation />
        <p>{(modules?.length || 0).toLocaleString("bn-BD")} টি মডিউল </p>
      </div>
      <div className="flex items-center gap-2 text-sm">
        <IoBookOutline />
        <p>
          {modules
            ?.reduce((prev, current) => prev + current?.lessons?.length || 0, 0)
            .toLocaleString("bn-BD")}{" "}
          টি পাঠ
        </p>
      </div>
      <div className="flex items-center gap-2 text-sm">
        <p>৳</p>
        {/* <p>Forever free access</p> */}
        <p>সর্বদা বিনামূল্যে এক্সেস</p>
      </div>
      {/* <div className="flex items-center gap-2">
            <IoCheckmark />
            <p>Proof of knowledge badges</p>
          </div> */}
      <hr />
      <p className="text-sm text-gray-700">
        {/* Join thousands of other developers doing this degree and earn{" "} */}
        হাজর হাজার ডেভেলপারের সাথে আপনিও যুক্ত হোন এই কোর্সে এবং অর্জন করুন{" "}
        <span className="font-medium text-orange-700">
          {(totalPoints || 0).toLocaleString("bn-BD")} AVT
        </span>
      </p>
      <Button
        onClick={() => handleSeeModule()}
        size="lg"
        className="w-full gap-2 rounded capitalize"
      >
        <SlGraduation className="text-xl font-bold" />
        {"  "}
        {/* Start Journey */}
        শুরু করুন
      </Button>
    </div>
  );
};

export default OverviewCard;
