import React from "react";

const VideoSection = () => {
  return (
    <section className="relative w-full bg-gray-900">
      <div className="relative h-80 w-full lg:w-full lg:h-screen  overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          controls
         // Optional: Add a thumbnail for better UX
        >
          <source src="digital product.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
};

export default VideoSection;
