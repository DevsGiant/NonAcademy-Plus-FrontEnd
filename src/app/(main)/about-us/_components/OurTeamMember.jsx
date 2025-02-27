"use client";

import SectionTitle from "@/components/ui/SectionTitle";
import Image from "next/image";
import React from "react";
import { mentorsData } from "../../../../../public/data/mentors";

const OurTeamMember = () => {
  return (
    <section className=" bg-white">
      <div className="container mx-auto">
        <SectionTitle subtitle="Our Team" title="Meet Our Expert Instructor" />
        <div className="grid grid-cols-1 gap-10 py-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {mentorsData?.map((member) => (
            <div key={member.id}>
              <div className="overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  className="transform rounded-lg object-cover transition-transform duration-300 hover:scale-105 xl:!h-[35vh] "
                  // layout="responsive" // Adjust as necessary
                />
              </div>
              <div className="py-3 text-center">
                <h4 className="text-lg font-semibold text-gray-900">
                  {member.name}
                </h4>
                <p className="text-sm text-gray-500">{member.designation}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeamMember;
