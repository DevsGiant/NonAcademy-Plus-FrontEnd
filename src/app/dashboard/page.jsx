import { getEnrolledCourses } from "@/api/services/enrolled-courses/PurchasedCoursesService";
import { cookies } from "next/headers";
import React, { Suspense } from "react";
import { PiEmptyBold } from "react-icons/pi";
import MyAllCourses from "./_components/MyAllCourses";
import MyAllCoursesSkeleton from "./_components/MyAllCoursesSkeleton";

export const metadata = {
  title: "Dashboard - NonAcademy",
  description: "With NonAcademy Plus Towards Fulfilling Your Dreams.",
};

const DashboardHomePage = async () => {
  // Get the token from the cookies
  const token = cookies().get("nad_auth_token")?.value;

  // Fetch the purchased courses
  const enrolledCourses = await getEnrolledCourses(token);

  return (
    <Suspense fallback={<MyAllCoursesSkeleton />}>
      <h2 className="mb-6 text-xl font-medium md:text-2xl">
        My Courses - Continue Your Learning Journey
      </h2>
      {enrolledCourses?.data?.length > 0 ? (
        <MyAllCourses enrolledCourses={enrolledCourses?.data} />
      ) : (
        <div className="mt-24 md:mt-40">
          <h4 className="flex items-center justify-center gap-2 text-center text-xl font-medium text-slate-500">
            <PiEmptyBold />
            <span>You are not enrolled in any courses yet.</span>
          </h4>
        </div>
      )}
    </Suspense>
  );
};

export default DashboardHomePage;
