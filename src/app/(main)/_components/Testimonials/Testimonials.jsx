import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";
import { studentsFeedback } from "../../../../../public/data/studentsFeedback";

const Testimonials = () => {
  // Split the feedback array into two halves
  const midIndex = Math.ceil(studentsFeedback.length / 2);
  const firstSlotFeedback = studentsFeedback?.slice(0, midIndex);
  const secondSlotFeedback = studentsFeedback?.slice(midIndex);

  return (
    <Container>
      <SectionTitle
        subtitle="Education For Everyone"
        title="See what our learners are saying"
      />
      {/* First slot */}
      <div className="mb-4 mt-4 md:mb-8 lg:mt-8">
        <Marquee speed="30" autoFill>
          {firstSlotFeedback?.map((feedback, index) => (
            <div
              key={feedback.id}
              className={`mx-2 h-[220px] w-[300px] rounded-lg border p-4 shadow md:mx-4 md:h-[280px] md:w-[360px] md:p-6 md:shadow-xl ${
                index % 2 === 0
                  ? "border-stroke bg-white text-black"
                  : "custom-gradient custom-gradient-border text-white"
              }`}
            >
              <div className="flex gap-2 lg:gap-4">
                <Image
                  className="size-[45px] h-auto max-w-full rounded-full md:size-[50px]"
                  width={80}
                  height={80}
                  src={feedback?.image}
                  alt={feedback?.name}
                />
                <div>
                  <p
                    className={`text-sm font-semibold md:text-base ${index % 2 === 0 ? "text-slate-900" : "text-white"}`}
                  >
                    {feedback?.name}
                  </p>
                  <p className="text-xs lg:text-sm">{feedback?.title}</p>
                </div>
              </div>
              <p
                className={`mt-4 text-xs md:text-sm lg:mt-6 ${index % 2 === 0 ? "text-slate-700" : "text-white"}`}
              >
                {feedback?.comment}
              </p>
            </div>
          ))}
        </Marquee>
      </div>

      {/* Second slot */}
      <div>
        <Marquee direction="right" speed="30" autoFill>
          {secondSlotFeedback?.map((feedback, index) => (
            <div
              key={feedback.id}
              className={`mx-2 h-[220px] w-[300px] rounded-lg border p-4 shadow md:mx-4 md:h-[280px] md:w-[360px] md:p-6 md:shadow-xl ${
                index % 2 === 0
                  ? "border-stroke bg-white text-black"
                  : "custom-gradient custom-gradient-border text-white"
              }`}
            >
              <div className="flex gap-2 md:gap-4">
                <Image
                  className="size-[45px] h-auto max-w-full rounded-full md:size-[50px]"
                  width={80}
                  height={80}
                  src={feedback?.image}
                  alt={feedback?.name}
                />
                <div>
                  <p
                    className={`text-sm font-semibold md:text-base ${index % 2 === 0 ? "text-slate-900" : "text-white"}`}
                  >
                    {feedback?.name}
                  </p>
                  <p className="text-xs lg:text-sm">{feedback?.title}</p>
                </div>
              </div>
              <p
                className={`mt-4 text-xs md:text-sm lg:mt-6 ${index % 2 === 0 ? "text-slate-700" : "text-white"}`}
              >
                {feedback?.comment}
              </p>
            </div>
          ))}
        </Marquee>
      </div>
    </Container>
  );
};

export default Testimonials;
