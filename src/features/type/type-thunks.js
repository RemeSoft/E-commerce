import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../app/api";

export const createType = createAsyncThunk("type/create-type", async (data) => {
  const response = await api.post("/admin/type", data);
  return response.data;
});

export const loadTypes = createAsyncThunk("type/load-types", async () => {
  const response = await api.get("/admin/type");
  return response.data;
});
