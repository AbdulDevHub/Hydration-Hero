const DrinkProgressCard = ({
  totalVolume,
  dailyGoal,
  isAnimating,
  calculateProgress,
}) => {
  return (
    <div className="flex flex-wrap gap-4 px-10 py-5">
      <div
        className={`flex flex-1 flex-col gap-2 rounded-xl border border-[#d0e0e6] bg-[#1a1a1a] backdrop-blur-lg shadow-lg p-6 relative overflow-hidden ${
          isAnimating ? "animate-pulsate" : ""
        }`}
      >
        <div
          className={`absolute bottom-0 left-0 w-full bg-[#1CABE3] transition-all duration-1000 ease-out 
            ${isAnimating ? "animate-progress-wave" : ""}`}
          style={{
            height: `${calculateProgress()}%`,
            zIndex: 0,
          }}
        />

        <div className="relative z-10">
          <p
            className={`mb-2 tracking-light text-4xl font-bold font-[#e5e5e5] leading-tight truncate ${
              calculateProgress() >= 100
                ? "text-[#F8FBFB]"
                : calculateProgress() >= 80
                ? "text-[#F8FBFB]"
                : "text-[#e5e5e5]"
            }`}
          >
            {calculateProgress()}%
          </p>
          <p
            className={`text-sm font-normal leading-normal ${
              calculateProgress() >= 100
                ? "text-[#2d2d2d]"
                : calculateProgress() >= 50
                ? "text-[#2d2d2d]"
                : "text-[#94b8c4]"
            }`}
          >
            {totalVolume >= dailyGoal
              ? "Goal Reached! 🎉"
              : totalVolume >= dailyGoal / 2
              ? "Keep it Up! 💪"
              : "Drink Up! 💧"}
          </p>
          <p
            className={`text-[13px] font-bold leading-normal tracking-[0.015em] mt-4 ${
              calculateProgress() >= 100
                ? "text-[#2d2d2d]"
                : calculateProgress() >= 25
                ? "text-[#2d2d2d]"
                : "text-[#94b8c4]"
            }`}
          >
            {(totalVolume / 1000).toFixed(1)} of {(dailyGoal / 1000).toFixed(1)}{" "}
            L
          </p>
        </div>
      </div>
    </div>
  );
};

export default DrinkProgressCard;
