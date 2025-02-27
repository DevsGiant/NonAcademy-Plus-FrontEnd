import { fetchHomeData } from "@/api/services/home/homeService";
import FailedUI from "@/components/ui/FailedUI";
import WhatsappIcon from "@/components/ui/WhatsappIcon";
import { analytics } from "@/utils/gtag";
import React from "react";
import Hero from "./_components/Hero/Hero";
import HomeAbout from "./_components/HomeAbout/HomeAbout";
import OurCourses from "./_components/OurCourses/OurCourses";
import Statistics from "./_components/Statistics/Statistics";
import StudentFeedback from "./_components/StudentFeedback/StudentFeedback";

export const metadata = {
  title: "Home - NonAcademy Plus",
  description: "An online learning platform. Your career-building university",
};

const HomePage = async () => {
  const homeData = await fetchHomeData();
  analytics.page("Home Page Viewed");

  return (
    <>
      {/* Hero section with students sections */}
      <Hero />
      <HomeAbout />

      {/* Courses section section */}
      {homeData ? (
        <OurCourses
          categoriesWithCourses={homeData?.data?.categoriesWithCourses}
        />
      ) : (
        <FailedUI />
      )}

      {/* Statistics section */}
      <Statistics />

      {/* Student feedback section */}
      <StudentFeedback />

      {/* Whatsapp bottom icon */}
      <WhatsappIcon />
    </>
  );
};

export default HomePage;
