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
          <div className="">
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
