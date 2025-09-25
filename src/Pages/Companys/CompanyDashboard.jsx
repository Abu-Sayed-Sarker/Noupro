import React, { useState } from "react";
import {
  TrendingUp,
  Package,
  Building,
  ShoppingCart,
  Search,
  Eye,
  Trash2,
  Mail,
  Phone,
  Globe,
  MapPin,
  FileText,
} from "lucide-react";
import Products from "./Components/Products";
import DeliveryManagement from "./Components/DeliveryManagement";
import InvoiceManagement from "./Components/InvoiceManagement";
import StaffManagement from "./Components/StaffManagement";

const CompanyDashboard = () => {
  const [activeTab, setActiveTab] = useState("Products");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("Name");

  const stats = [
    {
      title: "Total Order Completed",
      value: "20",
      icon: FileText,
      color: "text-red-500",
    },
    {
      title: "Total Revenue",
      value: "30",
      icon: TrendingUp,
      color: "text-red-500",
    },
    {
      title: "Total Brands",
      value: "14",
      icon: Building,
      color: "text-gray-500",
    },
    {
      title: "Total Product",
      value: "30",
      icon: TrendingUp,
      color: "text-red-500",
    },
  ];

  const tabs = [
    { name: "Products", content: "product-table" },
    { name: "Delivery", content: "delivery-content" },
    { name: "Invoice", content: "invoice-content" },
    { name: "Staff", content: "staff-content" },
  ];

  const renderTabContent = () => {
    if (activeTab === "Products") {
      return <Products />;
    }
    if (activeTab === "Delivery") {
      return <DeliveryManagement />;
    }
    if (activeTab === "Invoice") {
      return <InvoiceManagement />;
    }
    if (activeTab === "Staff") {
      return <StaffManagement />;
    }

    return (
      <div className="py-12 text-center text-gray-500">
        <div className="text-lg font-medium mb-2">{activeTab} Content</div>
        <p>Content for {activeTab} tab will be implemented here.</p>
      </div>
    );
  };

  return (
    <div className="min-h-screen p-6">
      <div className="mx-auto">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500 mb-1">
                    {stat.title}
                  </p>
                  <p className="text-3xl font-bold text-gray-900">
                    {stat.value}
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <stat.icon className={`w-5 h-5 ${stat.color}`} />
                  <TrendingUp className={`w-4 h-4 ${stat.color}`} />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Company Information */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
              <div className="flex items-center mb-4">
                <Building className="w-6 h-6 text-gray-700 mr-3" />
                <h2 className="text-xl font-bold text-gray-900">
                  Acme Corporation
                </h2>
                <span className="ml-3 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  Reseller
                </span>
              </div>

              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-900 mb-2">
                  Description
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Leading provider of innovative technology solutions for
                  businesses worldwide in software development, cloud services,
                  and digital transformation.
                </p>
              </div>

              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-4">
                  Purchase Summary
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <ShoppingCart className="w-5 h-5 text-gray-400 mr-2" />
                    <div>
                      <p className="text-xs text-gray-500">Total Orders</p>
                      <p className="text-sm font-medium text-gray-900">12</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Package className="w-5 h-5 text-gray-400 mr-2" />
                    <div>
                      <p className="text-xs text-gray-500">Total Earn</p>
                      <p className="text-sm font-medium text-gray-900">
                        $33312.95
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                Contact Information
              </h3>

              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-gray-400 mr-3" />
                  <div>
                    <p className="text-xs text-gray-500">Email</p>
                    <p className="text-sm text-gray-900">
                      contact@techcorp.com
                    </p>
                  </div>
                </div>

                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-gray-400 mr-3" />
                  <div>
                    <p className="text-xs text-gray-500">Phone</p>
                    <p className="text-sm text-gray-900">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <Globe className="w-5 h-5 text-gray-400 mr-3" />
                  <div>
                    <p className="text-xs text-gray-500">Website</p>
                    <p className="text-sm text-gray-900">www.techcorp.com</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-gray-400 mr-3" />
                  <div>
                    <p className="text-xs text-gray-500">Address</p>
                    <p className="text-sm text-gray-900">
                      123 Business Ave, Tech City
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabbed Section */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          {/* Tab Navigation */}
          <div className="bg-white border">
            <nav className="flex items-center space-x-8 px-6">
              {tabs.map((tab) => (
                <button
                  key={tab.name}
                  onClick={() => setActiveTab(tab.name)}
                  className={`py-4 m-2 px-8 w-full font-medium text-md ${
                    activeTab === tab.name
                      ? "bg-gray-200 rounded-xl transition-all duration-300"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }`}
                >
                  {tab.name}
                </button>
              ))}
            </nav>
          </div>

          {/* Product Management Header */}
          {activeTab === "Products" && (
            <>
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 flex items-center">
                      <Package className="w-5 h-5 mr-2" />
                      Product Management
                    </h3>
                    <p className="text-sm text-gray-500">
                      Manage product inventory and pricing
                    </p>
                  </div>
                </div>

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
                      <option value="Name">Sort by: Name</option>
                      <option value="Amount">Sort by: Amount</option>
                      <option value="Status">Sort by: Status</option>
                    </select>
                  </div>
                </div>
              </div>
            </>
          )}

          {/* Tab Content */}
          <div className="p-6">{renderTabContent()}</div>
        </div>
      </div>
    </div>
  );
};

export default CompanyDashboard;
