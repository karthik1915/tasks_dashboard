import React, { useState } from "react";
import { useAppSelector } from "../../hooks";
import { useTimer } from "react-timer-hook";
import { PauseIcon, PlayIcon } from "../../components/icons/icons";

const Timer: React.FC = () => {
  const isDarkMode = useAppSelector((state) => state.theme.isDarkMode);
  const [isRunning, setIsRunning] = useState(false);

  const expiryTimestamp = new Date(Date.now() + 60 * 1000); // 1 minute timer

  const {
    seconds,
    minutes,
    hours,
    isRunning: timerIsRunning,
    start,
    pause,
  } = useTimer({
    expiryTimestamp,
    autoStart: false,
    onExpire: () => console.log("Timer expired"),
  });

  const handleToggle = () => {
    if (timerIsRunning) {
      pause();
    } else {
      start();
    }
    setIsRunning(!timerIsRunning);
  };

  return (
    <div
      className={`m-auto h-72 w-1/2 min-w-72 max-w-80 rounded-3xl bg-gray-900 px-3 pt-2 ${
        isDarkMode ? "grey-dark" : "grey-light"
      }`}
    >
      <div className="flex h-full flex-col items-center justify-around">
        <div className="flex flex-col text-wrap text-center">
          <div className="text-2xl font-bold">Color Palletes</div>
          <div className="text-md  opacity-85">Finalising work</div>
        </div>

        <button
          className=" rounded-full border border-orange-400 bg-orange-600 p-8 text-white shadow-md transition duration-300 hover:scale-105"
          onClick={handleToggle}
        >
          {isRunning ? (
            <PauseIcon fill="white" width={20} height={20} />
          ) : (
            <PlayIcon fill="white" width={20} height={20} />
          )}
        </button>
        <div className="flex w-full justify-evenly text-sm">
          <div
            className={`flex flex-col rounded-2xl ${isDarkMode ? "bg-gray-800" : "bg-gray-400"} px-5 py-3 text-center`}
          >
            <p>Today</p>
            <p>
              {String(hours).padStart(2, "0")}:
              {String(minutes).padStart(2, "0")}:
              {String(seconds).padStart(2, "0")}
            </p>
          </div>
          <div
            className={`flex flex-col rounded-2xl ${isDarkMode ? "bg-gray-800" : "bg-gray-400"} px-5 py-3 text-center`}
          >
            <p>Today</p>
            <p>
              {String(hours).padStart(2, "0")}:
              {String(minutes).padStart(2, "0")}:
              {String(seconds).padStart(2, "0")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timer;
