const VolumeSelection = ({
  selectedVolume,
  setSelectedVolume,
}) => {
  return (
    <div className="relative z-10">
      <h1 className="text-center font-semibold text-lg leading-tight tracking-[-0.015em] px-4 mb-1">
        Your Drink, Your Choice
      </h1>
      <div className="flex justify-center px-2 text-[#4f8296] text-xs font-normal leading-normal mb-5">
        Enter volume in ml and log your drink.
      </div>
      <div className="flex flex-row">
        <div className="flex-[80%] gap-y-2 mb-5 flex flex-col text-center items-center justify-center">
          <div className="flex flex-col items-center gap-2">
            <input
              id="volume-input"
              type="number"
              value={selectedVolume}
              onChange={(e) => setSelectedVolume(Number(e.target.value))}
              className="w-32 px-4 py-2 text-center border border-[#4f8296] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1CABE3] [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              min="0"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VolumeSelection;