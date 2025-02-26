"use client";
import { sendGAEvent } from "@next/third-parties/google";

import React from "react";

const TriggerAnalyticsBtn = () => {
  return (
    <div>
      <button
        onClick={() => sendGAEvent({ event: "buttonClicked", value: "xyz" })}
      >
        Send Event
      </button>
    </div>
  );
};

export default TriggerAnalyticsBtn;
