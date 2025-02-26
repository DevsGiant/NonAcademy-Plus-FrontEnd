import { getEnrolledCourseById } from "@/api/services/enrolled-courses/PurchasedCoursesService";
import { cookies } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import React, { Suspense } from "react";
import MyCoursesHeaderLayout from "../_components/MyCoursesHeaderLayout";
import ModuleSkeleton from "./_components/ModuleSkeleton";
import WatchProgressBar from "./_components/WatchProgressBar";

export const metadata = {
  title: "Module - NonAcademy",
  description: "An online learning platform. Your career-building university",
};

const modulePage = async ({ params }) => {
  // Get the token from the cookies
  const token = cookies().get("nad_auth_token")?.value;

  // Fetch the course details by course id
  const courseDetails = await getEnrolledCourseById(token, params.slug);

  return (
    <Suspense fallback={<ModuleSkeleton />}>
      {/* my courses top bar */}
      <MyCoursesHeaderLayout slug={params?.slug} />

      {/* my course single card */}
      <div
        style={{ boxShadow: "0 4px 20px #0000001a" }}
        className="flex flex-col gap-7 rounded-lg bg-white p-4 md:flex-row md:items-center lg:w-[80%]"
      >
        <div>
          <Image
            className="h-[180px] w-full rounded-lg object-cover md:w-[280px]"
            src={courseDetails?.data?.course?.thumbnail}
            alt={courseDetails?.data?.course?.title}
            width={200}
            height={60}
          />
        </div>
        <div className="flex-1 space-y-5">
          <div>
            <h3 className="pb-1 text-xl font-semibold">
              {courseDetails?.data?.course?.title}
            </h3>
            <p className="text-sm font-medium text-slate-500/80">
              {courseDetails?.data?.course?.instructor.name}
            </p>
          </div>

          <WatchProgressBar
            title={courseDetails?.data?.course?.title}
            modules={courseDetails?.data?.course?.modules}
            courseHistory={courseDetails?.data?.courseHistory}
          />

          <div className="flex justify-end">
            <Link
              href={`/dashboard/my-courses/${courseDetails?.data?.course?._id}`}
              className="rounded-md bg-nad-primary px-4 py-2 font-semibold text-white transition-colors hover:bg-nad-primary-2"
            >
              Continue Course
            </Link>
          </div>
        </div>
      </div>
    </Suspense>
  );
};

export default modulePage;
