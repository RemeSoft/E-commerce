import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "../features/admin/auth/auth-slice";

const adminReducer = combineReducers({
  auth: authReducer,
});

export default adminReducer;
