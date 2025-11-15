"use client";

import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Image from "next/image";
import React from "react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Autoplay, FreeMode, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import scholarshipOne from "../../../../../public/images/others/scholarship-1.jpg";
import scholarshipTwo from "../../../../../public/images/others/scholarship-2.jpg";

const scholarships = [
  {
    id: 1,
    image: scholarshipOne,
  },
  {
    id: 1,
    image: scholarshipTwo,
  },
];

const ScholarshipAds = () => {
  return (
    <Container>
      <SectionTitle title="Scholarships" subtitle="" />

      <div className="mt-5 w-full overflow-hidden md:mt-9">
        <Swiper
          centeredSlides
          autoplay={{
            delay: 6000,
            disableOnInteraction: false,
          }}
          navigation
          speed={800}
          freeMode={true}
          modules={[Autoplay, FreeMode, Navigation]}
        >
          {scholarships?.map((item) => (
            <SwiperSlide key={item._id}>
              {/* Large Screen Image */}
              <Image
                className="hidden h-full w-full bg-cover sm:block"
                src={item.image}
                alt="Scholarships"
                priority
              />
              {/* Small Screen Image */}
              {/* TODO: change lg image and replace sm image */}
              <Image
                className="block h-full w-full bg-cover sm:hidden"
                src={item.image}
                alt="Scholarships"
                priority
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Container>
  );
};

export default ScholarshipAds;
