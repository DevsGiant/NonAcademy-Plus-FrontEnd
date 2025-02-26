import { Button } from "@/components/ui/button";
import { Rating, StickerStar } from "@smastrom/react-rating";
import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";
import {
  coursesData,
  studentFeedbackData,
} from "../../../../../../public/data/courses";
import assets from "../../../../../../public/images/images";

const customStyles = {
  itemShapes: StickerStar,
  activeFillColor: "#ffb700",
  inactiveFillColor: "#fbf1a9",
};

const CourseReview = ({ reviews }) => {
  /* TODO: static data removed */
  return (
    <div>
      {/* featured review part */}
      <div className="mt-5 rounded-md border p-5 pb-3">
        <h3 className="mb-5 block text-2xl font-extrabold tracking-tight text-nad-gray-9">
          Course Review part
        </h3>
        <div className="flex flex-col gap-4">
          <div className="block flex-shrink-0">
            <div className="flex items-center">
              <Image
                className="h-auto max-w-full rounded-full"
                width={40}
                height={40}
                src={assets?.images?.arif}
                alt="profile"
              />
              <div className="ml-3">
                <p className="cursor-pointer font-bold capitalize text-gray-700 underline-offset-2 hover:text-black hover:underline">
                  Atikur Rahman
                </p>
                <p className="text-sm text-gray-500">@Atikur Rahman</p>
              </div>
            </div>
          </div>
          <div className="flex-grow">
            <div className="mt-0.5 flex items-center gap-2">
              <div className="text-sm font-semibold text-amber-700">4.6</div>
              <div className="max-w-20">
                <div className="flex max-w-none items-center justify-center">
                  <Rating value={4.6} readOnly itemStyles={customStyles} />
                </div>
              </div>
            </div>
            <div className="break-all py-3.5 text-sm">
              There is nothing in the course that you would not like to see.
              Everything is on point no waste of time The best course that you
              can find on the internet
            </div>
          </div>
        </div>
      </div>
      {/* student feedback part */}
      <h3 className="mb-5 mt-8 block text-xl font-extrabold tracking-tight text-nad-gray-9 xl:text-2xl">
        Student Feedback
      </h3>
      <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-8 sm:space-y-0">
        <div className="flex min-w-[137px] flex-col space-y-1 sm:items-center">
          <div className="text-6xl font-bold text-[#be5a0e]">4.6</div>
          <div className="max-w-24">
            <div className="flex max-w-none items-center justify-center">
              <Rating value={4.6} readOnly itemStyles={customStyles} />
            </div>
          </div>
          <div className="font-semibold text-[#be5a0e]">Course Rating</div>
        </div>
        <div className="flex w-full flex-col">
          {studentFeedbackData?.map((feedback) => (
            <div
              key={feedback.id}
              className="flex h-full w-full items-center space-x-4"
            >
              <div className="flex-grow">
                <div className="relative w-full pt-1">
                  <div className="flex h-2 overflow-hidden bg-gray-200">
                    <div
                      style={{ width: `${feedback.percentage}%` }}
                      className="flex flex-col justify-center bg-gray-500"
                    ></div>
                  </div>
                </div>
              </div>
              <div className="w-24 min-w-[96px]">
                <div className="flex max-w-none items-center justify-center">
                  <Rating
                    value={feedback.rating}
                    readOnly
                    itemStyles={customStyles}
                  />
                </div>
              </div>
              <p className="w-[50px] flex-shrink-0 flex-grow-0 text-sm text-blue-700">
                {feedback.percentage}%
              </p>
            </div>
          ))}
        </div>
      </div>
      {/* reviews part */}
      <div>
        <h3 className="mb-5 mt-8 block text-xl font-extrabold tracking-tight text-nad-gray-9 xl:text-2xl">
          Reviews
        </h3>
        {coursesData?.[0]?.reviews?.map((review) => (
          <div
            key={review.id}
            className="mb-4 flex space-x-4 border-b border-gray-100 px-1 py-2"
          >
            <div>
              <Image
                className="h-auto max-w-full rounded-full"
                width={40}
                height={40}
                src={review?.image}
                alt={review?.name}
              />
            </div>
            <div className="flex-grow">
              <p className="text-sm font-bold">{review?.name}</p>
              <div className="mt-0.5 flex items-center space-x-2">
                <div className="max-w-20">
                  <div className="flex max-w-none items-center justify-center">
                    <Rating
                      value={review.ratings}
                      readOnly
                      itemStyles={customStyles}
                    />
                  </div>
                </div>
                <p className="text-xs">{review?.date}</p>
              </div>
              <div className="break-all py-4 text-sm">{review.comment}</div>
            </div>
          </div>
        ))}
        <Button className="w-full gap-2.5 font-semibold">
          <FaStar className="text-base" /> Load More Reviews
        </Button>
      </div>
    </div>
  );
};

export default CourseReview;
