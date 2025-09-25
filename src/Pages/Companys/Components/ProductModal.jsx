import { X } from "lucide-react";
import React from "react";

export default function ProductModal({ closeModal }) {
  const productData = {
    id: "Frame 2147224948",
    name: "Coca Cola",
    category: "Beverage",
    description:
      "A subscription plan is a payment model in which individuals or companies pay recurring fees at set intervals in exchange for access to goods or services. This model is commonly used for streaming services, digital storage, meal delivery kits, and personal care products.",
    price: 9.99,
    quantity: 100.8,
    status: "Available",
    distributor: "Acme Corporation",
    retailer: "Demo name",
    image:
      "https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=400&h=300&fit=crop",
  };
  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center bg-black bg-opacity-50 justify-center min-h-screen p-4">
        <div className="relative bg-white rounded-lg shadow-xl max-w-xl w-full mx-auto transform transition-all">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <div>
              <h2 className="text-lg font-semibold text-gray-900">
                View Product Details
              </h2>
              <p className="text-xs text-gray-500 mt-1">{productData.id}</p>
            </div>
            <button
              onClick={closeModal}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Product Image */}
          <div className="bg-gradient-to-br from-blue-100 to-purple-100 p-8 flex items-center justify-center">
            <div className="w-20 h-28 bg-gradient-to-b from-red-800 to-red-900 rounded-lg shadow-lg relative overflow-hidden">
              {/* Coca Cola Bottle Design */}
              <div className="absolute inset-0 bg-gradient-to-b from-red-700 to-red-900 rounded-lg">
                {/* Bottle Cap */}
                <div className="w-5 h-5 bg-red-600 rounded-full mx-auto mt-1 border border-red-500"></div>
                {/* Bottle Neck */}
                <div className="w-3 h-6 bg-red-700 mx-auto"></div>
                {/* Bottle Body */}
                <div className="flex-1 bg-gradient-to-b from-red-700 to-red-900 mx-1 rounded-b-lg relative">
                  {/* Label */}
                  <div className="absolute top-1 left-0 right-0 h-6 bg-red-600 flex items-center justify-center">
                    <span className="text-white text-xs font-bold transform scale-75">
                      Coca Cola
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Product Details */}
          <div className="p-6">
            {/* Product Name and Category */}
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                {productData.name}
              </h3>
              <p className="text-sm text-gray-500">{productData.category}</p>
            </div>

            {/* Description */}
            <div className="mb-4">
              <h4 className="text-sm font-medium text-gray-900 mb-2">
                Description :
              </h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                {productData.description}
              </p>
            </div>

            {/* Product Information */}
            <div className="space-y-3">
              <div className="flex items-center">
                <span className="text-sm font-medium text-gray-900 w-20">
                  Price:
                </span>
                <span className="text-sm text-gray-600">
                  ${productData.price.toFixed(2)}
                </span>
              </div>

              <div className="flex items-center">
                <span className="text-sm font-medium text-gray-900 w-20">
                  Quantity:
                </span>
                <span className="text-sm text-gray-600">
                  {productData.quantity.toFixed(2)}
                </span>
              </div>

              <div className="flex items-center">
                <span className="text-sm font-medium text-gray-900 w-20">
                  Status :
                </span>
                <span className="text-sm text-green-600 font-medium">
                  {productData.status}
                </span>
              </div>

              <div className="flex items-center">
                <span className="text-sm font-medium text-gray-900 w-20">
                  Distributor:
                </span>
                <span className="text-sm text-gray-600">
                  {productData.distributor}
                </span>
              </div>

              <div className="flex items-center">
                <span className="text-sm font-medium text-gray-900 w-20">
                  Retails:
                </span>
                <span className="text-sm text-gray-600">
                  {productData.retailer}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
