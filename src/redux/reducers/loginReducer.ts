import { createSelector, createSlice } from "@reduxjs/toolkit";
import { LoginState } from "../constants";

const initialState: LoginState = {
  logged: false,
};

export const loggedSlice = createSlice({
  name: "logged",
  initialState,
  reducers: {
    handleLogin: (state) => {
      if (state.logged) {
        // TODO : Implement the Login Logic here
        state.logged = true;
        console.log("logging in");
      } else {
        state.logged = !state.logged;
      }
    },
  },
});

export const selectTheme = createSelector(
  (state: { logged: LoginState }) => state.logged.logged,
  (isDarkMode) => isDarkMode,
);

export const { handleLogin } = loggedSlice.actions;
