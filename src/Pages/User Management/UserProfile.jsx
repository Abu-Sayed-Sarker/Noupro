import React from "react";
import {
  ChevronLeft,
  Mail,
  Phone,
  Calendar,
  MapPin,
  Eye,
  Trash2,
} from "lucide-react";

export default function UserProfile() {
  const linkedCompanies = [
    {
      id: "01",
      name: "Acme Corporation",
      email: "bookshop@soft.com",
      phone: "88 5901 2345",
      avatar: "🏢",
    },
    {
      id: "02",
      name: "Acme Corporation",
      email: "callcenter@acme.com",
      phone: "88 5901 2345",
      avatar: "🏭",
    },
    {
      id: "03",
      name: "Acme Corporation",
      email: "gametech@mail.com",
      phone: "88 5901 2345",
      avatar: "🎮",
    },
  ];

  return (
    <div className="min-h-screen p-4">
      <div className="mx-auto">
        {/* Profile Header */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold text-lg">
              SJ
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-semibold text-gray-900">
                Saraj Johnson
              </h2>
              <div className="flex items-center space-x-6 mt-2 text-gray-600">
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">contact@techcorp.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span className="text-sm">+1 (555) 123-4567</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Account Information */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Account Information
            </h3>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Calendar className="w-5 h-5 text-gray-400 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-600">Joined Since</p>
                  <p className="font-medium text-gray-900">March 15, 2023</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-gray-400 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-600">Address</p>
                  <p className="font-medium text-gray-900">
                    123 Main St, San Francisco, CA 94102
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Description
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Senior Product Manager with 8+ years of experience in developing
              innovative digital solutions. Passionate about user experience and
              data-driven decision making.
            </p>
          </div>
        </div>

        {/* Linked Company */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">
            Linked Company
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-medium text-gray-600 text-sm">
                    Serial
                  </th>
                  <th className="text-left py-3 px-4 font-medium text-gray-600 text-sm">
                    User name
                  </th>
                  <th className="text-left py-3 px-4 font-medium text-gray-600 text-sm">
                    Email
                  </th>
                  <th className="text-left py-3 px-4 font-medium text-gray-600 text-sm">
                    Phone num
                  </th>
                </tr>
              </thead>
              <tbody>
                {linkedCompanies.map((company, index) => (
                  <tr
                    key={company.id}
                    className={
                      index !== linkedCompanies.length - 1
                        ? "border-b border-gray-100"
                        : ""
                    }
                  >
                    <td className="py-4 px-4">
                      <span className="text-sm font-medium text-gray-900">
                        {company.id}
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center text-sm">
                          {company.avatar}
                        </div>
                        <span className="font-medium text-gray-900 text-sm">
                          {company.name}
                        </span>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <span className="text-sm text-gray-600">
                        {company.email}
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <span className="text-sm text-gray-600">
                        {company.phone}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
