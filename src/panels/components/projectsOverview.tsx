import React from "react";
import { Chart } from "react-google-charts";
import { useAppSelector } from "../../hooks";
import { RootState } from "../../store";

const data = [
  ["Task", "Hours per Day"],
  ["Work", 11],
  ["Eat", 7],
  ["Commute", 4],
];

const totalHours: number = data
  .slice(1)
  .reduce((acc, [, hours]) => acc + hours, 0);

interface percentageArrayProps {
  task: string | number;
  percentage: number;
}

const percentages: percentageArrayProps[] = data
  .slice(1)
  .map(([task, hours]) => ({
    task,
    percentage: parseFloat(((hours / totalHours) * 100).toFixed(2)),
  }));

const options = {
  pieHole: 0.8,
  is3D: false,
  tooltip: { trigger: "none" },
  pieSliceText: "none",
  legend: "none",
  backgroundColor: "white",
  chartArea: {
    left: 0,
    right: 10,
    top: 20,
    bottom: 20,
    width: "100%",
    height: "100%",
  },
};

const colors: string[] = [
  "#30D350",
  "#ffa800",
  "#Fa4d4d",
  "#3477f6",
  "#990099",
];

const ProjectsOverview: React.FC = () => {
  const isDarkMode = useAppSelector(
    (state: RootState) => state.theme.isDarkMode,
  );
  const chartOptions = {
    ...options,
    backgroundColor: isDarkMode ? "black" : "white",
    pieSliceBorderColor: isDarkMode ? "black" : "white",
    colors: colors,
  };
  return (
    <div className="relative mb-1 w-full border-b border-gray-800 p-3">
      <p className="mb-1 text-xl">Projects Overview</p>
      <Chart
        chartType="PieChart"
        width="72%"
        height={200}
        data={data}
        options={chartOptions}
      />
      <div className="absolute left-16 top-36 -translate-y-1/2 transform text-center">
        <p className="text-3xl">{data.length - 1}</p>
        <p className="text-lg">Projects</p>
      </div>
      <div className="absolute right-4 top-1/2 flex h-full w-40 -translate-y-1/2 flex-col justify-center ">
        {percentages.map((props, index) => (
          <Label data={props} key={index} color={colors[index]} />
        ))}
      </div>
    </div>
  );
};

interface LabelProps {
  data: percentageArrayProps;
  color: string;
}

const Label: React.FC<LabelProps> = ({ data, color }) => {
  return (
    <div className="flex justify-between">
      <p className="text-sm text-gray-300">
        <span
          className="mr-2 inline-block h-2 w-2 rounded-full bg-green-500 "
          style={{ backgroundColor: color }}
        ></span>
        {data.task}
      </p>
      <p className="text-sm">{data.percentage}%</p>
    </div>
  );
};

export default ProjectsOverview;
