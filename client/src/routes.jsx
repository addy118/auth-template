import React from "react";
import { createBrowserRouter } from "react-router-dom";
import AuthProvider from "@/authProvider";
import ProtectedRoute from "@/ProtectedRoute";
import App from "@/App";
import LoginPage from "@/pages/Login";
import Home from "@/pages/Home";
import Layout from "./components/Layout";
import Profile from "./pages/Profile";
import SignupPage from "./pages/SignUp";

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
      { path: "signup", element: <SignupPage /> },
      {
        element: <ProtectedRoute />,
        children: [
          {
            path: "home",
            element: <Home />,
          },
          {
            path: "user/:userId/profile",
            element: <Profile />,
          },
        ],
      },
    ],
  },
]);

export default router;
