import React from "react";
import {
  PopoverButton,
  PopoverInnerButton,
  PopoverOption,
  PopoverOptions,
} from "./components/popover";
import { EditIcon } from "../../components/icons/icons";
import TaskSidePanel from "./components/tasksSidePanel";
import tasks from "./components/tasksConst";
import { useAppDispatch } from "../../hooks";
import { Dispatch } from "@reduxjs/toolkit";
import { editTask } from "../../redux/tasks/taskReducer";

export interface TaskProps {
  id: number;
  title: string;
  keywords: string[];
  priority: "low" | "medium" | "high";
  currState: "todo" | "progress" | "done";
  description: string;
  date: Date;
}

const Tasks: React.FC = () => {
  return (
    <>
      <div className=" relative col-span-full p-3">
        <TaskSidePanel />
        <div className="flex w-full items-center justify-between">
          <p className="text-xl">Select Tasks</p>
          <button className="rounded-lg bg-orange-500 px-4 py-2 hover:bg-orange-700">
            Add Task
          </button>
        </div>
        <div className="grid grid-cols-3 gap-6">
          <TodoTasks />
          <InProgressTasks />
          <CompletedTasks />
        </div>
      </div>
    </>
  );
};

const TodoTasks = () => {
  const todoTasks = tasks.filter((task) => task.currState === "todo");

  return (
    <>
      {todoTasks.map((task) => (
        <TaskCard
          key={task.id}
          id={task.id}
          title={task.title}
          description={task.description}
          keywords={task.keywords}
          date={task.date}
          priority={task.priority}
        />
      ))}
    </>
  );
};

const InProgressTasks = () => {
  const inProgressTasks = tasks.filter((task) => task.currState === "progress");

  return (
    <>
      {inProgressTasks.map((task) => (
        <TaskCard
          key={task.id}
          id={task.id}
          title={task.title}
          description={task.description}
          keywords={task.keywords}
          date={task.date}
          priority={task.priority}
        />
      ))}
    </>
  );
};

const CompletedTasks = () => {
  const completedTasks = tasks.filter((task) => task.currState === "done");

  return (
    <>
      {completedTasks.map((task) => (
        <TaskCard
          key={task.id}
          id={task.id}
          title={task.title}
          description={task.description}
          keywords={task.keywords}
          date={task.date}
          priority={task.priority}
        />
      ))}
    </>
  );
};

const TaskCard: React.FC<Omit<TaskProps, "currState">> = (
  props: Omit<TaskProps, "currState">,
) => {
  const dispatch: Dispatch = useAppDispatch();
  const formattedDate = props.date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  const handleEditingTask = () => {
    dispatch(editTask(props.id));
  };

  return (
    <div className="flex h-64 w-full  flex-col rounded-2xl bg-gray-800 p-3">
      <div className=" flex items-center justify-between">
        <p className="text-xl font-bold">{props.title}</p>
        <PopoverButton>
          <PopoverOptions>
            <PopoverOption
              name="Edit"
              onClick={handleEditingTask}
              Icon={<EditIcon stroke="white" width={20} height={20} />}
            />
            <PopoverOption
              name="Share"
              Icon={<EditIcon stroke="white" width={20} height={20} />}
            />
            <PopoverOption
              name="Archive"
              Icon={<EditIcon stroke="white" width={20} height={20} />}
            />
            <PopoverOption
              name="Delete"
              Icon={<EditIcon stroke="white" width={20} height={20} />}
            />
            <PopoverInnerButton />
          </PopoverOptions>
        </PopoverButton>
      </div>
      <div className="my-6 flex items-center justify-evenly">
        {props.keywords.map((keyword, index) => (
          <p
            className="rounded-full bg-green-200 px-3 py-1 text-black"
            key={index}
          >
            {keyword}
          </p>
        ))}
      </div>
      <div className="px-2">{props.description}</div>
      <div className="mt-6">{formattedDate}</div>
    </div>
  );
};

export default Tasks;
