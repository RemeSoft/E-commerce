import { createSlice } from "@reduxjs/toolkit";
import { loginRequest } from "./auth-thunks";
import api from "../../api";

// essential states
const states = {
  isAuthenticated: !!localStorage.getItem("isAuthenticated"),
  token: localStorage.getItem("token") || null,
  status: "idle",
  error: null,
};

// essential reducers
const reducers = {
  logout: (state) => {
    state.token = null;
    state.isAuthenticated = false;
    localStorage.removeItem("token");
    localStorage.removeItem("isAuthenticated");
    delete api.defaults.headers.common["Authorization"];
  },
};

// extra reducers
const extraReducers = (builder) => {
  builder
    .addCase(loginRequest.pending, (state) => {
      state.status = "loading";
      state.error = null;
    })
    .addCase(loginRequest.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.isAuthenticated = true;
      state.token = action.payload.token;

      // store token and isAuthenticated in localStorage
      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("isAuthenticated", "true");

      // set Authorization header
      api.defaults.headers.common["Authorization"] =
        `Bearer ${action.payload.token}`;
    })
    .addCase(loginRequest.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    });
};

// the slices
const authSlice = createSlice({
  name: "feature/auth",
  initialState: states,
  extraReducers,
  reducers,
});

//export actions and reducer
export const { logout } = authSlice.actions;
export default authSlice.reducer;
