import { fetchHomeData } from "@/api/services/home/homeService";
import FailedUI from "@/components/ui/FailedUI";
import WhatsappIcon from "@/components/ui/WhatsappIcon";
import { analytics } from "@/utils/gtag";
import React from "react";
import Ads from "./_components/Ads/Ads";
import Hero from "./_components/Hero/Hero";
import MonthlyFeedback from "./_components/MonthlyFeedback/MonthlyFeedback";
import OurCourses from "./_components/OurCourses/OurCourses";
import StartJourney from "./_components/StartJourney/StartJourney";
import Testimonials from "./_components/Testimonials/Testimonials";
import WhyChooseUs from "./_components/WhyChooseUs/WhyChooseUs";

export const metadata = {
  title: "Home - NonAcademy",
  description: "An online learning platform. Your career-building university",
};

const HomePage = async () => {
  const homeData = await fetchHomeData();
  analytics.page("Home Page Viewed");

  return (
    <>
      <Hero />
      <Ads />
      {homeData ? (
        <OurCourses
          categoriesWithCourses={homeData?.data?.categoriesWithCourses}
        />
      ) : (
        <FailedUI />
      )}
      <div className="bg-nad-primary-lite-1/70">
        <MonthlyFeedback />
      </div>
      <WhyChooseUs />
      <div className="bg-[#FDFDFE]">
        <Testimonials />
      </div>
      <StartJourney />
      {/* Whatsapp bottom icon */}
      <WhatsappIcon />
    </>
  );
};

export default HomePage;
