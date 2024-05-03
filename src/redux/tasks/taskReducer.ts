import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TaskState } from "../constants";

const initialState: TaskState = {
  tasks: [],
  editingTaskId: null,
};

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    editTask: (state, action: PayloadAction<number | null>) => {
      state.editingTaskId = action.payload;
    },
  },
});

export const selectEditingTaskId = createSelector(
  (state: { task: TaskState }) => state.task.editingTaskId,
  (tasks) => tasks,
);

export const { editTask } = tasksSlice.actions;

export default tasksSlice.reducer;
