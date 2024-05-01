import { configureStore, Reducer } from "@reduxjs/toolkit";
import { themeSlice } from "./redux/reducers/themeReducer";
import {
  LoginState,
  MicState,
  RouteState,
  SpeakerState,
  ThemeState,
} from "./redux/constants";
import { micSlice } from "./redux/reducers/micReducer";
import { speakerSlice } from "./redux/reducers/speakerReducer";
import { loggedSlice } from "./redux/reducers/loginReducer";
import { routeSlice } from "./redux/reducers/routeReducer";

export const store = configureStore({
  reducer: {
    theme: themeSlice.reducer as Reducer<ThemeState>,
    mic: micSlice.reducer as Reducer<MicState>,
    speaker: speakerSlice.reducer as Reducer<SpeakerState>,
    login: loggedSlice.reducer as Reducer<LoginState>,
    route: routeSlice.reducer as Reducer<RouteState>,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
