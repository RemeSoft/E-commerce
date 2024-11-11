import { combineReducers } from "@reduxjs/toolkit";
import adminAuthReducer from "../features/admin/authSlice";
import adminProductReducer from "../features/admin/productSlice";

const adminReducer = combineReducers({
  auth: adminAuthReducer,
  product: adminProductReducer,
});

export default adminReducer;
