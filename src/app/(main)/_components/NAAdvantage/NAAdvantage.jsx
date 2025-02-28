import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import React from "react";
import { advantages } from "../../../../../public/data/advantage";

const NAAdvantage = () => {
  return (
    <div className="bg-[#F8F8F8]">
      <Container>
        <SectionTitle
          title="NonAcademy Plus Advantage"
          subtitle="Stay ahead with all-round performance in your chosen stream"
        />

        <div className="mt-5 grid grid-cols-1 gap-4 md:mt-9 md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-7">
          {advantages?.map((advantage) => (
            <div
              key={advantage.id}
              className="rounded-lg bg-white p-5 shadow-[0_1px_8px_0_rgba(0,0,0,0.08)] md:p-7"
            >
              <div className="mb-3 flex items-center gap-3 text-lg font-semibold md:mb-4 md:text-xl">
                <div className="text-nad-primary-3">{advantage.icon}</div>
                <h6 className="text-nad-gray-7">{advantage.title}</h6>
              </div>
              <ul className="list-disc space-y-2 pl-4 text-sm text-gray-700 md:pl-5">
                {advantage.data?.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default NAAdvantage;
