import { Eye, Trash2 } from "lucide-react";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function Products() {
  const navigate = useNavigate();
  const { id: companyId } = useParams();
  const products = [
    {
      id: 1,
      serial: "01",
      brandName: "Brand 1",
      productAmount: 17,
      display: "On",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
    },
    {
      id: 2,
      serial: "02",
      brandName: "Brand 2",
      productAmount: 11,
      display: "On",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
    },
    {
      id: 3,
      serial: "03",
      brandName: "Brand 3",
      productAmount: 22,
      display: "Off",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face",
    },
    {
      id: 4,
      serial: "01",
      brandName: "Brand 4",
      productAmount: 17,
      display: "On",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
    },
    {
      id: 5,
      serial: "02",
      brandName: "Brand 5",
      productAmount: 11,
      display: "On",
      avatar:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=40&h=40&fit=crop&crop=face",
    },
    {
      id: 6,
      serial: "03",
      brandName: "Brand 6",
      productAmount: 22,
      display: "Off",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=40&h=40&fit=crop&crop=face",
    },
  ];

  const handleDelete = (id) => {
    console.log("Delete item:", id);
  };

  const handleView = (id) => {
    navigate(`/company-management/${companyId}/Product-${id}`);
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead className="bg-gray-50 border-b border-gray-200">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Serial
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Brand Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Product amount
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Display
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {products.map((product) => (
            <tr
              key={product.id}
              className="hover:bg-gray-50 transition-colors duration-150"
            >
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {product.serial}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <img
                    className="h-10 w-10 rounded-full object-cover"
                    src={product.avatar}
                    alt={product.brandName}
                  />
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900">
                      {product.brandName}
                    </div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {product.productAmount}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span
                  className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    product.display === "On"
                      ? "bg-green-100 text-green-800"
                      : "bg-gray-100 text-gray-800"
                  }`}
                >
                  {product.display}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => handleView(product.id)}
                    className="text-gray-400 hover:text-gray-600 transition-colors duration-150"
                  >
                    <Eye className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => handleDelete(product.id)}
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
  );
}
