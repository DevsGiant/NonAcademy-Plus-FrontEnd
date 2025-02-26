"use client";

import { AuthContext } from "@/contexts/AuthProvider";
import React, { useContext } from "react";
import { calculateProgress } from "../../_utils/calculateProgress";

const WatchProgressBar = ({ title, modules, courseHistory }) => {
  const { loggedInUser } = useContext(AuthContext);

  return (
    <div className="flex w-full items-center justify-between gap-2">
      <p className="text-sm font-medium text-slate-500">Progress</p>
      <div className="h-2.5 w-full rounded-full bg-[#EBEDEF]">
        <div
          className="h-2.5 rounded-full bg-[#3AC55A]"
          style={{
            width: `${calculateProgress(modules, courseHistory)}%`,
          }}
        ></div>
      </div>
      <p className="text-sm font-medium text-slate-500">
        {calculateProgress(modules, courseHistory)}%
      </p>
    </div>
  );
};

export default WatchProgressBar;
