import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import router from "./routes";
import store from "./app/store";

export default function App() {
  return (
    // admin routes
    <Provider store={store}>
      <RouterProvider
        router={router}
        future={{
          v7_startTransition: true,
        }}
      />
    </Provider>
  );
}
