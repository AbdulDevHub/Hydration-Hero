import { useState } from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { SaveButton, ResetButton, ResetSubButton } from "./DrinkButtons";
import { DrinkSettingsModal } from "./DrinkModals";

// Settings Header Component
const DrinkSettingsHeader = () => (
  <div className="flex-none p-4 border-b border-[#CFECF4] w-full">
    <h2 className="text-black text-center text-base font-semibold leading-normal">
      Settings
    </h2>
  </div>
);

// Daily Volume Goal Component
const DailyVolumeGoal = ({ value, onChange }) => (
  <div className="flex flex-col justify-center">
    <h1 className="text-[#1CABE3] mb-1 text-sm font-bold leading-normal">
      Daily Goal
    </h1>
    <p className="flex items-center gap-2 text-[#4f8296] text-left text-xs font-normal leading-normal">
      Set a daily goal (in ml) to track your progress.
    </p>
    <input
      type="number"
      value={value}
      placeholder="Enter daily goal (in ml)"
      onChange={onChange}
      className="w-full font-semibold placeholder:italic bg-[#F9FBFA] text-[#000000] text-xs text-center mt-4 p-2 border border-[#CFECF4] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#1CABE3]"
      min="500"
      max="10000"
      step="100"
    />
  </div>
);

// Danger Zone Reset Component
const DangerZoneReset = ({
  showResetConfirm,
  onResetClick,
  onConfirm,
  onCancel,
}) => (
  <div className="mt-6 pt-4 border-t border-[#CFECF4]">
    <h2 className="flex items-center gap-2 mb-1 text-[#C53030] text-center text-sm font-bold leading-normal">
      Danger Zone
    </h2>
    <p className="flex items-center gap-2 mb-4 text-[#4f8296] text-left text-xs font-normal leading-normal">
      Progress and logs reset daily. Use this button to reset manually.
    </p>
    <div className="flex justify-center">
      {!showResetConfirm ? (
        <ResetButton onClick={onResetClick}>Reset</ResetButton>
      ) : (
        <div className="flex flex-row justify-center items-center">
          <p className="text-xs text-[#4f8296]">
            Are you sure? This cannot be undone.
          </p>
          <div className="flex gap-2 justify-center">
            <ResetSubButton
              onClick={onCancel}
              className="bg-[#000000] hover:bg-transparent hover:text-[#000000]"
            >
              <FaTimesCircle />
            </ResetSubButton>
            <ResetSubButton
              onClick={onConfirm}
              className="bg-red-600 hover:bg-transparent hover:text-red-600"
            >
              <FaCheckCircle />
            </ResetSubButton>
          </div>
        </div>
      )}
    </div>
  </div>
);

// Main DrinkSettings Component
const DrinkSettings = ({ show, onClose, onSaveSettings, currentSettings }) => {
  const [dailyGoal, setDailyGoal] = useState(
    currentSettings?.dailyGoal || 2000
  );
  const [showResetConfirm, setShowResetConfirm] = useState(false);

  const handleSave = () => {
    onSaveSettings({
      dailyGoal: Number(dailyGoal),
    });
    onClose();
  };

  const handleReset = () => {
    localStorage.removeItem("drinkLogs");
    localStorage.removeItem("totalVolume");
    window.location.reload();
  };

  return (
    <DrinkSettingsModal show={show} onClose={onClose}>
      <div className="mx-4 bg-[#EEF8FB] rounded-lg font-manrope">
        <DrinkSettingsHeader />

        <div className="p-4 space-y-4">
          <DailyVolumeGoal
            value={dailyGoal}
            onChange={(e) => setDailyGoal(e.target.value)}
          />

          <div className="flex justify-center">
            <SaveButton onClick={handleSave}>Save</SaveButton>
          </div>

          <DangerZoneReset
            showResetConfirm={showResetConfirm}
            onResetClick={() => setShowResetConfirm(true)}
            onConfirm={handleReset}
            onCancel={() => setShowResetConfirm(false)}
          />
        </div>
      </div>
    </DrinkSettingsModal>
  );
};

export default DrinkSettings;