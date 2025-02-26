"use client";

import { Button } from "@/components/ui/button";
import LogoBlack from "@/components/ui/LogoBlack";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AuthContext } from "@/contexts/AuthProvider";
import { menuConfig } from "@/utils/menuConfig";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useContext, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { RiMenu3Fill } from "react-icons/ri";
import ScholarshipModal from "./ScholarshipModal";

const MobileNavbar = () => {
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(null);
  const [open, setOpen] = useState(false);
  const { loggedInUser } = useContext(AuthContext);
  const pathname = usePathname();

  // Helper function to check if the current pathname is in the submenu
  const isSubmenuActive = (submenu) => {
    return submenu?.some((submenuItem) => pathname === submenuItem.path);
  };

  const handleToggleSubmenu = (idx) => {
    setIsSubmenuOpen((prevIdx) => (prevIdx === idx ? null : idx));
  };

  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <>
      {/* logo */}
      <div className="max-w-[170px]">
        {/* <Link href="/">
          <Image
            className="size-14"
            src={assets?.svgs?.logoN}
            alt="NonAcademy"
            width={30}
            height={30}
            priority
          />
        </Link> */}
        <Link href="/">
          <LogoBlack />
        </Link>
      </div>
      <div className="flex items-center gap-4 sm:gap-10">
        {/* auth items */}
        <div>
          <Button asChild size="sm">
            {loggedInUser ? (
              <Link href="/dashboard">Dashboard</Link>
            ) : (
              <Link href="/auth/login">Login</Link>
            )}
          </Button>
        </div>
        {/* mobile nav items */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button className="text-2xl text-gray-600">
              <RiMenu3Fill />
            </button>
          </SheetTrigger>
          <SheetContent className="w-4/6 p-0">
            <SheetHeader className="items-start px-5 pt-3">
              <SheetTitle className="max-w-[150px]">
                <Link href="/">
                  <LogoBlack />
                </Link>
              </SheetTitle>
            </SheetHeader>
            <nav className="mt-3">
              <ul className="divide-y font-medium text-gray-800">
                {menuConfig?.map((item, idx) =>
                  item?.submenu ? (
                    <React.Fragment key={idx}>
                      <li
                        onClick={() => handleToggleSubmenu(idx)}
                        className={`flex h-full w-full items-center justify-between px-5 py-2 ${
                          isSubmenuActive(item.submenu) ||
                          pathname === item.path
                            ? "text-nad-primary"
                            : ""
                        }`}
                      >
                        {item.name}
                        <span className="rounded-full">
                          <svg
                            className="shrink-0 fill-slate-500"
                            width="14"
                            height="16"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              y="7"
                              width="14"
                              height="2"
                              rx="1"
                              className={`origin-center transform transition duration-200 ease-out ${
                                isSubmenuOpen === idx && "!rotate-180"
                              }`}
                            />
                            <rect
                              y="7"
                              width="14"
                              height="2"
                              rx="1"
                              className={`origin-center rotate-90 transform transition duration-200 ease-out ${
                                isSubmenuOpen === idx && "!rotate-180"
                              }`}
                            />
                          </svg>
                        </span>
                      </li>
                      <ul
                        className={`${
                          isSubmenuOpen === idx
                            ? "divide-y opacity-100 transition-all ease-in-out"
                            : "hidden opacity-0"
                        }`}
                      >
                        {item?.submenu?.map((submenuItem, subIdx) => (
                          <li
                            key={subIdx}
                            className={`flex items-center gap-1 px-5 py-2 ${
                              pathname === submenuItem.path
                                ? "text-nad-primary"
                                : ""
                            }`}
                          >
                            <IoIosArrowForward />
                            <Link
                              href={submenuItem.path}
                              onClick={handleLinkClick}
                            >
                              {submenuItem.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </React.Fragment>
                  ) : (
                    <li
                      className={`w-full px-5 py-2 ${
                        pathname === item.path ? "text-nad-primary" : ""
                      }`}
                      key={idx}
                    >
                      <Link
                        className="w-full"
                        href={item.path}
                        onClick={handleLinkClick}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ),
                )}

                {/* <div className="px-5 py-3 font-semibold">
                  <ScholarshipModal />
                </div> */}
              </ul>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
};

export default MobileNavbar;
