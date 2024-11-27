import React, { createContext, useRef } from 'react';

export const VideoStreamContext = createContext();

const VideoStreamProvider = ({ children }) => {
  const localStream = useRef(null);

  async function initLocalStream(videoRef) {
    try {
      localStream.current = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: {
          echoCancellation:true,
          noiseSuppression: true,
          autoGainControl: true
        },
      });
  
      if (videoRef.current) {
        videoRef.current.srcObject = localStream.current;
        videoRef.current.muted = true;
      }
    } catch (error) {
      console.error("Error initializing local stream:", error);
      alert("Could not access video source. Make sure no other applications are using the camera.");
    }
  }  

  return (
    <VideoStreamContext.Provider value={{ localStream, initLocalStream }}>
      {children}
    </VideoStreamContext.Provider>
  );
};

export default VideoStreamProvider;