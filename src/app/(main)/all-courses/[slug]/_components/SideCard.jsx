"use client";

import { Button } from "@/components/ui/button";
import { AuthContext } from "@/contexts/AuthProvider";
import Image from "next/image";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import {
  AiOutlineCode,
  AiOutlineFieldTime,
  AiOutlineVideoCameraAdd,
} from "react-icons/ai";
import { BsRobot } from "react-icons/bs";
import { IoPlayCircleSharp } from "react-icons/io5";
import { MdAlarm, MdOutlineAssignment } from "react-icons/md";
import assets from "../../../../../../public/images/images";

const SideCard = ({
  id,
  slug,
  thumbnail,
  title,
  price,
  discount,
  course_contains,
  setIsOpenOverview,
  totalPreviewVideos,
  isFree,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { loggedInUser } = useContext(AuthContext);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 900);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // const discountPercentage =
  //   discount > 0 ? ((discount / price) * 100).toFixed(0) : 0;

  return (
    <div
      className="relative hidden lg:block"
      style={{ flex: "0 0 35%", maxWidth: "400px" }}
    >
      <div
        className={`absolute inset-0 transition-all delay-100 ${isScrolled ? "pointer-events-none opacity-0" : "opacity-100"}`}
      >
        <div className="sticky top-4 z-10 text-nad-gray-8">
          <div className="rounded-lg bg-gray-50 shadow-2xl">
            {/* top image */}
            <div className="relative">
              <Image
                className="h-[200px] max-w-full rounded-t-lg object-cover"
                src={thumbnail}
                width={400}
                height={200}
                alt={title}
              />
              <div
                onClick={() => {
                  totalPreviewVideos && setIsOpenOverview(true);
                }}
                className={`${totalPreviewVideos && "cursor-pointer"} absolute left-0 top-0 h-full w-full select-none bg-gradient-to-t from-black/80 to-transparent`}
              >
                <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center text-2xl text-white">
                  <IoPlayCircleSharp className="h-[65px] w-[65px] drop-shadow" />
                </div>
                {loggedInUser ? (
                  totalPreviewVideos && (
                    <span className="absolute bottom-4 w-full text-center font-bold text-white">
                      Free preview before enrolling
                    </span>
                  )
                ) : (
                  <Link
                    href={"/auth/login"}
                    className="absolute bottom-4 w-full text-center font-bold text-white hover:text-blue-600 hover:underline"
                  >
                    Login to preview ( before enrolling )
                  </Link>
                )}
              </div>
            </div>
            {/* price and button */}
            <div className="px-5 pb-3">
              <div className="w-full pb-2 pt-4">
                <div className="divide-y divide-gray-600 lg:divide-gray-200">
                  <div>
                    {/* TODO: static data removed */}
                    {/* <div className="flex items-center gap-2 text-sm text-red-700">
                      <MdAlarm />
                      <span>
                        <b>4 hours</b> left at this price!
                      </span>
                    </div> */}
                    <p className="my-2 flex flex-grow flex-row items-center text-3xl font-extrabold [&_span]:text-base">
                      ৳{price}
                    </p>
                    {/* <p className="my-2 flex flex-grow flex-row items-center text-3xl font-extrabold [&_span]:text-base">
                      ৳{price - discount}
                      {discount > 0 && (
                        <>
                          <span className="ml-2 font-medium text-gray-400 line-through lg:text-gray-600">
                            ৳{price}
                          </span>
                          <span className="ml-2 font-medium tracking-tight text-gray-100 lg:text-nad-gray-9">
                            {discountPercentage} % off
                          </span>
                        </>
                      )}
                    </p> */}
                    {/* <span className="block pb-2 pt-1 text-sm text-gray-100 lg:text-gray-700">
                      Includes <b>lifetime access</b> to current and future
                      updates to the course. Learn at your own pace, anytime.
                    </span> */}

                    {isFree ? (
                      <Button
                        asChild
                        className="my-1 w-full rounded-lg text-lg font-semibold"
                      >
                        {loggedInUser ? (
                          <Link href={`/dashboard`}>Go To Dashboard</Link>
                        ) : (
                          <Link href={`/auth/login`}>Login & Watch free</Link>
                        )}
                      </Button>
                    ) : (
                      <Button
                        asChild
                        className="my-1 w-full rounded-lg text-lg font-semibold"
                      >
                        {loggedInUser?.courses?.includes(id) ? (
                          <Link href={`/dashboard`}>Go To Dashboard</Link>
                        ) : (
                          <Link href={`/checkout?course=${slug}`}>Buy Now</Link>
                        )}
                      </Button>
                    )}
                  </div>
                </div>
              </div>
              {/* certificate */}
              <div className="mt-4 flex flex-col gap-2">
                <p className="text-lg font-bold">
                  Includes Certificate of Completion
                </p>
                <Image
                  className="h-auto max-w-full"
                  src={assets?.images?.blockchainCertificate}
                  alt="certificate"
                />
                <p className="text-xs">
                  Add this credential to your LinkedIn profile, resume, or CV.
                  You can share it on social media and in your performance
                  review.
                </p>
              </div>
              <p className="py-2 text-lg font-bold">
                What&apos;s in the course?
              </p>
              {/* about course */}
              <ul className="space-y-1 text-sm font-medium">
                <li className="flex items-center space-x-2">
                  <AiOutlineVideoCameraAdd className="inline h-5 w-5" />
                  <span>{course_contains?.no_of_videos} video lectures</span>
                </li>
                <li className="flex items-center space-x-2">
                  <AiOutlineCode className="inline h-5 w-5" />
                  <span>
                    {course_contains?.no_of_exercises} hands-on-keyboard
                    exercises
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <AiOutlineFieldTime className="inline h-5 w-5" />
                  <span>
                    {course_contains?.hours_of_content}+ hours of content
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <MdOutlineAssignment className="inline h-5 w-5" />
                  <span>{course_contains?.no_of_assignments} Assignments</span>
                </li>
                <li className="flex items-center space-x-2">
                  <AiOutlineCode className="inline h-5 w-5" />
                  <span>{course_contains?.no_of_quizzes} quiz exams</span>
                </li>
                <li className="flex items-center space-x-2">
                  <BsRobot className="inline h-5 w-5" />
                  <span>
                    {course_contains?.extra_feature
                      ? course_contains?.extra_feature
                      : "N/A"}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideCard;
