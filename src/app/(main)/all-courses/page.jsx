import { getCourses } from "@/api/services/courses/courseService";
import CourseCard from "@/components/Courses/CourseCard";
import AllCoursesSkeleton from "@/components/Skeleton/AllCoursesSkeleton";
import Container from "@/components/ui/Container";
import FailedUI from "@/components/ui/FailedUI";
// import { analytics } from "@/utils/gtag";
import Image from "next/image";
import React, { Suspense } from "react";
import emptyFolder from "../../../../public/images/others/empty-folder.png";
import Heading from "./Heading";

export const metadata = {
  title: "Courses - NonAcademy Plus",
  description: "An online learning platform. your career building university.",
};

const AllCoursesPage = async () => {
  // analytics.page();
  const courses = await getCourses();
  // analytics.track("All Courses Page Viewed");

  if (!courses) {
    return <FailedUI />;
  }

  const hasCourses = courses?.data?.courses?.length > 0;

  return (
    <div className="bg-nad-primary-lite-1/70">
      <Container>
        <Suspense fallback={<AllCoursesSkeleton />}>
          {/* <h2 className="mb-6 text-center text-2xl font-bold capitalize text-nad-title md:text-4xl lg:mb-8">
            All Courses
          </h2> */}
          {/* All Courses */}
          <Heading />
          {hasCourses ? (
            <div className="grid w-full grid-cols-1 gap-2 md:grid-cols-2 md:gap-3 lg:grid-cols-3 lg:gap-3 xl:grid-cols-4">
              {courses?.data?.courses?.map((course) => (
                <CourseCard key={course._id} course={course} />
              ))}
            </div>
          ) : (
            // Empty state for when there are no courses
            <div className="flex flex-col items-center justify-center pb-6 md:pb-10">
              <Image
                src={emptyFolder}
                alt="No courses available"
                className="w-36 md:w-64"
              />
              <h3 className="text-lg font-semibold text-nad-title md:text-2xl">
                No Courses Available
              </h3>
              <p className="pt-2 text-center text-sm md:pt-2 md:text-right md:text-base">
                There are currently no courses available. Please check back
                later.
              </p>
            </div>
          )}
        </Suspense>
      </Container>
    </div>
  );
};

export default AllCoursesPage;
