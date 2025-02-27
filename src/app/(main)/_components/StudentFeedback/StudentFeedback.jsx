"use client";

import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Image from "next/image";
import React from "react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Autoplay, FreeMode, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { studentsFeedback } from "../../../../../public/data/studentsFeedback";
import assets from "../../../../../public/images/images";

const StudentFeedback = () => {
  return (
    <div className="bg-[#F8F8F8]">
      <Container>
        <SectionTitle
          title="Students ❤️ NonAcademy Plus"
          subtitle="Hear from our students"
        />

        {/* Feedback cards */}
        <div className="mt-5 md:mt-9">
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
            speed={800}
            modules={[Autoplay, FreeMode, Pagination]}
          >
            {studentsFeedback?.map((feedback) => {
              return (
                <SwiperSlide key={feedback.id}>
                  {/* Review Card */}
                  <div className="mb-10 flex min-h-[290px] flex-col justify-between gap-y-2 rounded-lg bg-white p-5 shadow-[0_1px_8px_0_rgba(0,0,0,0.08)] md:mb-12 md:min-h-[320px] md:gap-y-4 md:p-6">
                    {/* Comma Icon */}
                    <Image
                      className="mb-2.5 h-8 w-10 bg-contain bg-center bg-no-repeat sm:mb-3.5 "
                      src={assets?.images?.comma}
                      alt="Comma"
                    />

                    {/* Student Feedback */}
                    <div className="no-scrollbar h-[140px] overflow-scroll md:h-[150px]">
                      <p className="text-gray-700">{feedback.feedback}</p>
                    </div>

                    {/* Student Name and Image */}
                    <div className="flex items-center gap-3">
                      <div className="rounded-full border-2 border-[#D9DCE1] p-1">
                        <Image
                          className="h-9 w-9 overflow-hidden rounded-full bg-contain bg-center bg-no-repeat"
                          src={feedback.image}
                          alt={feedback.title}
                        />
                      </div>
                      <div>
                        <p className="text-nad-gray-7 text-base font-semibold">
                          {feedback.name}
                        </p>
                        <p className="text-xs font-medium text-nad-logo">
                          {feedback.title}
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </Container>
    </div>
  );
};

export default StudentFeedback;
