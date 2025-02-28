import { getCourseDetails } from "@/api/services/courses/courseService";
import React from "react";
import SingleCourseView from "./_components/SingleCourseView";

// Pre-generate paths for course detail pages at build time
// export async function generateStaticParams() {
//   const courses = await getCourses();

//   if (!courses?.data?.courses) {
//     return [];
//   }

//   return courses.data.courses.map((course) => ({
//     slug: course.data.slug, // Ensure that you're mapping the correct slug field
//   }));
// }
// import { analytics } from "@/utils/gtag";
export async function generateMetadata({ params }) {
  const courseDetails = await getCourseDetails(params?.slug);
  return {
    title: `${courseDetails?.data?.title} - NonAcademy`,
    description: courseDetails?.data?.short_description,
  };
}

const CourseDetailsPage = async ({ params }) => {
  const courseDetails = await getCourseDetails(params.slug);
  // analytics.page("Course Viewed", {
  //   courseId: courseDetails._id,
  //   courseName: courseDetails.title,
  // });
  // analytics.track("Course Viewed", {
  //   courseId: courseDetails._id,
  //   courseName: courseDetails.title,
  // });

  return (
    <>
      <SingleCourseView courseDetails={courseDetails} />
    </>
  );
};

export default CourseDetailsPage;
