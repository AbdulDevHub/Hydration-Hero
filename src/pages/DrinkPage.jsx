import { useState, useEffect } from "react";
import DrinkHeader from "../components/DrinkHeader";
import DrinkProgressCard from "../components/DrinkProgressCard";
import VolumeSelection from "../components/VolumeSelection";
import LogADrink from "../components/LogADrink";
import confetti from "canvas-confetti";

const DrinkPage = () => {
  const [showSettings, setShowSettings] = useState(false);
  const [dailyGoal, setDailyGoal] = useState(() => {
    const saved = localStorage.getItem("dailyGoal");
    return saved ? Number(saved) : 2000;
  });
  const [selectedVolume, setSelectedVolume] = useState(() => {
    const saved = localStorage.getItem("selectedVolume");
    return saved ? Number(saved) : 400;
  });
  const [totalVolume, setTotalVolume] = useState(() => {
    const saved = localStorage.getItem("totalVolume");
    return saved ? Number(saved) : 0;
  });
  const [isAnimating, setIsAnimating] = useState(false);
  const [showCelebration, setShowCelebration] = useState(false);
  const [drinkLogs, setDrinkLogs] = useState(() => {
    const saved = localStorage.getItem("drinkLogs");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("totalVolume", totalVolume.toString());
    localStorage.setItem("drinkLogs", JSON.stringify(drinkLogs));
    localStorage.setItem("dailyGoal", dailyGoal.toString());
    localStorage.setItem("selectedVolume", selectedVolume.toString());
  }, [totalVolume, drinkLogs, dailyGoal, selectedVolume]);

  useEffect(() => {
    const lastAccessDate = localStorage.getItem("lastAccessDate");
    const today = new Date().toDateString();

    if (lastAccessDate !== today) {
      localStorage.setItem("lastAccessDate", today);
      if (lastAccessDate) {
        setTotalVolume(0);
        setDrinkLogs([]);
        localStorage.setItem("totalVolume", "0");
        localStorage.setItem("drinkLogs", JSON.stringify([]));
      }
    }
  }, []);

  const handleLogDrink = () => {
    if (selectedVolume) {
      const newTotal = totalVolume + Number(selectedVolume);
      setTotalVolume(newTotal);
      setIsAnimating(true);

      const newLog = {
        volume: selectedVolume,
        timestamp: new Date().toISOString(),
      };
      setDrinkLogs([...drinkLogs, newLog]);

      if (newTotal >= dailyGoal && totalVolume < dailyGoal) {
        setShowCelebration(true);
        triggerCelebration();
      }

      setTimeout(() => {
        setIsAnimating(false);
        if (showCelebration) {
          setShowCelebration(false);
        }
      }, 1500);
    }
  };

  const handleSaveSettings = (settings) => {
    setDailyGoal(settings.dailyGoal);
    if (settings.resetProgress) {
      setTotalVolume(0);
      setDrinkLogs([]);
      localStorage.setItem("totalVolume", "0");
      localStorage.setItem("drinkLogs", JSON.stringify([]));
    }
  };

  const triggerCelebration = () => {
    const duration = 3 * 1000;
    const end = Date.now() + duration;
    const colors = ["#1CABE3", "#EEF8FB", "#CFECF4"];

    (function frame() {
      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        origin: { x: 0.5 },
        colors: colors,
        disableForReducedMotion: true,
      });
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        origin: { x: 0.5 },
        colors: colors,
        disableForReducedMotion: true,
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  };

  const calculateProgress = () => {
    return Math.min((totalVolume / dailyGoal) * 100, 100).toFixed(1);
  };

  useEffect(() => {
    return () => {
      if (typeof confetti.reset === "function") {
        confetti.reset();
      }
    };
  }, []);

  return (
    <>
      <div className="font-manrope flex flex-col h-[500px] w-[300px] bg-[#F8FBFB] overflow-hidden">
        <DrinkHeader
          showSettings={showSettings}
          setShowSettings={setShowSettings}
          handleSaveSettings={handleSaveSettings}
          dailyGoal={dailyGoal}
        />

        <h1 className="mt-2 text-center text-[#000000] font-semibold text-lg leading-tight tracking-[-0.015em]">
          Refresh and Own the Day
        </h1>

        <DrinkProgressCard
          totalVolume={totalVolume}
          dailyGoal={dailyGoal}
          isAnimating={isAnimating}
          calculateProgress={calculateProgress}
        />

        <VolumeSelection
          selectedVolume={selectedVolume}
          setSelectedVolume={setSelectedVolume}
        />

        <LogADrink
          handleLogDrink={handleLogDrink}
          selectedVolume={selectedVolume}
          drinkLogs={drinkLogs}
        />
      </div>
    </>
  );
};

export default DrinkPage;