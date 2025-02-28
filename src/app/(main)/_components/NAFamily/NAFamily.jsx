import SectionTitle from "@/components/ui/SectionTitle";
import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";
import { socialStats } from "../../../../../public/data/socialStats";

const NAFamily = () => {
  return (
    <div className="m-auto my-6 mb-[80px] flex flex-col items-center justify-center overflow-hidden 2xl:max-w-6xl">
      <SectionTitle
        title="Join The NonAcademy PLus Family, Today!"
        subtitle="Explore our 130+ YouTube Channels and subscribe to get access to quality education for free."
      />

      <div className="mt-5 md:mt-9">
        <Marquee pauseOnHover speed={50}>
          <div className="flex w-full">
            {socialStats?.map((item) => (
              <div key={item.id}>
                <div className="cst-gra mx-2 flex h-[166px] w-[360px] flex-col justify-center gap-3 rounded-lg p-3 min-[360px]:w-[290px] sm:w-[360px]">
                  <Image
                    className="mx-auto h-[56px] w-[80px] bg-cover bg-center bg-no-repeat"
                    src={item.image}
                    alt={item.name}
                  />

                  <div className="mx-auto">
                    <h6 className="pb-2 text-center text-xl font-semibold text-nad-gray-7 md:font-bold">
                      {item.name}
                    </h6>
                    <p className="text-gray-600">
                      <span className="font-semibold">{item.subscribers}</span>{" "}
                      Subscribers
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default NAFamily;
