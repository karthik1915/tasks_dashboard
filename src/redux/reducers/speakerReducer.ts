import { createSelector, createSlice } from "@reduxjs/toolkit";
import { SpeakerState } from "../constants";

const initialState: SpeakerState = {
  speaker: true,
};

export const speakerSlice = createSlice({
  name: "speaker",
  initialState,
  reducers: {
    toggleSpeaker: (state) => {
      state.speaker = !state.speaker;
    },
  },
});

export const getMicStatus = createSelector(
  (state: { media: SpeakerState }) => state.media.speaker,
  (mic) => mic,
);

export const { toggleSpeaker } = speakerSlice.actions;
