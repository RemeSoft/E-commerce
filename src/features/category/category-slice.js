import { createSlice } from "@reduxjs/toolkit";
import {
  createCategory,
  fetchCategories,
  deleteCategory,
} from "./category-thunks";

// essential states
const states = {
  categories: [],
  status: "idle",
  error: null,
};

// extra reducers
const extraReducers = (builder) => {
  builder
    // create categories
    .addCase(createCategory.pending, (state) => {
      state.status = "loading";
    })
    .addCase(createCategory.fulfilled, (state) => {
      state.status = "succeeded";
    })
    .addCase(createCategory.rejected, (state, action) => {
      state.status = "failed";
      console.log(action.payload);
    })

    // load categories
    .addCase(fetchCategories.pending, (state) => {
      state.status = "loading";
    })
    .addCase(fetchCategories.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.categories = action.payload.data;
    })
    .addCase(fetchCategories.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.payload.error;
    })

    // delete categories
    .addCase(deleteCategory.pending, (state) => {
      state.status = "loading";
    })
    .addCase(deleteCategory.fulfilled, (state, action) => {
      state.categories = state.categories.filter(
        (category) => category.id !== action.payload,
      );
    })
    .addCase(deleteCategory.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.payload.error;
    });
};

// the slices
const categorySlice = createSlice({
  name: "feature/category",
  initialState: states,
  extraReducers,
});

//export the reducer
export default categorySlice.reducer;
