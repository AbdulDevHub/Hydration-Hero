import { DrinkSettingsButton } from './DrinkButtons';
const DrinkHeader = ({
  showSettings,
  setShowSettings,
  handleSaveSettings,
  dailyGoal,
}) => {

  return (
    <div className="flex items-center mt-3 p-1 pb-2 justify-between">
      <DrinkSettingsButton
        show={showSettings}
        onClose={() => setShowSettings(false)}
        onSaveSettings={handleSaveSettings}
        currentSettings={{ dailyGoal }}
      />
    </div>
  );
};

export default DrinkHeader;
