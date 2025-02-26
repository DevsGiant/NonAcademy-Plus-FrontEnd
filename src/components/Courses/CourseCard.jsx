import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoArrowForward } from "react-icons/io5";
import { Button } from "../ui/button";

const CourseCard = ({ course }) => {
  const { _id, slug, title, thumbnail } = course;

  return (
    <Link
      href={`/all-courses/${slug}`}
      key={_id}
      className="h-full w-full overflow-hidden rounded-lg border border-stroke bg-white shadow-sm transition-all hover:border-slate-400/60 hover:shadow"
    >
      <div className="flex h-full w-full flex-col items-start">
        <div className="aspect-video h-auto w-full flex-shrink-0 overflow-hidden">
          <Image
            src={thumbnail}
            width={300}
            height={150}
            alt={title}
            className="aspect-video h-auto w-full rounded-t-lg object-cover"
          />
        </div>
        <div className="flex-grow p-4">
          <h4 className="text-lg font-semibold lg:text-xl">{title}</h4>
        </div>
        <div className="w-full space-y-4 p-4">
          <Button
            variant="outline"
            className="w-full bg-slate-200 hover:bg-slate-200/80"
          >
            View Details <IoArrowForward className="ml-1.5 text-base" />
          </Button>
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;
