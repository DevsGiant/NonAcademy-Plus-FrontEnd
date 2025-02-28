import { fetchHomeData } from "@/api/services/home/homeService";
import FailedUI from "@/components/ui/FailedUI";
import WhatsappIcon from "@/components/ui/WhatsappIcon";
import React from "react";
import Hero from "./_components/Hero/Hero";
import HomeAbout from "./_components/HomeAbout/HomeAbout";
import HomeFaq from "./_components/HomeFaq/HomeFaq";
import KeysSolution from "./_components/KeysSolution/KeysSolution";
import NAAdvantage from "./_components/NAAdvantage/NAAdvantage";
import NAFamily from "./_components/NAFamily/NAFamily";
import OurCourses from "./_components/OurCourses/OurCourses";
import ScholarshipAds from "./_components/ScholarshipAds/ScholarshipAds";
import Statistics from "./_components/Statistics/Statistics";
import StudentFeedback from "./_components/StudentFeedback/StudentFeedback";
import StudyResources from "./_components/StudyResources/StudyResources";
// import { analytics } from "@/utils/gtag";

export const metadata = {
  title: "Home - NonAcademy Plus",
  description: "An online learning platform. Your career-building university",
};

const HomePage = async () => {
  const homeData = await fetchHomeData();
  // analytics.page("Home Page Viewed");

  return (
    <>
      {/* Hero section with students sections */}
      <Hero />
      <HomeAbout />

      {/* Scholarship ads section */}
      <ScholarshipAds />

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

      {/* Study Resources section */}
      <StudyResources />

      {/* Keys Solution section */}
      <KeysSolution />

      {/* NA Plus Family section */}
      <NAFamily />

      {/* MA plus Advantage section */}
      <NAAdvantage />

      {/* Home FAQ section */}
      <HomeFaq />

      {/* Whatsapp bottom icon */}
      <WhatsappIcon />
    </>
  );
};

export default HomePage;
