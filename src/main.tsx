import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import { ThemeProvider } from "./themes/theme-provider.tsx";
import { Home } from "./pages/auth/Home.tsx";
import { NotFound } from "./pages/NotFound.tsx";
import { Dashboard } from "./pages/Dashboard/Dashboard.tsx";
import { DefaultLeyout } from "./pages/_layouts/DefaultLeyout.tsx";
import { Orders } from "./pages/Orders/Orders.tsx";
import { Toaster } from "./components/ui/toaster.tsx";
import { Store } from "./pages/Store/Store.tsx";

const router = createBrowserRouter([
  {
    path: "/home",
    element: <Home />,
  },

  {
    path: "/",
    element: <DefaultLeyout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/orders",
        element: <Orders />,
      },
    ],
  },

  {
    path: "/store",
    element: <Store />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
      <Toaster />
    </ThemeProvider>
  </React.StrictMode>
);
