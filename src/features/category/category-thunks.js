import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../app/api";

// create new category
export const createCategory = createAsyncThunk(
  "category/create-category",
  async (data, { dispatch, rejectWithValue }) => {
    try {
      // generating form data
      const formData = new FormData();
      formData.append("image", data.image[0]);
      formData.append("name", data.name);
      formData.append("type", data.type);

      // Send the request with FormData
      await api.post("/admin/category", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      // Fetch categories
      dispatch(fetchCategories());
    } catch (error) {
      rejectWithValue(error.response.data);
    }
  },
);

// load categories
export const fetchCategories = createAsyncThunk(
  "category/fetch-categories",
  async () => {
    const response = await api.get("/admin/category");
    return response.data;
  },
);

// delete category
export const deleteCategory = createAsyncThunk(
  "category/delete-category",
  async (categoryId, { rejectWithValue }) => {
    try {
      await api.delete(`/admin/category/${categoryId}`);
      return categoryId;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.data);
    }
  },
);
