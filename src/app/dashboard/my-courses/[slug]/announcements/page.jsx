import { getAnnouncementByCourseId } from "@/api/services/enrolled-courses/PurchasedCoursesService";
import { cookies } from "next/headers";
import React from "react";
import MyCoursesHeaderLayout from "../_components/MyCoursesHeaderLayout";
import AnnouncementViewPage from "./_components/AnnouncementView";

export const metadata = {
  title: "Announcement - NonAcademy",
  description: "An online learning platform. Your career-building university",
};

const AnnouncementsPage = async ({ params }) => {
  // Get the token from the cookies
  const token = cookies().get("nad_auth_token")?.value;

  // Fetch the course details by course id
  // const announcements = await getAnnouncementByCourseId(token, params.slug);

  return (
    <div>
      {/* my courses top bar */}
      <MyCoursesHeaderLayout slug={params?.slug} />
      <AnnouncementViewPage id={params.slug} />
    </div>
  );
};

export default AnnouncementsPage;
