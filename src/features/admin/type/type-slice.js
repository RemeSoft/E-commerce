import { createSlice } from "@reduxjs/toolkit";
import { createType, loadTypes } from "./type-thunks";

// Initial state
const states = {
  types: [],
  status: "idle",
  error: null,
};

// Extra reducers
const extraReducers = (builder) => {
  builder
    // create types
    .addCase(createType.pending, (state) => {
      state.status = "loading";
      state.error = null;
    })
    .addCase(createType.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.types.push(action.payload.data);
    })
    .addCase(createType.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    })

    // load types
    .addCase(loadTypes.pending, (state) => {
      state.status = "loading";
      state.error = null;
    })
    .addCase(loadTypes.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.types = action.payload.data;
    })
    .addCase(loadTypes.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    });
};

// Slice
const typeSlice = createSlice({
  name: "feature/type",
  initialState: states,
  extraReducers,
});

export default typeSlice.reducer;
