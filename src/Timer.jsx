import React, { useEffect, useState } from "react";

const CountdownTimer = () => {
  const [timeRemaining, setTimeRemaining] = useState(2 * 24 * 60 * 60); // 2 days in seconds

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining((prevTime) => {
        if (prevTime <= 0) {
          clearInterval(interval);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds) => {
    const days = Math.floor(seconds / (24 * 60 * 60));
    const hours = Math.floor((seconds % (24 * 60 * 60)) / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const sec = seconds % 60;
    return { days, hours, minutes, sec };
  };

  const { days, hours, minutes, sec } = formatTime(timeRemaining);

  return (
    <div className="mx-auto text-center mt-5 p-5 bg-gradient-to-r from-red-600 via-red-500 to-red-400 text-white text-xl font-bold rounded-lg shadow-lg">
      <p className="mb-2">Hurry Up! The Sale Ends Soon!</p>
      <div className="flex items-center justify-center gap-3 text-4xl">
        <div className="flex flex-col items-center">
          <span>{String(hours).padStart(2, '0')}</span>
          <span className="text-sm">Hours</span>
        </div>
        <div className="flex flex-col items-center">
          <span>{String(minutes).padStart(2, '0')}</span>
          <span className="text-sm">Minutes</span>
        </div>
        <div className="flex flex-col items-center">
          <span>{String(sec).padStart(2, '0')}</span>
          <span className="text-sm">Seconds</span>
        </div>
      </div>
      <p className="mt-2">Grab your offer before it's gone!</p>
    </div>
  );
};

export default CountdownTimer;
