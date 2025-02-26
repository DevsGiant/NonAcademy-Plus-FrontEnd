import { Button } from "@/components/ui/button";
import Container from "@/components/ui/Container";
import Image from "next/image";
import React from "react";
import assets from "../../../../../public/images/images";

const AboutPricing = () => {
  return (
    <Container>
      <div className="grid h-full w-full grid-cols-1 gap-5 px-5 sm:px-10 lg:grid-cols-10 lg:grid-rows-4 xl:bottom-auto xl:grid-rows-7 xl:px-8">
        {/* Interactive courses */}
        <div className="relative order-3 max-h-fit cursor-pointer lg:col-span-5 lg:row-span-1 xl:order-1 xl:col-span-3 xl:row-span-3">
          <div className="relative flex h-full flex-col items-center justify-center gap-0 overflow-hidden rounded-lg border border-gray-200/75 bg-gray-50/50 px-3 py-10 text-center shadow sm:px-6">
            <div className="absolute top-14 scale-[200%]">
              <Image
                height={67}
                width={110}
                src={assets?.images?.interactive}
                alt="Interactive"
              />
            </div>
            <div className="flex flex-col gap-1.5 pt-36">
              <p className="bg-gradient-to-b from-gray-600 to-black bg-clip-text text-xl font-semibold text-transparent">
                Interactive courses
              </p>
              <p className="px-8 text-base font-normal leading-6 tracking-tight text-gray-600 sm:text-lg">
                <span className="display: inline-block; vertical-align: top; text-decoration: inherit; max-width: 224px;">
                  Gone are the days to learn through video-only courses
                </span>
              </p>
            </div>
          </div>
        </div>
        {/* Unlock everything card */}
        <div className="relative bottom-0 left-0 right-0 top-0 z-20 order-1 w-full cursor-pointer lg:col-span-10 lg:row-span-4 xl:order-2 xl:col-span-4 xl:row-span-7">
          <div className="relative flex h-full flex-col items-center justify-center gap-0 overflow-hidden rounded-lg border border-gray-200/75 bg-gray-50/50 px-3 py-10 text-center shadow sm:px-6">
            <div className="flex flex-col pt-20 xl:pt-0">
              <div className="relative mx-auto flex h-[130px] w-[260px] items-center justify-center">
                <div className="absolute inset-0 z-40 mx-auto h-[130px] w-[130px] rounded-full">
                  <Image
                    height={130}
                    width={130}
                    src={assets?.images?.na}
                    alt="NonAcademy"
                  />
                </div>
                <Image
                  height={130}
                  width={130}
                  src={assets?.images?.pro}
                  alt="Pro"
                />
                <div className="absolute inset-0 z-10  w-full rounded-full bg-[radial-gradient(circle,_#4338c0_20%,_#a5b4fc_100%)] blur-3xl"></div>
                <div className="aspect-1 absolute inset-0 z-30 -translate-y-[65px] rounded-full border-2 border-indigo-300/60 bg-gradient-to-r from-indigo-400/50 to-indigo-300/50 p-5 opacity-90">
                  <div className="h-full w-full rounded-full border-2 border-indigo-500/50 bg-gradient-to-r from-indigo-500 to-indigo-400 p-5">
                    <div className="h-full w-full rounded-full border-2 border-indigo-600/50 bg-gradient-to-r from-indigo-600 to-indigo-500 p-5">
                      <div className="h-full w-full rounded-full border-2 border-indigo-700/50 bg-gradient-to-r from-indigo-700 to-indigo-600"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex flex-col gap-1.5 pt-24 leading-6">
                <div className="bg-gradient-to-b from-gray-600 to-black bg-clip-text text-xl font-bold text-transparent  sm:text-3xl">
                  Unlock everything
                </div>
                <p className="px-0 text-base font-normal leading-6 tracking-tight text-gray-800 sm:px-8 sm:text-lg">
                  <span className="display: inline-block; vertical-align: top; text-decoration: inherit; max-width: 315px;">
                    Get unlimited access to every resource you need in a single
                    pro membership
                  </span>
                </p>
              </div>
              <Button className="">Subscribe Now</Button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AboutPricing;
