import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  token: null,
  isLoggedIn: false,
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    token(state, { payload }) {
      state.token = payload.token;
    },
    loggedIn(state) {
      state.isLoggedIn = true;
    },
    loggedOff(state) {
      state.token = null;
      state.isLoggedIn = false;
    },
  },
});
export const { token, loggedIn, loggedOff } = authSlice.actions;
export const authReducer = authSlice.reducer;
