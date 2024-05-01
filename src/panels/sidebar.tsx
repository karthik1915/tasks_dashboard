import React, { useState } from "react";
import {
  CalenderIcon,
  DocIcon,
  LogInIcon,
  LogOutIcon,
  MenuIcon,
  MicOffIcon,
  MicOnIcon,
  SettingsIcon,
  ShareIcon,
  SoundOffIcon,
  SoundOnIcon,
  TimeIcon,
} from "../components/icons/icons";
import { IconProps } from "../components/icons/icons";
import { useAppDispatch, useAppSelector } from "../hooks";
import { Dispatch } from "@reduxjs/toolkit";
import { toggleMic } from "../redux/reducers/micReducer";
import { toggleSpeaker } from "../redux/reducers/speakerReducer";
import { handleLogin } from "../redux/reducers/loginReducer";
import { updateRoute } from "../redux/reducers/routeReducer";

function SideBar(): React.ReactNode {
  const routes = ["dashboard", "tasks", "schedule"];

  const curr = useAppSelector((state) => state.route.route);
  const selector = () => {
    return routes.indexOf(curr) + 1;
  };

  return (
    <>
      <div className={`flex flex-col items-center gap-4 `}>
        <img src="/logo.png" className="w-12 pb-4" />
        <IconButton
          Icon={MenuIcon}
          select={selector() === 1}
          link="dashboard"
        />
        <IconButton Icon={DocIcon} select={selector() === 2} link="tasks" />
        <IconButton
          Icon={CalenderIcon}
          select={selector() === 3}
          link="schedule"
        />
        <Divider width="40" height="1" color="#888" />
        <IconButton Icon={ShareIcon} select={false} />
        <IconButton Icon={TimeIcon} select={false} />
      </div>
      <div className="sidebar flex flex-col items-center gap-4">
        <MicButton Icon1={MicOnIcon} Icon2={MicOffIcon} />
        <IconButton Icon={SettingsIcon} select={false} />
        <SpeakerButton Icon1={SoundOnIcon} Icon2={SoundOffIcon} />
        <Divider width="40" height="1" color="#888" />
        <LoginButton Icon1={LogInIcon} Icon2={LogOutIcon} />
      </div>
    </>
  );
}

interface IconButtonProps {
  Icon: React.FC<IconProps>;
  select: boolean;
  link?: "dashboard" | "tasks" | "schedule";
}

const IconButton: React.FC<IconButtonProps> = ({ Icon, select, link }) => {
  const [active, setActive] = useState(false);
  const isDarkMode = useAppSelector((state) => state.theme.isDarkMode);
  const dispatch: Dispatch = useAppDispatch();

  const handleActive = () => {
    setActive(true);
  };
  const handleInActive = () => {
    setActive(false);
  };
  const handleRoute = () => {
    if (link) {
      dispatch(updateRoute(link));
    }
  };
  return (
    <div
      className={`${select || active ? "purple" : ""} cursor-pointer rounded-lg p-2`}
      onMouseEnter={handleActive}
      onMouseLeave={handleInActive}
      onClick={handleRoute}
      onTouchStart={handleActive} // Handle touch start
      onTouchEnd={handleRoute} // Handle touch end
    >
      <Icon color={`${isDarkMode ? "#2D76FF" : "#206EFF"}`} />
    </div>
  );
};

export const Divider = (props: {
  width: string;
  height: string;
  color: string;
}) => {
  return (
    <div className="my-2">
      <svg
        width={props.width}
        height={props.height}
        viewBox={`0 0 ${props.width} ${props.height}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line
          x1="0"
          y1="0"
          x2={props.width}
          y2={props.height}
          stroke={props.color}
          strokeWidth="1"
        />
      </svg>
    </div>
  );
};

interface MediaButtonProps {
  Icon1: React.FC<IconProps>;
  Icon2: React.FC<IconProps>;
}
const MicButton: React.FC<MediaButtonProps> = ({ Icon1, Icon2 }) => {
  const [active, setActive] = useState(false);
  const micStatus = useAppSelector((state) => state.mic.mic);
  const isDarkMode = useAppSelector((state) => state.theme.isDarkMode);
  const dispatch: Dispatch = useAppDispatch();

  const handleActive = () => {
    setActive(true);
  };
  const handleInActive = () => {
    setActive(false);
  };
  const handleMic = () => {
    dispatch(toggleMic());
  };

  return (
    <div
      className={`${active || micStatus ? "red" : ""} cursor-pointer  rounded-full p-3`}
      onMouseEnter={handleActive}
      onMouseLeave={handleInActive}
      onClick={handleMic}
    >
      {micStatus ? (
        <Icon1 color={`${isDarkMode ? "white" : "#206EFF"}`} />
      ) : (
        <Icon2 color={`${isDarkMode ? "white" : "#206EFF"}`} />
      )}
    </div>
  );
};

const SpeakerButton: React.FC<MediaButtonProps> = ({ Icon1, Icon2 }) => {
  const [active, setActive] = useState(false);
  const speakerStatus = useAppSelector((state) => state.speaker.speaker);
  const isDarkMode = useAppSelector((state) => state.theme.isDarkMode);
  const dispatch: Dispatch = useAppDispatch();

  const handleActive = () => {
    setActive(true);
  };
  const handleInActive = () => {
    setActive(false);
  };
  const handleMic = () => {
    dispatch(toggleSpeaker());
  };

  return (
    <div
      className={`${active || !speakerStatus ? "red" : ""} cursor-pointer  rounded-full p-3`}
      onMouseEnter={handleActive}
      onMouseLeave={handleInActive}
      onClick={handleMic}
    >
      {speakerStatus ? (
        <Icon2 color={`${isDarkMode ? "white" : "#206EFF"}`} />
      ) : (
        <Icon1 color={`${isDarkMode ? "white" : "#206EFF"}`} />
      )}
    </div>
  );
};

const LoginButton: React.FC<MediaButtonProps> = ({ Icon1, Icon2 }) => {
  const [active, setActive] = useState(false);
  //   const isDarkMode = useAppSelector((state) => state.theme.isDarkMode);
  const isLoggedIn = useAppSelector((state) => state.login.logged);
  const dispatch: Dispatch = useAppDispatch();

  const handleActive = () => {
    setActive(true);
  };
  const handleInActive = () => {
    setActive(false);
  };
  const handleLoginLocal = () => {
    dispatch(handleLogin());
  };
  return (
    <div
      className={`${active ? "purple" : ""} cursor-pointer rounded-lg p-2`}
      onMouseEnter={handleActive}
      onMouseLeave={handleInActive}
      onClick={handleLoginLocal}
    >
      {isLoggedIn ? <Icon1 color="#206EFF" /> : <Icon2 color="#f94d4d" />}
    </div>
  );
};

export default SideBar;
