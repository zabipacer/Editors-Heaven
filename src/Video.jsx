import React from 'react';

const VideoSection = () => {
  return (
    <section className="relative w-full h-screen bg-gray-900 overflow-hidden">
      <video
        className="w-full h-full object-cover"
        controls
     // Add a thumbnail image for the video (optional)
      >
        <source src="digital product.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </section>
  );
};

export default VideoSection;
