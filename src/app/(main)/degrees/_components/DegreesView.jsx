"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const DegreesView = ({ data }) => {
  return (
    <div>
      {data?.map((degree, index) => {
        let lesson = 0;
        degree?.modules?.forEach(
          (module) => (lesson += module.lessons?.length || 0),
        );

        return (
          <Link
            href={`/degrees/${degree?.slug}`}
            key={index}
            className="grid grid-cols-1 gap-4 rounded-md border-b-2 border-stroke bg-white p-4 transition-colors last:border-b-0 hover:bg-gray-3 md:gap-5 md:p-5 lg:grid-cols-3"
          >
            <Image
              src={degree?.image}
              alt={degree?.title}
              className="aspect-video h-64 rounded-lg"
              width={600}
              height={400}
            />
            <div className="space-y-3 lg:col-span-2 lg:col-start-2">
              <h2 className="text-lg font-semibold text-nad-title lg:text-2xl">
                {degree?.bangla_title || degree?.title}
              </h2>
              <hr />
              <div className="flex items-center gap-3">
                <p className="w-max rounded bg-[#e3eeff] px-2 py-1 text-xs font-semibold text-nad-primary md:text-sm">
                  {(degree?.modules?.length || 0).toLocaleString("bn-BD")} মডিউল
                  {/* Modules */}
                </p>
                <p className="w-max rounded bg-[#e3eeff] px-2 py-1 text-xs font-semibold text-nad-primary md:text-sm">
                  {(lesson || 0).toLocaleString("bn-BD")} পাঠ
                  {/* Lesson */}
                </p>
              </div>
              <p className="text-sm leading-6 text-nad-gray-8">
                {degree?.short_description}
              </p>
              <div className="flex flex-wrap-reverse items-center gap-3">
                {degree?.modules?.map((course, idx) => (
                  <p
                    key={idx}
                    className="w-max whitespace-nowrap rounded bg-[#e3eeff] px-2 py-1 text-xs font-semibold text-nad-primary md:text-sm"
                  >
                    {course?.bangla_title || course?.title}
                  </p>
                ))}
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default DegreesView;
