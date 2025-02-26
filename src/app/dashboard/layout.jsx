"use client";

import Header from "@/components/Layouts/Dashboard/Header/Header";
import Sidebar from "@/components/Layouts/Dashboard/Sidebar/Sidebar";
import { useState } from "react";

export default function DashboardLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden bg-whiten">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      {/* Content Area */}
      <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
        {/*  Header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        {/* Main Dashboard Content */}
        <section className="mx-auto w-full max-w-screen-2xl p-4 sm:p-6 2xl:p-10">
          {children}
        </section>
      </div>
    </div>
  );
}
