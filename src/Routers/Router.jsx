import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Layouts/Dashboard";

import Settings from "../Pages/Settings/Settings";
import UserManagement from "../Pages/User Management/UserManagement";

import SubscriptionManagement from "../Pages/Subscription/SubscriptionManagement";
import AdminManagement from "../Pages/Admin/AdminManagement";
import CompanyManagement from "../Pages/Companys/CompanyManagement";
import CompanyDashboard from "../Pages/Companys/CompanyDashboard";
import ProductsGridPage from "../Pages/Companys/Components/ProductsGridPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    errorElement: <h1>404</h1>,
    children: [
      {
        path: "/",
        element: <h1>Main</h1>,
      },
      {
        path: "/company-management",
        element: <CompanyManagement />,
      },
      {
        path: "/company-management/:id",
        element: <CompanyDashboard />,
      },
      {
        path: "/company-management/:id/:product",
        element: <ProductsGridPage />,
      },
      {
        path: "/users-management",
        element: <UserManagement />,
      },
      {
        path: "/subscriptions",
        element: <SubscriptionManagement />,
      },
      {
        path: "/admin-management",
        element: <AdminManagement />,
      },
      {
        path: "/settings",
        element: <Settings />,
      },
    ],
  },
  {
    path: "/register",
    element: <h1>Register </h1>,
  },
]);
