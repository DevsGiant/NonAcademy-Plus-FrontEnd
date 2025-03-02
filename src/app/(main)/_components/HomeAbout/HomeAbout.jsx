import Container from "@/components/ui/Container";
import Image from "next/image";
import React from "react";
import { heroAbout } from "../../../../../public/data/heroAbout";
import assets from "../../../../../public/images/images";
import GetStartedAuthBtn from "../GetStartedAuthBtn/GetStartedAuthBtn";

const HomeAbout = () => {
  return (
    <>
      <div className="relative mx-auto pb-4 sm:pb-7">
        <Image
          className="absolute inset-0 -top-8 h-full w-full object-cover"
          src={assets?.images?.compressBg}
          alt="Compress BG"
        />
        <Container>
          <div className="relative m-auto flex flex-col items-center justify-between lg:flex-row">
            {/* left part */}
            <div className="w-full text-center lg:w-[40%] lg:text-left xl:w-[36%]">
              <h2 className="mb-1 text-xl font-semibold capitalize text-nad-title md:text-3xl md:font-bold lg:text-4xl lg:leading-[48px]">
                Bangladesh’s{" "}
                <span className="text-nad-primary">Trusted & Affordable</span>{" "}
                Educational Platform
              </h2>
              <p className="mb-4 text-center text-gray-700 lg:mb-8 lg:text-left">
                Unlock your potential by signing up with NonAcademy Plus The
                most affordable learning solution
              </p>

              {/* auth button */}
              <GetStartedAuthBtn />
            </div>
            {/* right part */}
            <div className="py-6">
              <div className="relative justify-items-center text-[12px] font-[500] leading-[18px] sm:text-[14px] sm:leading-[20px]">
                {/* <Image
                  className="block h-[225px] w-[320px] bg-contain bg-center bg-no-repeat sm:hidden"
                  src={assets?.images?.heroStudentLg}
                  alt="NonAcademy Plus"
                /> */}
                <Image
                  className="h-[225px] w-[320px] bg-contain bg-center bg-no-repeat sm:h-[318px] sm:w-[600px]"
                  src={assets?.images?.heroStudentLg}
                  alt="NonAcademy Plus"
                />
                <div className="absolute right-[85px] top-[48px] z-0 h-[34px] rounded-md bg-white p-2 shadow-[0_0_8px_0_rgba(0,0,0,0.08)] sm:right-[180px] sm:top-[85px] sm:h-[36px]">
                  <div className="absolute right-[-13px] top-0 z-[-1] flex h-full w-[20px]">
                    <div className="my-auto h-[12px] w-[12px] rotate-45 rounded-sm bg-white sm:h-[14px] sm:w-[14px]"></div>
                  </div>
                  <p>Arif Sir, What is NAP?</p>
                </div>
                <div className="absolute left-[85px] top-[115px] z-0 h-[34px] rounded-md bg-nad-primary-2 p-2 text-white shadow-[0_0_8px_0_rgba(0,0,0,0.08)] sm:left-[170px] sm:top-[158px] sm:h-[36px]">
                  <div className="absolute left-[-6px] top-0 z-[-1] flex h-full w-[20px]">
                    <div className="my-auto h-[12px] w-[12px] rotate-45 rounded-sm bg-nad-primary-2 sm:h-[14px] sm:w-[14px]"></div>
                  </div>
                  <p>NAP is where students learn with</p>
                </div>
                <div className="absolute left-[85px] top-[141px] z-[1] h-[28px] w-[210px] rounded-md bg-nad-primary-2 px-2 pb-2 pt-1 text-white shadow-[0_0_8px_0_rgba(0,0,0,0.08)] sm:left-[170px] sm:top-[185px] sm:h-[30px] sm:w-[236px]">
                  <div className="absolute left-[-6px] top-0 z-[-1] flex h-full w-[20px]"></div>
                  <p>love and can grow with guidance</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
      {/* bottom about statics */}
      <div className="container-without-py">
        <div className="relative mx-4 mt-[-16%] grid grid-cols-2 justify-between gap-y-3 overflow-y-hidden rounded-md bg-white px-2.5 py-4 shadow-[0_1px_8px_0_rgba(0,0,0,0.08)] sm:mx-6 sm:mt-[-8%] sm:px-4 sm:py-6 md:flex md:flex-wrap md:rounded-md lg:flex-nowrap xl:mx-0 xl:grid-cols-4">
          {heroAbout?.map((item, idx) => (
            <>
              <div
                key={item.id}
                className="flex w-[154px] columns-6 flex-col text-center sm:w-[330px] md:columns-3 lg:w-[240px]"
              >
                <Image
                  className="h-8 w-8 self-center bg-cover bg-center bg-no-repeat sm:h-12 sm:w-12"
                  src={item.image}
                  alt={item.title}
                />
                <h6 className="pt-4 text-sm font-semibold text-nad-gray-7 md:text-lg">
                  {item.title}
                </h6>
                <p className="text-xs font-medium text-nad-gray-7 md:text-base">
                  {item.short_desc}
                </p>
              </div>
              {idx !== 3 && (
                <div className="my-6 hidden after:block after:h-16 after:w-[1px] after:bg-[#D9DCE1] lg:block"></div>
              )}
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default HomeAbout;
