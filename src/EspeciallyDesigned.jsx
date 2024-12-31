import React from 'react';

const EspeciallyDesigned = () => {
  const names = [
    "Video Editors",
    "Videographers",
    "Content Creators",
    "Film Students",
    "Marketing Agencies",
    "Freelancers",
    "Businesses",
    "Event Organizers",
    "AND EVERYONE WHO'S INTERESTED",
  ];

  return (
    <>
      <h2 className="text-3xl font-bold text-center mb-8 mt-8">
        Especially Designed For:
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 px-4">
        {names.map((name, index) => (
          <div
            key={index}
            className={`bg-gradient-to-r from-pink-500 via-pink-400 to-pink-600 text-white capitalize text-sm sm:text-lg text-center font-semibold py-3 px-4 rounded-lg shadow-lg hover:scale-105 transition-transform ${
              index === names.length - 1 ? "col-span-2 md:col-span-1 mx-auto" : ""
            }`}
          >
            {name}
          </div>
        ))}
      </div>
    </>
  );
};

export default EspeciallyDesigned;
