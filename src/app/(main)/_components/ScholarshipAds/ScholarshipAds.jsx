import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Image from "next/image";
import React from "react";
import assets from "../../../../../public/images/images";

const ScholarshipAds = () => {
  return (
    <Container>
      <SectionTitle title="Scholarships" subtitle="" />

      <div className="mt-5 md:mt-9">
        {/* Large Screen Image */}
        <Image
          className="hidden h-full w-full bg-cover sm:block"
          src={assets?.images?.programAdsLg}
          alt="Scholarships"
          priority
        />
        {/* Small Screen Image */}
        {/* TODO: change lg image and replace sm image */}
        <Image
          className="block h-full w-full bg-cover sm:hidden"
          src={assets?.images?.programAdsLg}
          alt="Scholarships"
          priority
        />
      </div>
    </Container>
  );
};

export default ScholarshipAds;
