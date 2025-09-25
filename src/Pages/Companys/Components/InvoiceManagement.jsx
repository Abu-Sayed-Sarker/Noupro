import React, { useState } from "react";
import { Search, ChevronDown, MapPin } from "lucide-react";

export default function InvoiceManagement() {
  const [sortBy, setSortBy] = useState("Date");
  const [searchQuery, setSearchQuery] = useState("");

  const invoices = [
    {
      serial: "01",
      client: "Client 01",
      orderId: "ORD-12345",
      orderStatus: "Ongoing",
      tracking: "INV-2025-12345",
      issue: "12 August 2025",
      due: "2 October 2025",
      total: "RS 4500",
      status: "Paid",
    },
    {
      serial: "02",
      client: "Client 02",
      orderId: "ORD-12345",
      orderStatus: "New order",
      tracking: "INV-2025-12345",
      issue: "12 August 2025",
      due: "2 October 2025",
      total: "RS 4500",
      status: "Unpaid",
    },
    {
      serial: "03",
      client: "Client 03",
      orderId: "ORD-12345",
      orderStatus: "Done",
      tracking: "INV-2025-12345",
      issue: "12 August 2025",
      due: "2 October 2025",
      total: "RS 4500",
      status: "Paid",
    },
    {
      serial: "04",
      client: "Client 04",
      orderId: "ORD-12345",
      orderStatus: "Canceled",
      tracking: "INV-2025-12345",
      issue: "12 August 2025",
      due: "2 October 2025",
      total: "RS 4500",
      status: "Unpaid",
    },
    {
      serial: "05",
      client: "Client 05",
      orderId: "ORD-12345",
      orderStatus: "Pending",
      tracking: "INV-2025-12345",
      issue: "12 August 2025",
      due: "2 October 2025",
      total: "RS 4500",
      status: "Unpaid",
    },
  ];

  const getOrderStatusColor = (status) => {
    switch (status) {
      case "Ongoing":
        return "bg-blue-500 text-white";
      case "New order":
        return "bg-red-600 text-white";
      case "Done":
        return "bg-green-500 text-white";
      case "Canceled":
        return "bg-red-400 text-white";
      case "Pending":
        return "bg-yellow-500 text-white";
      default:
        return "bg-gray-500 text-white";
    }
  };

  const getPaymentStatusColor = (status) => {
    return status === "Paid"
      ? "bg-green-700 text-white"
      : "bg-red-500 text-white";
  };

  const StatusBadge = ({ status, type = "order" }) => (
    <span
      className={`px-2 py-1 rounded text-xs font-medium ${
        type === "payment"
          ? getPaymentStatusColor(status)
          : getOrderStatusColor(status)
      }`}
    >
      {status}
    </span>
  );

  const ClientCell = ({ client }) => (
    <div className="flex items-center space-x-3">
      <div className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center">
        <div className="w-6 h-6 bg-blue-400 rounded"></div>
      </div>
      <div>
        <div className="font-medium text-gray-900">{client}</div>
        <div className="flex items-center text-xs text-gray-500">
          <MapPin className="w-3 h-3 mr-1" />
          Address, City
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-white">
      {/* Header */}
      <div className="border-b border-gray-200 p-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl font-semibold text-gray-900 mb-1">
              📋 Invoice Management
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
                <option>Sort by: Date</option>
                <option>Sort by: Status</option>
                <option>Sort by: Total</option>
              </select>
              <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="p-6">
        <div className="bg-white rounded-lg border border-gray-200">
          {/* Table Header */}
          <div className="grid grid-cols-7 gap-4 px-6 py-4 border-b border-gray-200 bg-gray-50 text-sm font-medium text-gray-600">
            <div>Serial</div>
            <div>Client</div>
            <div>Order</div>
            <div>Tracking</div>
            <div>Date</div>
            <div>Total</div>
            <div>Status</div>
          </div>

          {/* Table Body */}
          {invoices.map((invoice) => (
            <div
              key={invoice.serial}
              className="grid grid-cols-7 gap-4 px-6 py-4 border-b border-gray-100 hover:bg-gray-50"
            >
              {/* Serial */}
              <div className="text-gray-600 font-medium">{invoice.serial}</div>

              {/* Client */}
              <div>
                <ClientCell client={invoice.client} />
              </div>

              {/* Order */}
              <div>
                <div className="text-gray-900 font-medium mb-2">
                  {invoice.orderId}
                </div>
                <div>
                  <StatusBadge status={invoice.orderStatus} type="order" />
                </div>
              </div>

              {/* Tracking */}
              <div className="text-gray-600">{invoice.tracking}</div>

              {/* Date */}
              <div className="text-sm">
                <div className="text-gray-900">Issue : {invoice.issue}</div>
                <div className="text-gray-500">Due : {invoice.due}</div>
              </div>

              {/* Total */}
              <div className="text-gray-900 font-medium">{invoice.total}</div>

              {/* Status */}
              <div>
                <StatusBadge status={invoice.status} type="payment" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
