import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import PageHome from "./components/PageHome.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Dashboard from "./components/admin/PageDashboard.jsx";
import PageStats from "./components/admin/PageStats.jsx";
import PageDashProduct from "./components/admin/PageDashProduct.jsx";
import PageDashProductList from "./components/admin/PageDashProductList.jsx";
import PageEditProduct from "./components/admin/PageEditProduct.jsx";
import Account from "./components/Account.jsx";
import Login from "./components/Login.jsx";
import Signin from "./components/Signin.jsx";
import { AuthContextProvider } from "./contexts/AuthContext.jsx";
import ProtectedRoute from "./components/admin/SafeRoute.jsx";
import User from "./components/User.jsx";
import Cart from "./components/Cart.jsx";
import Product from "./components/Product.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <PageHome />,
      },
      {
        path: "/product",
        element: <Product />,
      },
      {
        path: "/account/login",
        element: <Account />,
        children: [
          {
            index: true,
            element: <Login />,
          },
          {
            path: "signin",
            element: <Signin />,
          },
        ],
      },
      {
        path: "/user",
        element: (
          <ProtectedRoute>
            <User />
          </ProtectedRoute>
        ),
      },
      {
        path: "/cart",
        element: (
          <ProtectedRoute>
            <Cart />
          </ProtectedRoute>
        ),
      },
      {
        path: "/dashboard",
        element: (
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        ),
        children: [
          {
            index: true,
            element: <PageStats />,
          },
          {
            path: "add+product",
            element: <PageDashProduct />,
          },
          {
            path: "display+product",
            element: <PageDashProductList />,

            children: [
              {
                path: ":id",
                element: <PageEditProduct />,
              },
            ],
          },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <AuthContextProvider>
    <RouterProvider router={router} />
  </AuthContextProvider>
);
