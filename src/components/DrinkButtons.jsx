import { useState } from "react"
import { GoGear } from "react-icons/go"
import DrinkSettings from "./DrinkSettings"

// Check Logs Button
export const CheckLogsButton = ({ onClick }) => (
  <button
    onClick={onClick}
    className="m-0 w-[120px] rounded-full h-10 px-4 flex items-center justify-center bg-[#e5e5e5] cursor-pointer transition-all duration-200 active:translate-y-1"
  >
    <p className="text-[#1a1a1a] text-xs font-bold leading-normal tracking-[0.015em]">
      Check Logs
    </p>
  </button>
)

// Drink Settings Button (with modal state)
export const DrinkSettingsButton = ({ currentSettings, onSaveSettings }) => {
  const [showModal, setShowModal] = useState(false)

  return (
    <div className="flex w-14 items-center justify-center">
      <button
        onClick={() => setShowModal(true)}
        className="flex cursor-pointer items-center justify-center rounded-full h-4 bg-transparent text-[#e5e5e5] gap-2 font-bold leading-normal tracking-[0.015em] p-0"
      >
        <div className="text-[#1CABE3] mr-3 hover:text-[#e5e5e5] text-lg transition-colors duration-200">
          <GoGear />
        </div>
      </button>
      <DrinkSettings
        show={showModal}
        onClose={() => setShowModal(false)}
        onSaveSettings={onSaveSettings}
        currentSettings={currentSettings}
      />
    </div>
  )
}

// Log Drink Button
export const LogDrinkButton = ({ disabled, onClick }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`m-0 w-[120px] rounded-full h-10 px-4 flex items-center justify-center ${
      !disabled
        ? "bg-[#1CABE3] cursor-pointer"
        : "bg-[#1CABE3]/50 cursor-not-allowed"
    } transition-transform duration-200 active:translate-y-1`}
  >
    <p className="text-[#1a1a1a] text-xs font-bold leading-normal tracking-[0.015em]">
      Log Drink
    </p>
  </button>
)

// Reset Button
export const ResetButton = ({ onClick, children }) => (
  <button
    onClick={onClick}
    className="mb-1 w-[120px] rounded-full h-10 px-4 flex items-center justify-center bg-[#e5e5e5] cursor-pointer transition-transform duration-200 active:translate-y-1"
  >
    <p className="text-[#1a1a1a] text-xs font-bold leading-normal tracking-[0.015em]">
      {children}
    </p>
  </button>
)

// Save Button
export const SaveButton = ({ onClick, children }) => (
  <button
    onClick={onClick}
    className="m-0 w-[120px] rounded-full h-10 px-4 flex items-center justify-center bg-[#1CABE3] cursor-pointer transition-transform duration-200 active:translate-y-1"
  >
    <p className="text-white text-xs font-bold leading-normal tracking-[0.015em]">
      {children}
    </p>
  </button>
)
