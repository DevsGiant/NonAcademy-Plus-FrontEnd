import React from "react";
import Testimonials from "../_components/Testimonials/Testimonials";
import PricingCards from "./_components/PricingCards";
import PricingFaq from "./_components/PricingFaq";
import PricingFeatures from "./_components/PricingFeatures";
import TechLead from "./_components/TechLead";

export const metadata = {
  title: "Plans & Pricing - NonAcademy",
  description: "An online learning platform",
};

const PricingPage = ({ params }) => {
  return (
    <section>
      {/* page top banner pricing cards section */}
      <PricingCards slug={params?.slug} />
      {/* teach lead speech section */}
      <TechLead />
      {/* developers feedback (testimonials) part */}
      <div className="bg-nad-primary-lite-1/70">
        <Testimonials />
      </div>
      {/* Pricing features table section */}
      <PricingFeatures />
      {/* Pricing about */}
      {/* TODO: removed this component if not used */}
      {/* <AboutPricing /> */}
      {/* Pricing related FAQ section */}
      <PricingFaq />
    </section>
  );
};

export default PricingPage;
