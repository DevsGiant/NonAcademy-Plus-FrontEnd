"use client";

import { Button } from "@/components/ui/button";
import Spinner from "@/components/ui/Spinner";
import { AuthContext } from "@/contexts/AuthProvider";
import Link from "next/link";
import React, { useContext } from "react";
import {
  FaArrowCircleDown,
  FaArrowCircleUp,
  FaBookOpen,
  FaTrophy,
} from "react-icons/fa";
import { MdQuiz, MdWavingHand } from "react-icons/md";

const RewardView = () => {
  const { loading, loggedInUser } = useContext(AuthContext);
  const { usedPoints, earnedPoints } = loggedInUser || {};

  if (loading) {
    return <Spinner />;
  }

  return (
    <div>
      <div className="flex w-full flex-col gap-4 lg:flex-row">
        <div className="w-full lg:w-[40%]">
          <h1 className="text-center text-xl font-medium text-slate-600 md:text-3xl lg:text-left">
            Rise and shine, <br />{" "}
            <span className="font-semibold text-slate-700">
              {loggedInUser?.name}!
            </span>
            <MdWavingHand className="ml-2 inline text-yellow-500" />
          </h1>
        </div>

        {/* point cards */}
        <div className="w-full flex-grow lg:w-[40%]">
          <div className="grid grid-cols-3 gap-2.5 md:gap-4">
            <div className="space-y-1.5 whitespace-nowrap rounded-lg bg-white p-3 text-center shadow-md md:space-y-2.5 md:p-5">
              <h6 className="flex items-center justify-center gap-1.5 text-base font-semibold text-nad-gray-8 md:text-lg">
                <FaArrowCircleUp /> Earned
              </h6>
              <p className="text-xl font-bold text-orange-500 md:text-2xl">
                {earnedPoints} AVT
              </p>
            </div>
            <div className="space-y-1.5 whitespace-nowrap rounded-lg bg-white p-3 text-center shadow-md md:space-y-2.5 md:p-5">
              <h6 className="flex items-center justify-center gap-1.5 text-base font-semibold text-nad-gray-8 md:text-lg">
                <FaArrowCircleDown /> Used
              </h6>
              <p className="text-xl font-bold text-red-500 md:text-2xl">
                {usedPoints} AVT
              </p>
            </div>
            <div className="space-y-1.5 whitespace-nowrap rounded-lg bg-white p-3 text-center shadow-md md:space-y-2.5 md:p-5">
              <h6 className="flex items-center justify-center gap-1.5 text-base font-semibold text-nad-gray-8 md:text-lg">
                <FaTrophy /> Available
              </h6>
              <p className="text-xl font-bold text-green-600 md:text-2xl">
                {earnedPoints - usedPoints} AVT
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* earn points card here */}
      <div className="mt-5 grid grid-cols-1 gap-4 md:mt-7 md:gap-5 lg:grid-cols-2">
        <div className="flex items-center justify-between rounded-md bg-white p-5 shadow-md">
          <div className="space-y-1.5 text-left md:space-y-2.5">
            <h2 className="text-lg font-semibold md:text-xl">
              Earn AVT Points
            </h2>
            <p className="text-nad-gray-8">Earn AVT by learning Libraries</p>
            <Button asChild>
              <Link href="/degrees">Earn Points</Link>
            </Button>
          </div>
          <FaBookOpen className="text-[65px] text-blue-600 md:text-[75px]" />
        </div>
        <div className="flex items-center justify-between rounded-md bg-white p-5 shadow-md">
          <div className="space-y-1.5 text-left md:space-y-2.5">
            <h2 className="text-lg font-semibold md:text-xl">
              Earn AVT Points
            </h2>
            <p className="text-nad-gray-8">Earn AVT by solving quiz</p>
            <Button asChild>
              <Link href="/degrees">Earn Points</Link>
            </Button>
          </div>
          <MdQuiz className="text-[65px] text-yellow-500 md:text-[75px]" />
        </div>
      </div>
    </div>
  );
};

export default RewardView;
