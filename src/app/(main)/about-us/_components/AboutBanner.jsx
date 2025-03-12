import Image from "next/image";
import React from "react";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import assets from "../../../../../public/images/images";

const AboutBanner = () => {
  return (
    <section className="bg-[#F3F7FB]">
      <div className="container mx-auto px-4 py-8 md:py-14">
        <div className="flex flex-col gap-10 lg:flex-row lg:gap-16">
          <div className="w-full lg:w-1/2">
            <div className="grid w-full grid-cols-1 justify-items-center gap-4 sm:grid-flow-col">
              <Image
                className="row-span-3  transform rounded-md transition-transform duration-300 hover:scale-105"
                src={assets?.images?.pic_1}
                alt=""
              />

              <div className="w-full space-y-1 rounded-md bg-[#0D5EF4] px-8 py-14 text-center text-white">
                <h2 className=" text-5xl font-bold ">10k+</h2>
                <p>
                  Students Active Our <br /> Courses
                </p>
              </div>
              <Image
                className="hidden transform rounded-md  transition-transform duration-300 hover:scale-105 sm:col-span-2 sm:row-span-2 sm:block"
                src={assets?.images?.pic_3}
                alt=""
              />
            </div>
          </div>
          <div className="flex w-full flex-col lg:w-1/2 ">
            <div className="text-center md:text-left">
              <span className="inline-block rounded-full bg-[#e3eeff] px-4 py-1 font-medium capitalize text-nad-primary">
                About Us
              </span>
              <h2 className="py-3 text-xl font-bold capitalize text-nad-title md:text-3xl lg:text-4xl">
                Welcome to NonAcademy Plus
              </h2>
            </div>
            <p className="mb-4 leading-relaxed text-gray-700">
              NonAcademy Plus is an exceptional and contemporary educational
              platform designed for Bangladeshi students. Serving as the key to
              success in SSC, HSC, and Olympiad competitions, this platform
              features outstanding video classes, interactive quizzes, and
              intelligently designed study materials. Content developed by our
              experienced educators helps students comprehend complex subjects
              with ease. Join this curriculum-aligned platform to facilitate a
              path toward a bright future for your child. NonAcademy Plus - A
              New Dimension of Success!
            </p>
            {/* <div className="flex flex-col gap-6 md:flex-row">
              <div className="mb-4 flex items-start md:mb-0">
                <Image
                  className="mr-4 h-10 w-10"
                  src={assets?.images?.science_book}
                  alt="Blockchain for Beginners"
                />
                <div>
                  <h2 className="text-lg font-semibold leading-tight text-[#0071DC]">
                    Blockchain Development <br /> for Beginners
                  </h2>
                  <p className="mt-1 text-gray-600">
                    Start your career with foundational blockchain skills.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Image
                  className="mr-4 h-10 w-10"
                  src={assets?.images?.science_book}
                  alt="Advanced Blockchain Mastery"
                />
                <div>
                  <h2 className="text-lg font-semibold leading-tight text-[#0071DC]">
                    Advanced Blockchain Mastery
                  </h2>
                  <p className="mt-1 text-gray-600">
                    Take your expertise to the next level.
                  </p>
                </div>
              </div>
            </div> */}
            <div className="mt-4 flex items-start gap-6">
              {/* <Image
                className="w-1/4 rounded-md"
                src={assets?.images?.classRoom}
                alt="Blockchain Education"
              /> */}
              <div className="space-y-2.5 text-gray-700">
                <p className="flex items-center">
                  <IoIosCheckmarkCircleOutline className="mr-2 h-6 w-6 text-[#0071DC]" />
                  Comprehensive video classes for SSC, HSC, and Olympiad
                  preparation
                </p>
                <p className="flex items-center">
                  <IoIosCheckmarkCircleOutline className="mr-2 h-6 w-6 text-[#0071DC]" />
                  Interactive quizzes and smart study materials for effective
                  learning
                </p>
                <p className="flex items-center">
                  <IoIosCheckmarkCircleOutline className="mr-2 h-6 w-6 text-[#0071DC]" />
                  Expertly designed curriculum to simplify complex subjects
                </p>
                <p className="flex items-center">
                  <IoIosCheckmarkCircleOutline className="mr-2 h-6 w-6 text-[#0071DC]" />
                  Curriculum-aligned platform for a brighter academic future
                </p>
              </div>
            </div>
            <a
              href="#"
              className="mt-4 inline-block rounded-md bg-blue-600 px-6 py-3 text-center text-white transition hover:bg-blue-700"
            >
              Learn More →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutBanner;
