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
      <SectionTitle
        title="Academic Excellence : Results"
        subtitle="Giving wings to a millions dreams, a million more to go"
      />

      {/* slider part */}
      <div className="relative mt-5 w-full overflow-hidden md:mt-9">
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
