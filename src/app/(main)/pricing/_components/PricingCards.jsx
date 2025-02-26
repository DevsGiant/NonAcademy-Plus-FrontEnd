import { fetchSubscriptionData } from "@/api/services/subscription/getSubscriptionData";
import Container from "@/components/ui/Container";
import React from "react";
import { FaCheck } from "react-icons/fa";
import PricingBtn from "./PricingBtn";
import PricingTitle from "./PricingTitle";

const PricingCards = async ({ slug }) => {
  const getPricingData = await fetchSubscriptionData(slug);

  return (
    <div className="bg-gradient-to-r from-nad-gray-9 via-nad-gray-8 to-nad-gray-9 text-white">
      <Container>
        {/* Pricing title section */}
        <PricingTitle />
        <div
          className={`mt-4 grid grid-cols-1 gap-5 md:mt-8 lg:mt-10 ${
            getPricingData?.data?.length >= 4
              ? "sm:grid-cols-2 sm:gap-3 md:grid-cols-3 lg:grid-cols-4 lg:gap-4"
              : "sm:gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6"
          }`}
        >
          {/* Cards */}
          {getPricingData?.data?.map(
            (data) =>
              data?.isActive && (
                <div
                  key={data?._id}
                  className="mx-auto w-full max-w-sm rounded-lg bg-white px-5 py-7 text-black shadow-md lg:rounded-2xl lg:px-5 lg:py-8"
                >
                  <p className="pb-1.5 text-center text-base font-medium text-nad-logo md:text-lg lg:pb-3">
                    {data?.title}
                  </p>
                  <div className="space-y-3 md:space-y-4 lg:space-y-6">
                    <h3 className="text-center text-xl font-bold leading-10 md:text-2xl lg:text-4xl lg:-tracking-wide">
                      ৳{data?.price}
                    </h3>
                    <div className="text-center text-gray-700 md:font-medium">
                      Duration: {data?.durationInDays} days
                    </div>
                    {/* Subscribe button and logic */}
                    <PricingBtn id={data?._id} courseId={data?.id} />
                  </div>
                  <hr className="mt-4 border-stroke" />
                  <div className="pt-4 lg:pt-6">
                    <p className="text-xs text-black/80 lg:text-sm">
                      {data?.description}
                    </p>
                    <ul className="space-y-2 pt-4 lg:space-y-3">
                      {data?.benefits?.map((benefit, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-x-2 text-xs lg:gap-x-3 lg:text-sm"
                        >
                          <FaCheck className="text-nad-primary" /> {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ),
          )}
        </div>
      </Container>
    </div>
  );
};

export default PricingCards;
