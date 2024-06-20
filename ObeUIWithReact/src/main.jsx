import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LoginPage from "./views/LoginPage/LoginPage.jsx";
import RegisterPage from "./views/RegisterPage/Register.jsx";
import Sidebar from "./component/Sidebar/AdminSidebar.jsx";
import Admin from "./views/Admin/Admin.jsx";
import Course from "./views/Admin/Mapping/Course.jsx";

const router = createBrowserRouter([
  {
    path: "/admin",
    element: <App />,
    children: [
      {
        path: "/admin",
        element: <Admin />,
        children: [
          { path: "/admin/home", element: <></> },
          { path: "/admin/mapping/course", element: <Course /> },
        ],
      },
    ],
  },

  {
    path: "/",
    element: <LoginPage />,
    children: [
      {
        path: "/login",
        element: <LoginPage />,
      },
    ],
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
