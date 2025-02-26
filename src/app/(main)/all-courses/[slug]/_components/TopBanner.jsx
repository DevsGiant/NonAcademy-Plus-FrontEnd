import { Button } from "@/components/ui/button";
import { AuthContext } from "@/contexts/AuthProvider";
import { Rating, StickerStar } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import Link from "next/link";
import React, { useContext } from "react";
import { FaUsers } from "react-icons/fa";
import { MdAlarm, MdGroups } from "react-icons/md";

const customStyles = {
  itemShapes: StickerStar,
  activeFillColor: "#ffb700",
  inactiveFillColor: "#fbf1a9",
};

const TopBanner = ({
  title,
  short_description,
  instructor_name,
  ratings,
  students,
  price,
  id,
  slug,
  isFree,
}) => {
  const { loggedInUser } = useContext(AuthContext);

  return (
    <div className="flex-grow lg:mr-8 xl:mr-10">
      <div className="gap-2 space-y-3">
        <h2 className="text-2xl font-bold md:text-4xl">{title}</h2>
        <p className="text-justify text-sm sm:text-left md:text-lg">
          {short_description}
        </p>
        {/* TODO: static data removed */}
        {/* <div>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5">
              <div className="text-sm font-bold text-nad-warning-4">4.6</div>
              <div className="-mt-0.5 max-w-[70px]">
                <div className="flex max-w-none items-center justify-center">
                  <Rating value={4.6} readOnly itemStyles={customStyles} />
                </div>
              </div>
            </div>
            <div className="text-xs font-medium text-gray-300">
              (3k ratings)
            </div>
            <div className="inline-flex items-center gap-1 rounded-sm bg-gray-50 px-1.5 py-0.5 text-[10px] font-medium tracking-wide text-nad-gray-8">
              <FaUsers />
              <span>17.8k</span>
              <span>students</span>
              <span>enrolled</span>
            </div>
          </div>
          <div className="mt-2 inline-block items-center rounded-full bg-red-100 px-2.5 py-0.5 text-[10px] font-medium text-red-800">
            Excellent Rating
          </div>
        </div> */}
        <div>
          <span className="text-sm">
            Course Instructor:{" "}
            <span className="cursor-pointer font-bold underline">
              {instructor_name}
            </span>
          </span>
        </div>
        <div className="block pt-6 lg:hidden">
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
            Includes <b>lifetime access</b> to current and future updates to the
            course. Learn at your own pace, anytime.
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
      {/* Ads Banner part */}
      <div className="mt-4 rounded-lg bg-gradient-to-r from-[#002761] via-[#0056d2] to-[#002761] px-6 py-6 text-white shadow-lg md:mt-6">
        <div className="flex flex-col items-center justify-between gap-3 text-center md:flex-row md:text-left ">
          <h2 className="w-full text-lg font-semibold md:w-[70%] md:text-xl md:font-bold md:leading-normal lg:text-2xl lg:leading-relaxed">
            যুক্ত হন বাংলাদেশের সবচেয়ে বড় ও এক্টিভ ব্লকচেইন কমিউনিটিতে
          </h2>
          <Link
            href="https://www.facebook.com/groups/nonacademy1"
            target="_blank"
            className="inline-flex h-10 items-center justify-center gap-2 whitespace-nowrap rounded-full bg-white px-4 py-2 text-base font-semibold text-nad-title shadow ring-offset-background transition-colors hover:bg-gray-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 md:font-bold"
          >
            <MdGroups className="text-lg" /> <span>Join Here</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopBanner;
