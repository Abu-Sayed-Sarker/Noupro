import React, { useState, useEffect } from "react";

import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen ">
      {/* Sidebar Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden transition-opacity duration-300 ${
          sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setSidebarOpen(false)}
      />

      {/* Sidebar */}
      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        mounted={mounted}
      />
      {/* Main Content */}
      <div className="lg:ml-[270px] min-h-screen">
        {/* Header */}
        <Header setSidebarOpen={setSidebarOpen} />
        {/* Dashboard Content */}
        <main className="p-6 space-y-6">
          {/* Stats Cards */}
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
