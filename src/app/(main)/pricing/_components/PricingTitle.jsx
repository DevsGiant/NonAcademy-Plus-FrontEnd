"use client";

import React, { useEffect, useState } from "react";

const PricingTitle = () => {
  const words = [
    "coding courses",
    "interview kits",
    "learning paths",
    "AI coding mentor",
    "practice problems",
  ];

  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);

      setTimeout(() => {
        setCurrentWordIndex((prevIndex) =>
          prevIndex === words?.length - 1 ? 0 : prevIndex + 1,
        );
        setIsVisible(true);
      }, 800);
    }, 3000);

    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <div className="flex flex-col justify-center self-center py-1 text-center text-2xl font-bold tracking-tight md:text-3xl lg:text-5xl">
      <h1>
        Master coding with <br /> the best{" "}
        <span
          className={`transform whitespace-nowrap underline transition-all duration-1000 ease-in-out
              ${isVisible ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"}`}
        >
          {words[currentWordIndex]}
        </span>
      </h1>
    </div>
  );
};

export default PricingTitle;
