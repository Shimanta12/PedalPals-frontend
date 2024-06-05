import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Login from "../pages/Login";
import Register from "../pages/Register";
import UserProfile from "../pages/Dashboard pages/UserProfile";
import MainLayout from "../layouts/MainLayout";
import DashboardLayout from "../layouts/DashboardLayout";
import PrivateRoute from "./PrivateRoute";
import EditProfile from "../pages/Dashboard pages/EditProfile";
import AllProducts from "../pages/Dashboard pages/AllProducts";
import AddProduct from "../pages/Dashboard pages/AddProduct";
import UpdateProduct from "../pages/Dashboard pages/UpdateProduct";
import ProductDetails from "../pages/ProductDetails";
import Products from "../pages/Products";
import ContactUs from "../pages/ContactUs";
import ErrorPage from "../pages/ErrorPage";
import Overview from "../pages/Dashboard pages/Overview";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <ContactUs />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "products/:id",
        element: (
          <PrivateRoute>
            <ProductDetails />,
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://pedal-pals-backend.vercel.app/products/${params.id}`),
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: (
          <PrivateRoute>
            <Overview />,
          </PrivateRoute>
        ),
      },
      {
        path: "user-profile",
        element: (
          <PrivateRoute>
            <UserProfile />,
          </PrivateRoute>
        ),
      },
      {
        path: "edit-profile",
        element: (
          <PrivateRoute>
            <EditProfile />,
          </PrivateRoute>
        ),
      },
      {
        path: "all-products",
        element: (
          <PrivateRoute>
            <AllProducts />,
          </PrivateRoute>
        ),
      },
      {
        path: "all-products/:id",
        element: (
          <PrivateRoute>
            <ProductDetails />,
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://pedal-pals-backend.vercel.app/products/${params.id}`),
      },
      {
        path: "all-products/update-product/:id",
        element: (
          <PrivateRoute>
            <UpdateProduct />,
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://pedal-pals-backend.vercel.app/products/${params.id}`),
      },
      {
        path: "add-product",
        element: (
          <PrivateRoute>
            <AddProduct />,
          </PrivateRoute>
        ),
      },
    ],
  },
]);
