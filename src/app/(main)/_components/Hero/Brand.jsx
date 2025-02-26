import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";
import { brands } from "../../../../../public/data/brand";

const Brand = () => {
  return (
    <div className="z-20 overflow-hidden bg-nad-title py-3 md:rotate-[-3.5deg] md:py-4">
      <Marquee pauseOnHover={true} speed={32} autoFill={true}>
        <div className="flex items-center gap-8">
          {brands?.map((brand) => (
            <div key={brand.id} className="flex items-center gap-8">
              <div>
                <Image
                  className="h-auto max-w-full transition-colors hover:opacity-80"
                  src={brand.image}
                  alt={brand.name}
                  width={100}
                  height={40}
                />
              </div>
              <Image
                className="h-auto max-w-full"
                src={brand.starImage}
                alt="star"
              />
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default Brand;
