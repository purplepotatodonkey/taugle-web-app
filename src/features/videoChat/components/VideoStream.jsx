import React, { useContext, useEffect, useRef } from 'react';
import { VideoStreamContext } from '../providers/VideoStreamProvider';

const VideoStream = () => {
  const { localStream, initLocalStream } = useContext(VideoStreamContext);
  const userVideoRef = useRef(null);

  useEffect(() => {
    initLocalStream(userVideoRef);
  }, []);

  return (
    <div className="h-full bg-gray-400 rounded-2xl">
      <div className="relative w-full h-full">
        <div className="absolute top-0 right-0 bg-gray-500 rounded-bl-2xl rounded-tr-2xl w-[20%] h-[20%] overflow-hidden">
          <video
            className="w-full h-full object-cover"
            ref={userVideoRef}
            autoPlay
            playsInline
          />
        </div>
      </div>
    </div>
  );
};

export default VideoStream;
