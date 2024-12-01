import React, { createContext, useRef } from 'react';
import { io, Socket } from 'socket.io-client';

export const VideoStreamContext = createContext();

const configuration = {
  iceServers: [
    {
      urls: ['stun:stun.l.google.com:19302', 'stun:stun1.l.google.com:19302', 'stun:stun2.l.google.com:19302'],
    },
  ],
  iceCandidatePoolSize: 10,
};

const VideoStreamProvider = ({ children }) => {
  const socket = useRef(undefined);
  const localStream = useRef(undefined);
  const remoteStream = useRef(undefined);
  const peerConnection = useRef(undefined);

  async function initSocket() {
    const socketInstance = io(import.meta.env.VITE_SOCKET_SERVER_URL);

    socketInstance.on('connect', () => {
      console.log('Connected to Socket.IO server');
    });

    socketInstance.on('disconnect', () => {
      console.log('Disconnected from Socket.IO server');
    });

    socketInstance.on('connect_error', (error) => {
      console.error('Connection error:', error);
    });

    socket.current = socketInstance;
  }

  async function initLocalStream(videoRef) {
    try {
      localStream.current = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: {
          echoCancellation: true,
          noiseSuppression: true,
          autoGainControl: true,
        },
      });

      if (videoRef.current) {
        videoRef.current.srcObject = localStream.current;
        videoRef.current.muted = true;
      }
    } catch (error) {
      console.error('Error initializing local stream:', error);
      alert('Could not access video source. Make sure no other applications are using the camera.');
    }
  }

  async function initRemoteStream(videoRef) {
    remoteStream.current = new MediaStream();
    console.log('Remote stream is on');

    if (videoRef) {
      videoRef.srcObject = remoteStream.current;
    }
  }

  async function initPeerConnection() {
    if (!localStream.current || !remoteStream.current) {
      console.error('Cannot initialize peer connection: localStream or remoteStream is not set.');
      return;
    }

    peerConnection.current = new RTCPeerConnection(configuration);
    console.log('Peer connection has been created.');

    peerConnection.current.addEventListener('signalingstatechange', () => {
      const state = peerConnection.current.signalingState;
      console.warn('Signaling state changed:', state);

      // Optional: Handle specific state transitions
      if (state === 'stable') {
        console.warn('Signaling state is now stable.');
      } else if (state === 'have-local-offer') {
        console.warn('Local offer has been set.');
      } else if (state === 'have-remote-offer') {
        console.warn('Remote offer has been set.');
      }
    });

    localStream.current.getTracks().forEach((track) => peerConnection.current.addTrack(track, localStream.current));

    peerConnection.current.ontrack = (e) => {
      e.streams[0].getTracks().forEach((track) => remoteStream.current.addTrack(track));
    };
  }

  async function connectPeerConnectionToSocket() {
    socket.current.on('offer', async (offer) => {
      console.log('Offer received log:', offer);
      await createAnswer(offer);
    });

    socket.current.on('answer', async (answer) => {
      console.log('Answer received log:', answer);
      await setAnswer(answer); // Automatically set the answer when received
    });

    socket.current.on('ice-candidate', async (candidate) => {
      console.log('Received ice-candidate log:', candidate);
      if (peerConnection.current) {
        peerConnection.current.addIceCandidate(new RTCIceCandidate(candidate));
      }
    });

    peerConnection.current.onicecandidate = (e) => {
      if (e.candidate) {
        console.log('Sending ice candidate to server', e.candidate);
        socket.current.emit('ice-candidate', e.candidate);
      }
    };

    let createAnswer = async (offer) => {
      await peerConnection.current.setRemoteDescription(new RTCSessionDescription(offer));
      console.log('*************** Remote Description is set to offer');

      let answer = await peerConnection.current.createAnswer();
      await peerConnection.current.setLocalDescription(answer);
      console.log('*************** Local Description is set to answer');

      if (socket.current) {
        console.log('Sending answer to server:', answer);
        socket.current.emit('answer', answer);
      } else {
        console.error('Socket not initialized');
      }
    };

    let setAnswer = async (answer) => {
      if (!peerConnection.current) {
        console.error('Peer connection not initialized');
        return;
      }

      // Only proceed if we're in have-local-offer state
      if (peerConnection.current.signalingState === 'have-local-offer') {
        try {
          await peerConnection.current.setRemoteDescription(new RTCSessionDescription(answer));
          console.log('*************** Remote Description is set to answer');
        } catch (error) {
          console.error('Error setting remote description:', error);
        }
      } else {
        console.error('Cannot set remote description in current state:', peerConnection.current.signalingState);
      }
    };
  }

  let createOffer = async () => {
    let offer = await peerConnection.current.createOffer();
    await peerConnection.current.setLocalDescription(offer);
    console.log('*************** Local Description is set to offer');

    if (socket.current) {
      console.log('Sending offer to the server:', offer);
      socket.current.emit('offer', offer);
    } else {
      console.error('Socket not initialized');
    }
  };

  return (
    <VideoStreamContext.Provider
      value={{
        initSocket,
        socket,
        localStream,
        initLocalStream,
        remoteStream,
        initRemoteStream,
        peerConnection,
        initPeerConnection,
        connectPeerConnectionToSocket,
        createOffer,
      }}
    >
      {children}
    </VideoStreamContext.Provider>
  );
};

export default VideoStreamProvider;
