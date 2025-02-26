"use client";
import React, { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "@/contexts/AuthProvider";
import { StoreContext } from "@/contexts/StoreProvider";
import Link from "next/link";
import { FaChevronCircleDown, FaChevronCircleUp } from "react-icons/fa";
import { GrAnnounce } from "react-icons/gr";
import { IoMdNotificationsOutline } from "react-icons/io";
import axiosInstance from "@/utils/axiosInstance";

const Notification = () => {
  const { fetchAllAnnouncements, allAnnouncements, setAllAnnouncements } =
    useContext(StoreContext);
  const { loggedInUser } = useContext(AuthContext);
  const [showNotifications, setShowNotifications] = useState(false);
  const notificationRef = useRef(null);

  useEffect(() => {
    fetchAllAnnouncements();
  }, []);

  // Close notifications when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        notificationRef.current &&
        !notificationRef.current.contains(event.target)
      ) {
        setShowNotifications(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleToggleNotifications = () => setShowNotifications((prev) => !prev);

  const formatDateTime = (date) =>
    new Intl.DateTimeFormat("en-US", {
      dateStyle: "medium",
      timeStyle: "short",
    }).format(new Date(date));

  const makeAnnouncementSeen = async (announcement, studentId, receiver) => {
    if (receiver === "course" || announcement?.seenBy?.includes(studentId)) {
      return;
    }

    const announcementId = announcement?._id;
    if (!announcementId) {
      return;
    }

    const response = await axiosInstance.patch(
      `/admin/announcement/student/${announcementId}`,
    );

    // global announcements ===============>
    const updatedAllAnnouncements = allAnnouncements?.announcements?.map(
      (announcement) => {
        if (announcement?._id === announcementId && loggedInUser) {
          if (announcement?.seenBy) {
            announcement.seenBy.push(loggedInUser._id);
          } else {
            announcement.seenBy = [loggedInUser._id];
          }
        }

        return announcement;
      },
    );

    setAllAnnouncements({
      ...allAnnouncements,
      announcements: updatedAllAnnouncements,
      totalUnseenAnnouncements: allAnnouncements?.totalUnseenAnnouncements - 1,
    });
  };

  return (
    <div className="relative">
      {/* Notification Bell */}
      <div
        className={`relative cursor-pointer rounded-full p-2 ${showNotifications ? "bg-gray-300" : "bg-transparent"}`}
        onClick={handleToggleNotifications}
      >
        {allAnnouncements?.totalUnseenAnnouncements > 0 && (
          <div className="absolute right-0 flex h-[18px] w-[18px] items-center justify-center rounded-xl bg-red-500 text-xs text-white">
            {allAnnouncements.totalUnseenAnnouncements}
          </div>
        )}
        <IoMdNotificationsOutline className="text-3xl text-gray-600" />
      </div>

      {/* Notification Panel */}
      {showNotifications && (
        <div
          ref={notificationRef}
          className="no-scrollbar fixed right-5 top-16 max-h-[85vh]  min-w-[350px] max-w-[90vw] overflow-y-auto rounded-md border border-blue-400 bg-white shadow-lg lg:max-w-[27vw]"
        >
          <h3 className="sticky top-0 bg-blue-600 p-3 text-center font-semibold text-white">
            Notifications
          </h3>
          <div className="py-2">
            {allAnnouncements?.announcements?.map((announcement) => (
              <div
                key={announcement._id}
                className="border-b last:border-none hover:bg-amber-50"
              >
                <Link
                  href={
                    announcement.receiver === "course"
                      ? `/dashboard/my-courses/${announcement.destinationUrl}/announcements`
                      : announcement.receiver === "rewards"
                        ? "/dashboard/rewards"
                        : "#"
                  }
                  onClick={() =>
                    makeAnnouncementSeen(
                      announcement,
                      loggedInUser?._id,
                      announcement.receiver,
                    )
                  }
                >
                  <div className="flex items-start gap-2 px-5 py-2">
                    <div className="mt-1 rounded bg-[#FFAA2D] px-1 py-1">
                      <GrAnnounce className="text-lg text-white" />
                    </div>
                    <div className="w-full space-y-2 text-xs md:text-sm">
                      <h2 className="font-semibold text-gray-800 md:text-base">
                        {announcement.title}
                      </h2>
                      {announcement.type === "message" && (
                        <p className="text-gray-600">
                          {announcement.message.length > 50
                            ? `${announcement.message.substring(0, 50)}...`
                            : announcement.message}
                        </p>
                      )}
                      <div className="flex items-center justify-between text-gray-500">
                        <p>{formatDateTime(announcement.publicationTime)}</p>
                        <p>
                          {announcement.seenBy?.includes(loggedInUser?._id) ? (
                            "Seen"
                          ) : (
                            <span className="font-semibold text-red-500">
                              Unseen
                            </span>
                          )}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}

            {allAnnouncements?.announcements?.length == 0 && (
              <div className="text-center">No notification found!</div>
            )}
          </div>

          {/* Footer Buttons */}
          <div className="flex flex-col items-center justify-center bg-blue-600 p-3 text-center text-white">
            {allAnnouncements?.totalDocuments >
            allAnnouncements?.announcements?.length ? (
              <button
                onClick={() =>
                  fetchAllAnnouncements(
                    1,
                    allAnnouncements?.announcements?.length,
                    "see-more",
                  )
                }
                className="flex items-center gap-2 text-sm font-medium"
              >
                See More <FaChevronCircleDown />
              </button>
            ) : (
              allAnnouncements?.announcements?.length > 10 && (
                <button
                  onClick={() =>
                    fetchAllAnnouncements(
                      1,
                      allAnnouncements?.announcements?.length,
                      "reset",
                    )
                  }
                  className="flex items-center gap-2 text-sm font-medium"
                >
                  See Less <FaChevronCircleUp />
                </button>
              )
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Notification;
