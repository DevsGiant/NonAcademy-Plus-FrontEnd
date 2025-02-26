"use client";

import axiosInstance from "@/utils/axiosInstance";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import React, { createContext, useEffect, useState, useCallback } from "react";
import toast from "react-hot-toast";

export const StoreContext = createContext();

const StoreProvider = ({ children }) => {
  const router = useRouter();
  const token = Cookies.get("nad_auth_token");

  const [loadingStore, setLoadingStore] = useState(false);
  const [announcementFetchedTime, setAnnouncementFetchedTime] = useState(null);
  const [selectedCourseId, setSelectedCourseId] = useState(null);
  const [announcementsOfCurrentCourse, setAnnouncementsOfCurrentCourse] =
    useState({});
  const [allAnnouncements, setAllAnnouncements] = useState({});

  const fetchAllAnnouncements = useCallback(
    async (currentPage = 1, limit = 10, type) => {
      setLoadingStore(true);

      // Prevent frequent API calls
      const currentTime = Date.now();
      if (type === "see-more") {
        limit = limit + 10;
      } else if (type === "reset") {
        limit = 10;
      } else {
        if (
          announcementFetchedTime &&
          currentTime - announcementFetchedTime < 60 * 60 * 1000
        ) {
          setLoadingStore(false);
          return;
        }
      }

      setAnnouncementFetchedTime(currentTime);
      try {
        const response = await axiosInstance.get(
          `${process.env.API_URL}/admin/announcement/student/all?currentPage=${currentPage}&limit=${limit}`,
        );

        setAllAnnouncements(response?.data?.data);
      } catch (error) {
        console.error("Error fetching announcements:", error);
        toast.error("Failed to fetch announcements");
      } finally {
        setLoadingStore(false);
      }
    },
    [announcementFetchedTime],
  );

  useEffect(() => {
    // Automatically fetch announcements periodically
    const interval = setInterval(
      () => fetchAllAnnouncements(),
      60 * 60 * 1000, // 60 minutes in milliseconds
    );

    return () => clearInterval(interval);
  }, []);

  const fetchAnnouncementByCourseId = useCallback(
    async (courseId, currentPage = 1, limit = 10, type) => {
      setLoadingStore(true);

      // Validate courseId or selectedCourseId
      const activeCourseId = courseId || selectedCourseId;
      if (!activeCourseId) {
        setLoadingStore(false);
        return;
      }

      // Prevent frequent API calls
      const currentTime = Date.now();
      if (type === "see-more") {
        limit = limit + 10;
      } else if (type === "reset") {
        limit = 10;
      } else if (
        courseId !== announcementsOfCurrentCourse?.announcements?.[0]?.course
      ) {
        // do not stop
      } else {
        if (
          announcementFetchedTime &&
          currentTime - announcementFetchedTime < 60 * 60 * 1000
        ) {
          setLoadingStore(false);
          return;
        }
      }

      setAnnouncementFetchedTime(currentTime);
      setSelectedCourseId(courseId);
      try {
        const response = await axiosInstance.get(
          `${process.env.API_URL}/admin/announcement/student/${activeCourseId}?currentPage=${currentPage}&limit=${limit}`,
        );

        setAnnouncementsOfCurrentCourse(response?.data?.data);
      } catch (error) {
        console.error("Error fetching announcements:", error);
        toast.error("Failed to fetch announcements");
      } finally {
        setLoadingStore(false);
      }
    },
    [selectedCourseId, announcementsOfCurrentCourse, announcementFetchedTime],
  );

  useEffect(() => {
    // Automatically fetch announcements periodically
    if (selectedCourseId) {
      const interval = setInterval(
        () => fetchAnnouncementByCourseId(selectedCourseId),
        60 * 60 * 1000, // 60 minutes in milliseconds
      );

      return () => clearInterval(interval);
    }
  }, [selectedCourseId]);

  const authInfo = {
    announcementsOfCurrentCourse,
    selectedCourseId,
    setSelectedCourseId,
    setAnnouncementsOfCurrentCourse,
    fetchAnnouncementByCourseId,
    allAnnouncements,
    setAllAnnouncements,
    fetchAllAnnouncements,
  };

  return (
    <StoreContext.Provider value={authInfo}>{children}</StoreContext.Provider>
  );
};

export default StoreProvider;
