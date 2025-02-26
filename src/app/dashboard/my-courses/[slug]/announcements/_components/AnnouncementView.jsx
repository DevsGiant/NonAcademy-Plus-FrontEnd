"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { AuthContext } from "@/contexts/AuthProvider";
import { StoreContext } from "@/contexts/StoreProvider";
import axiosInstance from "@/utils/axiosInstance";
import React, { useCallback, useContext, useEffect, useState } from "react";
import { CiCircleChevUp } from "react-icons/ci";
import { FaChevronCircleDown, FaChevronCircleUp } from "react-icons/fa";
import { GrAnnounce } from "react-icons/gr";
import { PiEmptyBold } from "react-icons/pi";

const AnnouncementViewPage = ({ id }) => {
  const { loggedInUser } = useContext(AuthContext);

  const {
    announcementsOfCurrentCourse,
    setAnnouncementsOfCurrentCourse,
    fetchAnnouncementByCourseId,
    allAnnouncements,
    setAllAnnouncements,
    limit,
  } = useContext(StoreContext);

  const { announcements, totalUnseenAnnouncements, totalDocuments } =
    announcementsOfCurrentCourse || {};
  const [selectedAnnouncement, setSelectedAnnouncement] = useState(null);

  const [showAnnouncementDetailsModal, setShowAnnouncementDetailsModal] =
    useState(false);

  const makeAnnouncementSeen = useCallback(
    async (announcementId) => {
      if (!announcementId) {
        return;
      }

      const response = await axiosInstance.patch(
        `/admin/announcement/student/${announcementId}`,
      );

      // if (response.data?.success) {
      //   console.log("Announcement seen successfully");
      // }

      // updating current store values
      const updatedAnnouncements = announcements?.map((announcement) => {
        if (announcement?._id === announcementId && loggedInUser) {
          if (announcement?.seenBy) {
            announcement.seenBy.push(loggedInUser._id);
          } else {
            announcement.seenBy = [loggedInUser._id];
          }
        }

        return announcement;
      });

      const updatedUnseen = totalUnseenAnnouncements - 1;

      setAnnouncementsOfCurrentCourse({
        ...announcementsOfCurrentCourse,
        announcements: updatedAnnouncements,
        totalUnseenAnnouncements: updatedUnseen >= 0 ? updatedUnseen : 0,
      });

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
        totalUnseenAnnouncements:
          allAnnouncements?.totalUnseenAnnouncements - 1,
      });
    },
    [
      announcements,
      announcementsOfCurrentCourse,
      loggedInUser?._id,
      setAnnouncementsOfCurrentCourse,
      totalUnseenAnnouncements,
    ],
  );

  useEffect(() => {
    if (announcements) {
      setSelectedAnnouncement(announcements[0]);

      // this function will only work for big screen device not
      if (
        window?.innerWidth > 768 &&
        !announcements[0]?.seenBy?.includes(loggedInUser?._id) &&
        makeAnnouncementSeen(announcements?.[0]?._id)
      ) {
        makeAnnouncementSeen(announcements[0]?._id);
      }
    }
  }, [announcements, loggedInUser?._id]);

  const handleAnnouncementClick = (announcement, studentId) => {
    setSelectedAnnouncement(announcement);
    setShowAnnouncementDetailsModal(true);
    !announcement?.seenBy?.includes(studentId) &&
      makeAnnouncementSeen(announcement._id);
  };

  if (announcements?.length == 0)
    return (
      <div className="mt-16 md:mt-32">
        <h4 className="flex items-center justify-center gap-2 text-center text-xl font-medium text-slate-500">
          <PiEmptyBold />
          <span>No announcement found!</span>
        </h4>
      </div>
    );

  return (
    <div className="">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {/* all announcements */}
        <div className="h-full">
          {announcements?.map((announcement, index) => (
            <div
              onClick={() => {
                handleAnnouncementClick(announcement, loggedInUser?._id);
              }}
              key={announcement._id}
              className={`cursor-pointer rounded-sm p-5 shadow-md 
                ${announcements?.data?.announcements.length - 1 !== index && "border-b"}
                ${announcement._id === selectedAnnouncement?._id ? "bg-white lg:bg-amber-50" : "bg-white"}
                `}
            >
              <div className="flex items-start gap-2">
                <div className="mt-1 rounded bg-[#FFAA2D] px-1 py-1">
                  <GrAnnounce className="text-lg text-white" />
                </div>
                <div className="w-full space-y-2.5 text-xs md:text-sm">
                  <h2 className="text-sm font-semibold text-[#1f1f1f] md:text-base">
                    {announcement?.title}
                  </h2>

                  <p className="text-[#525252]">
                    {announcement?.type === "message" &&
                      announcement?.message.substring(0, 100) + "..."}
                  </p>

                  <div className="flex w-full items-center justify-between">
                    <p className="text-[#888888]">
                      {new Intl.DateTimeFormat("en-US", {
                        dateStyle: "medium",
                        timeStyle: "short",
                      }).format(new Date(announcement.publicationTime))}
                    </p>
                    <p className="text-xs">
                      {announcement?.seenBy?.includes(loggedInUser?._id) ? (
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
            </div>
          ))}

          {/* see more / less buttons  */}
          {totalDocuments > announcements?.length ? (
            <div className="mt-2 flex items-center">
              <button
                onClick={() =>
                  fetchAnnouncementByCourseId(
                    id,
                    1,
                    announcements?.length,
                    "see-more",
                  )
                }
                className="mx-auto flex items-center gap-2 rounded-xl bg-orange-400 px-3 py-1 text-sm font-medium text-white"
              >
                <span>See More</span> <FaChevronCircleDown />
              </button>
            </div>
          ) : (
            <>
              {announcements?.length > 10 && (
                <div className="mt-2 flex items-center">
                  <button
                    onClick={() =>
                      fetchAnnouncementByCourseId(
                        id,
                        1,
                        announcements?.length,
                        "reset",
                      )
                    }
                    className="mx-auto flex items-center gap-2 rounded-xl bg-orange-400 px-3 py-1 text-sm font-medium text-white"
                  >
                    <span>See Less</span> <FaChevronCircleUp />
                  </button>
                </div>
              )}
            </>
          )}
        </div>

        {/* details  */}
        {selectedAnnouncement && (
          // <ScrollArea className="h-[calc(100vh-120px)] ">
          <div className="sticky top-28 h-min">
            <div className="hidden h-full rounded-sm bg-white p-5 shadow-md lg:block">
              <h1 className="pb-3 text-lg font-semibold text-[#1f1f1f] md:text-2xl">
                {selectedAnnouncement?.title}
              </h1>
              <div className="text-sm text-[#525252]">
                {selectedAnnouncement?.type === "url" ? (
                  <div className="mb-2 mt-1">
                    {selectedAnnouncement.message.split("\n").map((line, i) => (
                      <React.Fragment key={i}>
                        {line.split(" ").map((word, j) => {
                          // Regex to check for URLs
                          const isUrl = /(https?:\/\/[^\s]+|www\.[^\s]+)/g.test(
                            word,
                          );
                          const absoluteUrl =
                            isUrl && !word.startsWith("http")
                              ? `https://${word}`
                              : word;

                          return (
                            <React.Fragment key={j}>
                              {isUrl ? (
                                <a
                                  href={absoluteUrl}
                                  className="text-blue-500 underline"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  {word}
                                </a>
                              ) : (
                                word
                              )}{" "}
                            </React.Fragment>
                          );
                        })}
                        <br />
                      </React.Fragment>
                    ))}
                  </div>
                ) : (
                  <div className="space-y-2">
                    {selectedAnnouncement?.message
                      .split("\n")
                      .map((line, i) => (
                        <React.Fragment key={i}>
                          <p className="">{line}</p>
                        </React.Fragment>
                      ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* announcement details modal only for small device */}
      {showAnnouncementDetailsModal && (
        <div className="lg:hidden">
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
            <div className="relative max-h-[90vh] w-[90vw] max-w-[95vw] overflow-y-auto overflow-x-hidden rounded-lg bg-slate-100 p-5 shadow-lg lg:w-3/4 lg:p-10">
              {/* Close Button */}
              <button
                onClick={() => {
                  setShowAnnouncementDetailsModal(false);
                }}
                className="absolute right-2 top-2 h-7 w-7 rounded-full bg-red-500 font-semibold text-white transition-all duration-200 hover:bg-red-600"
              >
                X
              </button>
              {/* Modal Content */}
              <div className={`h-max rounded-md bg-white p-5`}>
                <h1 className="pb-3 text-lg font-semibold text-[#1f1f1f] md:text-2xl">
                  {selectedAnnouncement?.title}
                </h1>
                <div className="text-sm text-[#525252]">
                  {selectedAnnouncement?.type === "url" ? (
                    <div className="mb-2 mt-1">
                      {selectedAnnouncement.message
                        .split("\n")
                        .map((line, i) => (
                          <React.Fragment key={i}>
                            {line.split(" ").map((word, j) => {
                              // Regex to check for URLs
                              const isUrl =
                                /(https?:\/\/[^\s]+|www\.[^\s]+)/g.test(word);
                              const absoluteUrl =
                                isUrl && !word.startsWith("http")
                                  ? `https://${word}`
                                  : word;

                              return (
                                <React.Fragment key={j}>
                                  {isUrl ? (
                                    <a
                                      href={absoluteUrl}
                                      className="text-blue-500 underline"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                    >
                                      {word}
                                    </a>
                                  ) : (
                                    word
                                  )}{" "}
                                </React.Fragment>
                              );
                            })}
                            <br />
                          </React.Fragment>
                        ))}
                    </div>
                  ) : (
                    <div className="space-y-2">
                      {selectedAnnouncement?.message
                        .split("\n")
                        .map((line, i) => (
                          <React.Fragment key={i}>
                            <p>{line}</p>
                          </React.Fragment>
                        ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AnnouncementViewPage;
