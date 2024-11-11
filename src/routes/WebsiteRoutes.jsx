import { createBrowserRouter } from "react-router-dom";
import Home from "../website/pages/home/Home";

// admin routes
const routes = [{ path: "/", element: <Home /> }];

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
