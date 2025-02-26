import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ScrollArea } from "@/components/ui/scroll-area";
import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";

const QuizSubmissionModal = ({ data }) => {
  const {
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
    bangla_title,
    title,
  } = data || {};
  return (
    <div className="fixed left-0 top-0 z-50 flex h-screen w-screen items-center justify-center bg-black bg-opacity-70">
      <ScrollArea className="relative h-[70vh] min-w-[85vw] max-w-[90vw] overflow-y-auto rounded bg-white p-4 shadow-lg lg:w-3/4 lg:min-w-[50vw] lg:p-10">
        <button
          onClick={() => handleQuizOpen("close")}
          className="absolute right-1 top-1 inline-flex h-8 w-8 items-center justify-center rounded-full border-none bg-red-500 text-white"
          aria-label="Close"
        >
          <AiOutlineClose className="h-5 w-5" />
        </button>

        {/* Modal Content */}
        <div>
          <div className="mb-3 space-y-1 md:mb-5 md:space-y-2.5">
            <h1 className="text-lg font-semibold text-gray-800 md:text-xl">
              {bangla_title || title}
            </h1>
            <h2 className="text-lg font-medium text-gray-600">
              কুইজ নম্বর: {(currentQuizIndex + 1).toLocaleString("bn-BD")} ({" "}
              {(quizContents?.length).toLocaleString("bn-BD")} এর মধ্যে )
            </h2>
            <p className="font-medium text-gray-800">
              আপনি পাবেন:{" "}
              <span className="text-blue-600">
                {quizContents?.[currentQuizIndex]?.point || 0} AVT
              </span>
            </p>
          </div>

          {/* Quiz Body */}
          <div className="rounded-lg bg-gray-100 p-3 md:p-5">
            <p className="mb-4 text-base font-medium text-gray-800 md:text-lg">
              {quizContents?.[currentQuizIndex]?.title}
            </p>
            <div className="border-l-4 border-blue-600 bg-white p-4">
              {/* Single Choice Quiz */}
              {(quizContents?.[currentQuizIndex]?.type === "quiz" ||
                quizContents?.[currentQuizIndex]?.type === "quiz-single") && (
                <RadioGroup
                  value={`${quizContents?.[currentQuizIndex]?._id}-${selectedValue?.[quizContents?.[currentQuizIndex]?._id]}`}
                  // Bind the state to the RadioGroup
                  onValueChange={(value) =>
                    handleChange({
                      value,
                      id: quizContents?.[currentQuizIndex]?._id,
                    })
                  }
                >
                  {Object.entries(
                    quizContents?.[currentQuizIndex]?.options,
                  )?.map(([key, option]) => (
                    <div
                      key={`${quizContents?.[currentQuizIndex]?.order}-${key}`}
                      className="flex items-center space-x-3"
                    >
                      <RadioGroupItem
                        value={`${quizContents?.[currentQuizIndex]?._id}-${key}`}
                        id={`${quizContents?.[currentQuizIndex]?.order}-${key}`}
                      />
                      <Label
                        htmlFor={`${quizContents?.[currentQuizIndex]?.order}-${key}`}
                        className="cursor-pointer text-gray-800"
                      >
                        {option}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              )}

              {/* Multi Choice Quiz */}
              {quizContents?.[currentQuizIndex]?.type === "quiz-multi" && (
                <div>
                  {Object.entries(
                    quizContents?.[currentQuizIndex]?.options,
                  )?.map(([key, option]) => (
                    <div
                      key={`${quizContents?.[currentQuizIndex]?.order}-${key}`}
                      className="my-1 flex items-center space-x-3"
                    >
                      <Checkbox
                        id={`${quizContents?.[currentQuizIndex]?.order}-${key}`}
                        checked={
                          selectedValue?.[quizContents?.[currentQuizIndex]?._id]
                            ?.split(",")
                            ?.includes(key) || false
                        }
                        onCheckedChange={(checked) =>
                          handleChangeMultiQuiz({
                            value: key,
                            id: quizContents?.[currentQuizIndex]?._id,
                            checked,
                          })
                        }
                      />
                      <Label
                        htmlFor={`${quizContents?.[currentQuizIndex]?.order}-${key}`}
                        className="cursor-pointer text-gray-800"
                      >
                        {option}
                      </Label>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-4 md:mt-6">
            {errorMessage && (
              <p className="text-sm font-medium text-red-600">{errorMessage}</p>
            )}
            <div className="mt-4 flex items-center justify-between">
              {currentQuizIndex === quizContents?.length - 1 ? (
                <div className="flex gap-3">
                  {currentQuizIndex > 0 && (
                    <Button
                      onClick={() =>
                        handleQuizPreviousBtn(
                          quizContents?.[currentQuizIndex]?._id,
                        )
                      }
                    >
                      <IoMdArrowBack className="mr-1 text-lg" />
                      পূর্ববর্তী
                    </Button>
                  )}
                  <Button
                    onClick={() =>
                      handleSubmitAllQuiz(quizContents?.[currentQuizIndex]?._id)
                    }
                  >
                    জমা দিন
                  </Button>
                </div>
              ) : (
                <div className="flex gap-3">
                  {currentQuizIndex > 0 && (
                    <Button
                      onClick={() =>
                        handleQuizPreviousBtn(
                          quizContents?.[currentQuizIndex]?._id,
                        )
                      }
                    >
                      <IoMdArrowBack className="mr-1 text-lg" />
                      পূর্ববর্তী
                    </Button>
                  )}
                  <Button
                    onClick={() =>
                      handleQuizNextBtn(quizContents?.[currentQuizIndex]?._id)
                    }
                  >
                    পরবর্তী <IoMdArrowForward className="ml-1 text-lg" />
                  </Button>
                </div>
              )}
              <p className="text-sm font-medium text-gray-800">
                {formatTime(time)}
              </p>
            </div>
          </div>
        </div>
      </ScrollArea>
    </div>
  );
};

export default QuizSubmissionModal;
