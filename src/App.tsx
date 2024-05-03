import React from "react";
import "./index.css";
import "./App.css";
import { DarkModeIcon, LightModeIcon } from "./components/icons/icons";
import { useAppDispatch, useAppSelector } from "./hooks";
import { Dispatch } from "@reduxjs/toolkit";
import { toggleTheme } from "./redux/reducers/themeReducer";
import Tasks from "./pages/tasks/tasks";
import Schedule from "./pages/schedule/schedule";
import SideBar from "./panels/sidebar";
import Dashboard from "./pages/Dashboard";

function App(): JSX.Element {
  const isDarkMode = useAppSelector((state) => state.theme.isDarkMode);
  const dispatch: Dispatch = useAppDispatch();
  const handleTheme = () => {
    dispatch(toggleTheme());
  };

  const currentTab = useAppSelector((state) => state.route.route);
  const Tab = (): React.ReactNode => {
    switch (currentTab) {
      case "tasks":
        return <Tasks />;
      case "schedule":
        return <Schedule />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div
      className={`text-md container m-auto h-screen w-screen max-w-screen-2xl md:text-base`}
      style={{
        backgroundColor: isDarkMode ? "black" : "white",
        color: isDarkMode ? "white" : "black",
      }}
    >
      <div
        className={`topbar flex items-center justify-between border-b border-slate-700 px-2 md:px-6`}
      >
        <div>
          <p className="text-md md:text-2xl">Dashboard</p>
        </div>
        <div className="flex gap-6 align-middle">
          <button onClick={handleTheme}>
            {isDarkMode ? (
              <LightModeIcon color="#fff" />
            ) : (
              <DarkModeIcon color="#000" />
            )}
          </button>
          <div className="relative inline-block">
            <img
              src="/karthik.png"
              alt="Profile Picture"
              className="h-9 w-9 rounded-full border-2 border-green-500"
            />
            <span className="absolute bottom-0 right-0 h-3 w-3  rounded-full border-2  bg-green-500"></span>
            <span className="absolute bottom-0 right-0 h-3 w-3 animate-ping rounded-full border-2 border-white bg-green-500"></span>
          </div>
        </div>
      </div>

      <div className="sidebar flex flex-col justify-between border-r border-slate-700 py-4">
        <SideBar />
      </div>

      <div className={`maincontent `}>
        <Tab />
      </div>
    </div>
  );
}

export default App;
