import React from "react";
import { motion } from "framer-motion";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { Dispatch } from "@reduxjs/toolkit";
import { editTask } from "../../../redux/tasks/taskReducer";
import tasks from "./tasksConst";
import { CrossIcon } from "../../../components/icons/icons";

const fieldColorsFn = (isDarkMode: boolean): string => {
  switch (isDarkMode) {
    case true:
      return "bg-gray-600";
    case false:
      return "bg-white border border-gray-300";
  }
};

const TaskSidePanel: React.FC = () => {
  const editingTaskId = useAppSelector((state) => state.task.editingTaskId);
  const isDarkMode = useAppSelector((state) => state.theme.isDarkMode);
  const isOpen: boolean = editingTaskId ? true : false;
  const dispatch: Dispatch = useAppDispatch();
  const fieldColors: string = fieldColorsFn(isDarkMode);

  const task = tasks.find((task) => task.id === editingTaskId);

  const options: RadioProps[] = [
    { label: "Low", value: "low" },
    { label: "Medium", value: "medium" },
    { label: "High", value: "high" },
  ];

  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: isOpen ? "0%" : "110%" }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className={`sidepanel-size absolute right-0 flex-col rounded-xl bg-slate-800 p-4`}
    >
      <div className="flex items-center justify-between">
        <p>Edit Task</p>
        <button onClick={() => dispatch(editTask(null))}>
          <CrossIcon width={16} height={16} fill="red" />
        </button>
      </div>
      <p className="mb-1 text-sm">Task Name :</p>
      <input
        type="text"
        value={task?.title}
        className={`mb-2 h-10 w-full rounded-lg outline-none ${fieldColors} px-3 py-2
           ${isDarkMode ? "white" : "black"}  `}
      />
      <p className="mb-1 text-sm">Task Description :</p>
      <textarea
        rows={3}
        style={{ minHeight: "3em" }}
        value={task?.description}
        className={`mb-2 w-full rounded-lg outline-none ${fieldColors} px-3 py-2
           ${isDarkMode ? "white" : "black"}  `}
      />

      <RadioGroup
        options={options}
        selectedValue={task?.priority}
        onChange={() => {}}
      />

      <div>{task?.keywords}</div>
      <div>{task?.currState}</div>
      <div>Save Button</div>
    </motion.div>
  );
};

interface RadioProps {
  label: string;
  value: "low" | "medium" | "high";
}

interface RadioGroupProps {
  options: RadioProps[];
  selectedValue: string | undefined;
  onChange: () => void;
}

const RadioGroup = ({ options, selectedValue, onChange }: RadioGroupProps) => {
  return (
    <div>
      {options.map((option) => (
        <label key={option.value}>
          <input
            type="radio"
            value={option.value}
            checked={selectedValue === option.value}
            onChange={onChange}
            className="h-3 w-3 appearance-none rounded-full border-gray-300 focus:ring-gray-500"
            // style={{ '--tw-ring-color': 'gray' }}
          />
          {option.label}
        </label>
      ))}
    </div>
  );
};

export default TaskSidePanel;
