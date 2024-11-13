import Layout from "../layouts/Layout";
import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Overview from "../pages/Overview";
import Category from "../pages/Category";

// admin routes
const routes = [
  { path: "/admin/login", element: <Login /> },
  {
    path: "/admin",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Overview />,
      },
      {
        path: "category",
        element: <Category />,
      },
    ],
  },
];

// configuration
export default createBrowserRouter(routes, {
  future: {
    v7_startTransition: true,
    v7_relativeSplatPath: true,
    v7_fetcherPersist: true,
    v7_normalizeFormMethod: true,
    v7_partialHydration: true,
    v7_skipActionErrorRevalidation: true,
  },
});
