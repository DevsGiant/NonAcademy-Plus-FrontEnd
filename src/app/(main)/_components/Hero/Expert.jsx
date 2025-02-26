"use client";

import Image from "next/image";
import React from "react";
import "swiper/css";
import "swiper/css/free-mode";
import { Autoplay, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { mentorsData } from "../../../../../public/data/mentors";

const Expert = () => {
  return (
    <div className="absolute -bottom-[12%] left-0 right-0 z-10 mx-auto w-fit rounded-md bg-white px-6 py-5 text-black drop-shadow-md md:-left-[16%] md:bottom-0 md:mx-0 md:rounded-lg md:px-4 md:py-6 lg:-left-[14%] xl:-left-[9%]  xl:bottom-[4%]">
      <div className="flex flex-col items-center justify-center gap-1">
        <h4 className="text-xl font-bold text-nad-title md:text-3xl lg:text-4xl">
          20+
        </h4>
        <p className="text-[#625F71] lg:text-lg">Top Expert Mentors</p>
        <div className="mt-3 max-w-[230px]">
          <Swiper
            slidesPerView={4}
            spaceBetween={0}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
            modules={[FreeMode, Autoplay]}
          >
            {mentorsData?.map((mentor) => (
              <SwiperSlide key={mentor.id}>
                <div className="flex size-[50px] items-center justify-center rounded-full border border-[#cfe2ff]">
                  <Image
                    className="h-auto max-w-full rounded-full object-cover"
                    src={mentor?.image}
                    alt={mentor?.name}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Expert;
