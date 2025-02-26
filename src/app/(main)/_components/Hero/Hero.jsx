import { Button } from "@/components/ui/button";
import Container from "@/components/ui/Container";
import Image from "next/image";
import Link from "next/link";
import { FaPlay } from "react-icons/fa";
import assets from "../../../../../public/images/images";
import Brand from "./Brand";
import Expert from "./Expert";
import "./hero.css";
import Students from "./Students";

const Hero = () => {
  return (
    <div className="h-full w-full bg-nad-primary-lite-1">
      <Container className="overflow-hidden !pb-10 md:!pb-0">
        <div className="flex flex-wrap items-center justify-center lg:flex-nowrap lg:justify-between">
          {/* hero content */}
          <div className="flex max-w-full flex-col items-center gap-3 text-center md:gap-5 lg:max-w-[350px] lg:items-start lg:text-left xl:max-w-[450px] xl:gap-7 2xl:max-w-[750px]">
            <h5 className="text-base font-semibold text-nad-secondary md:font-bold lg:text-lg">
              Build Your Career Right Now
            </h5>
            <h1 className="hero-title text-2xl font-bold text-nad-title md:text-4xl lg:text-[40px] lg:leading-[55px] xl:text-[55px] xl:leading-tight">
              Let&apos;s Explore New and Skills{" "}
              <span>
                Knowledge
                <i className="shape">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 412 80"
                    fill="none"
                  >
                    <path d="M305.806 2.85331C216.778 0.253592 110.27 8.31273 42.6574 27.5873C28.675 31.8036 15.9543 36.9207 11.4579 42.9678C8.59028 46.8472 10.1101 51.0141 15.4553 54.6043C29.908 63.9669 64.2676 68.5878 94.0448 71.5208C157.356 77.2108 228.421 78.3203 292.357 73.0696C335.973 69.5087 403.235 59.67 400.689 42.7499C398.968 29.6872 362.584 21.2601 327.502 16.7234C277.749 10.3541 223.316 8.10768 169.95 7.89714C143.316 7.88066 116.733 9.41486 91.7679 12.3734C67.3417 15.343 42.7434 19.508 25.4403 25.8792C22.5555 26.963 17.3307 25.6851 20.0894 24.4969C41.6939 16.1577 76.4033 10.7623 108.423 7.73603C154.97 3.35495 204.465 4.65115 251.866 6.78402C317.832 10.0355 417.074 19.6343 411.798 46.0819C409.188 54.293 391.369 61.0724 371.112 65.7464C314.609 78.3624 239.358 81.3045 172.078 79.5268C130.957 78.3313 89.3878 75.933 52.2409 69.8822C22.934 65.0837 -2.0772 56.9641 0.136592 45.7213C4.30035 29.4437 63.2812 17.3111 105.739 11.1505C143.27 5.73315 183.543 2.3114 224.406 0.800998C251.642 -0.198613 279.24 -0.284661 306.517 0.66735C308.404 0.733259 309.769 1.27517 309.562 1.87933C309.362 2.478 307.681 2.9119 305.806 2.85331Z"></path>
                  </svg>
                </i>
              </span>
            </h1>
            <p className="text-[#625F71] md:text-base lg:text-lg xl:text-xl">
              We&apos;re committed to providing top-quality tutoring to boost
              your knowledge and skills. Let&apos;s dive in and enjoy focused,
              stress-free learning!
            </p>
            <div className="flex items-center gap-7 md:gap-8 xl:gap-9">
              <Button
                asChild
                size="lg"
                className="rounded-full text-sm font-semibold md:text-base md:tracking-wide"
              >
                <Link href="/all-courses">Get Started</Link>
              </Button>
              <div>
                <Link
                  href="https://www.youtube.com/c/NonAcademyMain"
                  className="flex items-center gap-2 md:gap-3.5"
                >
                  <div className="relative flex items-center justify-center">
                    {/* Outer circles with sequential ping animation */}
                    <div className="ping-animation-1 absolute size-7 rounded-full border border-nad-secondary opacity-50 md:size-9"></div>
                    <div className="ping-animation-2 absolute size-7 rounded-full border border-nad-secondary opacity-50 md:size-9"></div>
                    <div className="ping-animation-3 absolute size-7 rounded-full border border-nad-secondary opacity-50 md:size-9"></div>
                    {/* Inner circle with icon */}
                    <FaPlay className="text-nad-secondary" />
                  </div>
                  <span className="hidden font-semibold text-nad-secondary xl:block xl:text-xl">
                    Watch Our Video
                  </span>
                </Link>
              </div>
            </div>
          </div>
          {/* hero images */}
          <div className="relative pt-20 md:pt-0 lg:pr-10 xl:pr-12 2xl:pr-0">
            <Image
              className="h-full max-w-full sm:max-w-[550px] md:max-w-[500px] xl:max-w-[550px]"
              src={assets?.images?.student}
              alt="NonAcademy"
            />
            {/* total students count card */}
            <Students />
            {/* total expert mentor count card */}
            <Expert />
            <div className="shape-one-animation">
              <Image
                className="h-auto max-w-full"
                src={assets?.svgs?.shapeOne}
                alt="shape"
              />
            </div>
            <div className="shape-two-animation">
              <Image
                className="h-auto max-w-full"
                src={assets?.svgs?.shapeTwo}
                alt="shape"
              />
            </div>
            <div className="shape-three-animation">
              <Image
                className="h-auto max-w-full"
                src={assets?.svgs?.shapeThree}
                alt="shape"
              />
            </div>
            <div className="shape-four-animation">
              <Image
                className="h-auto max-w-full"
                src={assets?.svgs?.shapeFour}
                alt="shape"
              />
            </div>
          </div>
        </div>
      </Container>
      {/* marquee brand */}
      <div className="overflow-hidden py-6 md:py-12 2xl:py-20">
        <Brand />
      </div>
    </div>
  );
};

export default Hero;
