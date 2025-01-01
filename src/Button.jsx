import React from "react";

const Button = () => {
  const handleButtonClick = () => {
    // Meta Pixel Event Tracking
    if (typeof window.fbq === "function") {
      window.fbq("track", "WhatsAppButtonClick", {
        content_name: "WhatsApp Offer Button",
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
      className="mx-auto bg-gradient-to-r from-purple-900 via-purple-700 to-purple-600 text-white font-bold py-3 px-6 rounded-full shadow-md hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-800 focus:ring-offset-2 transition transform mt-10 text-[18px] sm:text-[20px] md:text-[25px] flex items-center justify-center gap-3 w-fit"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5 sm:w-6 sm:h-6"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M13 2L3 14h7v8l10-12h-7z" />
      </svg>
      Get Everything at 599rs
    </button>
  );
};

export default Button;
