import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./src/client/containers/Navbar";
import Footer from "./src/client/containers/Footer";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./src/client/containers/HomePage";
import DocsPage from "./src/client/containers/DocsPage";

import "./public/styles.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/docs",
    element: <DocsPage />,
  },
  {
    path: "*",
  },
]);

root.render(
  <React.StrictMode>
    <Navbar />
    <RouterProvider router={router} />
    <Footer />
  </React.StrictMode>
);
