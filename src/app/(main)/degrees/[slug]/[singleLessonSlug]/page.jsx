import {
  getDegreeLessonsByLessonId,
  getSingleDegreeById,
} from "@/api/services/degrees/degreesServices";
import { cookies } from "next/headers";
import React from "react";
import DegreeSideBar from "./_components/DegreeSideBar";
import StoreFullCourseInfo from "./_components/StoreFullCourseInfo";
import ViewSingleDegreeContent from "./_components/ViewSingleDegreeContent";

export async function generateMetadata({ params }) {
  const singleDegreeData = await getSingleDegreeById(params?.slug);
  return {
    title: `${singleDegreeData?.data?.degree?.title} - NonAcademy`,
    description: singleDegreeData?.data?.degree?.short_description,
  };
}

const DegreeLessonPage = async ({ params, searchParams }) => {
  const token = cookies().get("nad_auth_token")?.value;
  const singleDegreeData = await getSingleDegreeById(params?.slug);
  const degreeLessons = await getDegreeLessonsByLessonId(
    params?.singleLessonSlug,
  );

  return (
    <div className="relative lg:grid lg:grid-cols-10">
      {/* side bar  */}
      <div className="hidden lg:sticky lg:top-20 lg:col-span-2 lg:col-start-1 lg:block lg:max-h-[87vh] lg:overflow-y-scroll">
        <DegreeSideBar
          data={singleDegreeData?.data?.degree}
          singleLessonSlug={params?.singleLessonSlug}
          slug={params?.slug}
          courseSlug={searchParams?.course}
          token={token}
          lessonId={degreeLessons?.data?._id}
          degreeId={degreeLessons?.data?.module?.degree}
        />
      </div>
      <div className="block lg:hidden">
        <DegreeSideBar
          data={singleDegreeData?.data?.degree}
          singleLessonSlug={params?.singleLessonSlug}
          slug={params?.slug}
          courseSlug={searchParams?.course}
          token={token}
          lessonId={degreeLessons?.data?._id}
          degreeId={degreeLessons?.data?.module?.degree}
        />
      </div>

      <div className="lg:col-span-8 lg:col-start-3">
        {/* this component is used to store full course info to redux  */}
        <StoreFullCourseInfo
          singleDegreeData={singleDegreeData?.data?.degree}
        />
        <ViewSingleDegreeContent
          singleLessonSlug={params?.singleLessonSlug}
          slug={params?.slug}
          course={searchParams?.course}
          fullCourseInfo={singleDegreeData?.data?.degree}
          data={degreeLessons?.data}
        />
      </div>
    </div>
  );
};

export default DegreeLessonPage;
