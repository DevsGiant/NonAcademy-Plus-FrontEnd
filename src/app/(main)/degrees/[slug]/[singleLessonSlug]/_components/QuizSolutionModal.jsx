import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import React, { useState } from "react";
import { RxCheck, RxCross2 } from "react-icons/rx";

const QuizSolutionModal = ({ data }) => {
  const {
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
    selectedValue,
    time,
    isQuizSubmitted,
    bangla_title,
  } = data || {};

  const pointsArray = selectedValue?.pointGained?.split("of");
  const solvedArray = selectedValue?.totalSolved?.split("of");
  const [seeYourAnswer, setSeeYourAnswer] = useState(false);

  const checkRadioColor = (currentIndex, actualAnswer, yourAnswer) => {
    if (currentIndex == yourAnswer) {
      if (actualAnswer == yourAnswer) {
        return "text-green-600";
      } else {
        return "text-red-500";
      }
    } else {
      if (actualAnswer == currentIndex) {
        return "text-green-600";
      } else {
        return "text-black";
      }
    }
  };

  if (seeYourAnswer) {
    return (
      <div className="fixed left-0 top-0 z-50 flex h-screen w-screen items-center justify-center bg-black bg-opacity-70">
        <div className="relative max-h-[90vh] max-w-[95vw] overflow-y-auto overflow-x-hidden rounded-lg bg-white p-5 shadow-lg lg:w-3/4 lg:p-10">
          {/* Close Button */}
          <button
            onClick={() => {
              handleQuizOpen("close");
            }}
            className="absolute right-2 top-2 rounded-full bg-red-500 px-4 py-2 font-semibold text-white transition-all duration-200 hover:bg-red-600"
          >
            X
          </button>

          <div>
            {/* summary ===========> */}
            <div className="mb-5 space-y-2 text-center">
              <h1 className="text-lg font-medium capitalize text-green-600 md:text-xl">
                {/* <span className="text-green-600">Result of: </span> */}
                {bangla_title || title} এর ফলাফল
              </h1>
              <h2 className="text-base font-medium md:text-lg">
                সঠিক হয়েছে:{" "}
                <span className="font-semibold">
                  {parseInt(solvedArray?.[0] || 0).toLocaleString("bn-BD")}
                </span>{" "}
                টি ( {parseInt(solvedArray?.[1]).toLocaleString("bn-BD")} টির
                মধ্যে)
              </h2>
              <p className="">
                আপনি পেয়েছেন:{" "}
                <span className=" text-blue-600 ">
                  <span className="font-semibold">
                    {parseInt(pointsArray?.[0] || 0).toLocaleString("bn-BD")}{" "}
                    AVT
                  </span>{" "}
                  ( {parseInt(pointsArray?.[1]).toLocaleString("bn-BD")} এর
                  মধ্যে)
                </span>
              </p>
              <p>
                সময় নিয়েছেন:{" "}
                <span className="font-semibold">{formatTime(time)}</span> মিনিট
              </p>
            </div>

            {/* Your submitted answer ===============>  */}
            <div className="w-full space-y-5">
              {quizContents?.map((singleQuiz, index) => (
                <div
                  key={singleQuiz?._id}
                  className={`w-full rounded-md p-5 ${singleQuiz?.value == selectedValue?.[singleQuiz?._id] ? "bg-green-200" : "bg-red-200"}`}
                >
                  <div className="mb-2 flex items-center gap-1 text-left text-lg font-semibold">
                    {singleQuiz?.value == selectedValue?.[singleQuiz?._id] ? (
                      <RxCheck className="text-xl font-medium text-green-600" />
                    ) : (
                      <RxCross2 className="text-xl font-medium text-red-600" />
                    )}
                    {singleQuiz?.title}
                  </div>
                  <div
                    className={`border-l-4 bg-white p-3 ${singleQuiz?.value == selectedValue?.[singleQuiz?._id] ? "border-green-600" : "border-red-600"}`}
                  >
                    {/* single choice quiz  */}
                    {(singleQuiz?.type == "quiz" ||
                      singleQuiz?.type == "quiz-single") && (
                      // <div>
                      <RadioGroup value="selected">
                        {Object.entries(singleQuiz?.options)?.map(
                          ([key, option], idx) => (
                            <div
                              key={`${singleQuiz?.order}-${key}`}
                              className="flex items-center justify-between"
                            >
                              {/* <Label className="text-md">
                                            {option}
                                          </Label> */}
                              <div className="flex w-full items-center space-x-2">
                                <RadioGroupItem
                                  className={`custom-radio ${checkRadioColor(
                                    idx + 1,
                                    singleQuiz?.value,
                                    selectedValue?.[singleQuiz?._id],
                                  )}`}
                                  value={
                                    parseInt(selectedValue?.[singleQuiz?._id]) -
                                      1 ==
                                      idx ||
                                    parseInt(singleQuiz?.value) == idx + 1
                                      ? "selected"
                                      : "unselected"
                                  }
                                />

                                {parseInt(selectedValue?.[singleQuiz?._id]) -
                                  1 ==
                                idx ? (
                                  <div className="w-full">
                                    {singleQuiz?.value ==
                                    selectedValue?.[singleQuiz?._id] ? (
                                      <div
                                        className={`flex w-full items-center justify-between  text-green-600`}
                                      >
                                        <Label className="text-md">
                                          {option}
                                        </Label>{" "}
                                        <p>আপনার উত্তর</p>
                                      </div>
                                    ) : (
                                      <div
                                        className={`flex w-full items-center justify-between  text-red-600`}
                                      >
                                        <Label className="text-md">
                                          {option}
                                        </Label>{" "}
                                        <p>আপনার উত্তর</p>
                                      </div>
                                    )}
                                  </div>
                                ) : (
                                  <div className="w-full">
                                    {parseInt(singleQuiz?.value) == idx + 1 ? (
                                      <div
                                        className={`flex w-full items-center justify-between  text-green-600`}
                                      >
                                        <Label className="text-md">
                                          {option}
                                        </Label>{" "}
                                        <p>সঠিক উত্তর</p>
                                      </div>
                                    ) : (
                                      <Label className="text-md">
                                        {option}
                                      </Label>
                                    )}
                                  </div>
                                )}
                              </div>
                            </div>
                          ),
                        )}
                        {/* </div> */}
                      </RadioGroup>
                    )}

                    {/* multi choice quiz  */}
                    {singleQuiz?.type == "quiz-multi" && (
                      <div className="w-full">
                        {Object.entries(singleQuiz?.options)?.map(
                          ([key, option], idx) => {
                            const correctAnsArray =
                              singleQuiz?.value?.split(",");
                            const yourAnsArray =
                              selectedValue?.[singleQuiz?._id]?.split(",");

                            return (
                              <div
                                key={`${singleQuiz?.order}-${key}`}
                                className="flex w-full items-center space-x-2"
                              >
                                {yourAnsArray?.includes(
                                  (idx + 1).toString(),
                                ) ? (
                                  <div className="w-full">
                                    {correctAnsArray?.includes(
                                      (idx + 1).toString(),
                                    ) ? (
                                      <div className="flex items-center justify-between gap-3 text-green-600">
                                        <div className="flex items-center gap-2">
                                          <Checkbox
                                            checked={true}
                                            className={`
                                              rounded-sm border-2 border-gray-300
                                              data-[state=checked]:border-green-600
                                              data-[state=checked]:bg-green-600
                                              data-[state=checked]:text-white
                                            `}
                                          />
                                          <Label className="text-md">
                                            {option}
                                          </Label>
                                        </div>
                                        <p>আপনার উত্তর</p>
                                      </div>
                                    ) : (
                                      <div className="flex items-center justify-between gap-3 text-red-500">
                                        <div className="flex items-center gap-2">
                                          <Checkbox
                                            checked={true}
                                            className={`
                                              rounded-sm border-2 border-gray-300
                                              data-[state=checked]:border-red-600
                                              data-[state=checked]:bg-red-600
                                              data-[state=checked]:text-white
                                            `}
                                          />
                                          <Label className="text-md">
                                            {option}
                                          </Label>
                                        </div>
                                        <p>আপনার উত্তর</p>
                                      </div>
                                    )}
                                  </div>
                                ) : (
                                  <div className="w-full">
                                    {correctAnsArray?.includes(
                                      (idx + 1).toString(),
                                    ) ? (
                                      <div className="flex items-center justify-between gap-3 text-yellow-600">
                                        <div className="flex items-center gap-2">
                                          <Checkbox
                                            checked={true}
                                            className={`
                                              rounded-sm border-2 border-gray-300
                                              data-[state=checked]:border-yellow-600
                                              data-[state=checked]:bg-yellow-600
                                              data-[state=checked]:text-white
                                            `}
                                          />
                                          <Label className="text-md">
                                            {option}
                                          </Label>
                                        </div>
                                        <p>সঠিক উত্তর</p>
                                      </div>
                                    ) : (
                                      <div className="flex items-center gap-2">
                                        <Checkbox checked={false} />
                                        <Label className="text-md">
                                          {option}
                                        </Label>
                                      </div>
                                    )}
                                  </div>
                                )}
                              </div>
                            );
                          },
                        )}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* footer ==================> */}
            <div className="mt-5 flex items-center justify-center gap-3">
              <Button
                onClick={() => {
                  handleQuizOpen("close");
                }}
              >
                বাদ দিন
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="fixed left-0 top-0 z-50 flex h-screen w-screen items-center justify-center bg-black bg-opacity-70">
        <div className="relative w-max max-w-[95vw] rounded bg-white p-5 shadow-lg lg:p-10">
          <button
            onClick={() => {
              handleQuizOpen("close");
            }}
            className="absolute -right-5 -top-5 rounded-full bg-red-500 px-4 py-2 font-semibold text-white"
          >
            X
          </button>

          <div>
            <div className="mb-5 space-y-2 text-center">
              <h1 className="text-lg font-medium capitalize text-green-600 md:text-xl">
                {/* <span className="text-green-600">Result of: </span> */}
                {bangla_title || title} এর ফলাফল
              </h1>
              <h2 className="text-base font-medium md:text-xl">
                সঠিক হয়েছে:{" "}
                <span className="font-semibold">
                  {parseInt(solvedArray?.[0] || 0).toLocaleString("bn-BD")}
                </span>{" "}
                টি ( {parseInt(solvedArray?.[1]).toLocaleString("bn-BD")} টির
                মধ্যে)
              </h2>
              <p className="">
                আপনি পেয়েছেন:{" "}
                <span className=" text-blue-600 ">
                  <span className="font-semibold">
                    {parseInt(pointsArray?.[0] || 0).toLocaleString("bn-BD")}{" "}
                    AVT
                  </span>{" "}
                  ( {parseInt(pointsArray?.[1]).toLocaleString("bn-BD")} এর
                  মধ্যে)
                </span>
              </p>
              <p>
                সময় নিয়েছেন:{" "}
                <span className="font-semibold">{formatTime(time)}</span> মিনিট
              </p>
            </div>

            <div className="flex items-center justify-center gap-3">
              {/* quiz details buttons  */}
              {/* <Button
                onClick={() => {
                  setSeeYourAnswer(true);
                }}
              >
                আপনার উত্তর দেখুন
              </Button> */}
              <Button
                onClick={() => {
                  handleQuizOpen("close");
                }}
              >
                বাদ দিন
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default QuizSolutionModal;
