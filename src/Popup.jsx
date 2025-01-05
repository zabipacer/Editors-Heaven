import React, { useState, useEffect } from "react";

const Popup = () => {
  const names = [
    "Amna Basheer",
    "Abdullah Khan",
    "Hasnat Nafees",
    "Asma Bukhari",
    "Ali Raza",
    "Sara Ahmed",
    "Zainab Ali",
    "Muhammad Usman",
    "Hassan Ahmed",
    "Ayesha Khan",
    "Hina Tariq",
    "Fahad Ali",
    "Mehreen Fatima",
    "Tariq Jameel",
    "Sana Ali",
    "Omar Farooq",
    "Zara Noor",
    "Bilal Khan",
    "Mariam Ashraf",
  ];

  const [message, setMessage] = useState("");
  const [visible, setVisible] = useState(false);
  const [lastUsedName, setLastUsedName] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(true);

      // Pick a random name, ensuring no consecutive repetition
      let randomName;
      do {
        randomName = names[Math.floor(Math.random() * names.length)];
      } while (randomName === lastUsedName);

      setLastUsedName(randomName);

      // Generate random time under 30 minutes ago
      const randomMinutes = Math.floor(Math.random() * 30) + 1; // 1-30 minutes
      const timeText = `${randomMinutes} minute${randomMinutes > 1 ? "s" : ""} ago`;

      // Update the message
      setMessage(`${randomName} just purchased ${timeText}`);

      // Hide popup after 5 seconds
      setTimeout(() => setVisible(false), 5000);
    }, 6000); // Trigger every 10 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [lastUsedName]);

  return (
    <div
      className={`fixed bottom-4 right-4 z-50 bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 shadow-lg rounded-lg transition-transform transform ${
        visible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
      }`}
      style={{
        minWidth: "250px",
        maxWidth: "90%",
        transition: "all 0.3s ease-in-out",
      }}
    >
      <p className="font-semibold text-center">{message}</p>
      <style jsx>{`
        div {
          font-size: 1rem; /* Default font size */
        }

        @media (max-width: 768px) {
          div {
            min-width: 200px; /* Smaller width for phones */
            padding: 8px; /* Smaller padding */
            font-size: 0.9rem; /* Slightly smaller font size */
          }
        }

        @media (max-width: 480px) {
          div {
            min-width: 180px; /* Even smaller for very small screens */
            padding: 6px; /* Reduced padding */
            font-size: 0.85rem; /* Reduced font size */
          }
        }
      `}</style>
    </div>
  );
};

export default Popup;
