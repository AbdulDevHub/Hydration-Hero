import { useState, useEffect } from "react";
import { LuHistory } from "react-icons/lu";
import { getTimeAgo } from "./utils/timeUtils";
import { CheckLogsModal } from "./DrinkModals";
import { CheckLogsButton } from "./DrinkButtons";

// Logs Header Component
const LogsHeader = () => (
  <div className="flex-none p-4 border-b border-[#2d2d2d] w-full">
    <h2 className="text-[#e5e5e5] text-center text-base font-semibold leading-normal">
      Today&apos;s Drink Logs
    </h2>
  </div>
);

// Empty Logs Message Component
const EmptyLogsMsg = () => (
  <div className="flex-1 flex flex-row gap-2 text-xs items-center justify-center text-[#94b8c4] p-4 mb-7">
    <LuHistory />
    <p>No drink logs recorded yet.</p>
  </div>
);

// Individual Log Entry Component
const LogEntry = ({ timestamp, drink, volume, getTimeAgo }) => (
  <div className="flex items-center justify-between p-3 mb-2 bg-[#2d2d2d] rounded-lg shadow-sm">
    <div className="flex items-center justify-between">
      <div className="ml-2 text-[#94b8c4] text-sm text-left">
        {getTimeAgo(timestamp)}
      </div>
      <div className="ml-14 text-right">
        <p className="text-[#1CABE3] text-sm font-medium">{drink}</p>
        <p className="text-[#1CABE3] text-xs">{volume} ml</p>
      </div>
    </div>
  </div>
);

// Logs List Component
const LogsList = ({ logs, getTimeAgo }) => (
  <div className="flex-1 overflow-y-auto px-4 py-2">
    {logs
      .slice()
      .reverse()
      .map((log, index) => (
        <LogEntry
          key={index}
          timestamp={log.timestamp}
          drink={log.drink}
          volume={log.volume}
          getTimeAgo={getTimeAgo}
        />
      ))}
  </div>
);

// Total Volume Component
const TotalLogsVolume = ({ volume }) => (
  <div className="flex-none border-t border-[#2d2d2d] p-4 w-full">
    <div className="flex justify-between items-center">
      <span className="text-[#94b8c4] text-sm">Total Volume:</span>
      <span className="text-[#1CABE3] font-bold">
        {(volume / 1000).toFixed(1)}L
      </span>
    </div>
  </div>
);

// Main DrinkLogs Component
const DrinkLogs = ({ logs = [] }) => {
  const [showModal, setShowModal] = useState(false);
  const [, setForceUpdate] = useState(0);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setForceUpdate((prev) => prev + 1);
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  const getTotalVolume = () => {
    return logs.reduce((total, log) => total + Number(log.volume), 0);
  };

  return (
    <>
      <CheckLogsButton onClick={openModal} />

      <CheckLogsModal show={showModal} onClose={closeModal}>
        <div className="flex flex-col justify-center h-[400px] items-center font-manrope font-medium bg-[#1a1a1a] rounded-lg">
          <LogsHeader />

          {logs.length === 0 ? (
            <EmptyLogsMsg />
          ) : (
            <div className="flex-1 flex flex-col overflow-hidden">
              <LogsList logs={logs} getTimeAgo={getTimeAgo} />
              <TotalLogsVolume volume={getTotalVolume()} />
            </div>
          )}
        </div>
      </CheckLogsModal>
    </>
  );
};

export default DrinkLogs;