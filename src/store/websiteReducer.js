import { combineReducers } from "@reduxjs/toolkit";
import websiteAuthReducer from "../features/website/authSlice";
import websiteCartReducer from "../features/website/cartSlice";
import websiteProductReducer from "../features/website/productSlice";

const websiteReducer = combineReducers({
  auth: websiteAuthReducer,
  cart: websiteCartReducer,
  product: websiteProductReducer,
});

export default websiteReducer;
