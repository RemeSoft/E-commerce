import { RouterProvider } from "react-router-dom";
import AdminRoutes from "./routes/AdminRoutes";
import WebsiteRoute from "./routes/WebsiteRoutes";

export default function App() {
  const isAdminPath = window.location.pathname.startsWith("/admin");
  return isAdminPath ? (
    // admin routes
    <RouterProvider
      router={AdminRoutes}
      future={{
        v7_startTransition: true,
      }}
    />
  ) : (
    // website routes
    <RouterProvider
      router={WebsiteRoute}
      future={{
        v7_startTransition: true,
      }}
    />
  );
}
