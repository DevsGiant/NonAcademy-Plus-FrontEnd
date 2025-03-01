import Container from "@/components/ui/Container";
import LogoWhite from "@/components/ui/LogoWhite";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaRegEnvelopeOpen,
  FaYoutube,
} from "react-icons/fa";
import { LuMapPin, LuPhoneCall } from "react-icons/lu";
import assets from "../../../../../public/images/images";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="non-academy-footer relative z-[1] overflow-hidden bg-[#303030] bg-cover text-sm text-white">
      <Container>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-5 lg:grid-cols-4">
          <div className="space-y-2.5 sm:max-w-[260px] md:space-y-3.5">
            <div className="max-w-[200px]">
              <Link href="/">
                <LogoWhite />
              </Link>
            </div>
            <p className="">
              Join NonAcademy, the ed-tech startup revolutionizing learning. Get
              expert instruction, and personalized education.
            </p>
            <div>
              <h3 className="mb-2 text-lg font-semibold text-zinc-300 sm:text-xl lg:mb-3 lg:text-2xl">
                Let’s get social :
              </h3>
              <ul className="flex gap-2.5 text-base lg:gap-3.5">
                <li>
                  <Link
                    href="https://www.facebook.com/nonacademy.net/"
                    target="_blank"
                    className="flex size-9 items-center justify-center rounded-full bg-[#1877F2]"
                  >
                    <FaFacebookF />
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.linkedin.com/company/nonacademy"
                    target="_blank"
                    className="flex size-9 items-center justify-center rounded-full bg-[#0A66C2]"
                  >
                    <FaLinkedinIn />
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.youtube.com/c/NonAcademyMain"
                    className="flex size-9 items-center justify-center rounded-full bg-[#FF0000]"
                  >
                    <FaYoutube />
                  </Link>
                </li>

                {/* <li className="relative z-10">
                <Link
                  href="/"
                  className="block h-10 w-10 rounded-full bg-primary"
                >
                  <FaTwitter className="inline" />
                </Link>
              </li> */}
              </ul>
            </div>
          </div>

          <div>
            <h3 className="mb-2.5 text-lg font-semibold text-zinc-300 sm:text-xl lg:mb-3.5 lg:text-2xl">
              Quick Links
            </h3>
            <ul className="space-y-1.5 lg:space-y-2">
              <li>
                <Link href="/pages/about-us">About Us</Link>
              </li>
              <li>
                <Link href="/pages/refund-policy">Refund Policy</Link>
              </li>
              <li>
                <Link href="/pages/privacy-policy">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/pages/terms-conditions">Terms & Conditions</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-2.5 text-lg font-semibold text-zinc-300 sm:text-xl lg:mb-3.5 lg:text-2xl">
              Useful Links
            </h3>
            <ul className="space-y-1.5 lg:space-y-2">
              <li>
                <Link href="/contact-us">Contact Us</Link>
              </li>
              <li>
                <Link href="/all-courses">Courses</Link>
              </li>
              <li>
                <Link href="/">Lesson</Link>
              </li>
              <li>
                <Link href="/auth/signup">Sign Up</Link>
              </li>
              <li>
                <Link href="/">Testimonials</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-2.5 text-lg font-semibold text-zinc-300 sm:text-xl lg:mb-3.5 lg:text-2xl">
              Contact Us
            </h3>
            <div className="space-y-4 md:space-y-5">
              <div className="flex items-center gap-3">
                <FaRegEnvelopeOpen className="inline" />{" "}
                <span>hello@nonacademy.net</span>
              </div>
              <div className="flex items-start gap-3">
                <LuPhoneCall className="mt-1 inline" />
                <div className="space-y-2">
                  <p>+88 09638-100303</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <LuMapPin className="mt-1 inline" />
                <div className="space-y-2">
                  <p>30/1 CK Ghosh Road, Mymensingh</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* bottom part */}
      <div className="bg-[#353535]">
        <div className="relative mx-auto max-w-7xl px-4 py-4 md:px-6 lg:px-8 xl:px-10 2xl:px-14">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-gray-300">
              © {currentYear}{" "}
              <span className="text-white">NonAcademy Plus</span>. All rights
              reserved.
            </p>
            <div>
              <Image
                className="h-auto max-w-[300px] rounded-md bg-cover md:max-w-[340px]"
                src={assets?.images?.paymentWithoutBg}
                alt="payment-methods"
                // width={300}
                // height={20}
                // style={{ width: "auto", height: "auto" }}
              />
            </div>
            {/* <ul className="flex list-none gap-5">
              <li>
                <Link
                  href="/pages/privacy-policy"
                  className="transition-all duration-200 hover:text-primary"
                >
                  Privacy & Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/pages/terms-conditions"
                  className="transition-all duration-200 hover:text-primary"
                >
                  Terms
                </Link>
              </li>
              <li>
                <Link
                  href="/pages/about-us"
                  className="transition-all duration-200 hover:text-primary"
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  href="/pages/faq"
                  className="transition-all duration-200 hover:text-primary"
                >
                  FAQ
                </Link>
              </li>
            </ul> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
