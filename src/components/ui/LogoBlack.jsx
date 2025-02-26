import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import assets from "../../../public/images/images";

const LogoBlack = ({ width = 176, height = 30, className }) => {
  return (
    <>
      <Image
        className={cn("h-auto w-auto", className)}
        src={assets?.svgs?.logoBlack}
        alt="NonAcademy"
        width={width}
        height={height}
        priority
      />
    </>
  );
};

export default LogoBlack;
