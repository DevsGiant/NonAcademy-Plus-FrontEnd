"use client";
import PageContainer from "@/components/ui/PageContainer";
import { AuthContext } from "@/contexts/AuthProvider";
import { sendGTMEvent } from "@next/third-parties/google";
import React, { useContext, useEffect, useState } from "react";
import CourseAbout from "./CourseAbout";
import CourseInstructor from "./CourseInstructor";
import CourseStructure from "./CourseStructure";
import Outcomes from "./Outcomes";
import PreviewContainer from "./PreviewContainer";
import RefundBottom from "./RefundBottom";
import SideCard from "./SideCard";
import SideCardSmall from "./SideCardSmall";
import TopBanner from "./TopBanner";
import UsedByLearners from "./UsedByLearners";

const SingleCourseView = ({ courseDetails }) => {
  const { loggedInUser } = useContext(AuthContext);
  const [isOpenOverView, setIsOpenOverview] = useState(false);
  const [previewVideos, setPreviewVideos] = useState([]);
  const [currentVideo, setCurrentVideo] = useState({});

  const {
    _id,
    slug,
    title,
    short_description,
    instructor,
    ratings,
    students,
    thumbnail,
    price,
    discount,
    course_contains,
    course_outcomes,
    modules,
    description,
    reviews,
  } = courseDetails?.data;

  useEffect(() => {
    if (!courseDetails) return;

    let previewVideoArray = [];

    courseDetails?.data?.modules?.map((module, moduleIndex) => {
      if (module?.isPublic) {
        module?.videos?.map((video, videoIndex) => {
          if (video?.hasPreview) {
            let previewVideo = {
              ...video,
              module: moduleIndex,
              video: videoIndex,
            };
            previewVideoArray.push(previewVideo);
          }
        });
      }
    });

    setPreviewVideos(previewVideoArray);
    setCurrentVideo(previewVideoArray?.[0]);
  }, [courseDetails]);

  // gta
  useEffect(() => {
    if (!courseDetails?.data) return;

    sendGTMEvent({
      event: "viewCourseDetails",
      page: `all-courses/${slug}`,
      course_id: _id,
      course_slug: slug,
      course_title: title,
      course_description: short_description,
      instructor: {
        name: instructor?.name,
        id: instructor?._id, // Assuming instructor has an ID
      },
      ratings: ratings || 0,
      students_enrolled: students || 0,
      price: price ? parseFloat(price) : 0,
      discount: discount ? parseFloat(discount) : 0,
      is_free: courseDetails?.data?.type === "FREE",
      subscription_available: !!courseDetails?.data?.subscription, // Boolean value
      course_outcomes: course_outcomes?.length ? course_outcomes : [], // Send array if available
      total_modules: modules?.length || 0,
      total_reviews: reviews?.length || 0,
      total_preview_videos: previewVideos?.length || 0,
    });
  }, [slug]);

  if (!courseDetails) {
    return (
      <div className="text-center font-medium text-red-500">
        Failed to fetch course details. Please try again later.
      </div>
    );
  }

  return (
    <div>
      {/* overview  */}

      {loggedInUser && isOpenOverView && courseDetails?.data?.subscription && (
        <div className="fixed bottom-0 left-0 right-0 top-0 z-[31] h-screen w-screen bg-black bg-opacity-75 text-white">
          <PreviewContainer
            setIsOpenOverview={setIsOpenOverview}
            previewVideos={previewVideos}
            currentVideo={currentVideo}
            setCurrentVideo={setCurrentVideo}
            courseTitle={courseDetails?.data?.title}
            loggedInUser={loggedInUser}
          />
        </div>
      )}

      {/* main contents  */}
      <div className="bg-gradient-to-r from-nad-gray-9 via-nad-gray-8 to-nad-gray-9 text-white">
        <PageContainer>
          <div className="flex w-full">
            {/* top banner section */}
            <TopBanner
              title={title}
              short_description={short_description}
              instructor_name={instructor?.name}
              ratings={ratings}
              students={students}
              price={price}
              id={_id}
              slug={slug}
              isFree={courseDetails?.data?.type == "FREE"}
            />
            {/* initial video side card */}
            <SideCard
              slug={slug}
              title={title}
              thumbnail={thumbnail}
              price={price}
              discount={discount}
              course_contains={course_contains}
              id={_id}
              setIsOpenOverview={setIsOpenOverview}
              totalPreviewVideos={previewVideos?.length}
              loggedInUser={loggedInUser}
              isFree={courseDetails?.data?.type == "FREE"}
            />
          </div>
        </PageContainer>
      </div>

      <PageContainer>
        <div className="flex">
          <div className="flex-grow lg:mr-8 xl:mr-10">
            {/* course outcome part */}
            <Outcomes course_outcomes={course_outcomes} />
            {/* course structure part */}
            <CourseStructure
              modules={modules}
              previewVideos={previewVideos}
              currentVideo={currentVideo}
              setCurrentVideo={setCurrentVideo}
              setIsOpenOverview={setIsOpenOverview}
              loggedInUser={loggedInUser}
              forSubscription={courseDetails?.data?.subscription}
            />
            {/* course about part */}
            <CourseAbout description={description} />
            {/* used by learner part */}
            <UsedByLearners />
            {/* course interactive part */}
            {/* <CourseInteractive /> */}
            {/* course review part */}
            {/* <CourseReview reviews={reviews} /> */}
            {/* course instructor instructor profile */}
            <CourseInstructor instructor={instructor} />
          </div>
          {/* when scroll then render this without video side card */}
          <SideCardSmall
            slug={slug}
            price={price}
            discount={discount}
            course_contains={course_contains}
            id={_id}
            setIsOpenOverview={setIsOpenOverview}
            isFree={courseDetails?.data?.type == "FREE"}
          />
        </div>
      </PageContainer>
      {/* pricing footer */}
      {/* <PricingFooter /> */}
      {/* refund fixed bottom part */}
      <RefundBottom
        id={_id}
        title={title}
        slug={slug}
        isFree={courseDetails?.data?.type == "FREE"}
      />
    </div>
  );
};

export default SingleCourseView;
