"use client";

import CourseCard from "@/components/Courses/CourseCard";
import { Button } from "@/components/ui/button";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import SwiperNextBtn from "@/components/ui/SwiperNextBtn";
import SwiperPrevBtn from "@/components/ui/SwiperPrevBtn";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import { IoArrowForward } from "react-icons/io5";
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
            spaceBetween={20}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              992: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1200: {
                slidesPerView: 4,
                spaceBetween: 25,
              },
            }}
            freeMode={true}
            modules={[FreeMode]}
          >
            {popularCourses?.map((course) => {
              const { _id, slug, title, thumbnail } = course;
              return (
                <SwiperSlide
                  key={course.id}
                  //   className="overflow-hidden rounded-lg border border-stroke bg-white shadow-sm"
                >
                  <Link
                    href={`/all-courses/${slug}`}
                    key={_id}
                    className="h-full w-full overflow-hidden rounded-lg border border-stroke bg-white shadow-sm transition-all hover:border-slate-400/60 hover:shadow"
                  >
                    <div className="flex h-full w-full flex-col items-start">
                      <div className="aspect-video h-auto w-full flex-shrink-0 overflow-hidden">
                        <Image
                          src={thumbnail}
                          width={300}
                          height={150}
                          alt={title}
                          className="aspect-video h-auto w-full rounded-t-lg object-cover"
                        />
                      </div>
                      <div className="flex-grow p-4">
                        <h4 className="text-lg font-semibold lg:text-xl">
                          {title}
                        </h4>
                      </div>
                      <div className="w-full space-y-4 p-4">
                        <Button
                          variant="outline"
                          className="w-full bg-slate-200 hover:bg-slate-200/80"
                        >
                          View Details{" "}
                          <IoArrowForward className="ml-1.5 text-base" />
                        </Button>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
              );
            })}
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
