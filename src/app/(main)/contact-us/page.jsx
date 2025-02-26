import Container from "@/components/ui/Container";
import React from "react";
import { FaRegEnvelope } from "react-icons/fa";
import { FiHeadphones } from "react-icons/fi";
import { GrLocation } from "react-icons/gr";
import { contactUsData } from "../../../../public/data/contactUs";
import ContactForm from "./_components/ContactForm";

export const metadata = {
  title: "Contact Us - NonAcademy",
  description: "A online learning platform. your career building university",
};

const ContactUsPage = () => {
  return (
    <div className="bg-nad-primary-lite-1/70 2xl:min-h-screen">
      <Container className="!pb-0 md:!pb-0 lg:!pb-0 xl:!pb-0">
        <div className="flex w-full flex-col justify-center gap-5 md:flex-row lg:gap-10 xl:gap-12">
          <div className="flex flex-col gap-4 rounded bg-white p-7 shadow md:w-1/3 lg:gap-5 lg:rounded-lg lg:p-10">
            <FiHeadphones className="text-3xl font-bold text-primary" />
            <h6 className="text-lg font-semibold tracking-wide text-nad-gray-8 lg:text-xl lg:font-bold">
              Contact Phone Number
            </h6>
            <div className="space-y-1 text-gray-600 lg:space-y-1.5">
              {contactUsData?.phone?.map((item, index) => (
                <p key={index}>{item}</p>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-4 rounded bg-white p-7 shadow md:w-1/3 lg:gap-5 lg:rounded-lg lg:p-10">
            <FaRegEnvelope className="text-3xl font-bold text-primary" />
            <h6 className="text-lg font-semibold tracking-wide text-nad-gray-8 lg:text-xl lg:font-bold">
              Our Email Address
            </h6>
            <div className="space-y-1 text-gray-600 lg:space-y-1.5">
              {contactUsData?.email?.map((item, index) => (
                <p key={index}>{item}</p>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-4 rounded bg-white p-7 shadow md:w-1/3 lg:gap-5 lg:rounded-lg lg:p-10">
            <GrLocation className="text-3xl font-bold text-primary" />
            <h6 className="text-lg font-semibold tracking-wide text-nad-gray-8 lg:text-xl lg:font-bold">
              Our Location
            </h6>
            <div className="space-y-1 text-gray-600 lg:space-y-1.5">
              {contactUsData?.location?.map((item, index) => (
                <p key={index}>{item}</p>
              ))}
            </div>
          </div>
        </div>
      </Container>
      <Container>
        <ContactForm />
      </Container>
    </div>
  );
};

export default ContactUsPage;
