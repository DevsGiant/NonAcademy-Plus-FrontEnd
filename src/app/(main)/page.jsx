import { fetchHomeData } from "@/api/services/home/homeService";
import FailedUI from "@/components/ui/FailedUI";
import WhatsappIcon from "@/components/ui/WhatsappIcon";
import React from "react";
import AcademicResults from "./_components/AcademicResults/AcademicResults";
import Hero from "./_components/Hero/Hero";
import HeroAbout from "./_components/Hero/HeroAbout";
import HomeFaq from "./_components/HomeFaq/HomeFaq";
import KeysSolution from "./_components/KeysSolution/KeysSolution";
import NAAdvantage from "./_components/NAAdvantage/NAAdvantage";
import NAFamily from "./_components/NAFamily/NAFamily";
import OurCourses from "./_components/OurCourses/OurCourses";
import PopularCourses from "./_components/PopularCourses/PopularCourses";
import ScholarshipAds from "./_components/ScholarshipAds/ScholarshipAds";
import Statistics from "./_components/Statistics/Statistics";
import StudentFeedback from "./_components/StudentFeedback/StudentFeedback";
import StudyResources from "./_components/StudyResources/StudyResources";
// import { analytics } from "@/utils/gtag";

export const metadata = {
  title: "Home - NonAcademy Plus",
  description: "With NonAcademy Plus Towards Fulfilling Your Dreams.",
};

const HomePage = async () => {
  const homeData = await fetchHomeData();
  // analytics.page("Home Page Viewed");

  return (
    <>
      {/* Hero section with students sections */}
      {homeData ? (
        homeData?.data?.banner?.length >= 1 && (
          <Hero banners={homeData?.data?.banner} />
        )
      ) : (
        <FailedUI />
      )}
      <HeroAbout />

      {/* Scholarship ads section */}
      <ScholarshipAds />

      {/* Popular courses section */}
      {homeData ? (
        homeData?.data?.popularCourses?.length >= 1 && (
          <PopularCourses popularCourses={homeData?.data?.popularCourses} />
        )
      ) : (
        <FailedUI />
      )}

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

      {/* Academic Results section */}
      <AcademicResults />

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
