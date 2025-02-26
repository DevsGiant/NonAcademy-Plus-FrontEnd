import Container from "@/components/ui/Container";
import React from "react";
import AboutBanner from "./_components/AboutBanner";
import FeaturesSection from "./_components/FeaturesSection";
import OurTeam from "./_components/OurTeamMember";
import WhatWeDo from "./_components/WhatWeDo";

export const metadata = {
  title: "About Us - NonAcademy",
  description: "A online learning platform. your career building university",
};

const AboutUsPage = () => {
  return (
    <section>
      <AboutBanner />

      <FeaturesSection />

      <Container>
        <OurTeam />
      </Container>

      <section className="bg-[#F3F7FB]">
        <Container>
          <WhatWeDo />
        </Container>
      </section>
    </section>
  );
};

export default AboutUsPage;
