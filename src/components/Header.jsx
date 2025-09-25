import { ChevronLeft, Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

export default function Header({ setSidebarOpen }) {
  const { pathname } = useLocation();
  const { id } = useParams();
  const [sidebarHeader, setSidebarHeader] = useState({
    path: false,
    label: "",
  });

  const setSidebarHeaderContent = () => {
    switch (true) {
      case pathname === "/":
        return { path: false, label: "Dashboard" };
      default:
        return { path: false, label: "" };
    }
  };

  useEffect(() => {
    setSidebarHeader(setSidebarHeaderContent());
  }, [pathname, id]);

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-30">
      <div className="flex items-center justify-between p-4 md:py-6">
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
              <h1 className="text-2xl font-semibold">{sidebarHeader?.label}</h1>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
