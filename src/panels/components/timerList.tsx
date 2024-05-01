import React from "react";
import { useAppSelector } from "../../hooks";
import { PauseIcon, StarIcon } from "../../components/icons/icons";

const TimerList: React.FC = () => {
  const isDarkMode = useAppSelector((state) => state.theme.isDarkMode);
  return (
    <div
      className={`m-auto flex h-72 w-1/2 min-w-80 max-w-96 flex-col justify-evenly gap-2 rounded-3xl p-4 ${isDarkMode ? "grey-dark" : "grey-light"}`}
    >
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row items-center gap-2">
          <p>Today's Tasks</p>
          <p
            className={`rounded-lg ${isDarkMode ? "bg-gray-800" : "bg-gray-400"} px-2`}
          >
            3
          </p>
        </div>
        <p>Manage &gt;</p>
      </div>
      <div className="flex flex-col gap-3">
        <TimerSelector />
        <TimerSelector />
        <TimerSelector />
      </div>
    </div>
  );
};

const TimerSelector: React.FC = () => {
  const isDarkMode = useAppSelector((state) => state.theme.isDarkMode);
  return (
    <div
      className={`flex w-full items-center gap-4 rounded-xl ${isDarkMode ? "bg-gray-800" : "bg-gray-400"} py-2 pl-2 pr-4`}
    >
      <button
        className="flex-none rounded-full border border-orange-400 bg-orange-600 p-3 shadow-md transition duration-300 hover:scale-105"
        // onClick={}
      >
        <PauseIcon fill="white" width={14} height={14} />
      </button>
      <div className="flex-grow">
        <p>Heading</p>
        <p className="text-sm opacity-80">subtitles</p>
      </div>
      <div className="flex-none">
        <StarIcon width={18} height={18} fill="#FFD27D" />
      </div>
    </div>
  );
};

export default TimerList;
