import React, { useContext, useEffect, useRef } from 'react';
import { VideoStreamContext } from '../providers/VideoStreamProvider';

const VideoStream = () => {
  const { socket, initLocalStream, initRemoteStream, initSocket, initPeerConnection, connectPeerConnectionToSocket } =
    useContext(VideoStreamContext);
  const userVideoRef = useRef(undefined);
  const remoteVideoRef = useRef(undefined);

  useEffect(() => {
    async function initVideoStream() {
      await initLocalStream(userVideoRef);
      await initRemoteStream(remoteVideoRef);
      await initSocket();
      await initPeerConnection();
      await connectPeerConnectionToSocket();
    }

    initVideoStream();
  }, []);

  return (
    <div className="h-full bg-gray-400 rounded-2xl">
      <div className="relative w-full h-full">
        <video className="w-full h-full object-cover" ref={remoteVideoRef} autoPlay playsInline />
        <div className="absolute top-0 right-0 bg-gray-500 rounded-bl-2xl rounded-tr-2xl w-[20%] h-[20%] overflow-hidden">
          <video className="w-full h-full object-cover" ref={userVideoRef} autoPlay playsInline />
        </div>
      </div>
    </div>
  );
};

export default VideoStream;
