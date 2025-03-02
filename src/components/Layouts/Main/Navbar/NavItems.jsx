"use client";

import { menuConfig } from "@/utils/menuConfig";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { FiChevronDown } from "react-icons/fi";
import ScholarshipModal from "./ScholarshipModal";

const NavItems = () => {
  const pathname = usePathname();

  // Helper function to check if the current pathname is in the submenu
  const isSubmenuActive = (submenu) => {
    return submenu?.some((submenuItem) => pathname === submenuItem.path);
  };

  return (
    <nav>
      <ul className="flex flex-wrap items-center text-lg font-medium text-gray-800 lg:gap-6 xl:gap-7">
        {menuConfig?.map((item, idx) => (
          <li
            key={idx}
            className={`group relative cursor-pointer text-nowrap py-4 hover:text-nad-primary md:py-5 lg:py-7 2xl:py-8 ${
              isSubmenuActive(item.submenu) || pathname === item.path
                ? "text-nad-primary"
                : ""
            }`}
          >
            {item.submenu ? (
              <>
                {item.name}
                <FiChevronDown className="inline" />
                {/* Submenu */}
                <ul className="invisible absolute left-0 top-[100%] z-10 m-0 min-w-[200px] origin-top scale-y-0 cursor-default border-t-[5px] border-nad-logo bg-white py-4 opacity-0 shadow-[0px_30px_70px_rgba(137,139,142,0.15)] transition-all duration-300 ease-out group-hover:visible group-hover:scale-y-100 group-hover:opacity-100">
                  {item.submenu?.map((submenuItem, subIdx) => (
                    <li key={subIdx} className="block text-left text-gray-800">
                      <Link
                        key={subIdx}
                        href={submenuItem.path}
                        className={`mx-4 my-1 block transition-all hover:text-nad-primary ${
                          pathname === submenuItem.path
                            ? "text-nad-primary"
                            : ""
                        }`}
                      >
                        {submenuItem.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <Link
                href={item.path}
                className={`transition-all hover:text-nad-primary ${
                  pathname === item.path ? "text-nad-primary" : ""
                }`}
              >
                {item.name}
              </Link>
            )}
          </li>
        ))}
        {/* <ScholarshipModal /> */}
      </ul>
    </nav>
  );
};

export default NavItems;
