import React, { useState } from "react";
import {
  X,
  Settings,
  Home,
  BarChart3,
  Users,
  FileText,
  Calendar,
  Mail,
  Search,
} from "lucide-react";
import { NavLink } from "react-router-dom";
export default function Sidebar({ sidebarOpen, setSidebarOpen, mounted }) {
  const sidebarItems = [
    { icon: Home, label: "Dashboard", path: "/" },
    { icon: BarChart3, label: "Analytics", path: "/analytics" },
    { icon: Users, label: "Users", path: "/users" },
    { icon: FileText, label: "Documents", path: "/documents" },
    { icon: Calendar, label: "Calendar", path: "/calendar" },
    { icon: Mail, label: "Messages", path: "/messages" },
    { icon: Settings, label: "Settings", path: "/settings" },
  ];

  return (
    <div>
      <aside
        className={`fixed left-0 top-0 z-50 h-full w-64 bg-white shadow-xl transform transition-transform duration-300 ease-in-out lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          {/* logo of the website */}
          <div className="w-32 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg animate-pulse" />
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
                className={`flex items-center space-x-3 p-3 rounded-xl cursor-pointer transition-all duration-200 hover:bg-gray-50 group ${
                  mounted ? "animate-fade-in-up" : "opacity-0"
                } ${item.active ? "active" : ""}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Icon
                  size={20}
                  className={`transition-colors ${
                    item.active
                      ? "active"
                      : "text-gray-500 group-hover:text-blue-500"
                  }`}
                />
                <span
                  className={`font-medium transition-colors ${
                    item.active
                      ? "active"
                      : "text-gray-700 group-hover:text-blue-600"
                  }`}
                >
                  {item.label}
                </span>
              </NavLink>
            );
          })}
        </nav>
      </aside>
      <style>{`
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }
        .active {
          color: #3b82f6;
        }

        .active .text-gray-500 {
          color: #3b82f6; /* This ensures the icon turns blue */
        }

        .active .text-gray-700 {
          color: #3b82f6; /* This ensures the text turns blue */
        }

        .active .group-hover\:text-blue-500:hover {
          color: #3b82f6; /* Ensures hover also respects active state */
        }

        .active .group-hover\:text-blue-600:hover {
          color: #3b82f6; /* Ensures hover also respects active state */
        }

        .active {
          background-color: #eff6ff; /* Blue background for active state */
          border-right: 4px solid #3b82f6; /* Active border color */
        }
      `}</style>
    </div>
  );
}
