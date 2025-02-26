import { getResources } from "@/api/services/resource/resourceService";
import { cookies } from "next/headers";
import React, { Suspense } from "react";
import MyCoursesHeaderLayout from "../_components/MyCoursesHeaderLayout";
import CourseResourceSkeleton from "./_components/CourseResourceSkeleton";
import ShowCourseRecourse from "./_components/ShowCourseRecourse";

export const metadata = {
  title: "Resources - NonAcademy",
  description: "An online learning platform. Your career-building university",
};

const resourcesPage = async ({ params }) => {
  // Get the token from the cookies
  const token = cookies().get("nad_auth_token")?.value;

  // Fetch all resources by course id
  const resources = await getResources(token, params.slug);

  return (
    <Suspense fallback={<CourseResourceSkeleton />}>
      {/* my courses top bar */}
      <MyCoursesHeaderLayout slug={params?.slug} />

      {/* resources table */}
      <div>
        {/* show resource */}
        {resources?.data?.length > 0 ? (
          <ShowCourseRecourse modules={resources?.data} />
        ) : (
          // show empty resources message
          <div className="flex h-52 items-center justify-center bg-white text-center md:h-64">
            <p className="text-lg font-semibold text-slate-700 md:text-xl">
              No resources available at the moment.
            </p>
          </div>
        )}
      </div>
    </Suspense>
  );
};

export default resourcesPage;
