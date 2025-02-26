"use client";

import { StoreContext } from "@/contexts/StoreProvider";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useContext, useEffect } from "react";

const myCoursesHeaderConfig = [
  {
    label: "Module",
    path: "module",
  },
  {
    label: "Assignment",
    path: "assignment",
  },
  {
    label: "Resources",
    path: "resources",
  },
  {
    label: "Leader Board",
    path: "leaderboard",
  },
  {
    label: "Announcements",
    path: "announcements",
  },
];

const MyCoursesHeaderLayout = ({ slug }) => {
  const pathname = usePathname();
  const { fetchAnnouncementByCourseId, announcementsOfCurrentCourse } =
    useContext(StoreContext);

  useEffect(() => {
    if (slug) {
      fetchAnnouncementByCourseId(slug);
    }
  }, [slug]);

  return (
    <div className="pb-4 sm:pb-6 2xl:pb-10">
      <div className="w-fit">
        <div className="flex flex-wrap items-center gap-2 rounded-md border border-stroke bg-white p-3">
          {myCoursesHeaderConfig?.map((item) => {
            const isActive =
              pathname === `/dashboard/my-courses/${slug}/${item.path}`;

            return (
              <Link
                key={item.path}
                href={`/dashboard/my-courses/${slug}/${item.path}`}
                className={`relative inline-flex items-center justify-center whitespace-nowrap rounded-sm border border-stroke px-4 py-2.5 text-base font-semibold text-slate-700 transition-all ${isActive ? "bg-nad-primary text-white" : "hover:bg-nad-primary-lite-1/80"}`}
              >
                {item.label}
                {item.path === "announcements" &&
                  announcementsOfCurrentCourse?.totalUnseenAnnouncements >
                    0 && (
                    <span className="absolute -right-3 -top-3 flex size-[25px] items-center justify-center rounded-xl bg-danger-1 text-xs text-white">
                      {announcementsOfCurrentCourse?.totalUnseenAnnouncements ||
                        0}
                    </span>
                  )}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MyCoursesHeaderLayout;
