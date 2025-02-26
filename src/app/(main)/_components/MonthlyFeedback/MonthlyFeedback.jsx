"use client";

import Container from "@/components/ui/Container";
import { ScrollArea } from "@/components/ui/scroll-area";
import SectionTitle from "@/components/ui/SectionTitle";
import { Rating, StickerStar } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Autoplay, FreeMode, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { monthlyFeedbacks } from "../../../../../public/data/monthlyFeedback";

const customStyles = {
  itemShapes: StickerStar,
  activeFillColor: "#fbb614",
  inactiveFillColor: "#DEE1E6",
  // activeFillColor: "#ffb700",
  // inactiveFillColor: "#fbf1a9",
};

const MonthlyFeedback = () => {
  return (
    <Container>
      <div className="mb-4 md:mb-8">
        <SectionTitle
          subtitle="Review of batch 1"
          title="See what our batch 1 students are saying about our blockchain course"
        />
      </div>

      {/* Feedback cards */}
      <div>
        <Swiper
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
              slidesPerView: 3,
              spaceBetween: 25,
            },
          }}
          freeMode={true}
          pagination={{ dynamicBullets: true }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, FreeMode, Pagination]}
        >
          {monthlyFeedbacks?.map((feedback, index) => {
            return (
              <SwiperSlide key={index}>
                {/* Review Card */}
                <div className="mb-12 h-[300px] rounded-lg bg-white p-5 shadow-lg md:mb-14 md:h-[345px] md:p-6">
                  {/* Quote Icon */}
                  <div className="flex items-center justify-between gap-3">
                    <div className="text-nad-logo">
                      <FaQuoteLeft className="text-[28px] md:text-3xl" />
                    </div>
                    <div className="rounded-sm bg-nad-secondary px-2.5 py-1 text-sm font-medium text-white">
                      1
                    </div>
                  </div>

                  {/* Student Feedback */}
                  <ScrollArea className="h-[130px] md:h-[150px]">
                    <p className="mt-4 text-sm text-gray-600 md:mt-6 md:text-base">
                      {feedback.overall_class_support_feedback}
                    </p>
                  </ScrollArea>

                  {/* Student Rating */}
                  <div className="mt-4 max-w-20 md:mt-5 md:max-w-24">
                    <div className="flex max-w-none items-center justify-center">
                      <Rating
                        value={feedback.overall_rating}
                        readOnly
                        itemStyles={customStyles}
                      />
                    </div>
                  </div>

                  {/* Student Name and ID */}
                  <div className="mt-4 space-y-1 md:mt-5 md:space-y-2">
                    <h3 className="text-base font-semibold text-gray-900 md:text-lg">
                      {feedback.name}
                    </h3>
                    <span className="text-xs font-medium text-gray-500 md:text-sm">
                      Student ID: {feedback.student_id}
                    </span>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </Container>
  );
};

export default MonthlyFeedback;
