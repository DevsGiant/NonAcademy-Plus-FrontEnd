import Container from "@/components/ui/Container";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import assets from "../../../../../public/images/images";
import LoginForm from "./_components/LoginForm";

export const metadata = {
  title: "Login - NonAcademy",
  description: "A online learning platform. your career building university",
};

const LoginPage = () => {
  return (
    <div className="bg-nad-primary-lite-1">
      <Container>
        <div className="flex flex-wrap items-center">
          {/* image part */}
          <div className="hidden w-full border-[#cfe2ff] lg:block lg:w-1/2 lg:border-r-2">
            <div className="px-20">
              <Image src={assets?.svgs?.auth} alt="Auth" />
            </div>
          </div>
          {/* form part */}
          <div className="w-full lg:w-1/2">
            <div className="w-full px-1 md:px-12 lg:px-20">
              <div className="mb-5 md:mb-8">
                <h2 className="nad-gray-8 text-xl font-bold md:text-2xl">
                  Login to NonAcademy
                </h2>
                <p className="pt-2 text-sm text-[#262626]">
                  Ensure your credentials are safe and never share them with
                  anyone.
                </p>
              </div>
              {/* login form and functionality */}
              <LoginForm />
              <p className="pt-3 text-center text-[#262626] lg:pt-4">
                Don&apos;t have an account?{" "}
                <Link
                  href="/auth/signup"
                  className="font-medium text-slate-900 underline"
                >
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default LoginPage;
