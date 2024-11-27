import React from 'react';

const VideoStream = () => {
  return (
    <div className={`h-full bg-gray-400 rounded-2xl`}>
      <div className="relative w-full h-full">
        <div className="absolute top-0 right-0 bg-gray-500 rounded-bl-2xl rounded-tr-2xl w-[30%] h-[30%]"></div>
      </div>
    </div>
  );
};

export default VideoStream;
