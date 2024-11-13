import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/auth-slice";
import categoryReducer from "../features/category/category-slice";
import typeReducer from "../features/type/type-slice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    category: categoryReducer,
    type: typeReducer,
  },
});

export default store;
