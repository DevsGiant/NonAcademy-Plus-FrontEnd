"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import ErrorMessage from "@/components/ui/ErrorMessage";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { AuthContext } from "@/contexts/AuthProvider";
import axiosInstance from "@/utils/axiosInstance";
import React, { useContext, useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaSpinner } from "react-icons/fa";
import Swal from "sweetalert2";

const DynamicForm = ({
  contents,
  multiSubmission,
  isLoginRequired,
  formId,
  slug,
  allResponses,
}) => {
  const { loggedInUser } = useContext(AuthContext);

  const [submission, setSubmission] = useState({});
  const [respondedEmail, setRespondedEmail] = useState("");
  const [isGettingPreviousSubmission, setGettingPreviousSubmission] =
    useState(false);
  const [lastSubmission, setLastSubmission] = useState({});
  const [totalResponse, setTotalResponse] = useState(allResponses || {});

  useEffect(() => {
    if (loggedInUser?.email) {
      setRespondedEmail(loggedInUser.email);
    }
  }, [loggedInUser]);

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    control,
    formState: { errors, isSubmitting },
  } = useForm({ values: lastSubmission?.submission || {} });

  const onSubmit = async (data) => {
    try {
      let email = loggedInUser?.email || respondedEmail;
      if (!email || !isValidEmail(email)) {
        return;
      }

      if (submission?.submission) {
        delete submission["submission"];
      }

      const responseData = {
        form: formId,
        userID: loggedInUser?.user_id || "N/A",
        responseEmail: email,
        submission: submission,
      };

      const response = await axiosInstance.post(
        `/student/form/${slug}/response`,
        responseData,
      );

      if (response?.data?.success) {
        // reset();
        // setSubmission({});
        setTotalResponse({ [email]: (totalResponse[email] || 0) + 1 });
        toast.success(response.data.message);
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: response.data.message,
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error?.response?.data?.message || "An unexpected error occurred!",
      });
    }
  };

  const handleChangeMultiQuiz = ({ value, id, checked }) => {
    let updatedAnswer = "";

    if (checked) {
      // Handle the checked case: Add value
      let oldAnswer = submission[id];

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
      let oldAnswer = submission[id];

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

    setSubmission((prev) => ({ ...prev, [id]: updatedAnswer }));
    setValue(id, updatedAnswer);
    if (updatedAnswer) {
      delete errors[id];
    }
  };

  const handleChangeRadio = ({ value, id }) => {
    const valueArray = value.split("-");
    setSubmission({ ...submission, [id]: valueArray[1] });
    setValue(id, valueArray[1]);
  };

  const handleRespondedEmail = (e) => {
    setRespondedEmail(e.target.value);
  };

  const getPreviousSubmission = async () => {
    setGettingPreviousSubmission(true);

    try {
      const response = await axiosInstance.get(
        `/student/form/${slug}/last-submission?email=${respondedEmail}`,
      );
      if (response?.data?.success) {
        setLastSubmission(response?.data?.data);
        setSubmission(response?.data?.data?.submission);
      }

      setGettingPreviousSubmission(false);
    } catch (error) {
      toast.error(error?.message || "Unexpected error occur!");
      console.log(error);
      setGettingPreviousSubmission(false);
    }
  };

  return (
    <div>
      {/* login required message  */}
      {isLoginRequired && !loggedInUser && (
        <p className="my-1 text-lg font-semibold text-red-500">
          ** To fill up the form, login first
        </p>
      )}

      {/* if login is not required then show enter email option */}
      {isLoginRequired || (
        <>
          <div
            className={` rounded-md ${isValidEmail(respondedEmail) ? "bg-blue-300" : "bg-red-500"} p-3`}
          >
            <p
              className={`${isValidEmail(respondedEmail) ? "text-black" : "text-white"} mb-1 font-medium`}
            >
              Your responded email address{" "}
              <span
                className={`${isValidEmail(respondedEmail) ? "text-red-500" : "text-white"}`}
              >
                *
              </span>
            </p>
            <Input
              readOnly={loggedInUser ? true : false}
              value={respondedEmail}
              onChange={handleRespondedEmail}
              type="email"
              placeholder="Enter your mail"
              className="placeholder:text-muted-foreground/80"
            />
          </div>

          {!(respondedEmail && isValidEmail(respondedEmail)) && (
            <p className="my-1 text-sm font-semibold text-red-500">
              ** To fill up the form, enter your email first
            </p>
          )}
        </>
      )}

      <div className="relative rounded p-3">
        {(!(respondedEmail && isValidEmail(respondedEmail)) ||
          (isLoginRequired && !loggedInUser)) && (
          <div>
            <div className="absolute bottom-0 left-0 right-0 top-0 z-10 rounded"></div>
          </div>
        )}

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-2 lg:space-y-3"
        >
          {contents?.map((content) => {
            const {
              _id,
              title,
              description,
              type,
              questionType,
              questions,
              isRequired,
              order,
            } = content;

            if (type === "title-description") {
              return (
                <div
                  key={_id}
                  className="my-1 rounded-md border border-stroke bg-white p-3"
                >
                  <p className="mb-1 text-lg font-semibold">{title}</p>
                  <p>{description}</p>
                </div>
              );
            } else {
              switch (questionType) {
                // For Input (number, email, text)
                case "input-number":
                case "input-email":
                case "input-text":
                  return (
                    <div className="space-y-1.5">
                      <Label>
                        {title}
                        {isRequired && <span className="text-red-500">*</span>}
                      </Label>
                      <div>
                        <Input
                          {...register(`${_id}`, {
                            required: isRequired
                              ? `${title} is required`
                              : false,
                            onChange: (e) => {
                              const inputValue = e.target.value;
                              setSubmission((prev) => ({
                                ...prev,
                                [_id]: inputValue,
                              }));
                            },
                          })}
                          type={
                            questionType === "input-number"
                              ? "number"
                              : questionType === "input-email"
                                ? "email"
                                : "text"
                          }
                          placeholder={title}
                          className="placeholder:text-muted-foreground/80"
                        />

                        <ErrorMessage>
                          {errors?.[`${_id}`]?.message}
                        </ErrorMessage>
                      </div>
                    </div>
                  );

                // For Textarea
                case "text-area":
                  return (
                    <div className="space-y-1.5">
                      <Label>
                        {title}
                        {isRequired && <span className="text-red-500">*</span>}
                      </Label>
                      <div>
                        <Textarea
                          {...register(`${_id}`, {
                            required: isRequired
                              ? `${title} is required`
                              : false,
                            onChange: (e) => {
                              const inputValue = e.target.value;
                              setSubmission((prev) => ({
                                ...prev,
                                [_id]: inputValue,
                              }));
                            },
                          })}
                          placeholder={title}
                          className="placeholder:text-muted-foreground/80"
                        />
                        <ErrorMessage>
                          {errors?.[`${_id}`]?.message}
                        </ErrorMessage>
                      </div>
                    </div>
                  );

                // For Date
                case "date":
                  return (
                    <div className="space-y-1.5">
                      <Label>
                        {title}
                        {isRequired && <span className="text-red-500">*</span>}
                      </Label>
                      <div>
                        <Input
                          {...register(`${_id}`, {
                            required: isRequired
                              ? `${title} is required`
                              : false,
                            onChange: (e) => {
                              const dateValue = e.target.value;
                              setSubmission((prev) => ({
                                ...prev,
                                [_id]: dateValue,
                              }));
                            },
                          })}
                          type="date"
                          placeholder={title}
                          className="placeholder:text-muted-foreground/80"
                        />
                        <ErrorMessage>{errors[_id]?.message}</ErrorMessage>
                      </div>
                    </div>
                  );

                // For Time
                case "time":
                  return (
                    <div className="space-y-1.5">
                      <Label>
                        {title}
                        {isRequired && <span className="text-red-500">*</span>}
                      </Label>
                      <div>
                        <Input
                          {...register(`${_id}`, {
                            required: isRequired
                              ? `${title} is required`
                              : false,

                            onChange: (e) => {
                              const timeValue = e.target.value;
                              setSubmission((prev) => ({
                                ...prev,
                                [_id]: timeValue,
                              }));
                            },
                          })}
                          type="time"
                          placeholder={title}
                          className="placeholder:text-muted-foreground/80"
                        />

                        <ErrorMessage>{errors[_id]?.message}</ErrorMessage>
                      </div>
                    </div>
                  );

                // For Dropdown
                case "dropdown":
                  return (
                    <div className="space-y-1.5">
                      <Label>
                        {title}
                        {isRequired && <span className="text-red-500">*</span>}
                      </Label>
                      <div>
                        <Controller
                          name={_id}
                          rules={{
                            required: isRequired
                              ? `${title} is required`
                              : false,
                          }}
                          control={control}
                          render={({ field }) => (
                            <Select
                              onValueChange={(value) => {
                                field.onChange(value); // Update form state
                                setSubmission((prev) => ({
                                  ...prev,
                                  [_id]: value,
                                }));
                              }}
                              value={field.value || ""} // Use form-controlled value
                            >
                              <SelectTrigger>
                                <SelectValue placeholder={title} />
                              </SelectTrigger>
                              <SelectContent>
                                {Object.entries(questions).map(
                                  ([key, value]) => (
                                    <SelectItem value={key} key={key}>
                                      {value}
                                    </SelectItem>
                                  ),
                                )}
                              </SelectContent>
                            </Select>
                          )}
                        />
                        <ErrorMessage>{errors[_id]?.message}</ErrorMessage>
                      </div>
                    </div>
                  );

                // For Checkbox
                case "checkbox":
                  return (
                    <div>
                      <div className="space-y-1.5">
                        <Label>
                          {title}{" "}
                          {isRequired && (
                            <span className="text-red-500">*</span>
                          )}
                        </Label>

                        <div>
                          <Controller
                            name={_id}
                            control={control}
                            rules={{
                              required: isRequired
                                ? `${title} is required`
                                : false,
                            }}
                            render={({ field }) => (
                              <div>
                                {Object.entries(questions)?.map(
                                  ([key, option]) => (
                                    <div
                                      key={`${order}-${key}`}
                                      className="my-1 flex items-center space-x-3"
                                    >
                                      <Checkbox
                                        id={`${_id}-${order}-${key}`}
                                        checked={
                                          field.value?.includes(key) || false
                                        }
                                        onCheckedChange={(checked) =>
                                          handleChangeMultiQuiz({
                                            value: key,
                                            id: _id,
                                            checked,
                                          })
                                        }
                                      />
                                      <Label
                                        htmlFor={`${_id}-${order}-${key}`}
                                        className="cursor-pointer text-gray-800"
                                      >
                                        {option}
                                      </Label>
                                    </div>
                                  ),
                                )}
                              </div>
                            )}
                          />

                          <ErrorMessage>{errors[_id]?.message}</ErrorMessage>
                        </div>
                      </div>
                    </div>
                  );

                // For Radio Group
                case "multi-choice":
                  return (
                    <div className="space-y-1.5">
                      <Label>
                        {title}{" "}
                        {isRequired && <span className="text-red-500">*</span>}
                      </Label>

                      <div>
                        <Controller
                          name={_id}
                          control={control}
                          rules={{
                            required: isRequired
                              ? `${title} is required`
                              : false,
                          }}
                          render={({ field }) => (
                            <RadioGroup
                              {...field}
                              value={`${_id}-${submission[_id]}`} // Make sure the value is bound correctly
                              onValueChange={(value) =>
                                handleChangeRadio({ value, id: _id })
                              }
                            >
                              {Object.entries(questions)?.map(
                                ([key, option]) => (
                                  <div
                                    key={`${order}-${key}`}
                                    className="flex items-center space-x-3"
                                  >
                                    <RadioGroupItem
                                      value={`${_id}-${key}`}
                                      id={`${_id}-${order}-${key}`}
                                    />
                                    <Label
                                      htmlFor={`${_id}-${order}-${key}`}
                                      className="cursor-pointer text-gray-800"
                                    >
                                      {option}
                                    </Label>
                                  </div>
                                ),
                              )}
                            </RadioGroup>
                          )}
                        />
                        <ErrorMessage>{errors[_id]?.message}</ErrorMessage>
                      </div>
                    </div>
                  );

                default:
                  return null;
              }
            }
          })}

          {/* total responded times  */}
          {isValidEmail(respondedEmail) && totalResponse?.[respondedEmail] && (
            <div className="rounded-md bg-blue-200 p-2 text-sm">
              You have responded {totalResponse?.[respondedEmail]}{" "}
              {totalResponse?.[respondedEmail] > 1 ? "times" : "time"}
            </div>
          )}

          {/* buttons are here */}
          {isValidEmail(respondedEmail) && totalResponse?.[respondedEmail] ? (
            // already submitted response
            <>
              {multiSubmission ? (
                // if multi submission is true
                <div className="flex flex-col items-center gap-3 pt-1.5 md:flex-row">
                  <Button
                    onClick={getPreviousSubmission}
                    type="button"
                    disabled={isGettingPreviousSubmission}
                    className="w-full bg-green-500 hover:bg-green-600"
                  >
                    {isGettingPreviousSubmission ? (
                      <>
                        <FaSpinner className="mr-2 inline animate-spin" />
                        <span className="text-base">Please Wait</span>
                      </>
                    ) : (
                      "See previous response"
                    )}
                  </Button>

                  <Button disabled={isSubmitting} className="w-full">
                    {isSubmitting ? (
                      <>
                        <FaSpinner className="mr-2 inline animate-spin" />
                        <span className="text-base">Please Wait</span>
                      </>
                    ) : (
                      "Submit another response"
                    )}
                  </Button>
                </div>
              ) : (
                // if multi submission false
                <div className="flex items-center gap-3 pt-1.5">
                  <Button
                    onClick={getPreviousSubmission}
                    type="button"
                    disabled={isGettingPreviousSubmission}
                    className="w-full bg-green-500 hover:bg-green-600"
                  >
                    {isGettingPreviousSubmission ? (
                      <>
                        <FaSpinner className="mr-2 inline animate-spin" />
                        <span className="text-base">Please Wait</span>
                      </>
                    ) : (
                      "See previous response"
                    )}
                  </Button>
                </div>
              )}
            </>
          ) : (
            // have not submitted any response yet
            <div className="pt-1.5">
              <Button disabled={isSubmitting} className="w-full">
                {isSubmitting ? (
                  <>
                    <FaSpinner className="mr-2 inline animate-spin" />
                    <span className="text-base">Please Wait</span>
                  </>
                ) : (
                  "Submit"
                )}
              </Button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default DynamicForm;
