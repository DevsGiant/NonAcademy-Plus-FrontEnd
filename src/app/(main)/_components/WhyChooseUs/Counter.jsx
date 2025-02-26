"use client";

import React from "react";
import CountUp from "react-countup";

const Counter = ({ counter }) => {
  return (
    <h3 className="counter">
      <CountUp
        // start={item.counter - 100}
        end={counter}
        duration={3}
      />
      +
    </h3>
  );
};

export default Counter;
