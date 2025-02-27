import { Button } from "@/components/ui/button";
import Container from "@/components/ui/Container";
import Image from "next/image";
import React from "react";
import assets from "../../../../../public/images/images";

const HomeAbout = () => {
  return (
    <div className="relative mx-auto">
      <Image
        className="absolute inset-0 h-full w-full object-cover"
        src={assets?.images?.compressBg}
        alt="Compress BG"
      />
      <Container>
        <div className="relative m-auto flex flex-col items-center justify-between xl:flex-row">
          <div className="w-full text-center lg:text-left xl:w-[36%]">
            <h2 className="text-xl font-semibold capitalize text-nad-title md:text-3xl md:font-bold lg:text-4xl lg:leading-[48px]">
              Bharat’s{" "}
              <span className="text-nad-primary">Trusted & Affordable</span>{" "}
              Educational Platform
            </h2>
            <p className="mb-4 text-center text-gray-700 lg:mb-8 lg:text-left">
              Unlock your potential by signing up with Physics Wallah-The most
              affordable learning solution
            </p>
            <Button size="lg">Get Started</Button>
          </div>
          <div>
            <p>asfasf</p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HomeAbout;
// style={{"position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"}}
// px-4 md:px-0 text-center xl:text-start text-[#3D3D3D] mb-3.5 xl:mb-10
