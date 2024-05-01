import { createSelector, createSlice } from "@reduxjs/toolkit";
import { ThemeState } from "../constants";

const initialState: ThemeState = {
  isDarkMode: true,
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.isDarkMode = !state.isDarkMode;
    },
  },
});

export const selectTheme = createSelector(
  (state: { theme: ThemeState }) => state.theme.isDarkMode,
  (isDarkMode) => isDarkMode
);

export const { toggleTheme } = themeSlice.actions;
