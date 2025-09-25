import { ChevronLeft, Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

export default function Header({ setSidebarOpen }) {
  const { pathname } = useLocation();
  const { id } = useParams();
  const [sidebarHeader, setSidebarHeader] = useState({
    path: false,
    label: "",
    description: "",
  });

  const setSidebarHeaderContent = () => {
    switch (true) {
      case pathname === "/":
        return {
          path: false,
          label: "Super Admin Dashboard",
          description: "Manage business workspaces and monitor system overview",
        };
      case pathname === "/company-management":
        return {
          path: false,
          label: "Company Management",
          description:
            "Oversee and manage company details, structure, and operations",
        };
      case pathname === "/users-management":
        return {
          path: false,
          label: "User Management",
          description: "Manage users, roles, and access permissions",
        };
      case pathname === "/subscriptions":
        return {
          path: false,
          label: "Subscription Management",
          description: "Track and manage subscription plans and billing",
        };
      case pathname === "/admin-management":
        return {
          path: false,
          label: "Admin Management",
          description: "Control admin accounts and system privileges",
        };
      case pathname === "/settings":
        return {
          path: false,
          label: "Settings",
          description: "Customize system preferences and configurations",
        };
      default:
        return { path: false, label: "", description: "" };
    }
  };

  useEffect(() => {
    setSidebarHeader(setSidebarHeaderContent());
  }, [pathname, id]);

  return (
    <header className="bg-transparent sticky top-0 z-30">
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <Menu size={20} />
          </button>

          {/* Search Bar */}
          <div className="backdrop-blur-md">
            <div className="flex items-center gap-1">
              {sidebarHeader?.path && <ChevronLeft size={28} />}
              <h1 className="text-2xl md:text-4xl font-semibold">
                {sidebarHeader?.label}
              </h1>
            </div>
            <p>{sidebarHeader?.description}</p>
          </div>
        </div>
      </div>
    </header>
  );
}
