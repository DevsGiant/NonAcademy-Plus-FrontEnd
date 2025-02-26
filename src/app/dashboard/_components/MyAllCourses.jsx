"use client";

import { AuthContext } from "@/contexts/AuthProvider";
import Image from "next/image";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { AiOutlineCode } from "react-icons/ai";
import { BiMoviePlay } from "react-icons/bi";
import { MdOutlineAssignment } from "react-icons/md";

const MyAllCourses = ({ enrolledCourses }) => {
  const { loggedInUser } = useContext(AuthContext);
  const [activeTab, setActiveTab] = useState("general");
  const [filteredCourses, setFilteredCourses] = useState([]);

  const handleTabSwitch = (tab) => {
    setActiveTab(tab);
  };

  // filter courses =====================>
  useEffect(() => {
    let filteredCourse;
    if (activeTab === "general") {
      filteredCourse = enrolledCourses.filter((course) =>
        loggedInUser?.courses?.includes(course?._id),
      );
    } else {
      let subscriptedCourse = enrolledCourses.filter(
        (course) => !loggedInUser?.courses?.includes(course?._id),
      );
      if (activeTab === "subscription") {
        filteredCourse = subscriptedCourse?.filter(
          (course) => course.type == "PAID",
        );
      } else if (activeTab === "free") {
        filteredCourse = subscriptedCourse?.filter(
          (course) => course.type == "FREE",
        );
      }
    }
    setFilteredCourses(filteredCourse);
  }, [enrolledCourses.length, activeTab, loggedInUser]);

  return (
    <>
      {/* Tabs - Button Group Style */}
      <div className="mb-7 flex justify-center">
        <div className="inline-flex rounded-lg border border-stroke bg-white">
          <button
            className={`rounded-l-lg px-3 py-2 text-sm font-semibold transition-all duration-300 md:px-6 md:py-3 md:text-lg ${
              activeTab === "general"
                ? "bg-nad-primary text-white"
                : "text-gray-600 hover:bg-nad-primary-lite-1/80"
            }`}
            onClick={() => handleTabSwitch("general")}
          >
            NanoDegree Courses
          </button>
          <button
            className={`border-x border-stroke px-3 py-2 text-sm font-semibold transition-all duration-300 md:px-6 md:py-3 md:text-lg ${
              activeTab === "subscription"
                ? "bg-nad-primary text-white "
                : "text-gray-600 hover:bg-nad-primary-lite-1/80"
            }`}
            onClick={() => handleTabSwitch("subscription")}
          >
            Subscription Courses
          </button>
          <button
            className={`rounded-r-lg px-3 py-2 text-sm font-semibold transition-all duration-300 md:px-6 md:py-3 md:text-lg ${
              activeTab === "free"
                ? "bg-nad-primary text-white "
                : "text-gray-600 hover:bg-nad-primary-lite-1/80"
            }`}
            onClick={() => handleTabSwitch("free")}
          >
            Free Courses
          </button>
        </div>
      </div>

      {/* Show tab-wise courses */}
      {filteredCourses?.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {filteredCourses?.map((course) => (
            <Link
              href={`/dashboard/my-courses/${course?._id}/module`}
              key={course._id}
              className="rounded-lg border border-slate-300 bg-white p-4"
            >
              <div>
                <Image
                  className="h-[180px] w-full rounded-lg object-cover"
                  src={course.thumbnail}
                  alt={course.title}
                  width={200}
                  height={60}
                />
              </div>
              <div className="mt-5">
                <h3 className="text-lg font-semibold">{course.title}</h3>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                <div className="flex items-center gap-1 rounded-sm bg-slate-200/60 px-2 py-1 text-xs text-slate-600">
                  <BiMoviePlay className="text-sm" />{" "}
                  <span>{course?.course_contains?.no_of_videos}</span>{" "}
                  <span>Lecture</span>
                </div>
                <div className="flex items-center gap-1 rounded-sm bg-slate-200/60 px-2 py-1 text-xs text-slate-600">
                  <AiOutlineCode className="text-sm" />{" "}
                  <span>{course?.course_contains?.no_of_exercises}</span>{" "}
                  <span>Exercise</span>
                </div>
                <div className="flex items-center gap-1 rounded-sm bg-slate-200/60 px-2 py-1 text-xs text-slate-600">
                  <MdOutlineAssignment className="text-sm" />{" "}
                  <span>{course?.course_contains?.no_of_assignments}</span>{" "}
                  <span>Assignment</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="mx-auto flex w-full flex-col items-center justify-center rounded-lg bg-white py-10 shadow-lg shadow-whiten md:w-1/2">
          <p className="text-center text-lg font-semibold text-gray-700">
            You haven&apos;t enrolled in any courses yet.
          </p>
          <p className="text-center text-gray-500">
            Start exploring and enroll in your first course today.
          </p>
          <Link
            href="/all-courses"
            className="mt-6 rounded-md font-semibold text-nad-primary hover:underline md:mt-8"
          >
            Browse all interactive courses
          </Link>
        </div>
      )}
    </>
  );
};

export default MyAllCourses;
