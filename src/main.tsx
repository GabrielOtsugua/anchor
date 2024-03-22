import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { ThemeProvider } from "./themes/theme-provider.tsx";
import { Home } from "./pages/auth/Home.tsx";
import { NotFound } from "./pages/NotFound.tsx";
import { Dashboard } from "./pages/Dashboard/Dashboard.tsx";
import { DefaultLeyout } from "./pages/_layouts/DefaultLeyout.tsx";
import { Orders } from "./pages/Orders/Orders.tsx";
import { Toaster } from "./components/ui/toaster.tsx";
import { Store } from "./pages/Store/Store.tsx";
import { UserContextProvider } from "./contexts/UserContext.tsx";
import { Profile } from "./pages/Profile/Profile.tsx";

interface PrivateRouteProps {
  element: React.ReactElement;
}

function PrivateRoute({ element }: PrivateRouteProps) {
  const auth = localStorage.getItem("userName");

  return auth ? element : <Navigate to="/" />;
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />,
  },

  {
    path: "/",
    element: <DefaultLeyout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/dashboard",
        element: <PrivateRoute element={<Dashboard />} />,
      },
      {
        path: "/orders",
        element: <PrivateRoute element={<Orders />} />,
      },
      {
        path: "/profile",
        element: <PrivateRoute element={<Profile />} />,
      },
    ],
  },

  {
    path: "/store",
    element: <PrivateRoute element={<Store />} />,
    errorElement: <NotFound />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <UserContextProvider>
        <RouterProvider router={router} />
        <Toaster />
      </UserContextProvider>
    </ThemeProvider>
  </React.StrictMode>
);
