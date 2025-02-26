import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaAngleDoubleRight,
  FaAngleRight,
  FaAward,
  FaLaptop,
  FaRegCheckCircle,
  FaUsers,
  FaVideo,
} from "react-icons/fa";
import { GoDownload } from "react-icons/go";
import { PiNotebook } from "react-icons/pi";
import {
  blockchainBrand,
  blockchainFaqs,
  blockchainLearnTopics,
  blockchainProjects,
} from "../../../../../public/data/blockchain/blockchain";
import { blockchainCurriculums } from "../../../../../public/data/blockchain/curriculums";
import assets from "../../../../../public/images/images";
import MentorSlider from "./_components/MentorSlider";

export const metadata = {
  title: "Blockchain - NonAcademy",
  description: "An online learning platform. your career building university",
};

const BlockchainPage = () => {
  // Define an array of colors corresponding to each project's icon color
  const borderColors = [
    "border-[#ffd166]", // for card 1
    "border-[#c8e9a0]", // for card 2
    "border-[#00d8ff]", // for card 3
    "border-[#f7a278]", // for card 4
    "border-[#f44336]", // for card 5
    "border-[#008037]", // for card 6
    "border-[#ffd166]", // for card 7
    "border-[#f44336]", // for card 9
    "border-[#c8e9a0]", // for card 2
    "border-[#f7a278]", // for card 4
    "border-[#008037]", // for card 6
  ];

  return (
    <>
      {/* Banner section */}
      <Container>
        <div className="flex w-full flex-col items-center justify-between gap-5 md:flex-row">
          <div className="w-full text-center md:w-1/2 md:text-start">
            <h1 className="page-title text-2xl font-bold text-nad-title md:text-3xl lg:text-[40px] lg:leading-[55px]">
              Blockchain Development: Complete
              <span>
                Job Placement
                <i className="shape">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 412 80"
                    fill="none"
                  >
                    <path d="M305.806 2.85331C216.778 0.253592 110.27 8.31273 42.6574 27.5873C28.675 31.8036 15.9543 36.9207 11.4579 42.9678C8.59028 46.8472 10.1101 51.0141 15.4553 54.6043C29.908 63.9669 64.2676 68.5878 94.0448 71.5208C157.356 77.2108 228.421 78.3203 292.357 73.0696C335.973 69.5087 403.235 59.67 400.689 42.7499C398.968 29.6872 362.584 21.2601 327.502 16.7234C277.749 10.3541 223.316 8.10768 169.95 7.89714C143.316 7.88066 116.733 9.41486 91.7679 12.3734C67.3417 15.343 42.7434 19.508 25.4403 25.8792C22.5555 26.963 17.3307 25.6851 20.0894 24.4969C41.6939 16.1577 76.4033 10.7623 108.423 7.73603C154.97 3.35495 204.465 4.65115 251.866 6.78402C317.832 10.0355 417.074 19.6343 411.798 46.0819C409.188 54.293 391.369 61.0724 371.112 65.7464C314.609 78.3624 239.358 81.3045 172.078 79.5268C130.957 78.3313 89.3878 75.933 52.2409 69.8822C22.934 65.0837 -2.0772 56.9641 0.136592 45.7213C4.30035 29.4437 63.2812 17.3111 105.739 11.1505C143.27 5.73315 183.543 2.3114 224.406 0.800998C251.642 -0.198613 279.24 -0.284661 306.517 0.66735C308.404 0.733259 309.769 1.27517 309.562 1.87933C309.362 2.478 307.681 2.9119 305.806 2.85331Z"></path>
                  </svg>
                </i>
              </span>{" "}
              Preparation!
            </h1>
            <div className="flex justify-center md:justify-start">
              <div className="mt-4 space-y-2 md:mt-6 md:space-y-3 lg:mt-8">
                <div className="flex items-center gap-2 md:text-base lg:gap-2 lg:text-lg">
                  <FaVideo className="text-nad-primary" />
                  <p className="text-[#262626]">Development + Quant-Aptitude</p>
                </div>
                <div className="flex items-center gap-2 md:text-base lg:gap-2 lg:text-lg">
                  <FaUsers className="text-nad-primary" />
                  <p className="text-[#262626]">Individual Doubt Solving</p>
                </div>
                <div className="flex items-center gap-2 md:text-base lg:gap-2 lg:text-lg">
                  <FaLaptop className="text-nad-primary" />
                  <p className="text-[#262626]">Access to Top-Notch Classes</p>
                </div>
              </div>
            </div>
            <Button
              asChild
              size="lg"
              className="mt-4 md:mt-6 md:text-base md:font-semibold lg:mt-8"
            >
              <Link
                href="https://b.link/na/b1e"
                target="_blank"
                className="flex items-center gap-2"
              >
                Enroll Now <FaAngleDoubleRight />
              </Link>
            </Button>
          </div>
          <div className="w-full md:flex md:w-1/2 md:justify-end">
            <Image
              className="h-full max-w-full sm:max-w-[460px] md:max-w-[400px] xl:max-w-[460px]"
              src={assets?.images?.blockchainBanner}
              alt="Blockchain"
            />
          </div>
        </div>
      </Container>

      {/* Learning Path section */}
      <div className="bg-nad-primary-lite-1">
        <Container>
          <SectionTitle
            subtitle="learning Path"
            title="What will you learn in Blockchain?"
          />
          <div className="mt-5 grid grid-cols-1 gap-2 md:mt-6 md:grid-cols-2 md:gap-6 lg:mt-8 lg:gap-8">
            {blockchainLearnTopics?.map((data) => (
              <div
                key={data.id}
                className="rounded-lg border border-stroke bg-white p-2 text-[#262626] sm:p-5 md:p-8"
              >
                <h5 className="pb-3 text-lg md:pb-6 md:text-xl md:font-semibold">
                  {data.title}
                </h5>
                <div className="space-y-2 md:space-y-3">
                  {data?.topics?.map((topic, idx) => (
                    <div
                      key={`topic-${idx}`}
                      className="flex items-start gap-2.5"
                    >
                      <FaRegCheckCircle className="text-[#4caf50]" />
                      <p>{topic}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* curriculum section */}
      <Container>
        <SectionTitle subtitle="Curriculum" title="Know your curriculum" />
        <div className="mt-6 space-y-5 text-[#262626] lg:mt-8 lg:space-y-7">
          {blockchainCurriculums?.map((curriculum) => (
            <div key={curriculum.id}>
              <div className="mb-2 flex gap-1.5 text-base font-medium md:mb-3 md:gap-2.5 md:text-lg">
                <PiNotebook className="mt-1" />
                <p>{curriculum.curriculumTitle}</p>
              </div>
              <Accordion
                type="multiple"
                className="w-full border border-stroke"
              >
                {curriculum?.curriculumsData.map((singleCurriculum, index) => (
                  <AccordionItem
                    key={`curriculum-${singleCurriculum.id}`}
                    value={`item-${index + 1}`}
                    className="border-stroke last:border-b-0"
                  >
                    <AccordionTrigger className="bg-nad-primary-lite-1 p-2 text-left font-medium md:p-5 md:font-bold">
                      {singleCurriculum?.title}
                    </AccordionTrigger>
                    <AccordionContent className="space-y-3 p-2 md:p-5 md:text-base md:font-medium">
                      {singleCurriculum?.curriculums?.map((item, idx) => (
                        <p key={idx}>{item}</p>
                      ))}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
        <div className="mt-5 flex justify-center lg:mt-7">
          <Button
            asChild
            size="lg"
            variant="link"
            className="border border-nad-primary bg-[#e3eeff] md:text-base md:font-semibold"
          >
            <Link
              href="https://drive.google.com/file/d/1GYXGmLYTrvMrfYm26KV-amZ5f3d9XrTn/view"
              target="_blank"
            >
              Download Detailed Syllabus <GoDownload className="ml-1" />
            </Link>
          </Button>
        </div>
      </Container>

      {/* Projects section */}
      <div className="bg-nad-primary-lite-1">
        <Container>
          <SectionTitle
            subtitle="Projects"
            title="Build Industry Grade Projects"
          />
          <div className="mt-6 grid grid-cols-1 gap-3 md:grid-cols-2 lg:mt-8 lg:grid-cols-3 lg:gap-2 xl:gap-5">
            {blockchainProjects?.map((project, idx) => (
              <div
                key={project.id}
                className={`flex flex-col items-center rounded-lg border-b-4 ${borderColors[idx]} bg-white px-5 py-8 text-center drop-shadow lg:rounded-xl lg:px-8 lg:py-12`}
              >
                <div>
                  <Image
                    width={75}
                    height={75}
                    src={project.image}
                    alt={project.title}
                  />
                </div>
                <h6 className="pb-2 pt-4 text-lg font-semibold text-[#262626]">
                  {project.title}
                </h6>
                <p className="text-[#777c85]">{project.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* Mentors section */}
      <Container>
        <SectionTitle subtitle="Mentors" title="Meet Your Mentors" />
        <div className="mt-6 flex flex-col gap-10 lg:mt-8 lg:flex-row lg:items-center lg:justify-between lg:gap-0">
          <div className="flex flex-1 flex-col justify-center space-y-4 px-4 text-[#262626] sm:px-6 md:px-8 lg:mr-4 lg:space-y-6 lg:px-0">
            <h5 className="text-lg font-semibold sm:text-xl lg:text-2xl">
              Instructor Panel{" "}
              <span className="text-nad-primary">Library+</span> ?
            </h5>
            <p className="text-sm sm:text-base lg:text-lg">
              Get PYQ <span className="text-nad-primary">Video Solutions</span>{" "}
              of Google, Microsoft, Atlassian, Adobe, Goldman Sachs created by{" "}
              <span className="font-semibold">same company mentors</span>.
            </p>
            <p className="text-sm sm:text-base lg:text-lg">
              i.e Google’s most Important PYQ Video Solution by Google Mentor.
            </p>
          </div>
          <div className="flex flex-1 items-center justify-center px-4 sm:px-6 md:px-8 lg:ml-4 lg:px-0">
            <MentorSlider />
          </div>
        </div>

        <div className="my-4">
          <div className="grid grid-cols-6 justify-items-center">
            {blockchainBrand?.map((brand) => (
              <div
                key={brand?.id}
                className="h-12 w-12 transform overflow-hidden rounded-lg transition-transform hover:scale-105 md:h-32 md:w-32"
              >
                <div className="flex h-full w-full items-center justify-center bg-white shadow-md">
                  <Image
                    src={brand.image}
                    alt="Brand"
                    className="h-full w-full transform object-contain transition-transform duration-300 hover:scale-110"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="my-4 flex justify-center">
          <Button
            asChild
            size="lg"
            className="hover:bg-nad-primary-dark rounded-lg bg-nad-primary font-semibold text-white shadow-lg transition duration-300"
          >
            <Link
              href="https://b.link/na/b1e"
              className="flex items-center gap-2"
            >
              Enroll Now <FaAngleRight />
            </Link>
          </Button>
        </div>
      </Container>

      {/* Proved Yourself section */}
      <div className="relative bg-nad-primary-lite-1">
        <Container>
          <div className="relative flex w-full flex-col items-center justify-center gap-12 lg:flex-row lg:justify-between lg:gap-8">
            {/* Image Section with Overlays */}
            <div className="relative flex h-[300px] w-full items-center justify-center md:h-[400px] md:w-full lg:h-[500px] lg:w-1/2">
              {/* First Image */}
              <div className="absolute right-6 top-0 z-30 transform transition-transform duration-300 ease-in-out hover:scale-105 sm:right-16 md:right-24 lg:right-8 lg:top-10">
                <div className="rounded-lg bg-white p-2 shadow-md hover:shadow-lg">
                  <Image
                    className="w-40 rounded-lg sm:w-48 lg:w-44"
                    src={assets?.images?.blockchainCodeOne}
                    alt="Code Screenshot 1"
                  />
                </div>
              </div>

              {/* Second Image */}
              <div className="absolute right-36 z-20 rotate-2 transform transition-transform duration-300 ease-in-out hover:z-40 hover:rotate-0 hover:scale-105 sm:right-60 md:right-64 lg:right-28">
                <div className="rounded-lg bg-white p-2 shadow-md hover:shadow-lg">
                  <Image
                    className="w-40 rounded-lg sm:w-48 md:w-44"
                    src={assets?.images?.blockchainCodeTwo}
                    alt="Code Screenshot 2"
                  />
                </div>
              </div>

              {/* Third Image */}
              <div className="absolute -bottom-6 right-16 z-10 rotate-[-3deg] transform transition-transform duration-300  ease-in-out  hover:z-40 hover:rotate-0 hover:scale-105 sm:right-32 md:right-36 lg:bottom-4 lg:right-8">
                <div className="rounded-lg bg-white p-2 shadow-md hover:shadow-lg">
                  <Image
                    className="w-40 rounded-lg sm:w-48 lg:w-44"
                    src={assets?.images?.blockchainCodeThree}
                    alt="Code Screenshot 3"
                  />
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="w-full text-center md:w-1/2 lg:text-left">
              <h2 className="text-xl font-semibold leading-tight tracking-wide text-nad-title md:text-3xl md:font-extrabold lg:text-4xl">
                Unlock{" "}
                <span className="text-nad-primary">Expert Assistance</span> for{" "}
                <br className="hidden lg:block" />
                Your Coding <span className="text-nad-primary">Doubts</span>
              </h2>
              <p className="py-2.5 text-sm font-medium leading-relaxed text-gray-700 md:py-4 md:text-base">
                Receive one-on-one mentorship from experienced teaching
                assistants and connect with a community of peers to help you
                solve your toughest coding problems. Join now and start
                improving your coding skills today.
              </p>
              <div className="mt-2.5 md:mt-6">
                <Button
                  asChild
                  size="lg"
                  className="md:text-base md:font-semibold"
                >
                  <Link
                    href="https://b.link/na/b1e"
                    className="flex items-center gap-2"
                    target="_blank"
                  >
                    Enroll Now
                    <FaAngleRight />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Get Certified section */}
      <Container>
        <SectionTitle subtitle="Certified" title="Get Certified." />
        <div className="mt-6 flex flex-col items-center justify-between gap-6 md:flex-row md:gap-8 lg:mt-8 lg:gap-10">
          <div className="w-full text-[#262626] md:w-1/2 lg:w-[60%]">
            <div className="space-y-2 md:space-y-3 lg:space-y-4">
              <div className="flex items-start gap-1.5 md:gap-3">
                <div>
                  <FaAward className="mt-1 text-xl text-nad-primary md:text-2xl" />
                </div>
                <div>
                  <p className="font-semibold lg:pb-1">Start today</p>
                  <p>
                    You are just months away from cracking your dream company.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-1.5 md:gap-3">
                <div>
                  <FaAward className="mt-1 text-xl text-nad-primary md:text-2xl" />
                </div>
                <div>
                  <p className="font-semibold lg:pb-1">Believe in yourself</p>
                  <p>
                    Coding is simple. You just need the right guidance.
                    Consistency & hard work will help you be
                    Internship/Placement ready for Tech companies.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-1.5 md:gap-3">
                <div>
                  <FaAward className="mt-1 text-xl text-nad-primary md:text-2xl" />
                </div>
                <div>
                  <p className="font-semibold lg:pb-1">Achieve Your Dreams</p>
                  <p>
                    You can unlock new opportunities in your career. Take the
                    first step towards success.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-4 flex justify-center md:mt-6 md:justify-start xl:mt-10">
              <Button
                asChild
                size="lg"
                className="md:text-base md:font-semibold"
              >
                <Link
                  href="https://b.link/na/b1e"
                  className="flex items-center gap-1.5"
                >
                  Enroll Now
                  <FaAngleRight />
                </Link>
              </Button>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-[40%]">
            <p className="pb-1 text-center font-medium md:pb-2 md:text-lg md:font-semibold">
              Start your Placement Journey Today.{" "}
            </p>
            <Image
              className="h-auto max-w-full object-cover"
              src={assets?.images?.blockchainCertificate}
              alt="Certificate"
            />
          </div>
        </div>
      </Container>

      {/* FAQ section */}
      <div className="bg-nad-primary-lite-1">
        <Container>
          <SectionTitle
            title="Frequently asked questions"
            subtitle="Batch related Doubts"
          />
          <Accordion type="multiple" className="mt-6 w-full bg-white lg:mt-8">
            {blockchainFaqs?.map((faq, index) => (
              <AccordionItem
                key={faq.id}
                value={`item-${index + 1}`}
                className=""
              >
                <AccordionTrigger className="p-5 text-left font-semibold text-nad-gray-8 md:p-7">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-5 pb-5 text-sm text-[#262626] md:px-7 md:pb-7 md:text-base md:leading-7">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Container>
      </div>
    </>
  );
};

export default BlockchainPage;
