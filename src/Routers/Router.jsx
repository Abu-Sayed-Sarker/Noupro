import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Layouts/Dashboard";
import Settings from "../Pages/Settings/Settings";

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
        element: <h1>Company Management</h1>,
      },
      {
        path: "/users-management",
        element: <h1>Users</h1>,
      },
      {
        path: "/subscriptions",
        element: <h1>Subscriptions</h1>,
      },
      {
        path: "/admin-management",
        element: <h1>Admin Profile</h1>,
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
