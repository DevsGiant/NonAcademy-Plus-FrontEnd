import { Button } from "@/components/ui/button";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Image from "next/image";
import React from "react";
import { statistics } from "../../../../../public/data/statistics";

const Statistics = () => {
  return (
    <Container>
      <SectionTitle
        title="A Platform Trusted by Students"
        subtitle="Physics Wallah aims to transform not just through words, but provide results with numbers!"
      />

      <div className="mt-4 grid grid-cols-2 gap-3 md:mt-8 lg:grid-cols-4">
        {statistics?.map((data) => (
          <div key={data.id}>
            <div
              className="group relative flex h-[158px] w-[165px] flex-col items-center justify-center overflow-hidden rounded-[4px] transition-all duration-300 ease-in-out md:h-[200px] md:w-[240px] md:rounded-[16px] lg:h-[270px] lg:w-[280px]"
              style={{ background: data.color }}
            >
              {/* Text Content with Movement on Hover */}
              <div className="flex flex-col items-center justify-center transition-all duration-300 ease-in-out group-hover:translate-y-[-55px]">
                <h3 className="text-xl font-semibold text-nad-title transition-all duration-300 ease-in-out md:text-3xl md:font-bold lg:text-4xl">
                  {data.number}
                </h3>
                <p className="mt-2 text-sm font-medium text-[#3D3D3D] transition-all duration-300 ease-in-out md:text-lg">
                  {data.title}
                </p>
              </div>

              {/* Image Moves Up on Hover */}
              <div className="absolute bottom-[-50px] left-1/2 -translate-x-1/2 opacity-0 transition-all duration-300 ease-in-out group-hover:bottom-4 group-hover:opacity-100">
                <Image
                  src={data.image}
                  alt={data.title}
                  className="h-16 md:h-20 lg:h-24"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 flex justify-center md:mt-8">
        <Button size="lg" className="px-6 md:px-10">
          Get Started
        </Button>
      </div>
    </Container>
  );
};

export default Statistics;
