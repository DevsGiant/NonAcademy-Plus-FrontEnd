import Container from "@/components/ui/Container";
import Image from "next/image";
import React from "react";
import {
  FaArrowDown,
  FaArrowLeft,
  FaArrowRight,
  FaArrowUp,
} from "react-icons/fa";
import assets from "../../../../../public/images/images";

const TechLead = () => {
  return (
    <Container>
      <h2 className="text-center text-xl font-semibold capitalize text-nad-title md:text-3xl md:font-bold lg:text-4xl xl:leading-10">
        “I&apos;m now a tech lead at an early stage startup”
      </h2>
      <figure>
        <div className="mx-auto mt-3 text-center text-sm text-gray-600 lg:mt-6 lg:max-w-3xl lg:text-lg">
          <p>
            I believed coding just wasn&apos;t for me. Then I discovered
            nonAcademy. I dedicated myself to learning with nonAcademy{" "}
            <b>every single day</b>, wherever I was.
          </p>
          <p className="mt-3 lg:mt-6">
            In just seven <b>short months,</b> I&apos;ve transformed and
            I&apos;m now <b>leading the frontend tech division</b> at an early
            stage startup.
          </p>
        </div>
      </figure>
      <figcaption className="mt-4 flex items-center justify-center space-x-3 lg:space-x-4">
        <Image
          className="size-[45px] h-auto max-w-full rounded-full lg:size-[55px]"
          width={100}
          height={100}
          src={assets?.images?.arif}
          alt="arif"
        />
        <div className="flex flex-col items-start">
          <div className="font-semibold text-nad-gray-8">Al Arif</div>
          <div className="text-sm text-slate-600">Tech Lead</div>
        </div>
      </figcaption>
      <div className="mx-auto mt-6 flex flex-row items-center justify-center gap-2.5 md:gap-4 lg:mt-10 lg:max-w-lg lg:text-lg">
        <div className="opacity-20">
          <FaArrowUp />
        </div>
        <div className="opacity-20">
          <FaArrowUp />
        </div>
        <div className="opacity-20">
          <FaArrowDown />
        </div>
        <div className="opacity-20">
          <FaArrowDown />
        </div>
        <div className="opacity-20">
          <FaArrowLeft />
        </div>
        <div className="opacity-20">
          <FaArrowRight />
        </div>
        <div className="opacity-20">
          <FaArrowLeft />
        </div>
        <div className="opacity-20">
          <FaArrowRight />
        </div>
        <div className="opacity-20">B</div>
        <div className="opacity-20">A</div>
      </div>
    </Container>
  );
};

export default TechLead;
