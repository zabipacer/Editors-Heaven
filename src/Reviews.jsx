import React from 'react';

const Reviews = () => {
  const images = [
    'RR1.webp','RR2.webp','RR3.webp','RR4.webp','RR5.webp','RR6.webp',
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-14">
      {images.map((image, index) => (
        <div key={index} className={`flex justify-center ${index >= 3 ? 'col-span-1 md:col-span-1' : ''}`}>
          <img
            src={image}
            alt={`Image ${index + 1}`}
            className="object-cover h-[400px] md:h-[580px] w-full rounded-lg shadow-lg"
          />
        </div>
      ))}
    </div>
  );
};

export default Reviews;
