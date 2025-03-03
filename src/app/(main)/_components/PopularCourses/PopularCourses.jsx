"use client";

import CourseCard from "@/components/Courses/CourseCard";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import SwiperNextBtn from "@/components/ui/SwiperNextBtn";
import SwiperPrevBtn from "@/components/ui/SwiperPrevBtn";
import React, { useRef } from "react";
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const PopularCourses = ({ popularCourses }) => {
  const swiperRef = useRef(null);

  // Swiper next button
  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  // Swiper previous button
  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  return (
    <div className="bg-[#F8F8F8]">
      <Container>
        <SectionTitle
          title="Popular Courses"
          subtitle="Explore our top-rated courses, and accelerate your success!"
        />

        <div className="relative mt-5 md:mt-9">
          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            spaceBetween={8}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 8,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 12,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 12,
              },
              1280: {
                slidesPerView: 4,
                spaceBetween: 12,
              },
            }}
            freeMode={true}
            modules={[FreeMode]}
          >
            {popularCourses?.length === 0 ? (
              <p className="col-span-2 mx-auto my-8 w-fit rounded-sm border bg-white px-3 py-2 text-center text-sm font-medium text-slate-500 shadow-sm md:my-10 md:text-lg lg:col-span-3 xl:col-span-4">
                No courses available in this moment
              </p>
            ) : (
              popularCourses?.map((course) => (
                <SwiperSlide key={course._id}>
                  {/* Course card */}
                  <CourseCard course={course} />
                </SwiperSlide>
              ))
            )}
          </Swiper>
          {/* swiper custom buttons */}
          {popularCourses?.length > 1 && (
            <>
              <SwiperPrevBtn handlePrev={handlePrev} />
              <SwiperNextBtn handleNext={handleNext} />
            </>
          )}
        </div>
      </Container>
    </div>
  );
};

export default PopularCourses;
