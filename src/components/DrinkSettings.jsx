import { useState } from "react";
import { SaveButton, ResetButton } from "./DrinkButtons";
import { DrinkSettingsModal } from "./DrinkModals";

// Settings Header Component
const DrinkSettingsHeader = () => (
  <div className="flex-none p-4 border-b border-[#2d2d2d] w-full">
    <h2 className="text-[#e5e5e5] text-center text-base font-semibold leading-normal">
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
    <p className="flex items-center gap-2 text-[#94b8c4] text-left text-xs font-normal leading-normal">
      Set a daily goal (in ml) to track your progress.
    </p>
    <input
      type="number"
      value={value}
      placeholder="Enter daily goal (in ml)"
      onChange={onChange}
      className="w-full font-semibold placeholder:italic bg-[#242424] text-[#e5e5e5] text-xs text-center mt-4 p-2 border border-[#2d2d2d] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#1CABE3]"
      min="500"
      max="10000"
      step="100"
    />
  </div>
);

// Danger Zone Reset Component
const DangerZoneReset = ({ onReset }) => (
  <div className="mt-6 pt-4 border-t border-[#2d2d2d]">
    <h2 className="flex items-center gap-2 mb-1 text-[#ff6b6b] text-center text-sm font-bold leading-normal">
      Danger Zone
    </h2>
    <p className="flex items-center gap-2 mb-4 text-[#94b8c4] text-left text-xs font-normal leading-normal">
      Progress and logs reset daily. Use this button to reset manually.
    </p>
    <div className="flex justify-center">
      <ResetButton onClick={onReset}>Reset</ResetButton>
    </div>
  </div>
);

// Main DrinkSettings Component
const DrinkSettings = ({ show, onClose, onSaveSettings, currentSettings }) => {
  const [dailyGoal, setDailyGoal] = useState(
    currentSettings?.dailyGoal || 2000
  );

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
      <div className="mx-4 bg-[#1a1a1a] rounded-lg font-manrope">
        <DrinkSettingsHeader />

        <div className="p-4 space-y-4">
          <DailyVolumeGoal
            value={dailyGoal}
            onChange={(e) => setDailyGoal(e.target.value)}
          />

          <div className="flex justify-center">
            <SaveButton onClick={handleSave}>Save</SaveButton>
          </div>

          <DangerZoneReset onReset={handleReset} />
        </div>
      </div>
    </DrinkSettingsModal>
  );
};

export default DrinkSettings;