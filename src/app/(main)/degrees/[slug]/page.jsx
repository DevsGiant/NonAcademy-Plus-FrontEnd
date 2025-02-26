import { getSingleDegreeById } from "@/api/services/degrees/degreesServices";
import Container from "@/components/ui/Container";
import HTMLReactParser from "html-react-parser";
import React from "react";
import DegreeBanner from "./_components/DegreeBanner";
import DegreeModules from "./_components/DegreeModules";
import OverviewCard from "./_components/OverviewCard";

export async function generateMetadata({ params }) {
  const singleDegreeData = await getSingleDegreeById(params?.slug);
  return {
    title: `${singleDegreeData?.data?.degree?.title} - NonAcademy`,
    description: singleDegreeData?.data?.degree?.short_description,
  };
}

const DegreeDetailsPage = async ({ params }) => {
  const singleDegreeData = await getSingleDegreeById(params?.slug);

  return (
    <Container>
      {/* degree banner with title */}
      <DegreeBanner
        image={singleDegreeData?.data?.degree?.image}
        title={singleDegreeData?.data?.degree?.title}
        bangla_title={singleDegreeData?.data?.degree?.bangla_title}
        totalPoints={singleDegreeData?.data?.totalPoints}
      />

      <div className="flex flex-col gap-5 lg:flex-row lg:gap-6 xl:gap-8">
        <div className="flex-grow lg:basis-3/4">
          {/* modules */}
          <DegreeModules
            modules={singleDegreeData?.data?.degree?.modules}
            slug={params?.slug}
          />

          {/* description */}
          <div className="mt-6 md:mt-8">
            <div>
              {HTMLReactParser(singleDegreeData?.data?.degree?.description)}
            </div>
          </div>
        </div>

        {/* overview side card */}
        <div className="lg:basis-1/4">
          <OverviewCard
            slug={params?.slug}
            modules={singleDegreeData?.data?.degree?.modules}
            totalPoints={singleDegreeData?.data?.totalPoints}
          />
        </div>
      </div>
    </Container>
  );
};

export default DegreeDetailsPage;
