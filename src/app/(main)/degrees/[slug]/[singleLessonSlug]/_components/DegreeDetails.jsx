"use client";
import { AuthContext } from "@/contexts/AuthProvider";
import { StoreContext } from "@/contexts/StoreProvider";
import axiosInstance from "@/utils/axiosInstance";
import confetti from "canvas-confetti";
import HTMLReactParser from "html-react-parser";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaUser } from "react-icons/fa";
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";
import YouTube from "react-youtube";
import QuizComponent from "./QuizComponent";

const DegreeDetails = ({
  data,
  singleLessonSlug,
  course,
  slug,
  fullCourseInfo: courseDetails,
}) => {
  const { loggedInUser, fetchUser, fullCourseInfo } = useContext(AuthContext);
  const { allAnnouncements, setAllAnnouncements } = useContext(StoreContext);

  const [isDisableButton, setIsDisableButton] = useState(false);
  const router = useRouter();

  const [generalContents, setGeneralContents] = useState([]);
  const [quizContents, setQuizContents] = useState([]);
  const [isLessonFinished, setIsLessonFinished] = useState(false);
  const [showThirtySecondModal, setShowThirtySecondModal] = useState(false);
  const [isStayedRequiredDuration, setIsStayedRequiredDuration] =
    useState(false);

  useEffect(() => {
    const generalContentsArray = [];
    const quizContentsArray = [];

    data?.content
      ?.sort((a, b) => a.order - b.order)
      ?.map((singleContent) => {
        if (
          singleContent?.type == "quiz-multi" ||
          singleContent?.type == "quiz" ||
          singleContent?.type == "quiz-single"
        ) {
          quizContentsArray.push(singleContent);
        } else {
          generalContentsArray.push(singleContent);
        }
      });

    setGeneralContents(generalContentsArray);
    setQuizContents(quizContentsArray);
  }, [data?.content]);

  // handle lesson prev and next btns
  const handleChangeLesson = (type) => {
    const entries = Object.entries(fullCourseInfo);
    const index = entries.findIndex(([key]) => key === course);
    const [key, value] = entries[index]; // Directly access index 3

    const indexOfLesson = value.indexOf(singleLessonSlug);
    let toUrl;
    let newCourse = course;

    if (type == "prev") {
      if (indexOfLesson == 0) {
        if (index > 0) {
          const [key, value] = entries[index - 1];
          newCourse = key;
          toUrl = value[value.length - 1];
        } else {
          toast.error("No previous available!");
          return;
        }
      } else {
        toUrl = value[indexOfLesson - 1];
      }
    } else {
      if (indexOfLesson == value?.length - 1) {
        if (index == entries.length - 1) {
          toast.error("No next available!");
          return;
        } else {
          const [key, value] = entries[index + 1];
          toUrl = value[0];
          newCourse = key;
        }
      } else {
        toUrl = value[indexOfLesson + 1];
      }
    }

    if (!toUrl && type == "next") {
      return toast.error("No next available!");
    } else if (!toUrl && type == "prev") {
      return toast.error("No previous available!");
    }

    router.push(`/degrees/${slug}/${toUrl}?course=${newCourse}`);
  };

  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 0,
    },
  };

  const optsSm = {
    height: "280",
    width: "360px",
    margin: "0 auto",
    playerVars: {
      autoplay: 0,
    },
  };

  const onReady = (event) => {
    event.target.pauseVideo();
  };

  useEffect(() => {
    if (loggedInUser) {
      for (const singleDegreeHistory of loggedInUser?.degreeHistory || []) {
        if (singleDegreeHistory?.degree === data?.module?.degree) {
          for (const singleLessonHistory of singleDegreeHistory?.degreeActivities ||
            []) {
            if (
              singleLessonHistory?.lesson === data?._id &&
              singleLessonHistory?.isLessonFinished
            ) {
              setIsLessonFinished(true);
              break;
            }
          }
          break;
        }
      }
    }
  }, [
    data?.module?.degree,
    data?._id,
    loggedInUser?.degreeHistory,
    loggedInUser,
  ]);

  // reading rewards AVT
  useEffect(() => {
    let timer;
    console.log({ duration: data?.duration });

    if (data?.duration && loggedInUser) {
      timer = setTimeout(() => {
        // readHistoryFunction(data.duration);
        setIsStayedRequiredDuration(true);
      }, data.duration * 1000); // 1 second = 1000ms
    }

    return () => {
      setIsStayedRequiredDuration(false);
      clearTimeout(timer);
    };
  }, [data?.duration, isLessonFinished, loggedInUser]);

  const handleShowThirtySecondAlertModal = (actionType) => {
    if (actionType == "open") {
      setShowThirtySecondModal(true);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      setShowThirtySecondModal(false);
    }
  };

  useEffect(() => {
    let timer;

    if (!loggedInUser) {
      const loginAlertModal = sessionStorage.getItem("loginAlert");

      if (loginAlertModal) {
        handleShowThirtySecondAlertModal("open");
      } else {
        timer = setTimeout(() => {
          sessionStorage.setItem("loginAlert", "true");
          handleShowThirtySecondAlertModal("open");
        }, 10 * 1000); // 1 second = 1000ms
      }
    }

    return () => {
      clearTimeout(timer);
    };
  }, [loggedInUser]);

  // Your function to call when clicked on next btn
  const readHistoryFunction = async () => {
    if (isLessonFinished) {
      // console.log("You already finished this lesson!");
      return;
    }

    if (!isStayedRequiredDuration) {
      // console.log("You did not stay the required duration!");
      return;
    }

    const quizData = {
      studentId: loggedInUser._id,
      degreeSlug: slug,
      lessonSlug: singleLessonSlug,
      duration: data?.duration,
    };

    try {
      const res = await axiosInstance.patch(
        "/student/degree/read-lesson",
        quizData,
      );

      if (res?.data?.success) {
        toast.success(res.data?.message);
        fetchUser();

        if (res.data?.data?.newAnnouncement) {
          if (allAnnouncements && Object.keys(allAnnouncements)?.length > 0) {
            const updatedAnnouncements = [
              res.data?.data?.newAnnouncement,
              ...allAnnouncements?.announcements,
            ];

            setAllAnnouncements({
              ...allAnnouncements,
              announcements: updatedAnnouncements,
              totalUnseenAnnouncements:
                allAnnouncements?.totalUnseenAnnouncements + 1,
              totalDocuments: (allAnnouncements?.totalDocuments || 0) + 1,
            });
          } else {
            setAllAnnouncements({
              announcements: res.data?.data?.newAnnouncement,
              totalUnseenAnnouncements: 1,
              totalDocuments: 1,
              currentPage: 1,
              totalPages: 1,
              limit: 10,
            });
          }
        }
      } else {
        toast.error(res.data?.message || "Unexpected error occur!");
      }
    } catch (error) {
      console.log(error);
      toast.error(
        error?.message || error?.data?.message || "Unexpected error occur!",
      );
    }
  };

  const handleCompleteDegree = async () => {
    setIsDisableButton(true);
    const Data = {
      studentId: loggedInUser._id,
      degreeSlug: slug,
    };

    try {
      const res = await axiosInstance.post("/student/degree/complete", Data);

      if (res?.data?.success) {
        toast.success(res.data?.message);
        confetti({
          particleCount: 250,
          spread: 800,
          origin: { x: 0.5, y: 0.5 }, // Center of the screen
        });
        fetchUser();

        if (res.data?.data?.newAnnouncement) {
          if (allAnnouncements && Object.keys(allAnnouncements)?.length > 0) {
            const updatedAnnouncements = [
              res.data?.data?.newAnnouncement,
              ...allAnnouncements?.announcements,
            ];

            setAllAnnouncements({
              ...allAnnouncements,
              announcements: updatedAnnouncements,
              totalUnseenAnnouncements:
                allAnnouncements?.totalUnseenAnnouncements + 1,
              totalDocuments: (allAnnouncements?.totalDocuments || 0) + 1,
            });
          } else {
            setAllAnnouncements({
              announcements: res.data?.data?.newAnnouncement,
              totalUnseenAnnouncements: 1,
              totalDocuments: 1,
              currentPage: 1,
              totalPages: 1,
              limit: 10,
            });
          }
        }
      } else {
        toast.error(res.data?.message || "Unexpected error occur!");
      }
    } catch (error) {
      console.log(error);
      toast.error(
        error?.message || error?.data?.message || "Unexpected error occur!",
      );
    }

    setIsDisableButton(false);
  };

  return (
    <div className="w-full select-none">
      {/* general quiz contents  */}
      {generalContents?.map((singleContent, index) => {
        const { order, type, value, title } = singleContent || {};
        return (
          <div key={index} className="">
            {type == "text" && (
              <div className="m-4 select-none">
                {/* <pre>{value}</pre> */}
                {HTMLReactParser(value)}
              </div>
            )}

            {type == "video" && (
              <div className="m-4">
                {title && (
                  <div>
                    <h3 className="text-xl font-semibold capitalize">
                      {title}
                    </h3>
                    <hr className="my-2" />
                  </div>
                )}
                <div className="hidden max-h-[400px] lg:block">
                  <YouTube videoId={value} opts={opts} onReady={onReady} />
                </div>
                <div className="block max-h-[400px] lg:hidden">
                  <YouTube videoId={value} opts={optsSm} onReady={onReady} />
                </div>
              </div>
            )}

            {type == "image" && (
              <div className="m-4">
                {title && (
                  <div>
                    <h3 className="text-xl font-semibold capitalize">
                      {title}
                    </h3>
                    <hr className="my-2" />
                  </div>
                )}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={value} alt="img" className="max-h-[400px]" />
              </div>
            )}

            {type == "code" && (
              <div
                className={`m-4 rounded-md p-5 ${singleContent?.point == 0 ? "bg-gray-200" : "bg-red-200"}`}
              >
                {title ? (
                  <p className="mb-2 text-lg font-semibold capitalize">
                    {singleContent?.title}
                  </p>
                ) : (
                  <p className="mb-2 text-lg font-semibold capitalize">Code:</p>
                )}
                <div
                  className={`overflow-x-auto  border-l-4 bg-white p-3 ${singleContent?.point == 0 ? "border-blue-600" : "border-red-600"}`}
                >
                  <pre>{value}</pre>
                </div>
              </div>
            )}
          </div>
        );
      })}

      {/* All quiz  */}
      {quizContents?.length > 0 && (
        <QuizComponent
          data={{
            quizContents,
            singleLessonSlug,
            course,
            slug,
            lessonId: data?._id,
            degreeId: data?.module?.degree,
            title: data?.title,
            bangla_title: data?.bangla_title,
          }}
        />
      )}

      {/* next / previous buttons  */}
      <div className="mx-4 my-5">
        <h3 className="mb-4 text-center text-base font-semibold capitalize md:text-lg lg:mb-5">
          {data?.bangla_title || data?.title}
        </h3>
        <div className="flex flex-wrap items-center justify-between gap-4 md:gap-8 lg:gap-12">
          <button
            onClick={() => handleChangeLesson("prev")}
            className={`flex items-center gap-1.5 rounded border-0 bg-blue-600 px-4 py-2.5 text-sm font-medium text-white`}
          >
            <IoMdArrowBack className="text-base" /> পূর্ববর্তী
          </button>
          <button
            onClick={async () => {
              handleChangeLesson("next");
              await readHistoryFunction();
            }}
            className={`flex items-center gap-1.5 rounded bg-blue-600 px-4 py-2.5 text-sm font-medium  text-white`}
          >
            পরবর্তী <IoMdArrowForward className="text-base" />
          </button>
        </div>
      </div>

      {/* complete btn  */}
      {data?.showCompleteButton &&
        (loggedInUser?.degreeHistory?.find(
          (history) =>
            history.degree === data?.module?.degree && history?.isFinished,
        ) ? (
          <div className="mx-3 mb-5 space-y-1 rounded-md bg-orange-400 p-10 text-center font-medium text-white md:mx-auto">
            <p className="text-xl md:text-3xl">অভিনন্দন 🎉</p>
            <p className="tex-md md:text-xl">
              আপনি ইতিমধ্যে কোর্সটি সম্পন্ন করেছেন
            </p>
          </div>
        ) : (
          <div className="flex w-full flex-col items-center justify-between">
            <button
              disabled={isDisableButton}
              onClick={() => {
                handleCompleteDegree();
              }}
              className={`my-3 w-[95%] rounded border-0 bg-orange-500 px-4 py-2.5 font-medium text-white`}
            >
              কোর্সটি সম্পূর্ণ করুন
            </button>
          </div>
        ))}

      {/* thirty second alert modal  */}
      {showThirtySecondModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
          <div className="relative w-max max-w-[90vw] scale-105 transform rounded-lg bg-white p-8 shadow-2xl transition-all">
            {/* Modal Content */}
            <div className="space-y-4 text-center">
              <FaUser className="mx-auto text-5xl text-blue-600" />
              <h3 className="text-xl font-bold text-gray-800">
                Login Required
              </h3>
              <p className="text-gray-600">
                To access this page, you need to log in to your account.
                Don&apos;t miss out!
              </p>
              <div className="mt-6 flex items-center justify-center gap-4">
                <Link
                  onClick={() => handleShowThirtySecondAlertModal("close")}
                  href="/auth/login"
                  className="rounded-md bg-blue-600 px-6 py-2 font-medium text-white shadow-lg transition-all hover:bg-blue-500"
                >
                  Login
                </Link>
                <Link
                  onClick={() => handleShowThirtySecondAlertModal("close")}
                  href="/"
                  className="rounded-md bg-gray-300 px-6 py-2 font-medium text-gray-800 shadow-lg transition-all hover:bg-gray-400"
                >
                  Go Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DegreeDetails;
