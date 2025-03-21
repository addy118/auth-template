import React from "react";
import { createBrowserRouter } from "react-router-dom";
import AuthProvider from "@/authProvider";
import ProtectedRoute from "@/ProtectedRoute";
import App from "@/App";
import LoginPage from "@/pages/Login";
import Home from "@/pages/Home";
import Layout from "./components/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <AuthProvider>
        <Layout />
      </AuthProvider>
    ),
    children: [
      { path: "/", element: <App /> },
      { path: "login", element: <LoginPage /> },
      {
        element: <ProtectedRoute />,
        children: [{ path: "home", element: <Home /> }],
      },
    ],
  },
  // {
  //   path: "/",
  //   element: <AuthProvider />,
  //   children: [
  //     { path: "/login", element: <LoginPage /> },
  //     {
  //       path: "/",
  //       element: <Layout />,
  //       children: [
  //         { path: "/", element: <App /> },
  //         {
  //           path: "/home",
  //           element: <ProtectedRoute />,
  //           children: [{ path: "home", element: <Home /> }],
  //         },
  //       ],
  //     },
  //   ],
  // },
]);

export default router;
