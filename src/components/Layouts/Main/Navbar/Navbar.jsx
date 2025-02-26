"use client";

import LoadPixel from "@/components/FacebookPixel/LoadPixel";
import LogoBlack from "@/components/ui/LogoBlack";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { Suspense, useEffect, useState } from "react";
import AuthNavItem from "./AuthNavItem";
import MobileNavbar from "./MobileNavbar";
import NavItems from "./NavItems";
import Search from "./Search";

const Navbar = () => {
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [visible, setVisible] = useState(true);

  const pathname = usePathname();

  // check for degree page details
  const isDegreePageDetailsPage = /^\/degrees\/[^/]+\/[^/]+$/.test(pathname);

  useEffect(() => {
    if (!isDegreePageDetailsPage) {
      const handleScroll = () => {
        const currentScrollY = window.scrollY;

        if (currentScrollY > prevScrollY) {
          // Scrolling down, hide the navbar
          setVisible(false);
        } else {
          // Scrolling up, show the navbar
          setVisible(true);
        }

        setPrevScrollY(currentScrollY);
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [isDegreePageDetailsPage, prevScrollY]);

  return (
    <header
      className={`${
        visible || isDegreePageDetailsPage
          ? "translate-y-0 opacity-100"
          : "-translate-y-full opacity-0"
      } sticky left-0 top-0 z-50 w-full border-b border-[#e9e9e9] bg-white transition-all ease-in-out`}
    >
      <Suspense fallback={<></>}>
        <LoadPixel />
      </Suspense>
      <div className="navbar-container">
        {/* for large screen */}
        <div className="hidden items-center justify-between gap-4 lg:flex xl:gap-6">
          {/* logo */}
          <Link href="/" className="max-w-[200px]">
            <LogoBlack />
          </Link>
          {/* nav items */}
          <div className="flex-grow">
            <NavItems />
          </div>
          {/* search */}
          {/* <Search /> */}
          {/* auth item */}
          <AuthNavItem />
        </div>
        {/* for small screen */}
        <div className="flex items-center justify-between py-3 lg:hidden">
          <MobileNavbar />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
