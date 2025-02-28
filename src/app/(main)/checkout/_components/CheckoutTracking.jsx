"use client";

import { sendGTMEvent } from "@next/third-parties/google";
import { useEffect } from "react";
// import { analytics } from "@/utils/gtag";

const CheckoutTracking = ({ courseDetails }) => {
  useEffect(() => {
    if (!courseDetails?.data) return;

    sendGTMEvent({
      event: "checkoutPageViewed",
      course_id: courseDetails?.data?._id,
      course_slug: courseDetails?.data?.slug,
      course_title: courseDetails?.data?.title,
      course_price: parseFloat(courseDetails?.data?.price) || 0,
      course_discount: parseFloat(courseDetails?.data?.discount) || 0,
      instructor: {
        name: courseDetails?.data?.instructor?.name,
        id: courseDetails?.data?.instructor?._id || null,
      },
      ratings: courseDetails?.data?.ratings || 0,
      students_enrolled: courseDetails?.data?.students || 0,
      is_free: courseDetails?.data?.type === "FREE",
      subscription_available: !!courseDetails?.data?.subscription, // Boolean
      thumbnail: courseDetails?.data?.thumbnail,
    });
    // analytics.track("Checkout Page Viewed", {
    //   course_id: courseDetails?.data?._id,
    //   course_slug: courseDetails?.data?.slug,
    //   course_title: courseDetails?.data?.title,
    //   course_price: parseFloat(courseDetails?.data?.price) || 0,
    //   course_discount: parseFloat(courseDetails?.data?.discount) || 0,
    //   instructor: {
    //     name: courseDetails?.data?.instructor?.name,
    //     id: courseDetails?.data?.instructor?._id || null,
    //   },
    //   ratings: courseDetails?.data?.ratings || 0,
    //   students_enrolled: courseDetails?.data?.students || 0,
    //   is_free: courseDetails?.data?.type === "FREE",
    //   subscription_available: !!courseDetails?.data?.subscription, // Boolean
    //   thumbnail: courseDetails?.data?.thumbnail,

    // });
  }, [courseDetails]);

  return null; // This component does not render anything
};

export default CheckoutTracking;
