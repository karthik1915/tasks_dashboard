import React from "react";
import Timer from "../panels/components/timer";
import TimerList from "../panels/components/timerList";
import Meetings from "../panels/components/meetings";
import DashboardSidePanel from "../panels/sidepanel/sidepanel";

const Dashboard: React.FC = () => {
  return (
    <>
      <div className="flex flex-col">
        <div className="max flex w-full flex-col gap-4 overflow-x-auto border-b border-slate-700 p-4 sm:flex-row">
          <Timer />
          <TimerList />
          <Meetings />
        </div>
        <div>
          <h1 className="text-2xl">Projects</h1>
        </div>
      </div>
      <div className="sidepanel border-l border-slate-700">
        <DashboardSidePanel />
      </div>
    </>
  );
};

export default Dashboard;
