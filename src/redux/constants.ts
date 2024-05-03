import { TaskProps } from "../pages/tasks/tasks";

export interface ThemeState {
  isDarkMode: boolean;
}

export interface MicState {
  mic: boolean;
}
export interface SpeakerState {
  speaker: boolean;
}

export interface LoginState {
  logged: boolean;
}

export interface RouteState {
  route: "dashboard" | "tasks" | "schedule";
}

export interface TaskState {
  tasks: TaskProps[];
  editingTaskId: number | null;
}
