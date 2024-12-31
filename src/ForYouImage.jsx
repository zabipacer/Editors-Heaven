import React from 'react';

const ForYouImage = () => {
  return (
    <div className="z-20 my-10 max-w-4xl mx-auto  sm:px-4 lg:px-8">
      <img
        src="/for you.png"
        alt="Video Editing Bundle Preview"
        className="object-cover w-full h-auto rounded-lg shadow-lg"
        style={{ maxWidth: '500px' }}
      />
    </div>
  );
};

export default ForYouImage;
