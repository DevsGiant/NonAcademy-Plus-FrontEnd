"use client";

import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Image from "next/image";
import React, { useRef, useState } from "react";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import "swiper/css";
import "swiper/css/free-mode";
import { Autoplay, FreeMode, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  academicResultsImages,
  resultCategories,
} from "../../../../../public/data/academicResults";

const AcademicResults = () => {
  const [activeCategory, setActiveCategory] = useState("");
  const [isActiveCategoryImage, setIsActiveCategoryImage] = useState(false);
  const [selectedResult, setSelectedResult] = useState({});
  const swiperRef = useRef(null);

  // Set active category and toggle between slider and image
  const handleCategorySelect = (slug) => {
    if (!slug) return;

    setIsActiveCategoryImage(true);
    setActiveCategory(slug);

    const selected = academicResultsImages?.find(
      (item) => item.category === slug,
    );
    setSelectedResult(selected || {});
  };

  // Swiper next button
  const handleNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  // Swiper previous button
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
      <div className="no-scrollbar mb-5 w-full overflow-x-auto">
        <div
          className="flex flex-nowrap justify-start gap-3 md:justify-center"
          style={{ justifyContent: "start" }}
        >
          {resultCategories?.map((category) => (
            <div
              onClick={() => handleCategorySelect(category.slug)}
              key={category.id}
              className={`${activeCategory === category.slug ? "border-nad-primary bg-zinc-50 text-nad-primary" : "border-stroke-light bg-white text-[#3d3d3d] hover:border-stroke-medium hover:bg-zinc-50"} inline-flex cursor-pointer items-center space-x-2 whitespace-nowrap rounded-full border px-3 py-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2`}
            >
              {category.name}
            </div>
          ))}
        </div>
      </div>
      {/* Image showing part base on category */}
      <div
        className={
          isActiveCategoryImage ? "block overflow-hidden rounded-md" : "hidden"
        }
      >
        {/* Large Screen Image */}
        <Image
          className="hidden h-full w-full bg-cover md:block"
          src={selectedResult.imageLg}
          alt={selectedResult.title}
        />
        {/* Small Screen Image */}
        <Image
          className="block h-full w-full bg-cover md:hidden"
          src={selectedResult.imageSm}
          alt={selectedResult.title}
        />
      </div>

      {/* slider part */}
      <div
        className={
          isActiveCategoryImage
            ? "hidden"
            : "relative block w-full overflow-hidden"
        }
      >
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
              <div className="overflow-hidden rounded-md">
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
              </div>
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
