"use client";

import { sendGTMEvent } from "@next/third-parties/google";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi"; // Importing icons from react-icons
import "swiper/css";
import "swiper/css/free-mode";
import { Autoplay, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { blockchainMentor } from "../../../../../../public/data/blockchain/blockchain";

const MentorSlider = () => {
  const swiperRef = useRef(null); // To access swiper instance

  useEffect(() => {
    sendGTMEvent({ event: "viewNanoDegreePage", page: "nano-degree" });
  }, []);

  return (
    <div className="relative mt-3 max-w-[350px]">
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[FreeMode, Autoplay]}
        onSwiper={(swiper) => (swiperRef.current = swiper)} // Getting swiper instance
      >
        {blockchainMentor?.map((mentor) => (
          <SwiperSlide key={mentor.id}>
            <div className="flex h-[300px]  items-center rounded">
              <Image
                className="h-full max-w-full rounded object-cover"
                src={mentor?.image}
                alt="mentor"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Previous Button */}
      <button
        className="absolute right-72 top-1/2 z-30 hidden -translate-y-1/2 transform rounded-full bg-gray-100 p-2 shadow-lg hover:bg-gray-200 md:right-[360px] md:block"
        onClick={() => swiperRef.current?.slidePrev()}
        aria-label="Previous Slide"
      >
        <FiArrowLeft className="text-xl text-gray-800" />
      </button>

      {/* Next Button */}
      <button
        className="absolute left-72 top-1/2 z-30 hidden -translate-y-1/2 transform rounded-full bg-gray-100 p-2 shadow-lg hover:bg-gray-200 md:left-[360px] md:block"
        onClick={() => swiperRef.current?.slideNext()}
        aria-label="Next Slide"
      >
        <FiArrowRight className="text-xl text-gray-800" />
      </button>
    </div>
  );
};

export default MentorSlider;
