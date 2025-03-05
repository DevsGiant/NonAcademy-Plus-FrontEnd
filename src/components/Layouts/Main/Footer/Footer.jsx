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
          <div className="relative z-10 space-y-5 sm:max-w-[260px] md:space-y-7">
            <div className="max-w-[200px] sm:max-w-full">
              <Link href="/">
                <LogoWhite />
              </Link>
            </div>
            <p className="text-justify">
              Discover NonAcademy, the ed-tech startup transforming education
              for all. Enjoy high-quality, personalized learning with expert
              instructors and flexible scheduling. Empower your future and
              unlock your potential with us. Join NonAcademy today and start
              your journey to success.
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
      <div className="border-t border-white/15">
        <div className="relative mx-auto max-w-7xl px-4 py-4 md:px-6 lg:px-8 xl:px-10 2xl:px-14">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-gray-300">
              © {currentYear} NonAcademy Plus. All rights reserved.
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
