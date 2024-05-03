import React from "react";
import ScheduleSidePanel from "./components/scheduleSidePanel";

const Schedule: React.FC = () => {
  return (
    <>
      Hello from schedule
      <div className="sidepanel border-l border-slate-700">
        <ScheduleSidePanel />
      </div>
    </>
  );
};

export default Schedule;
