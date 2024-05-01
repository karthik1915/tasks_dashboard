import { createSelector, createSlice } from "@reduxjs/toolkit";
import { MicState } from "../constants";

const initialState: MicState = {
  mic: false,
};

export const micSlice = createSlice({
  name: "microphone",
  initialState,
  reducers: {
    toggleMic: (state) => {
      state.mic = !state.mic;
    },
  },
});

export const getMicStatus = createSelector(
  (state: { media: MicState }) => state.media.mic,
  (mic) => mic,
);

export const { toggleMic } = micSlice.actions;
