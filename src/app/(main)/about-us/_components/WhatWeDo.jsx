import SectionTitle from "@/components/ui/SectionTitle";
import {
  FaChalkboardTeacher,
  FaGraduationCap,
  FaHeadset,
} from "react-icons/fa";

const WhatWeDo = () => {
  return (
    <div>
      <SectionTitle
        subtitle="What we do"
        title="Online Education Tailored to You"
      />
      <div className="my-8 grid grid-cols-1 items-center justify-center gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {/* Learn From Anywhere */}
        <div className="flex flex-col items-center rounded-lg bg-white p-14 text-center text-[#0F2239] shadow-lg  transition-transform duration-300 hover:scale-105 hover:bg-[#0D5EF4] hover:text-white hover:shadow-2xl">
          <FaChalkboardTeacher className="my-8 text-6xl transition-colors duration-300 hover:text-white" />
          <h2 className="mb-4 text-2xl font-bold transition-colors duration-300 hover:text-white">
            Learn From Anywhere
          </h2>
          <p className="transition-colors duration-300 hover:text-white">
            Access top-notch development courses worldwide with flexible,
            self-paced online programs designed for career enhancement.
          </p>
        </div>

        {/* Expert Instructor */}
        <div className="flex flex-col items-center rounded-lg bg-white p-14 text-center text-[#0F2239] shadow-lg  transition-transform duration-300 hover:scale-105 hover:bg-[#0D5EF4] hover:text-white hover:shadow-2xl">
          <FaGraduationCap className="my-8 text-6xl transition-colors duration-300 hover:text-white" />
          <h2 className="mb-4 text-2xl font-bold transition-colors duration-300 hover:text-white">
            Expert Instructor
          </h2>
          <p className="transition-colors duration-300 hover:text-white">
            Learn from seasoned experts offering real-world insights and
            personalized mentorship to accelerate your career growth.
          </p>
        </div>

        {/* 24/7 Live Support */}
        <div className="flex flex-col items-center rounded-lg bg-white p-14 text-center text-[#0F2239] shadow-lg  transition-transform duration-300 hover:scale-105 hover:bg-[#0D5EF4] hover:text-white hover:shadow-2xl">
          <FaHeadset className="my-8 text-6xl transition-colors duration-300 hover:text-white" />
          <h2 className="mb-4 text-2xl font-bold transition-colors duration-300 hover:text-white">
            24/7 Live Support
          </h2>
          <p className="transition-colors duration-300 hover:text-white">
            Our 24/7 support team provides prompt help with course material and
            technical issues for seamless learning.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
