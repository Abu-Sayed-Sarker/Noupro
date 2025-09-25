import React, { useState } from "react";
import {
  X,
  Home,
  Users,
  Mail,
  Building2,
  UserCog,
  Banknote,
  Settings,
} from "lucide-react";
import { Link, NavLink, useLocation } from "react-router-dom";
export default function Sidebar({ sidebarOpen, setSidebarOpen, mounted }) {
  const rootPath = useLocation().pathname.split("/")[1];
  const sidebarItems = [
    { icon: Home, label: "Dashboard", path: "/" },
    {
      icon: Building2,
      label: "Company Management",
      path: "/company-management",
    },
    { icon: Users, label: "User Management", path: "/users-management" },
    { icon: Banknote, label: "Subscription", path: "/subscriptions" },
    {
      icon: UserCog,
      label: "Admin Management",
      path: "/admin-management",
    },
    { icon: Settings, label: "Settings", path: "/settings" },
  ];

  return (
    <div>
      <aside
        className={`fixed left-0 top-0 z-50 h-full w-[270px] bg-white shadow-xl transform transition-transform duration-300 ease-in-out lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          {/* logo of the website */}
          <Link
            to="/"
            className="flex items-center justify-center text-center w-full"
          >
            <h1 className="md:text-4xl text-2xl font-extrabold text-black text-center">
              NOUPRO
            </h1>
          </Link>
          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        <nav className="p-4 space-y-2">
          {sidebarItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <NavLink
                to={item.path}
                key={item.label}
                className={`group flex items-center px-4 py-2 font-medium rounded-lg gap-2 ${
                  rootPath === item.path.slice(1) ? "bg-black" : "bg-white"
                }`}
              >
                <Icon
                  size={20}
                  className={`${
                    rootPath === item.path.slice(1)
                      ? "text-white"
                      : "text-black group-hover:text-gray-800"
                  }`}
                />
                <span
                  className={`${
                    rootPath === item.path.slice(1)
                      ? "text-white"
                      : "text-black group-hover:text-gray-800"
                  }`}
                >
                  {item.label}
                </span>
              </NavLink>
            );
          })}
        </nav>
      </aside>
    </div>
  );
}
