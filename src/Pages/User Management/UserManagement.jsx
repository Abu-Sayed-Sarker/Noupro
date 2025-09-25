import React, { useState } from "react";
import { Search, Eye, Trash2, ChevronLeft, ChevronRight } from "lucide-react";

const UserManagement = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("Email");
  const [currentPage, setCurrentPage] = useState(1);

  const users = [
    {
      id: 1,
      serial: "01",
      name: "Coast Brown",
      email: "bockelboy@lsft.com",
      phone: "88 5901 2345",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
    },
    {
      id: 2,
      serial: "02",
      name: "Perth Anderson",
      email: "csilver@verizon.com",
      phone: "88 5901 2345",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face",
    },
    {
      id: 3,
      serial: "03",
      name: "Coast Brown",
      email: "qamaho@mail.com",
      phone: "88 5901 2345",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
    },
    {
      id: 4,
      serial: "04",
      name: "Perth Anderson",
      email: "qamaho@mail.com",
      phone: "88 5901 2345",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
    },
    {
      id: 5,
      serial: "05",
      name: "Perth Anderson",
      email: "qamaho@mail.com",
      phone: "88 5901 2345",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=40&h=40&fit=crop&crop=face",
    },
    {
      id: 6,
      serial: "06",
      name: "Darwin Taylor",
      email: "qamaho@mail.com",
      phone: "88 5901 2345",
      avatar:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=40&h=40&fit=crop&crop=face",
    },
    {
      id: 7,
      serial: "07",
      name: "Coast Brown",
      email: "qamaho@mail.com",
      phone: "88 5901 2345",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face",
    },
    {
      id: 8,
      serial: "08",
      name: "Thomas Perth",
      email: "qamaho@mail.com",
      phone: "88 5901 2345",
      avatar:
        "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=40&h=40&fit=crop&crop=face",
    },
    {
      id: 9,
      serial: "09",
      name: "Coast Harris",
      email: "qamaho@mail.com",
      phone: "88 5901 2345",
      avatar:
        "https://images.unsplash.com/photo-1463453091185-61582044d556?w=40&h=40&fit=crop&crop=face",
    },
    {
      id: 10,
      serial: "10",
      name: "Perth Mitchell",
      email: "qamaho@mail.com",
      phone: "88 5901 2345",
      avatar:
        "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=40&h=40&fit=crop&crop=face",
    },
    {
      id: 11,
      serial: "11",
      name: "Darwin Mitchell",
      email: "qamaho@mail.com",
      phone: "88 5901 2345",
      avatar:
        "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=40&h=40&fit=crop&crop=face",
    },
    {
      id: 12,
      serial: "12",
      name: "Xavier Perthl",
      email: "qamaho@mail.com",
      phone: "88 5901 2345",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
    },
  ];

  const totalEntries = 256;
  const entriesPerPage = 8;
  const totalPages = Math.ceil(totalEntries / entriesPerPage);

  const handleDelete = (userId) => {
    console.log("Delete user:", userId);
  };

  const handleView = (userId) => {
    console.log("View user:", userId);
  };

  return (
    <div className="">
      {/* Header with Search and Sort */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search for anything..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
            />
          </div>
          <div className="ml-4">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none bg-white"
            >
              <option value="Email">Sort by: Email</option>
              <option value="Name">Sort by: Name</option>
              <option value="Phone">Sort by: Phone</option>
            </select>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto h-[70vh] overflow-y-scroll">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-4 text-left font-medium text-gray-500 uppercase tracking-wider">
                Serial
              </th>
              <th className="px-6 py-4 text-left font-medium text-gray-500 uppercase tracking-wider">
                User name
              </th>
              <th className="px-6 py-4 text-left font-medium text-gray-500 uppercase tracking-wider">
                Email
              </th>
              <th className="px-6 py-4 text-left font-medium text-gray-500 uppercase tracking-wider">
                Phone num
              </th>
              <th className="px-6 py-4 text-left font-medium text-gray-500 uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {users.map((user) => (
              <tr
                key={user.id}
                className="hover:bg-gray-50 transition-colors duration-150"
              >
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {user.serial}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <img
                      className="h-10 w-10 rounded-full object-cover"
                      src={user.avatar}
                      alt={user.name}
                    />
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">
                        {user.name}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {user.email}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {user.phone}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => handleView(user.id)}
                      className="text-gray-400 hover:text-gray-600 transition-colors duration-150"
                    >
                      <Eye className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => handleDelete(user.id)}
                      className="text-gray-400 hover:text-red-600 transition-colors duration-150"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-between">
        <div className="text-sm text-gray-700">
          Showing data 1 to 8 of 256K entries
        </div>
        <div className="flex items-center space-x-1">
          <button
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {[1, 2, 3, 4].map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`px-3 py-2 rounded-lg text-sm font-medium ${
                currentPage === page
                  ? "bg-gray-900 text-white"
                  : "text-gray-700 hover:bg-gray-50 border border-gray-300"
              }`}
            >
              {page}
            </button>
          ))}

          <span className="px-2 text-gray-500">...</span>

          <button
            onClick={() => setCurrentPage(40)}
            className="px-3 py-2 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 border border-gray-300"
          >
            40
          </button>

          <button
            onClick={() =>
              setCurrentPage(Math.min(totalPages, currentPage + 1))
            }
            disabled={currentPage === totalPages}
            className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserManagement;
