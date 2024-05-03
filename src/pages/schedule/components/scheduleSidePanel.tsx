import React, { ChangeEvent, useState } from "react";
import { useAppSelector } from "../../../hooks";
import { RootState } from "../../../store";

const fieldColorsFn = (isDarkMode: boolean): string => {
  switch (isDarkMode) {
    case true:
      return "bg-gray-600";
    case false:
      return "bg-white border border-gray-300";
  }
};

const ScheduleSidePanel: React.FC = () => {
  const isDarkMode = useAppSelector(
    (state: RootState) => state.theme.isDarkMode,
  );

  const fieldColors: string = fieldColorsFn(isDarkMode);

  return (
    <div className="flex flex-col gap-3 p-3">
      <p className="text-lg font-bold">Schedule Details</p>
      <div className="m-auto w-72">
        <p className="mb-1 text-sm">Schedule Name :</p>
        <input
          type="text"
          className={`mb-2 h-10 w-full rounded-lg outline-none ${fieldColors} px-3 py-2
           ${isDarkMode ? "white" : "black"}  `}
        />
        <p className="mb-1 text-sm">Schedule Description :</p>
        <textarea
          rows={3}
          className={`m-auto w-full rounded-lg  px-3
            py-2  ${fieldColors}  outline-none`}
        />
        <p className="mb-1 text-sm">Date :</p>
        <DateInput />
        <p className="mb-1 text-sm">Time :</p>
        <TimeInput />
      </div>

      <div className="flex flex-col gap-3">
        <p className="text-lg font-bold">Schedule Options</p>
        <PriorityRadios />
      </div>
      <div className="m-auto w-72">
        <div className="flex">
          <button className="w-full rounded-lg font-bold text-red-500 hover:text-red-700">
            Delete
          </button>
          <button className="w-full rounded-lg py-2 font-bold text-blue-600 hover:text-blue-800">
            Reschedule
          </button>
        </div>
        <button className="w-full rounded-lg bg-blue-500 py-2 text-white hover:bg-blue-600">
          Add Schedule
        </button>
      </div>
    </div>
  );
};

const DateInput = () => {
  const [value, setValue] = useState("");
  const isDarkMode = useAppSelector(
    (state: RootState) => state.theme.isDarkMode,
  );

  const fieldColors: string = fieldColorsFn(isDarkMode);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(formatDate(event.target.value));
  };

  return (
    <input
      className={`${fieldColors} mb-2 w-full rounded-lg  px-2 py-1 outline-none`}
      type="text"
      value={value}
      onChange={handleChange}
      placeholder="DD/MM/YYYY"
    />
  );
};

export const formatDate = (input: string) => {
  // Remove non-digit characters
  const cleaned = input.replace(/[^\d/]/g, "");

  // Match and format date
  const match = cleaned.match(/^(\d{1,2})(\d{0,2})(\d{0,4})$/);
  if (match) {
    const day = match[1];
    const month = match[2] || "";
    const year = match[3] || "";

    let formattedDate = "";
    if (day.length <= 2) {
      formattedDate += day;
    }
    if (month.length > 0) {
      formattedDate += "/" + month;
    }
    if (year.length > 0) {
      formattedDate += "/" + year;
    }
    return formattedDate;
  }

  return input;
};

const formatTime = (input: string): string => {
  // Remove non-digit characters
  const cleaned = input.replace(/[^\d:]/g, "");

  // Match and format time
  const match = cleaned.match(/^(\d{1,2})(\d{0,2})$/);
  if (match) {
    const hour = match[1];
    const minute = match[2] || "";

    let formattedTime = "";
    if (hour.length <= 2) {
      formattedTime += hour;
    }
    if (minute.length > 0) {
      formattedTime += ":" + minute;
    }
    return formattedTime;
  }

  return input;
};

const TimeInput = () => {
  const [value, setValue] = useState<string>("");
  const [ampm, setAmPm] = useState<string>("AM");

  const isDarkMode = useAppSelector(
    (state: RootState) => state.theme.isDarkMode,
  );

  const fieldColors: string = fieldColorsFn(isDarkMode);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(formatTime(event.target.value));
  };

  const handleRadioChange = (event: ChangeEvent<HTMLInputElement>) => {
    setAmPm(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="HH:MM"
        className={`mb-2 w-full rounded-lg  ${fieldColors} px-2 py-1 outline-none`}
      />
      <div className="flex-start flex gap-3">
        <label
          className={`flex cursor-pointer items-center rounded-full py-1 pl-2 pr-4 text-white ${ampm === "AM" ? "bg-green-500" : "bg-gray-500  hover:bg-green-700"}`}
        >
          <input
            type="radio"
            value="AM"
            checked={ampm === "AM"}
            onChange={handleRadioChange}
            className="mr-1 appearance-none"
          />
          AM
        </label>
        <label
          className={`flex cursor-pointer  items-center rounded-full py-1 pl-2 pr-4 text-white ${ampm === "PM" ? "bg-green-500" : "bg-gray-500 hover:bg-green-700"}`}
        >
          <input
            type="radio"
            value="PM"
            checked={ampm === "PM"}
            onChange={handleRadioChange}
            className="mr-1 appearance-none"
          />
          PM
        </label>
      </div>
    </div>
  );
};

const PriorityRadios = () => {
  const [priority, setPriority] = useState("low");
  const isDarkMode = useAppSelector(
    (state: RootState) => state.theme.isDarkMode,
  );

  const fieldColors: string = fieldColorsFn(isDarkMode);

  return (
    <div className="flex flex-col gap-2 marker:justify-evenly">
      <label
        className={`m-auto flex w-72 items-center rounded-md py-1 pl-2 pr-4 text-center   ${priority === "low" ? "bg-green-500" : fieldColors}`}
      >
        <input
          type="radio"
          value="high"
          checked={priority === "high"}
          onChange={() => setPriority("low")}
          className="mr-1 appearance-none"
        />
        Low
      </label>
      <label
        className={`m-auto flex w-72 items-center rounded-md py-1 pl-2 pr-4 text-center  ${priority === "medium" ? "bg-orange-400" : fieldColors}`}
      >
        <input
          type="radio"
          value="medium"
          checked={priority === "medium"}
          onChange={() => setPriority("medium")}
          className="mr-1 appearance-none"
        />
        Medium
      </label>
      <label
        className={`m-auto flex w-72 items-center rounded-md py-1 pl-2 pr-4 text-center   ${priority === "high" ? "bg-red-500" : fieldColors}`}
      >
        <input
          type="radio"
          value="low"
          checked={priority === "low"}
          onChange={() => setPriority("high")}
          className="mr-1 appearance-none"
        />
        High
      </label>
    </div>
  );
};

export default ScheduleSidePanel;
