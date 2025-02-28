"use client";

import CourseCard from "@/components/Courses/CourseCard";
import CardSkeleton from "@/components/Skeleton/CardSkeleton";
import { Button } from "@/components/ui/button";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import SwiperNextBtn from "@/components/ui/SwiperNextBtn";
import SwiperPrevBtn from "@/components/ui/SwiperPrevBtn";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { IoArrowForward, IoCodeSlash } from "react-icons/io5";
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./our-courses.css";

const OurCourses = ({ categoriesWithCourses }) => {
  const [selectedCategory, setSelectedCategory] = useState(
    categoriesWithCourses[0],
  );
  const [loading, setLoading] = useState(false);
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

  const handleCategorySelect = (category) => {
    if (category._id !== selectedCategory._id) {
      setLoading(true);
      setSelectedCategory(category);
    }
  };

  useEffect(() => {
    if (loading) {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [loading, selectedCategory]);

  return (
    <Container>
      <SectionTitle
        title="Popular Courses"
        subtitle="Creating A Community Of Life Long Learners"
      />
      <div className="mt-4 flex w-full flex-col items-center gap-4 md:mt-5 md:gap-6 lg:mt-6">
        {/* show all category */}
        <div className="relative w-full">
          <Swiper
            ref={swiperRef}
            navigation={true}
            freeMode={true}
            modules={[Navigation, FreeMode]}
            id="category-swiper"
          >
            {categoriesWithCourses?.map((category) => (
              <SwiperSlide key={category._id}>
                <div
                  onClick={() => handleCategorySelect(category)}
                  className={`group/cat flex h-full shrink-0 cursor-pointer items-center gap-1.5 rounded-md border px-4 py-2 lg:gap-2 ${
                    selectedCategory._id === category._id
                      ? "border-primary bg-nad-primary text-white"
                      : "border-stroke bg-slate-100 hover:border-slate-100 hover:bg-nad-primary/10"
                  }`}
                >
                  <div className="w-7 items-center justify-center rounded-full bg-white p-1.5 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.12)]">
                    <IoCodeSlash
                      className={`w-4 min-w-4 ${
                        selectedCategory._id === category._id
                          ? "text-primary"
                          : "brightness-0  transition-all duration-300 group-hover/cat:text-blue-500 group-hover/cat:brightness-100"
                      } `}
                    />
                  </div>
                  <div className="flex flex-col items-start justify-center gap-0.5">
                    <p
                      className={`line-clamp-1 whitespace-nowrap text-sm font-medium lg:text-base ${
                        selectedCategory._id !== category._id &&
                        "group-hover/cat:underline"
                      }`}
                    >
                      {category.name}
                    </p>
                    <p
                      className={`whitespace-nowrap text-xs font-medium ${
                        selectedCategory._id === category._id
                          ? "text-white"
                          : "text-slate-600"
                      }`}
                    >
                      • {category.courses.length} Courses
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          {/* swiper custom buttons */}
          {categoriesWithCourses?.length > 1 && (
            <>
              <SwiperPrevBtn handlePrev={handlePrev} />
              <SwiperNextBtn handleNext={handleNext} />
            </>
          )}
        </div>
        {/* Show courses data by selected category */}
        <div className="grid w-full grid-cols-1 gap-2 md:grid-cols-2 md:gap-3 lg:grid-cols-3 lg:gap-3 xl:grid-cols-4">
          {loading ? (
            <>
              <CardSkeleton count={8} />
              <CardSkeleton count={8} />
              <CardSkeleton count={8} />
              <CardSkeleton count={8} />
            </>
          ) : selectedCategory?.courses?.length === 0 ? (
            <p className="col-span-2 mx-auto my-8 w-fit rounded-sm border bg-white px-3 py-2 text-center text-sm font-medium text-slate-500 shadow-sm md:my-10 md:text-lg lg:col-span-3 xl:col-span-4">
              No courses available in this category
            </p>
          ) : (
            selectedCategory?.courses?.map((course) => (
              <CourseCard key={course._id} course={course} />
            ))
          )}
        </div>
        <Button
          asChild
          variant="outline"
          className="bg-slate-200 hover:bg-slate-200/80 md:mx-auto md:w-[20%]"
        >
          <Link href="/all-courses">
            See All <IoArrowForward className="ml-1.5 text-base" />
          </Link>
        </Button>
      </div>
    </Container>
  );
};

export default OurCourses;
