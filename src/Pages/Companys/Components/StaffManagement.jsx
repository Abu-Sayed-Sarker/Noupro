import React, { useState } from "react";
import { Search, ChevronDown } from "lucide-react";

export default function StaffManagement() {
  const [sortBy, setSortBy] = useState("Name");
  const [searchQuery, setSearchQuery] = useState("");

  const staff = [
    {
      id: 1,
      name: "Jane Liza",
      role: "Staff",
      location: "Rose Hill, Mauritius",
      phone: "+34 678 33",
      email: "user2025@gmail.com",
      avatar: "/api/placeholder/60/60",
    },
    {
      id: 2,
      name: "Jane Liza",
      role: "Staff",
      location: "Rose Hill, Mauritius",
      phone: "+34 678 33",
      email: "user2025@gmail.com",
      avatar: "/api/placeholder/60/60",
    },
    {
      id: 3,
      name: "Jane Liza",
      role: "Staff",
      location: "Rose Hill, Mauritius",
      phone: "+34 678 33",
      email: "user2025@gmail.com",
      avatar: "/api/placeholder/60/60",
    },
    {
      id: 4,
      name: "Jane Liza",
      role: "Staff",
      location: "Rose Hill, Mauritius",
      phone: "+34 678 33",
      email: "user2025@gmail.com",
      avatar: "/api/placeholder/60/60",
    },
  ];

  const StaffCard = ({ staffMember, index }) => (
    <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between">
        {/* Left side with avatar and info */}
        <div className="flex items-start space-x-4">
          {/* Serial number */}
          <div className="text-gray-500 font-medium text-lg mt-2">
            {index + 1}
          </div>

          {/* Avatar */}
          <div className="w-16 h-16 rounded-lg overflow-hidden bg-gray-200 flex-shrink-0">
            <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <div className="w-6 h-6 bg-blue-400 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Staff info */}
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900 mb-1">
              {staffMember.name}
            </h3>
            <p className="text-sm text-gray-600 mb-1">
              Role: {staffMember.role}
            </p>
            <p className="text-sm text-gray-900 font-medium">
              Location: {staffMember.location}
            </p>
          </div>
        </div>

        {/* Right side with contact info */}
        <div className="text-right text-sm">
          <p className="text-gray-900 mb-1">Phone : {staffMember.phone}</p>
          <p className="text-gray-900">Email - {staffMember.email}</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-white">
      <div className="mx-auto">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl font-semibold text-gray-900 mb-1">
                🚛 Staff Management
              </h1>
              <p className="text-sm text-gray-600">
                Track and manage customer orders
              </p>
            </div>
            <div className="flex items-center space-x-4">
              {/* Search Bar */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search for anything..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-64 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              {/* Sort Dropdown */}
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option>Sort by : Name</option>
                  <option>Sort by : Role</option>
                  <option>Sort by : Location</option>
                </select>
                <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>

        {/* Staff Cards */}
        <div className="p-6">
          <div className="space-y-4">
            {staff.map((staffMember, index) => (
              <StaffCard
                key={staffMember.id}
                staffMember={staffMember}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
