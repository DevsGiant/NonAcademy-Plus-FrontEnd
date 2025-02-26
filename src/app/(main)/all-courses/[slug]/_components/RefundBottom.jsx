"use client";

import { Button } from "@/components/ui/button";
import { AuthContext } from "@/contexts/AuthProvider";
import { Rating, StickerStar } from "@smastrom/react-rating";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";

const customStyles = {
  itemShapes: StickerStar,
  activeFillColor: "#ffb700",
  inactiveFillColor: "#fbf1a9",
};

const RefundBottom = ({ slug, title, id, isFree }) => {
  const [showRefound, setShowRefound] = useState(false);
  const { loggedInUser } = useContext(AuthContext);

  useEffect(() => {
    const handleScroll = () => {
      setShowRefound(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-30 block animate-[fade-in_100ms_linear_forwards] border-t border-gray-600 bg-gradient-to-r from-nad-gray-9 via-nad-gray-8 to-nad-gray-9 px-2 py-2.5 ${showRefound ? "opacity-100" : "opacity-0"}`}
    >
      <div className="grid grid-cols-1 place-items-stretch gap-2 sm:grid-cols-2">
        <div className="hidden flex-col gap-1 text-[11px] text-gray-300 sm:flex">
          <h6 className="truncate text-sm font-semibold">{title}</h6>
          {/* TODO: static data removed */}
          {/* <div className="flex items-center gap-1">
            <div className="flex items-center gap-0.5">
              <p className="font-semibold text-nad-warning-4">4.6</p>
              <div className="-mt-0.5 max-w-[60px]">
                <div className="flex max-w-none items-center justify-center">
                  <Rating value={4.6} readOnly itemStyles={customStyles} />
                </div>
              </div>
            </div>
            <span>(3k ratings)</span>
          </div>
          <p>17.8k students enrolled</p> */}
        </div>
        <div className="flex flex-col gap-[7px] sm:ml-auto sm:max-w-md">
          {isFree ? (
            <Button
              asChild
              className="my-1 w-full rounded-lg text-lg font-semibold"
            >
              {loggedInUser ? (
                <Link href={`/dashboard`}>Go To Dashboard</Link>
              ) : (
                <Link href={`/auth/login`}>Login & Watch free</Link>
              )}
            </Button>
          ) : (
            <Button
              asChild
              className="my-1 w-full rounded-lg text-lg font-semibold"
            >
              {loggedInUser?.courses?.includes(id) ? (
                <Link href={`/dashboard`}>Go To Dashboard</Link>
              ) : (
                <Link href={`/checkout?course=${slug}`}>Buy Now</Link>
              )}
            </Button>
          )}
          <p className="text-center text-[11px] text-white">
            Moneyback guarantee for the course. Full refund in case you
            don&apos;t like the content.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RefundBottom;
