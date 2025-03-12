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
import "./footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="non-academy-footer relative z-[1] overflow-hidden bg-nad-title bg-cover text-sm text-white md:text-base">
      <Container>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="relative z-10 space-y-3 sm:max-w-[260px] md:space-y-5">
            <div className="max-w-[220px] sm:max-w-full">
              <Link href="/">
                <LogoWhite />
              </Link>
            </div>
            <p className="text-justify">
              {/* NonAcademy Plus is a modern educational platform for Bangladeshi
              students, key to SSC, HSC, and Olympiad success. It offers top
              video classes, interactive quizzes, and expert-designed study
              materials. Join this curriculum-aligned platform for a brighter
              future. NonAcademy Plus - A New Dimension of Success! */}
              NonAcademy Plus is a modern educational platform for Bangladeshi
              students, key to SSC, HSC, and Olympiad success with top video
              classes, quizzes & expert study materials. A New Dimension of
              Success!
            </p>
            <ul className="flex gap-2.5 lg:gap-4">
              <li className="relative z-10">
                <Link
                  href="https://www.facebook.com/nonacademy.net/"
                  target="_blank"
                  className="block h-10 w-10 rounded-full bg-white/15 text-center leading-10 transition-all duration-200 hover:bg-primary"
                >
                  <FaFacebookF className="inline" />
                </Link>
              </li>
              {/* <li className="relative z-10">
              <Link
                href="/"
                className="block h-10 w-10 rounded-full bg-white/15 text-center leading-10 transition-all duration-200 hover:bg-primary"
              >
                <FaTwitter className="inline" />
              </Link>
            </li> */}
              <li className="relative z-10">
                <Link
                  href="https://www.linkedin.com/company/nonacademy"
                  target="_blank"
                  className="block h-10 w-10 rounded-full bg-white/15 text-center leading-10 transition-all duration-200 hover:bg-primary"
                >
                  <FaLinkedinIn className="inline" />
                </Link>
              </li>
              <li className="relative z-10">
                <Link
                  href="https://www.youtube.com/c/NonAcademyMain"
                  target="_blank"
                  className="block h-10 w-10 rounded-full bg-white/15 text-center leading-10 transition-all duration-200 hover:bg-primary"
                >
                  <FaYoutube className="inline" />
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-3 text-xl font-bold sm:text-2xl lg:mb-6 lg:text-3xl">
              Quick Links
            </h3>
            <div className="link-widget">
              <ul className="list-none">
                <li>
                  <Link href="/about-us">About Us</Link>
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
          </div>
          <div>
            <h3 className="mb-3 text-xl font-bold sm:text-2xl lg:mb-6 lg:text-3xl">
              Useful Links
            </h3>
            <div className="link-widget">
              <ul className="list-none">
                <li className="">
                  <Link href="/contact-us">Contact Us</Link>
                </li>
                <li>
                  <Link href="/all-courses">Courses</Link>
                </li>
                <li>
                  <Link href="/auth/login">Login</Link>
                </li>
                <li>
                  <Link href="/auth/signup">Sign Up</Link>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h3 className="mb-3 text-xl font-bold sm:text-2xl lg:mb-6 lg:text-3xl">
              Contact Us
            </h3>
            <div className="relative z-10">
              <div className="mb-5 flex items-center gap-5">
                <FaRegEnvelopeOpen className="inline" />{" "}
                <span>hello@nonacademy.net</span>
              </div>
              <div className="mb-5 flex items-start gap-5">
                <LuPhoneCall className="mt-1 inline" />
                <div className="space-y-2">
                  <p>+88 09638-100303</p>
                </div>
              </div>
              <div className="mb-5 flex items-start gap-5">
                <LuMapPin className="mt-1 inline" />
                <div className="space-y-2">
                  <p>30/1 CK Ghosh Road, Mymensingh</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <div className="border-t border-white/15 text-sm">
        <div className="relative mx-auto max-w-7xl px-4 py-4 md:px-6 lg:px-8 xl:px-10 2xl:px-14">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-gray-300">
              © {currentYear}{" "}
              <span className="font-semibold">NonAcademy Plus</span>. All rights
              reserved.
            </p>
            <p className="text-gray-300">
              Design & Developed by{" "}
              <span className="font-semibold">DevsGiant</span> | Powered by{" "}
              <span className="font-semibold">AREX Ventures</span>
            </p>
            <div>
              <Image
                className="h-auto max-w-[300px] rounded-md bg-cover md:max-w-[340px]"
                src={assets?.images?.paymentWithoutBg}
                alt="payment-methods"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
