import React from "react";
import { useAppSelector } from "../../hooks";
import { DiscordIcon, MeetIcon, PlusIcon } from "../../components/icons/icons";

const Meetings: React.FC = () => {
  const isDarkMode = useAppSelector((state) => state.theme.isDarkMode);
  const Meeting1: MeetingProps = {
    time: "10:00",
    period: "AM",
    Icon: MeetIcon,
    description: "Discord Meeting to View the status",
  };
  const Meeting2: MeetingProps = {
    time: "08:24",
    period: "PM",
    Icon: DiscordIcon,
    description: "Discord Meeting to View the status",
  };
  return (
    <div
      className={`m-auto  flex h-72 w-1/2 min-w-72 max-w-96 flex-col justify-evenly gap-2 rounded-3xl p-4 ${isDarkMode ? "grey-dark" : "grey-light"}`}
    >
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row items-center gap-2">
          <p>Today's Meetings</p>
          <p
            className={`rounded-lg ${isDarkMode ? "bg-gray-800" : "bg-gray-400"} px-2`}
          >
            3
          </p>
        </div>
        <p>Manage &gt;</p>
      </div>
      <div className=" grid h-52 grid-cols-2 grid-rows-2 gap-3">
        <MeetingBar
          time={Meeting2.time}
          period={Meeting2.period}
          Icon={Meeting2.Icon}
          description={Meeting2.description}
        />
        <MeetingBar
          time={Meeting1.time}
          period={Meeting1.period}
          Icon={Meeting1.Icon}
          description={Meeting1.description}
        />
        <MeetingBar
          time={Meeting1.time}
          period={Meeting1.period}
          Icon={Meeting1.Icon}
          description={Meeting1.description}
        />

        <ScheduleMeeting />
      </div>
    </div>
  );
};

interface IconProps2 {
  fill: string;
  width: number;
  height: number;
}

interface MeetingProps {
  time: string;
  period: "AM" | "PM";
  Icon: React.FC<IconProps2>;
  description: string;
}

const MeetingBar: React.FC<MeetingProps> = ({
  time,
  period,
  Icon,
  description,
}) => {
  const currentTime = new Date();
  const [hours, minutes] = time.split(":");
  const meetingTime = new Date();
  meetingTime.setHours(parseInt(hours, 10));
  if (period === "PM") {
    meetingTime.setHours(meetingTime.getHours() + 12);
  }
  meetingTime.setMinutes(parseInt(minutes, 10));

  const hasMeetingPassed = meetingTime < currentTime;
  const isDarkMode = useAppSelector((state) => state.theme.isDarkMode);

  return (
    <div
      className={`flex h-full flex-col justify-between rounded-2xl ${
        hasMeetingPassed
          ? isDarkMode
            ? "border border-red-500 bg-red-900"
            : "border border-red-700 bg-red-300"
          : isDarkMode
            ? "bg-gray-800"
            : "bg-gray-400"
      } p-2`}
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm opacity-60">{period}</p>
          <p>{time}</p>
        </div>
        <div
          className={`${hasMeetingPassed ? "" : "bg-gray-500"} rounded-full p-2`}
        >
          <Icon
            fill={hasMeetingPassed ? "rgb(239, 68, 68)" : "white"}
            width={22}
            height={22}
          />
        </div>
      </div>
      <p className="text-xs">{description}</p>
    </div>
  );
};

const ScheduleMeeting: React.FC = () => {
  return (
    <div className="purple flex h-full flex-col items-center justify-center gap-1 rounded-2xl">
      <div className="blue-border rounded-full border border-dashed p-3 hover:scale-105">
        <PlusIcon fill="#2D76FF" width={18} height={18} />
      </div>
      <p className="blue-text text-sm">Schedule meeting</p>
    </div>
  );
};

export default Meetings;
