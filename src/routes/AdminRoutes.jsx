import { createBrowserRouter } from "react-router-dom";
import { Login, Overview } from "../admin/pages";
import AdminLayout from "../layouts/AdminLayout";

// admin routes
const routes = [
  { path: "/admin/login", element: <Login /> },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        path: "",
        element: <Overview />,
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
