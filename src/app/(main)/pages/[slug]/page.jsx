import { fetchDynamicPage } from "@/api/services/dynamic-pages/dynamicPagesService";
import Container from "@/components/ui/Container";
import HTMLReactParser from "html-react-parser";
import React from "react";

export async function generateMetadata({ params }) {
  const getDynamicPage = await fetchDynamicPage(params.slug);
  return {
    title: `${getDynamicPage?.data?.title} - NonAcademy`,
    description: "An online learning platform",
  };
}

const DynamicPage = async ({ params }) => {
  const getDynamicPage = await fetchDynamicPage(params.slug);

  return (
    <section>
      {/* Banner section */}
      {/* <div className="relative h-[50vh] w-full overflow-hidden md:h-[60vh] lg:h-[70vh]">
        <Image
          src={getDynamicPage?.data?.image}
          alt={getDynamicPage?.data?.title}
          layout="fill"
          objectFit="cover"
          priority
        />
      </div> */}
      {/* Title */}
      <div className="mt-6 lg:mt-10 xl:mt-16">
        <h2 className="text-center text-2xl font-bold capitalize text-nad-title md:text-3xl lg:text-4xl">
          {getDynamicPage?.data?.title}
        </h2>
      </div>
      {/* Content Section */}
      <Container>
        <div className="prose lg:prose-xl mx-auto">
          {HTMLReactParser(getDynamicPage?.data?.content)}
        </div>
      </Container>
    </section>
  );
};

export default DynamicPage;
