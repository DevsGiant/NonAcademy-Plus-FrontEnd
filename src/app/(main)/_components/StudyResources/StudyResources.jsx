"use client";

import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Image from "next/image";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { studyResources } from "../../../../../public/data/studyResources";

const StudyResources = () => {
  return (
    <Container>
      <Container>
        <SectionTitle
          title="Study Resources"
          subtitle="A diverse array of learning materials to enhance your educational journey."
        />

        {/* Feedback cards */}
        <div className="mt-4 md:mt-8">
          <Swiper
            spaceBetween={20}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              992: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1200: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
            freeMode={true}
            speed={800}
            modules={[FreeMode]}
          >
            {studyResources?.map((resource) => {
              return (
                <SwiperSlide key={resource.id}>
                  {/* Review Card */}
                  <div
                    className="group max-h-[370px] min-h-[290px] cursor-pointer rounded-lg p-5  transition-all duration-200 hover:shadow-[0_1px_8px_0_rgba(0,0,0,0.08)] md:min-h-[320px] md:p-6"
                    style={{
                      backgroundColor: resource.default_color,
                      transition: "background-color 0.2s",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.backgroundColor =
                        resource.hover_color)
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.backgroundColor =
                        resource.default_color)
                    }
                  >
                    {/* title and icon */}
                    <div className="mb-1.5 flex cursor-pointer items-center justify-between ">
                      <h6 className="text-nad-gray-7 text-lg font-semibold lg:text-2xl">
                        {resource.title}
                      </h6>
                      <div style={{ transitionDuration: "1s" }}>
                        <FaArrowRight className="text-lg text-gray-600 transition-all duration-200 group-hover:mr-0 group-hover:opacity-100 lg:mr-12 lg:opacity-0" />
                      </div>
                    </div>

                    {/* description */}
                    <p className="text-start text-xs font-medium text-gray-500 lg:text-sm lg:leading-[20px]">
                      {resource.description}
                    </p>

                    {/* image */}
                    <div className="mt-4 flex justify-center">
                      <Image
                        className="m-auto h-[180px] w-[232px] bg-contain bg-center bg-no-repeat transition-all duration-200 group-hover:scale-110 md:w-[202px] lg:w-[232px] xl:h-[190px]"
                        src={resource.image}
                        alt={resource.title}
                      />
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </Container>
    </Container>
  );
};

export default StudyResources;
