import { RouterProvider } from "react-router-dom";
import AdminRoutes from "./routes/AdminRoutes";
import WebsiteRoute from "./routes/WebsiteRoutes";
import { Provider } from "react-redux";
import store from "./store";

export default function App() {
  const isAdminPath = window.location.pathname.startsWith("/admin");
  return isAdminPath ? (
    // admin routes
    <Provider store={store}>
      <RouterProvider
        router={AdminRoutes}
        future={{
          v7_startTransition: true,
        }}
      />
    </Provider>
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
