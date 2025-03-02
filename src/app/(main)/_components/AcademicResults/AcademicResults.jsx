"use client";

import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Image from "next/image";
import React, { useRef } from "react";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import "swiper/css";
import "swiper/css/free-mode";
import { Autoplay, FreeMode, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { academicResultsImages } from "../../../../../public/data/academicResults";
import { resultCategories } from "../../../../../public/data/ResultCategory";

const AcademicResults = () => {
  const swiperRef = useRef(null);

  const handleNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const handlePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  return (
    <Container>
      <div className="mb-4 md:mb-6">
        <SectionTitle
          title="Academic Excellence : Results"
          subtitle="Giving wings to a millions dreams, a million more to go"
        />
      </div>

      {/* Result category wise image showing part (no slide only single image show) */}
      {/* Result category part */}
      <div className="no-scrollbar mb-4 w-full overflow-x-auto pb-1">
        <div
          className="flex flex-nowrap justify-start gap-3 md:justify-center"
          style={{ justifyContent: "start" }}
        >
          {resultCategories?.map((category) => (
            <div
              key={category.id}
              className="transitionAll200 border-stroke-light hover:border-stroke-medium inline-flex cursor-pointer items-center space-x-2 whitespace-nowrap rounded-full border bg-white px-3 py-2 text-sm font-medium text-[#3d3d3d] hover:bg-zinc-50 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            >
              {category.name}
            </div>
          ))}
        </div>
      </div>
      {/* Image showing part base on category */}
      <div className="overflow-hidden rounded-md"></div>

      {/* slider part */}
      <div className="relative w-full overflow-hidden">
        <Swiper
          ref={swiperRef}
          spaceBetween={20}
          centeredSlides
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop={true}
          navigation={true}
          speed={800}
          freeMode={true}
          modules={[Autoplay, FreeMode, Navigation]}
        >
          {academicResultsImages.map((item) => (
            <SwiperSlide key={item.id}>
              {/* Large Screen Image */}
              <Image
                className="hidden h-full w-full bg-cover md:block"
                src={item.imageLg}
                alt={item.title}
              />
              {/* Small Screen Image */}
              <Image
                className="block h-full w-full bg-cover md:hidden"
                src={item.imageSm}
                alt={item.title}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        {/* swiper custom buttons */}
        {academicResultsImages?.length > 1 && (
          <>
            <button
              onClick={handlePrev}
              type="button"
              className="absolute left-3 top-1/2 z-10 inline-flex h-8 w-8 -translate-y-1/2 items-center justify-center whitespace-nowrap rounded-full border border-none border-stroke bg-white text-sm font-medium text-nad-primary shadow ring-offset-background hover:bg-white  focus:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 active:bg-white disabled:pointer-events-none disabled:opacity-50 md:h-10 md:w-10"
            >
              <MdOutlineKeyboardArrowLeft className="text-2xl" />
            </button>

            <button
              onClick={handleNext}
              type="button"
              className="absolute right-3 top-1/2 z-10 inline-flex h-8 w-8 -translate-y-1/2 items-center justify-center whitespace-nowrap rounded-full border border-none border-stroke bg-white text-sm font-medium text-nad-primary shadow ring-offset-background hover:bg-white  focus:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 active:bg-white disabled:pointer-events-none disabled:opacity-50 md:h-10 md:w-10"
            >
              <MdOutlineKeyboardArrowRight className="text-2xl" />
            </button>
          </>
        )}
      </div>
    </Container>
  );
};

export default AcademicResults;
