import { Button } from "@/components/ui/button";
import Container from "@/components/ui/Container";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaRegEnvelope } from "react-icons/fa";
import { FiHeadphones } from "react-icons/fi";
import { GrLocation } from "react-icons/gr";
import { contactUsData } from "../../../../public/data/contactUs";
import assets from "../../../../public/images/images";
import ContactForm from "./_components/ContactForm";

export const metadata = {
  title: "Contact Us - NonAcademy Plus",
  description: "With NonAcademy Plus Towards Fulfilling Your Dreams.",
};

const ContactUsPage = () => {
  return (
    <div className="bg-nad-primary-lite-1/70 2xl:min-h-screen">
      {/* Contact Banner part */}
      <div className="bg-nad-primary text-white">
        <Container className="!pb-0 md:!pb-0 lg:!pb-0 xl:!pb-0">
          <div className="flex flex-col items-center gap-5 md:flex-row lg:gap-8 xl:gap-10">
            <div className="w-full space-y-3 pb-6 text-center md:w-[57%] md:pb-0 md:text-left lg:space-y-6">
              <h2 className="text-2xl font-semibold md:text-3xl md:font-bold lg:text-5xl">
                Get in Touch
              </h2>
              <p className="lg:text-lg">
                We&apos;d love to hear from you. Our team is always here to help
                with any questions or inquiries.
              </p>
              <Button
                size="lg"
                className="gap-2 bg-white text-base text-black hover:bg-white/90"
                asChild
              >
                <Link href="#contact-form">
                  Contact Us Now <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="hidden w-full md:block md:w-[43%]">
              <Image
                className="h-full w-full rounded-t-lg object-cover"
                src={assets?.images?.contactHero}
                alt="Contact Us"
              />
            </div>
          </div>
        </Container>
      </div>

      {/* Contact info part */}
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

      {/* Contact form part */}
      <Container>
        <ContactForm />
      </Container>
    </div>
  );
};

export default ContactUsPage;
