import React from "react";

const Activity: React.FC = () => {
  return (
    <div className="flex flex-col gap-4 border-b border-slate-600 px-4 py-3 ">
      <div>
        <div className="mb-2  flex items-center gap-5">
          <p className="text-xl">Activities</p>
          <p className="rounded-lg bg-green-800 p-1 px-2 text-xs">12%</p>
        </div>
        <p className="text-3xl">83%</p>
      </div>
      <div className="flex h-48 w-full justify-center gap-2">
        <Bars percentage={20} day="Mon" />
        <Bars percentage={50} day="Tue" />
        <Bars percentage={76} day="Wed" />
        <Bars percentage={14} day="Thu" />
        <Bars percentage={55} day="Fri" />
      </div>
    </div>
  );
};

interface BarProps {
  percentage: number;
  day: string;
}

const Bars = ({ percentage, day }: BarProps) => {
  return (
    <div className="relative h-48 w-14 overflow-hidden rounded-xl bg-gray-700 text-center ">
      <img
        src="/stripes.svg"
        alt="stripes"
        className="absolute inset-0 h-full w-full"
      />
      <div
        className="absolute bottom-0 left-0 right-0 bg-gray-500 hover:bg-gray-400"
        style={{ height: `${percentage}%` }}
      ></div>
      <div className="absolute bottom-0 left-0 right-0 flex -translate-y-1/2 transform flex-col  font-bold text-white">
        <p className="text-sm">{day}</p>
        <p className={``}>{percentage}%</p>
      </div>
    </div>
  );
};

export default Activity;
