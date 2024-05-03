import React from "react";

const Remainders: React.FC = () => {
  return (
    <div className="h-full w-full border-b border-slate-600 p-3">
      <div className="mb-3 flex items-center justify-between">
        <p className="text-xl "> Remainders</p>
        <p>Manage &gt;</p>
      </div>
      <div>
        <RemainderTabs />
        <RemainderTabs />
        <RemainderTabs />
      </div>
    </div>
  );
};

const RemainderTabs: React.FC = () => {
  return (
    <div className="mb-3 flex w-full justify-between rounded-lg bg-gray-800 p-3">
      <div className="flex flex-col justify-between">
        <p className="text-3xl">
          09:30<span className="text-lg opacity-60">AM</span>
        </p>

        <p>Check Test Results</p>
      </div>
      <p>
        <span className="mr-1 inline-block h-2 w-2 rounded-full bg-green-500"></span>
        low
      </p>
    </div>
  );
};
export default Remainders;
