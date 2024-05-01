import { createSlice, createSelector, PayloadAction } from "@reduxjs/toolkit";
import { RouteState } from "../constants";

// Define the initial state
const initialState: RouteState = {
  route: "dashboard",
};

// Create a slice for the route state
export const routeSlice = createSlice({
  name: "route",
  initialState,
  reducers: {
    updateRoute: (
      state,
      action: PayloadAction<"dashboard" | "tasks" | "schedule">,
    ) => {
      state.route = action.payload;
    },
  },
});

export const currentRoute = createSelector(
  (state: { route: RouteState }) => state.route.route,
  (routename) => routename,
);

// Export the action creators
export const { updateRoute } = routeSlice.actions;

// Export the reducer
export default routeSlice.reducer;
