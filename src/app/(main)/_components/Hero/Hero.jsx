"use client";

import Image from "next/image";
import React from "react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Autoplay, FreeMode, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Hero = ({ banners }) => {
  return (
    <div className="w-full overflow-hidden">
      <Swiper
        centeredSlides
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation
        speed={800}
        freeMode={true}
        modules={[Autoplay, FreeMode, Pagination, Navigation]}
      >
        {banners?.map((item) => (
          <SwiperSlide key={item._id} className="mb-8">
            {/* Large Screen Image */}
            <Image
              className="hidden h-full w-full bg-cover lg:block"
              src={item?.desktopUrl}
              alt={item?.title || "Banner"}
              width={4000}
              height={1000}
              priority
            />
            {/* Small Screen Image */}
            <Image
              className="block h-full w-full bg-cover lg:hidden"
              src={item?.phoneUrl}
              alt={item?.title || "Banner"}
              width={4000}
              height={1000}
              priority
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
