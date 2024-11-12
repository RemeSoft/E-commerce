import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "../features/admin/auth/auth-slice";
import categoryReducer from "../features/admin/category/category-slice";
import typeReducer from "../features/admin/type/type-slice";

const adminReducer = combineReducers({
  auth: authReducer,
  category: categoryReducer,
  type: typeReducer,
});

export default adminReducer;
