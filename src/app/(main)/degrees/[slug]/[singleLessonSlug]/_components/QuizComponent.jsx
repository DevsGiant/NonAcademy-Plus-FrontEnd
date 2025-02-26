"use client";
import { Button } from "@/components/ui/button";
import { AuthContext } from "@/contexts/AuthProvider";
import axiosInstance from "@/utils/axiosInstance";
import Cookies from "js-cookie";
import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import QuizSolutionModal from "./QuizSolutionModal";
import QuizSubmissionModal from "./QuizSubmissionModal";
import { StoreContext } from "@/contexts/StoreProvider";

const QuizComponent = ({ data }) => {
  const { loggedInUser, fetchUser } = useContext(AuthContext);
  const { allAnnouncements, setAllAnnouncements } = useContext(StoreContext);

  const {
    quizContents,
    singleLessonSlug,
    course,
    slug,
    degreeId,
    lessonId,
    title,
  } = data || {};
  const [selectedValue, setSelectedValue] = useState({});
  const [isQuizOpen, setQuizOpen] = useState(false);
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");
  const [time, setTime] = useState(0); // Time in seconds
  const [isRunning, setIsRunning] = useState(false);

  const [isQuizSubmitted, setQuizSubmitted] = useState(false);
  const token = Cookies.get("nad_auth_token");

  useEffect(() => {
    if (token) {
      fetchUser();
    }
  }, [token]);

  useEffect(() => {
    for (const singleDegreeHistory of loggedInUser?.degreeHistory || []) {
      if (singleDegreeHistory?.degree === degreeId) {
        for (const singleLessonHistory of singleDegreeHistory?.degreeActivities ||
          []) {
          if (
            singleLessonHistory?.lesson === lessonId &&
            singleLessonHistory?.isSubmittedQuiz
          ) {
            setSelectedValue(singleLessonHistory || {});
            setQuizSubmitted(true);
            setTime(singleLessonHistory?.quizSubmittingDuration || 0);
            break;
          }
        }
        break;
      }
    }
  }, [degreeId, lessonId, loggedInUser?.degreeHistory]);

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      // Display a confirmation dialog
      event.preventDefault();
      event.returnValue = ""; // Required for modern browsers to show the dialog
    };

    // Add event listener
    window.addEventListener("beforeunload", handleBeforeUnload);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1); // Increment time by 1 second
      }, 1000);
    }

    return () => clearInterval(interval); // Cleanup on component unmount or when isRunning changes
  }, [isRunning]);

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  };

  // changing option of single choice quiz
  const handleChange = ({ value, id }) => {
    const valueArray = value.split("-");
    setSelectedValue({ ...selectedValue, [id]: valueArray[1] });
    setErrorMessage("");
  };

  // changing option of multiple choice quiz
  const handleChangeMultiQuiz = ({ value, id, checked }) => {
    let updatedAnswer = "";

    if (checked) {
      // Handle the checked case: Add value
      let oldAnswer = selectedValue[id];

      if (oldAnswer) {
        let oldAnswerArray = oldAnswer?.split(",");
        oldAnswerArray.push(value);

        updatedAnswer =
          oldAnswerArray
            ?.sort((a, b) => a - b)
            ?.map((item) => item)
            .join(",") || "";
      } else {
        updatedAnswer = value;
      }
    } else {
      // Handle the unchecked case: Remove value
      let oldAnswer = selectedValue[id];

      if (oldAnswer) {
        let oldAnswerArray = oldAnswer?.split(",");
        // Remove the unchecked value
        updatedAnswer =
          oldAnswerArray
            .filter((item) => item !== value) // Remove the specific value
            .sort((a, b) => a - b)
            .join(",") || "";
      }
    }

    setSelectedValue((prev) => ({ ...prev, [id]: updatedAnswer }));
    setErrorMessage("");
  };

  // handle start quiz
  const handleQuizOpen = (actionType) => {
    if (!loggedInUser) {
      return toast.error("Login to start quiz");
    }

    if (actionType == "open") {
      if (!isQuizSubmitted) {
        setIsRunning(true);
      }
      setQuizOpen(true);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      setIsRunning(false);
      setQuizOpen(false);
    }
  };

  //  handle quiz next btn
  const handleQuizNextBtn = (id) => {
    if (
      selectedValue?.[id] == undefined ||
      selectedValue?.[id] == null ||
      selectedValue?.[id]?.length == 0
    ) {
      // return setErrorMessage("You haven't selected any option!");
      return setErrorMessage("আপনি কোনো অপশন সিলেক্ট করেননি!");
    }

    if (currentQuizIndex != quizContents?.length - 1)
      setCurrentQuizIndex((pre) => pre + 1);
  };

  // handle quiz previous btn
  const handleQuizPreviousBtn = (id) => {
    if (currentQuizIndex != 0) setCurrentQuizIndex((pre) => pre - 1);
  };

  // submit all quiz
  const handleSubmitAllQuiz = async (id) => {
    //last quiz's id
    if (
      selectedValue?.[id] == undefined ||
      selectedValue?.[id] == null ||
      selectedValue?.[id]?.length == 0
    ) {
      return setErrorMessage("আপনি কোনো অপশন সিলেক্ট করেননি!");
    }

    setIsRunning(false);
    // setQuizSubmitted(true);

    const quizData = {
      studentId: loggedInUser._id,
      quizSubmittedData: selectedValue,
      degreeSlug: slug,
      lessonSlug: singleLessonSlug,
      quizSubmittingDuration: time,
    };

    try {
      const res = await axiosInstance.patch(
        "/student/degree/submit-quiz",
        quizData,
      );

      if (res?.data?.success) {
        toast.success("Submitted successfully");
        fetchUser();
        // setSelectedValue(res.data?.data?.result);
        setQuizSubmitted(true);

        console.log({ r: res.data?.data, allAnnouncements });

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

  return (
    <div>
      {isQuizOpen &&
        (isQuizSubmitted ? (
          <QuizSolutionModal
            data={{
              title,
              formatTime,
              handleQuizNextBtn,
              handleSubmitAllQuiz,
              errorMessage,
              handleChangeMultiQuiz,
              handleChange,
              quizContents,
              currentQuizIndex,
              handleQuizOpen,
              singleLessonSlug,
              selectedValue: selectedValue?.quizSubmittedValue,
              time: selectedValue?.quizSubmittingDuration || time,
              isQuizSubmitted,
              bangla_title: data?.bangla_title,
            }}
          />
        ) : (
          <QuizSubmissionModal
            data={{
              formatTime,
              handleQuizNextBtn,
              handleQuizPreviousBtn,
              handleSubmitAllQuiz,
              errorMessage,
              handleChangeMultiQuiz,
              handleChange,
              quizContents,
              currentQuizIndex,
              handleQuizOpen,
              singleLessonSlug,
              selectedValue,
              time,
              isQuizSubmitted,
              bangla_title: data?.bangla_title,
              title: data?.title,
            }}
          />
        ))}

      {!isQuizOpen && (
        <div className="m-4 flex flex-col items-center gap-2 rounded-md bg-blue-100 px-10 py-5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://s3.amazonaws.com/nonacademy2.0/da9d03afed8b259588d7a87eef001e12"
            alt="img"
            className="w-32 md:w-40"
          />
          <p className="text-lg font-medium md:text-xl">
            {(quizContents?.length || 0).toLocaleString("bn-BD")} কুইজ
          </p>
          <p className="text-lg font-semibold text-orange-600 md:text-xl">
            {quizContents
              ?.reduce((prev, current) => prev + current?.point || 0, 0)
              .toLocaleString("bn-BD")}{" "}
            AVT
          </p>

          <Button onClick={() => handleQuizOpen("open")}>
            {/* {isQuizSubmitted ? "Your submission" : "Start Quiz"} */}
            {isQuizSubmitted ? "আপনার উত্তর" : "কুইজ শুরু করুন"}
          </Button>
        </div>
      )}
    </div>
  );
};

export default QuizComponent;
