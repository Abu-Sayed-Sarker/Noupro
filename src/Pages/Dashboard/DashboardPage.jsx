import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  BarChart,
  Bar,
  ResponsiveContainer,
} from "recharts";
import {
  TrendingUp,
  Users,
  DollarSign,
  UserCheck,
  MoreHorizontal,
  ChevronDown,
} from "lucide-react";

const revenueData = [
  { month: "Jan", value: 15000 },
  { month: "Feb", value: 8000 },
  { month: "Mar", value: 12000 },
  { month: "Apr", value: 35000 },
  { month: "May", value: 18456 },
  { month: "Jun", value: 10000 },
];

const userData = [
  { month: "Jan", value: 25 },
  { month: "Feb", value: 20 },
  { month: "Mar", value: 15 },
  { month: "Apr", value: 23 },
  { month: "May", value: 35 },
  { month: "Jun", value: 28 },
  { month: "Jul", value: 25 },
  { month: "Aug", value: 20 },
  { month: "Sep", value: 30 },
  { month: "Oct", value: 22 },
  { month: "Nov", value: 38 },
  { month: "Dec", value: 28 },
];

export default function DashboardPage() {
  const [revenueFilter, setRevenueFilter] = useState("last 7 days");

  const StatCard = ({
    title,
    value,
    icon: Icon,
    trend,
    bgColor = "bg-white",
  }) => (
    <div
      className={`${bgColor} rounded-lg p-6 shadow-sm border border-gray-200`}
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600 mb-1">{title}</p>
          <p className="text-2xl font-bold text-gray-900">{value}</p>
        </div>
        <div className="flex items-center space-x-2">
          {trend && <TrendingUp className="w-4 h-4 text-red-500" />}
          <div className="p-2 bg-gray-50 rounded-lg">
            <Icon className="w-5 h-5 text-gray-600" />
          </div>
        </div>
      </div>
    </div>
  );

  const CustomDot = ({ cx, cy, payload }) => {
    if (payload.month === "Feb") {
      return (
        <>
          <circle
            cx={cx}
            cy={cy}
            r={4}
            fill="#dc2626"
            stroke="#fff"
            strokeWidth={2}
          />
          <g>
            <rect
              x={cx - 25}
              y={cy - 35}
              width={50}
              height={24}
              fill="#374151"
              rx={4}
            />
            <text
              x={cx}
              y={cy - 18}
              textAnchor="middle"
              fill="white"
              fontSize="12"
              fontWeight="500"
            >
              18,456
            </text>
          </g>
        </>
      );
    }
    return null;
  };

  return (
    <div className="min-h-screen p-6">
      <div className="mx-auto space-y-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            title="Total Business holder"
            value="20"
            icon={Users}
            trend={true}
          />
          <StatCard title="Total User" value="330" icon={Users} trend={true} />
          <StatCard
            title="Total Revenue"
            value="$ 74414"
            icon={DollarSign}
            trend={false}
          />
          <StatCard
            title="Total Admin"
            value="33"
            icon={UserCheck}
            trend={true}
          />
        </div>

        {/* Revenue Chart */}
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-medium text-gray-500 mb-1">
                Revenue
              </h3>
              <p className="text-3xl font-bold text-gray-900">$ 4,645</p>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-1">
                <MoreHorizontal className="w-5 h-5 text-gray-400" />
              </button>
              <div className="relative">
                <select
                  value={revenueFilter}
                  onChange={(e) => setRevenueFilter(e.target.value)}
                  className="appearance-none bg-white border border-gray-300 rounded-md pl-3 pr-8 py-2 text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option>last 7 days</option>
                  <option>last 30 days</option>
                  <option>last 90 days</option>
                </select>
                <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
              </div>
            </div>
          </div>

          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={revenueData}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis
                  dataKey="month"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: "#9ca3af" }}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: "#9ca3af" }}
                  tickFormatter={(value) => `${value / 1000}k`}
                  domain={[0, 40000]}
                  ticks={[0, 10000, 20000, 30000, 40000]}
                />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#dc2626"
                  strokeWidth={2}
                  dot={false}
                />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="transparent"
                  dot={<CustomDot />}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* User Chart */}
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-medium text-gray-900">
              Your User (Total)
            </h3>
            <button className="p-1">
              <MoreHorizontal className="w-5 h-5 text-gray-400" />
            </button>
          </div>

          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={userData}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis
                  dataKey="month"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: "#9ca3af" }}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: "#9ca3af" }}
                  domain={[0, 40]}
                  ticks={[0, 10, 20, 30, 40]}
                  tickFormatter={(value) => `${value}k`}
                />
                <Bar dataKey="value" fill="#3b82f6" radius={[2, 2, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
