import { AuthContext } from "@/contexts/AuthProvider";
import React, { useContext } from "react";
import Notification from "./Notification";
import UserMenu from "./UserMenu";

const Header = ({ sidebarOpen, setSidebarOpen }) => {
  const { loggedInUser, handleLogout } = useContext(AuthContext);

  return (
    <header className="sticky top-0 z-30 bg-white drop-shadow-sm">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="-mb-px flex h-16 items-center justify-between">
          {/* Header: Left side */}
          <div className="flex">
            {/* Hamburger button */}
            <button
              aria-controls="sidebar"
              onClick={(e) => {
                e.stopPropagation();
                setSidebarOpen(!sidebarOpen);
              }}
              className="block rounded-sm border border-[#e2e8f0] bg-white p-1.5 shadow-sm lg:hidden"
            >
              <span className="relative block size-[22px] cursor-pointer">
                <span className="du-block absolute right-0 h-full w-full">
                  <span
                    className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-0 duration-200 ease-in-out ${
                      !sidebarOpen && "!w-full delay-300"
                    }`}
                  ></span>
                  <span
                    className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-150 duration-200 ease-in-out ${
                      !sidebarOpen && "delay-400 !w-full"
                    }`}
                  ></span>
                  <span
                    className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-200 duration-200 ease-in-out ${
                      !sidebarOpen && "!w-full delay-500"
                    }`}
                  ></span>
                </span>
                <span className="absolute right-0 h-full w-full rotate-45">
                  <span
                    className={`absolute left-2.5 top-0 block h-full w-0.5 rounded-sm bg-black delay-300 duration-200 ease-in-out ${
                      !sidebarOpen && "!h-0 !delay-0"
                    }`}
                  ></span>
                  <span
                    className={`delay-400 absolute left-0 top-2.5 block h-0.5 w-full rounded-sm bg-black duration-200 ease-in-out ${
                      !sidebarOpen && "!h-0 !delay-200"
                    }`}
                  ></span>
                </span>
              </span>
            </button>
          </div>

          <div className="text-gray-700">
            Student ID:{" "}
            <span className="font-medium text-black">
              {loggedInUser?.user_id}
            </span>
          </div>

          {/* Header: Right side */}
          <div className="flex items-center space-x-3 lg:space-x-5">
            {/* <Notifications /> */}
            <Notification unseen={0} />
            {/* <UserMenu /> */}
            <UserMenu
              handleLogout={handleLogout}
              avatar={loggedInUser?.avatar}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
