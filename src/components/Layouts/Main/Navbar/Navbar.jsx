// import LoadPixel from "@/components/FacebookPixel/LoadPixel";
import LogoBlack from "@/components/ui/LogoBlack";
import Link from "next/link";
import React from "react";
import AuthNavItem from "./AuthNavItem";
import MobileNavbar from "./MobileNavbar";
import NavItems from "./NavItems";
import Search from "./Search";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#e9e9e9] bg-white">
      {/* <Suspense fallback={<></>}>
        <LoadPixel />
      </Suspense> */}
      <div className="navbar-container">
        {/* for large screen */}
        <div className="hidden items-center justify-between gap-10 lg:flex xl:gap-16">
          {/* logo */}
          <Link href="/" className="max-w-[220px]">
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
