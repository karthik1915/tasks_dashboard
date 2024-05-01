import React from "react";
import Activity from "../components/activity";
import ProjectsOverview from "../components/projectsOverview";
import Remainders from "../components/Remainders";

const SidePanel: React.FC = () => {
  return (
    <div className="">
      <Activity />
      <ProjectsOverview />
      <Remainders />
    </div>
  );
};

export default SidePanel;
