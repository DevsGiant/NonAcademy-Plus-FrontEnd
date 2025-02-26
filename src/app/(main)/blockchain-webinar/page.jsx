import Container from "@/components/ui/Container";
import Image from "next/image";
import React from "react";
import { FaMapPin, FaRegCalendarAlt, FaRegClock } from "react-icons/fa";
import assets from "../../../../public/images/images";
import BlockchainWebinarForm from "./_components/BlockchainWebinarForm";
import { analytics } from "@/utils/gtag";
export const metadata = {
  title: "Blockchain Webinar - NonAcademy",
  description: "A online learning platform. your career building university",
};

const blockchainWebinarPage = () => {
  analytics.page();
  analytics.track("Blockchain Webinar Page Viewed");
  return (
    <div className="bg-nad-primary-lite-1">
      {/* Banner section */}
      <div>
        <Image
          src={assets?.images?.blockchainWebinar}
          alt="Blockchain Webinar"
          className="h-auto w-full"
          layout="responsive"
          objectFit="cover"
          priority
        />
      </div>

      <Container>
        <div className="grid grid-cols-5 gap-6">
          {/* Info part */}
          <div className="col-span-5 lg:col-span-2">
            <h2 className="mb-2 text-xl font-semibold capitalize text-nad-title md:text-2xl md:font-bold lg:mb-4 lg:text-3xl">
              Blockchain Career Guideline
            </h2>
            <div className="space-y-1 md:text-lg lg:space-y-2.5">
              <div className="flex items-center gap-1">
                <FaRegCalendarAlt />
                <p>
                  <span className="font-semibold">Date:</span> 7th October, 2024
                </p>
              </div>
              <div className="flex items-center gap-1">
                <FaRegClock />
                <p>
                  <span className="font-semibold">Time:</span> Night 10 PM
                </p>
              </div>
              <div className="flex items-center gap-1">
                <FaMapPin />
                <p>
                  <span className="font-semibold">Location:</span> Google Meet
                </p>
              </div>
            </div>
          </div>
          {/* form part */}
          <div className="col-span-5 lg:col-span-3">
            <BlockchainWebinarForm />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default blockchainWebinarPage;
