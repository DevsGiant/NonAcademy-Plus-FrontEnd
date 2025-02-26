import Image from "next/image";
import React from "react";
import {
  FaFolder,
  FaGithub,
  FaLinkedin,
  FaStar,
  FaTrophy,
  FaTwitter,
  FaUserFriends,
  FaYoutube,
} from "react-icons/fa";
import assets from "../../../../../../public/images/images";

const CourseInstructor = ({ instructor }) => {
  return (
    <div className="mt-5">
      {/* instructor profile part */}
      <div>
        <h3 className="mb-3 block text-xl font-bold tracking-tight text-nad-gray-9 md:mb-5 md:text-2xl md:font-extrabold">
          Course Instructor
        </h3>
        <div>
          <p className="cursor-pointer text-lg font-bold text-primary underline underline-offset-2">
            {instructor?.name}
          </p>
          <p className="mt-1 text-sm font-medium text-gray-600">
            Building coding courses on NonAcademy
          </p>
          <div className="mt-4 flex gap-4">
            <Image
              className="h-24 w-24 rounded-md"
              src={
                instructor?.picture
                  ? instructor?.picture
                  : assets?.images?.userImg
              }
              alt={instructor?.name}
              width={100}
              height={100}
            />
            {/* TODO: static data removed */}
            {/* <div className="flex flex-col gap-1.5 text-sm tracking-tight text-nad-gray-8">
              <div className="inline-flex items-center space-x-3">
                <FaStar />
                <span>
                  <span className="font-medium">4.6</span> Instructor rating
                </span>
              </div>
              <div className="inline-flex items-center space-x-3">
                <FaTrophy />
                <span>
                  <span className="font-medium">22.9k</span> Ratings
                </span>
              </div>
              <div className="inline-flex items-center space-x-3">
                <FaUserFriends />
                <span>
                  <span className="font-medium">226.2k</span> Students
                </span>
              </div>
              <div className="inline-flex items-center space-x-3">
                <FaFolder />
                <span>
                  <span className="font-medium">44</span> Courses
                </span>
              </div>
            </div> */}
          </div>
          {/* TODO: static data removed */}
          <p className="mt-4 leading-relaxed text-nad-gray-8">
            {instructor?.bio}
          </p>
          {/* TODO: static data removed */}
          {/* <div className="mt-4 flex items-center gap-4">
            <div className="cursor-pointer">
              <FaGithub className="text-xl text-[#171515]" />
            </div>
            <div className="cursor-pointer">
              <FaLinkedin className="text-xl text-[#0A66C2]" />
            </div>
            <div className="cursor-pointer">
              <FaTwitter className="text-xl text-[#1DA1F2]" />
            </div>
            <div className="cursor-pointer">
              <FaYoutube className="text-xl text-[#CD201F]" />
            </div>
          </div> */}
        </div>
      </div>
      {/* more courses by instructor */}
      {/* TODO: static data removed */}
      {/* <div className="mt-8">
        <h3 className="mb-3 text-xl font-extrabold md:text-2xl">
          {`More Courses By ${instructor?.name}`}
        </h3>
        <div className="grid grid-cols-1 items-start gap-2 md:grid-cols-3 xl:gap-3">
          <div className="z-10 block h-full py-3">
            <div className="flex h-full flex-1 flex-col">
              <div>
                <Image
                  className="h-auto w-full overflow-hidden rounded border object-cover"
                  src={courseImg}
                  alt="course"
                />
              </div>
              <div className="flex-1 pt-2">
                <p className="text-base font-semibold tracking-tight text-gray-900">
                  Learn the basics of web - Internet fundamentals
                </p>
                <p className="my-1 text-xs text-gray-700">{instructor?.name}</p>
              </div>
              <div className="flex w-full items-end space-x-2">
                <div className="max-w-20">
                  <div className="flex max-w-none items-center justify-center">
                    <Rating value={5} readOnly itemStyles={customStyles} />
                  </div>
                </div>
                <div className="flex-shrink-0 text-xs font-bold text-[#8c670a]">
                  7.9k+ ratings
                </div>
              </div>
            </div>
          </div>
          <div className="z-10 block h-full py-3">
            <div className="flex h-full flex-1 flex-col">
              <div>
                <Image
                  className="h-auto w-full overflow-hidden rounded border object-cover"
                  src={courseImg}
                  alt="course"
                />
              </div>
              <div className="flex-1 pt-2">
                <p className="text-base font-semibold tracking-tight text-gray-900">
                  Learn the basics of web - Internet fundamentals
                </p>
                <p className="my-1 text-xs text-gray-700">{instructor?.name}</p>
              </div>
              <div className="flex w-full items-end space-x-2">
                <div className="max-w-20">
                  <div className="flex max-w-none items-center justify-center">
                    <Rating value={5} readOnly itemStyles={customStyles} />
                  </div>
                </div>
                <div className="flex-shrink-0 text-xs font-bold text-[#8c670a]">
                  7.9k+ ratings
                </div>
              </div>
            </div>
          </div>
          <div className="z-10 block h-full py-3">
            <div className="flex h-full flex-1 flex-col">
              <div>
                <Image
                  className="h-auto w-full overflow-hidden rounded border object-cover"
                  src={courseImg}
                  alt="course"
                />
              </div>
              <div className="flex-1 pt-2">
                <p className="text-base font-semibold tracking-tight text-gray-900">
                  Learn the basics of web - Internet fundamentals
                </p>
                <p className="my-1 text-xs text-gray-700">{instructor?.name}</p>
              </div>
              <div className="flex w-full items-end space-x-2">
                <div className="max-w-20">
                  <div className="flex max-w-none items-center justify-center">
                    <Rating value={5} readOnly itemStyles={customStyles} />
                  </div>
                </div>
                <div className="flex-shrink-0 text-xs font-bold text-[#8c670a]">
                  7.9k+ ratings
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default CourseInstructor;
