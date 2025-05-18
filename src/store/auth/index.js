import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  user: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    __login(state, action) {
      state.user = action.payload;
    },
    __logout(state) {
      state.user = null;
    },
    __updateProfile(state, action) {
      state.user = { ...state.user, ...action.payload };
    },
  },
});

export const { __login, __logout, __updateProfile } = authSlice.actions;
export default authSlice.reducer;
