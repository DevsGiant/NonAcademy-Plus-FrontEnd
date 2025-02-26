"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { MdGroups } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import assets from "../../../../../public/images/images";

const PopupAds = () => {
  const [isPopUp, setPopUp] = useState("hidden");

  useEffect(() => {
    if (!sessionStorage.getItem("popup")) {
      setTimeout(() => {
        setPopUp("block");
        sessionStorage.setItem("popup", "1");
      }, 1000);
    }
  }, []);

  return (
    <div
      className={`fixed top-0 z-50 flex h-screen w-full items-center justify-center transition-all duration-700 ${isPopUp} bg-black/70`}
    >
      <div className="relative w-[80%] rounded-xl bg-gray-200 md:w-[60%] lg:w-[45%]">
        <button
          onClick={() => setPopUp("hidden")}
          type="button"
          className="absolute -right-3 -top-3 inline-flex size-7 items-center justify-center rounded-full border-none bg-red-500 text-center font-semibold text-white transition-all duration-200 hover:bg-red-400"
        >
          <RxCross2 />
        </button>
        <div className="grid grid-cols-1 items-center justify-between gap-5 lg:grid-cols-2 lg:gap-0">
          {/* Left side */}
          <div className="order-2 space-y-3 px-5 pb-5 text-center md:mb-6 md:px-6 lg:order-1 lg:space-y-5 lg:pb-0 lg:pl-8 lg:pr-0 lg:text-left">
            <h2 className="text-lg font-semibold text-nad-gray-9 md:text-xl md:font-bold md:leading-normal lg:text-2xl lg:leading-snug">
              যুক্ত হন বাংলাদেশের সবচেয়ে বড় ও এক্টিভ ব্লকচেইন কমিউনিটিতে
            </h2>
            <Button
              onClick={() => setPopUp("hidden")}
              asChild
              className="gap-2 rounded-full"
            >
              <Link
                href="https://www.facebook.com/groups/nonacademy1"
                target="_blank"
              >
                <MdGroups className="text-lg" />
                <span>Join Here</span>
              </Link>
            </Button>
          </div>

          {/* Right side */}
          <div className="order-1 mx-auto pt-5 md:pt-6 lg:order-2 lg:pb-6">
            <Image
              className="h-[180px] w-full object-cover md:h-[220px] lg:h-[280px]"
              src={assets?.images?.blockchainBanner}
              alt="NonAcademy"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupAds;
