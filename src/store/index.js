import { configureStore } from "@reduxjs/toolkit";
import adminReducer from "./adminReducer";
import websiteReducer from "./websiteReducer";

const store = configureStore({
  reducer: {
    admin: adminReducer,
    website: websiteReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: {
          adminApi,
          websiteApi,
        },
      },
    }),
});

export default store;
