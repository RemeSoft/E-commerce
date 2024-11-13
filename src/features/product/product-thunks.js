import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../app/api";

export const createProductType = createAsyncThunk(
  "product/create-product-type",
  async (data) => {
    const response = await api.post("/admin/product-type", data);
    return response.data;
  },
);
