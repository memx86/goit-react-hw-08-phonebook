import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  token: null,
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    auth(state, { payload }) {
      state.token = payload.token;
    },
  },
});
export const { auth } = authSlice.actions;
export const authReducer = authSlice.reducer;
