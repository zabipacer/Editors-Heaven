import React from "react";

const Button = () => {
  const handleButtonClick = () => {
    // Meta Pixel Event Tracking
    if (typeof window.fbq === "function") {
      window.fbq("track", "WhatsAppButtonClick", {
        content_name: "WhatsApp Contact Button",
        value: 599,
        currency: "PKR",
      });
    }

    // WhatsApp Redirect
    const whatsappNumber = "923288768783"; // Replace with your WhatsApp number
    const message = "Hello, I'm interested in your offer!"; // Optional default message
    const whatsappURL = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <button
      onClick={handleButtonClick}
      className="mx-auto bg-gradient-to-r from-green-600 via-green-500 to-green-400 text-white font-bold py-3 px-6 rounded-full shadow-md hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-green-800 focus:ring-offset-2 transition transform mt-10 text-[18px] sm:text-[20px] md:text-[25px] flex items-center justify-center gap-3 w-fit"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5 sm:w-6 sm:h-6"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M20.4 3.6c-2.6-2.6-6.8-2.6-9.4 0-2.6 2.6-2.6 6.8 0 9.4 1.3 1.3 2.9 2.1 4.6 2.3-1.6 2.5-4.5 3.6-7.3 3.1-3.6-.6-6.8-3.3-7.4-6.9-1-3.8 1.3-7.9 5-10.5 3.8-2.6 8.9-2.6 12.6 0 3.8 2.6 3.8 6.8 0 9.4-2.2 2.2-5.7 2.4-8.2-.3-1.7-1.7-1.5-4.3.3-6.3 1.8-2 4.4-2.2 6.4-.4 2.4 1.9 2.6 5.4.7 7.8-2.4 2.6-6.4 2.2-8.4-.7-3.1-3.1-3.1-7.9 0-11.1 2.5-2.5 6.5-2.5 9.1 0 2.5 2.5 2.5 6.6 0 9.1-2.5 2.5-6.7 2.5-9.2 0-2.5-2.5-2.5-6.6 0-9.1 2.6-2.6 6.8-2.6 9.4 0 2.6 2.6 2.6 6.8 0 9.4-2.4 2.6-6.6 3-9.6 1z"/>
      </svg>
      Contact Us on WhatsApp
    </button>
  );
};

export default Button;
