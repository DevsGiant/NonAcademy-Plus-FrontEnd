import { fetchHomeData } from "@/api/services/home/homeService";
import FailedUI from "@/components/ui/FailedUI";
import WhatsappIcon from "@/components/ui/WhatsappIcon";
import { analytics } from "@/utils/gtag";
import React from "react";
import Hero from "./_components/Hero/Hero";
import HomeAbout from "./_components/HomeAbout/HomeAbout";
import MonthlyFeedback from "./_components/MonthlyFeedback/MonthlyFeedback";
import OurCourses from "./_components/OurCourses/OurCourses";
import StartJourney from "./_components/StartJourney/StartJourney";
import Testimonials from "./_components/Testimonials/Testimonials";

export const metadata = {
  title: "Home - NonAcademy Plus",
  description: "An online learning platform. Your career-building university",
};

const HomePage = async () => {
  const homeData = await fetchHomeData();
  analytics.page("Home Page Viewed");

  return (
    <>
      <Hero />
      <HomeAbout />
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
