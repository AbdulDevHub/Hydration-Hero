import DrinkLogs from "./DrinkLogs";
import { LogDrinkButton } from './DrinkButtons';
const LogADrink = ({
  handleLogDrink,
  selectedVolume,
  drinkLogs,
}) => {
  const isDisabled = !selectedVolume;

  return (
    <div className="relative flex flex-row gap-5 justify-center z-1">
      <LogDrinkButton disabled={isDisabled} onClick={handleLogDrink} />
      <DrinkLogs logs={drinkLogs} />
    </div>
  );
};

export default LogADrink;
