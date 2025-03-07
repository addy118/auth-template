import React from "react";
import App from "./pages/App";
import ErrorPage from "./pages/ErrorPage";
import SignupPage from "./pages/SignUp";
import LoginPage from "./pages/Login";
import Layout from "./components/Layout";

const routes = [
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <App /> },
      { path: "user/:userId/profile", element: <App /> },
      { path: "new", element: <App /> },
    ],
  },
  { path: "signup", element: <SignupPage /> },
  { path: "login", element: <LoginPage /> },
];

export default routes;
