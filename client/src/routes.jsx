import React from "react";
import App from "./pages/App";
import ErrorPage from "./pages/ErrorPage";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <App /> },
      { path: "user/:userId/profile", element: <App /> },
      { path: "new", element: <App /> },
    ],
  },
];

export default routes;
