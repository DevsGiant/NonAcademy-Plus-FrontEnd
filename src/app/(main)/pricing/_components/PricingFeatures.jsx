"use client";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { sendGTMEvent } from "@next/third-parties/google";
import React, { useEffect } from "react";

const PricingFeatures = () => {
  useEffect(() => {
    sendGTMEvent({ event: "viewPricingPage", page: "pricing" });
  }, []);

  return (
    <Container>
      <SectionTitle subtitle="Feature Compare" title="Compare All Features" />
      <div className="mt-6 overflow-auto shadow-lg lg:mt-8">
        <table className="w-full table-auto text-xs lg:text-sm">
          <thead>
            <tr className="bg-[#073E7E] text-left italic text-white">
              <th className=""></th>
              <th className="p-2.5 text-center text-base font-medium lg:p-4 lg:text-lg lg:font-semibold">
                Basic
              </th>
              <th className="p-2.5 text-center text-base font-medium lg:p-4 lg:text-lg lg:font-semibold">
                Standard
              </th>
              <th className="p-2.5 text-center text-base font-medium lg:p-4 lg:text-lg lg:font-semibold">
                Premium
              </th>
            </tr>
          </thead>
          <tbody className="w-full divide-y divide-gray-200">
            <tr className="bg-[#cfe2ff] text-sm font-medium md:text-base lg:font-semibold">
              <td className="p-2.5 lg:p-4">Learn</td>
              <td colSpan="3"></td>
            </tr>
            <tr>
              <td className="p-2.5 lg:p-4">Coding Courses</td>
              <td className="p-2.5 text-center lg:p-4">Limited</td>
              <td className="p-2.5 text-center text-sm font-semibold text-nad-primary lg:p-4 lg:text-base">
                ✔
              </td>
              <td className="p-2.5 text-center text-sm font-semibold text-nad-primary lg:p-4 lg:text-base">
                ✔
              </td>
            </tr>
            <tr>
              <td className="p-2.5 lg:p-4">In-browser Coding Labs</td>
              <td className="p-2.5 text-center lg:p-4">Limited</td>
              <td className="p-2.5 text-center text-sm font-semibold text-nad-primary lg:p-4 lg:text-base">
                ✔
              </td>
              <td className="p-2.5 text-center text-sm font-semibold text-nad-primary lg:p-4 lg:text-base">
                ✔
              </td>
            </tr>
            <tr>
              <td className="p-2.5 lg:p-4">Custom Tailored Learning Paths</td>
              <td className="p-2.5 text-center text-sm font-semibold lg:p-4 lg:text-base">
                —
              </td>
              <td className="p-2.5 text-center text-sm font-semibold text-nad-primary lg:p-4 lg:text-base">
                ✔
              </td>
              <td className="p-2.5 text-center text-sm font-semibold text-nad-primary lg:p-4 lg:text-base">
                ✔
              </td>
            </tr>
            <tr>
              <td className="p-2.5 lg:p-4">AI Powered Learning Experience</td>
              <td className="p-2.5 text-center text-sm font-semibold lg:p-4 lg:text-base">
                —
              </td>
              <td className="p-2.5 text-center text-sm font-semibold text-nad-primary lg:p-4 lg:text-base">
                ✔
              </td>
              <td className="p-2.5 text-center text-sm font-semibold text-nad-primary lg:p-4 lg:text-base">
                ✔
              </td>
            </tr>

            <tr className="bg-[#cfe2ff] text-sm font-medium md:text-base lg:font-semibold">
              <td className="p-2.5 lg:p-4">Apply</td>
              <td colSpan="3"></td>
            </tr>
            <tr>
              <td className="p-2.5 lg:p-4">
                1000+ Interview Practice Problems
              </td>
              <td className="p-2.5 text-center text-sm font-semibold lg:p-4 lg:text-base">
                —
              </td>
              <td className="p-2.5 text-center text-sm font-semibold text-nad-primary lg:p-4 lg:text-base">
                ✔
              </td>
              <td className="p-2.5 text-center text-sm font-semibold text-nad-primary lg:p-4 lg:text-base">
                ✔
              </td>
            </tr>
            <tr>
              <td className="p-2.5 lg:p-4">100+ Coding Projects</td>
              <td className="p-2.5 text-center text-sm font-semibold lg:p-4 lg:text-base">
                —
              </td>
              <td className="p-2.5 text-center text-sm font-semibold text-nad-primary lg:p-4 lg:text-base">
                ✔
              </td>
              <td className="p-2.5 text-center text-sm font-semibold text-nad-primary lg:p-4 lg:text-base">
                ✔
              </td>
            </tr>
            <tr>
              <td className="p-2.5 lg:p-4">AWS/DevOps Labs</td>
              <td className="p-2.5 text-center text-sm font-semibold lg:p-4 lg:text-base">
                —
              </td>
              <td className="p-2.5 text-center text-sm font-semibold text-nad-primary lg:p-4 lg:text-base">
                ✔
              </td>
              <td className="p-2.5 text-center text-sm font-semibold text-nad-primary lg:p-4 lg:text-base">
                ✔
              </td>
            </tr>

            <tr className="bg-[#cfe2ff] text-sm font-medium md:text-base lg:font-semibold">
              <td className="p-2.5 lg:p-4">Grow</td>
              <td colSpan="3"></td>
            </tr>
            <tr>
              <td className="p-2.5 lg:p-4">Learning Path Certification</td>
              <td className="p-2.5 text-center text-sm font-semibold lg:p-4 lg:text-base">
                —
              </td>
              <td className="p-2.5 text-center text-sm font-semibold text-nad-primary lg:p-4 lg:text-base">
                ✔
              </td>
              <td className="p-2.5 text-center text-sm font-semibold text-nad-primary lg:p-4 lg:text-base">
                ✔
              </td>
            </tr>
            <tr>
              <td className="p-2.5 lg:p-4">
                Interview Preparation Kit (Beta Access)
              </td>
              <td className="p-2.5 text-center text-sm font-semibold lg:p-4 lg:text-base">
                —
              </td>
              <td className="p-2.5 text-center text-sm font-semibold text-nad-primary lg:p-4 lg:text-base">
                ✔
              </td>
              <td className="p-2.5 text-center text-sm font-semibold text-nad-primary lg:p-4 lg:text-base">
                ✔
              </td>
            </tr>

            <tr className="bg-[#cfe2ff] text-sm font-medium md:text-base lg:font-semibold">
              <td className="p-2.5 lg:p-4">Enterprise</td>
              <td colSpan="3"></td>
            </tr>
            <tr>
              <td className="p-2.5 lg:p-4">Single Sign-on Login</td>
              <td className="p-2.5 text-center text-sm font-semibold lg:p-4 lg:text-base">
                —
              </td>
              <td className="p-2.5 text-center text-sm font-semibold text-nad-primary lg:p-4 lg:text-base">
                ✔
              </td>
              <td className="p-2.5 text-center text-sm font-semibold text-nad-primary lg:p-4 lg:text-base">
                ✔
              </td>
            </tr>
            <tr>
              <td className="p-2.5 lg:p-4">Dedicated Support Engineer</td>
              <td className="p-2.5 text-center text-sm font-semibold lg:p-4 lg:text-base">
                —
              </td>
              <td className="p-2.5 text-center text-sm font-semibold lg:p-4 lg:text-base">
                —
              </td>
              <td className="p-2.5 text-center text-sm font-semibold text-nad-primary lg:p-4 lg:text-base">
                ✔
              </td>
            </tr>
            <tr>
              <td className="p-2.5 lg:p-4">
                Organization Management and Detailed Reports
              </td>
              <td className="p-2.5 text-center text-sm font-semibold lg:p-4 lg:text-base">
                —
              </td>
              <td className="p-2.5 text-center text-sm font-semibold lg:p-4 lg:text-base">
                —
              </td>
              <td className="p-2.5 text-center text-sm font-semibold text-nad-primary lg:p-4 lg:text-base">
                ✔
              </td>
            </tr>
            <tr>
              <td className="p-2.5 lg:p-4">Custom Branding</td>
              <td className="p-2.5 text-center text-sm font-semibold lg:p-4 lg:text-base">
                —
              </td>
              <td className="p-2.5 text-center text-sm font-semibold lg:p-4 lg:text-base">
                —
              </td>
              <td className="p-2.5 text-center text-sm font-semibold text-nad-primary lg:p-4 lg:text-base">
                ✔
              </td>
            </tr>
            <tr>
              <td className="p-2.5 lg:p-4">Private Learning Paths</td>
              <td className="p-2.5 text-center text-sm font-semibold lg:p-4 lg:text-base">
                —
              </td>
              <td className="p-2.5 text-center text-sm font-semibold lg:p-4 lg:text-base">
                —
              </td>
              <td className="p-2.5 text-center text-sm font-semibold text-nad-primary lg:p-4 lg:text-base">
                ✔
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Container>
  );
};

export default PricingFeatures;
