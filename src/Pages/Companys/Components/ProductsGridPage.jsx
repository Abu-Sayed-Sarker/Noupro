import React, { useState } from "react";
import { Search, ChevronDown } from "lucide-react";
import ProductModal from "./ProductModal";

const ProductsGridPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Select Category");
  const [open, setOpen] = useState(false);

  const products = [
    {
      id: 1,
      name: "Coca Cola",
      category: "Beverage",
      price: 10.76,
      quantity: 100.66,
      status: "Available",
      image:
        "https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=200&h=200&fit=crop",
    },
    {
      id: 2,
      name: "Coca Cola",
      category: "Beverage",
      price: 10.76,
      quantity: 100.66,
      status: "Available",
      image:
        "https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=200&h=200&fit=crop",
    },
    {
      id: 3,
      name: "Coca Cola",
      category: "Beverage",
      price: 10.76,
      quantity: 100.66,
      status: "Available",
      image:
        "https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=200&h=200&fit=crop",
    },
    {
      id: 4,
      name: "Coca Cola",
      category: "Beverage",
      price: 10.76,
      quantity: 100.66,
      status: "Available",
      image:
        "https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=200&h=200&fit=crop",
    },
    {
      id: 5,
      name: "Coca Cola",
      category: "Beverage",
      price: 10.76,
      quantity: 100.66,
      status: "Available",
      image:
        "https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=200&h=200&fit=crop",
    },
    {
      id: 6,
      name: "Coca Cola",
      category: "Beverage",
      price: 10.76,
      quantity: 100.66,
      status: "Available",
      image:
        "https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=200&h=200&fit=crop",
    },
  ];

  const categories = [
    "Select Category",
    "Beverage",
    "Food",
    "Snacks",
    "Dairy",
    "Frozen",
    "Electronics",
  ];

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "Select Category" ||
      product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen p-6">
      <div className="mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold text-gray-900">
            {filteredProducts.length} Products
          </h1>

          <div className="flex items-center space-x-4">
            {/* Search Input */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search for anything..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 w-80 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              />
            </div>

            {/* Category Dropdown */}
            <div className="relative">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none cursor-pointer"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              onClick={() => setOpen(true)}
              className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-200"
            >
              {/* Product Image */}
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 p-8 flex items-center justify-center h-48">
                <div className="w-24 h-32 bg-gradient-to-b from-red-800 to-red-900 rounded-lg shadow-lg relative overflow-hidden">
                  {/* Coca Cola Bottle Design */}
                  <div className="absolute inset-0 bg-gradient-to-b from-red-700 to-red-900 rounded-lg">
                    {/* Bottle Cap */}
                    <div className="w-6 h-6 bg-red-600 rounded-full mx-auto mt-1 border-2 border-red-500"></div>
                    {/* Bottle Neck */}
                    <div className="w-4 h-8 bg-red-700 mx-auto"></div>
                    {/* Bottle Body */}
                    <div className="flex-1 bg-gradient-to-b from-red-700 to-red-900 mx-1 rounded-b-lg relative">
                      {/* Label */}
                      <div className="absolute top-2 left-0 right-0 h-8 bg-red-600 flex items-center justify-center">
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
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-500">{product.category}</p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Price :</span>
                    <span className="text-sm font-medium text-gray-900">
                      $ {product.price.toFixed(2)}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Quantity :</span>
                    <span className="text-sm font-medium text-gray-900">
                      {product.quantity.toFixed(2)}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Status :</span>
                    <span className="text-sm font-medium text-green-600">
                      {product.status}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {open && <ProductModal closeModal={() => setOpen(false)} />}

        {/* No Results Message */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search className="w-12 h-12 mx-auto" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              No products found
            </h3>
            <p className="text-gray-500">
              Try adjusting your search terms or category filter.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsGridPage;
