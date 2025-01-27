import React from "react";

const Video = () => {
  return (
    <div className="mt-24 w-full flex justify-center">
      <video
        width="80%"
        autoPlay
        loop
        muted
        controls
        className="rounded-lg shadow-lg"
      >
        <source src="video.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default Video;
