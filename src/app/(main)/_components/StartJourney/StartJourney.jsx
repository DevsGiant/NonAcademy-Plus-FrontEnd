import Image from "next/image";
import React from "react";
import assets from "../../../../../public/images/images";
import LoginForm from "../../auth/login/_components/LoginForm";
import "./start-journey.css";

const StartJourney = () => {
  return (
    <section className="relative overflow-hidden border-t border-gray-200 bg-white sm:bg-gray-50/75 md:border-y">
      {/* Background Images with Animations */}
      <div className="absolute inset-0 z-0">
        <Image
          className="absolute inset-0 h-full w-full animate-[dim-opacity-start_8s_linear_infinite] object-cover"
          src={assets?.images?.indigoImg}
          alt="Indigo gradient background"
        />
        <Image
          className="absolute inset-0 h-full w-full animate-[dim-opacity-mid_8s_linear_infinite] object-cover"
          src={assets?.images?.cyanImg}
          alt="Cyan gradient background"
        />
        <Image
          className="absolute inset-0 h-full w-full animate-[dim-opacity-end_8s_linear_infinite] object-cover"
          src={assets?.images?.greenImg}
          alt="Green gradient background"
        />
      </div>

      <div className="relative z-10 pt-12 sm:px-6 md:pb-12 md:pt-20">
        <h4 className="mb-8 w-full px-4 text-center text-sm font-bold uppercase leading-relaxed tracking-widest text-gray-500 sm:text-base lg:mb-16">
          Start your journey with NonAcademy
        </h4>
        <div className="mx-auto my-8 sm:mt-12 sm:max-w-xl lg:my-16 lg:mt-0 lg:flex lg:max-w-6xl lg:flex-row-reverse lg:items-center">
          <div className="relative z-10 p-px ring-1 ring-slate-900/10 sm:rounded-xl lg:w-1/2 lg:flex-none lg:-translate-x-5">
            <div className="relative z-10 flex min-h-[360px] items-center justify-center bg-white px-5 pb-5 pt-7 sm:min-h-[448px] sm:rounded-xl sm:px-10">
              <div className="flex w-full max-w-sm flex-col gap-4 lg:gap-5">
                <p className="text-xl font-semibold text-gray-600 lg:text-2xl lg:font-bold lg:tracking-wide">
                  Let&apos;s Get Started
                </p>
                <LoginForm />
              </div>
            </div>
          </div>
          <div className="relative mt-10 hidden translate-x-5 bg-white bg-opacity-75 bg-clip-padding lg:mt-0 lg:block lg:w-1/2 lg:flex-none">
            <ul>
              <li className="relative px-2 py-6 sm:px-10">
                <h3 className="relative mb-2 block text-3xl font-bold uppercase tracking-tight text-black">
                  <span className="relative z-10 animate-[color-change-start_8s_linear_infinite] bg-clip-text text-transparent will-change-[color]">
                    Learn
                  </span>
                </h3>
                <p className="leading-6 text-gray-600">
                  Get access to 10+ courses from renowned instructors.
                </p>
              </li>
              <li className="relative px-2 py-6 sm:px-10">
                <h3 className="relative mb-2 block text-3xl font-bold uppercase tracking-tight text-black">
                  <span className="relative z-10 animate-[color-change-mid_8s_linear_infinite] bg-clip-text text-transparent will-change-[color]">
                    Apply
                  </span>
                </h3>
                <p className="leading-6 text-gray-600">
                  Build projects and reach your goals.
                </p>
              </li>
              <li className="relative px-2 py-6 sm:px-10">
                <h3 className="relative mb-2 block text-3xl font-bold uppercase tracking-tight text-black">
                  <span className="relative z-10 animate-[color-change-end_8s_linear_infinite] bg-clip-text text-transparent will-change-[color]">
                    Grow
                  </span>
                </h3>
                <p className="leading-6 text-gray-600">
                  Upskill yourself with NonAcademy and land your dream job.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StartJourney;
