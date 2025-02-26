import { getAllDegrees } from "@/api/services/degrees/degreesServices";
import Container from "@/components/ui/Container";
import FailedUI from "@/components/ui/FailedUI";
import React, { Suspense } from "react";
import DegreeSkeleton from "./_components/DegreeSkeleton";
import DegreesView from "./_components/DegreesView";

export const metadata = {
  title: "Degree - NonAcademy",
  description: "A online learning platform. your career building university",
};

const DegreePage = async () => {
  const allDegrees = await getAllDegrees();

  if (!allDegrees) {
    return <FailedUI />;
  }

  return (
    <div className="bg-nad-primary-lite-1/70 md:min-h-[50vh]">
      <Container>
        <Suspense fallback={<DegreeSkeleton />}>
          <div className="mb-6 space-y-1 text-center md:mb-8">
            <h1 className="text-xl font-semibold capitalize text-nad-title md:text-3xl md:font-bold lg:text-4xl">
              Courses & Degrees
            </h1>
            <p className="text-nad-gray-8">
              Are you a protocol, DAO, or company? Get in touch to have your own
              courses
            </p>
          </div>
          {/* cards */}
          <DegreesView data={allDegrees?.data?.data} />
        </Suspense>
      </Container>
    </div>
  );
};

export default DegreePage;
