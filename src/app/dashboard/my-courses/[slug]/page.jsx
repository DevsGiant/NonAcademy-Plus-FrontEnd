import { getEnrolledCourseById } from "@/api/services/enrolled-courses/PurchasedCoursesService";
import { cookies } from "next/headers";
import React, { Suspense } from "react";
import CourseDetailsSkeleton from "./_components/CourseDetailsSkeleton";
import MyCourseDetails from "./_components/MyCourseDetails";

export const metadata = {
  title: "Module Details - NonAcademy",
  description: "With NonAcademy Plus Towards Fulfilling Your Dreams.",
};

const MyCourseDetailsPage = async ({ params }) => {
  // Get the token from the cookies
  const token = cookies().get("nad_auth_token")?.value;

  // Fetch the course details by course id
  const courseDetails = await getEnrolledCourseById(token, params.slug);

  return (
    <Suspense fallback={<CourseDetailsSkeleton />}>
      <MyCourseDetails coursesDetails={courseDetails?.data} />
    </Suspense>
  );
};

export default MyCourseDetailsPage;
