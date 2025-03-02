import SectionTitle from "@/components/ui/SectionTitle";
import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";
import { socialStats } from "../../../../../public/data/socialStats";
import GetStartedAuthBtn from "../GetStartedAuthBtn/GetStartedAuthBtn";

const NAFamily = () => {
  return (
    <div className="mx-auto w-full py-6 md:py-8 lg:py-10 xl:py-[60px] 2xl:max-w-7xl">
      <SectionTitle
        title="Join The NonAcademy PLus Family, Today!"
        subtitle="Explore our 130+ YouTube Channels and subscribe to get access to quality education for free."
      />

      <div className="mt-5 md:mt-9">
        <Marquee
          autoFill={true}
          pauseOnClick={true}
          pauseOnHover={true}
          speed={54}
        >
          {socialStats?.map((item) => (
            <div key={item.id}>
              <div
                className="mx-2 h-[166px] w-[360px] space-y-3 rounded-lg p-3 min-[360px]:w-[290px] sm:w-[360px]"
                style={{
                  backgroundImage:
                    item.ytType === "gold"
                      ? "linear-gradient(rgb(255, 235, 197) 0%, rgb(255,255,255) 22.79%, rgb(255, 230, 191) 100%)"
                      : "linear-gradient(rgb(201,200,200) 0%, rgb(255,255,255) 22.79%, rgb(205,205,205) 100%)",
                }}
              >
                <Image
                  className="mx-auto h-[56px] w-[80px] bg-cover bg-center bg-no-repeat"
                  src={item.image}
                  alt={item.name}
                />
                <div className="text-center">
                  <h6 className="pb-2 text-xl font-semibold text-nad-gray-7 md:font-bold">
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
        </Marquee>
      </div>

      <div className="mt-4 flex justify-center md:mt-8">
        {/* auth button */}
        <GetStartedAuthBtn />
      </div>
    </div>
  );
};

export default NAFamily;
