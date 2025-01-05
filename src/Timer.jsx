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
    const hours = Math.floor((seconds % (24 * 60 * 60)) / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const sec = seconds % 60;
    return { hours, minutes, sec };
  };

  const { hours, minutes, sec } = formatTime(timeRemaining);

  return (
    <div className="mx-auto text-center mt-5 p-4 bg-gray-900 text-white rounded-lg shadow-lg max-w-md">
      <p className="text-lg font-semibold mb-4">Hurry Up! Sale Ends In:</p>
      <div className="flex justify-center gap-4">
        {/* Hours Box */}
        <div className="flex flex-col items-center bg-red-600 text-white rounded-lg p-3 shadow-md w-20">
          <span className="text-3xl font-bold">{String(hours).padStart(2, "0")}</span>
          <span className="text-sm">Hours</span>
        </div>
        {/* Minutes Box */}
        <div className="flex flex-col items-center bg-red-600 text-white rounded-lg p-3 shadow-md w-20">
          <span className="text-3xl font-bold">{String(minutes).padStart(2, "0")}</span>
          <span className="text-sm">Minutes</span>
        </div>
        {/* Seconds Box */}
        <div className="flex flex-col items-center bg-red-600 text-white rounded-lg p-3 shadow-md w-20">
          <span className="text-3xl font-bold">{String(sec).padStart(2, "0")}</span>
          <span className="text-sm">Seconds</span>
        </div>
      </div>
      <p className="mt-4 text-sm">Grab your offer before it's gone!</p>
    </div>
  );
};

export default CountdownTimer;
