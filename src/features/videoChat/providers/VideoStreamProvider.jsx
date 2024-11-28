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
    console.log('joseph checking SOCKET_SERVER_URL', import.meta.env.VITE_SOCKET_SERVER_URL);
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

    console.log('socketInstance in initSocket:', socketInstance);
    socket.current = socketInstance;
    console.log('socket.current in initSocket:', socket.current);
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

  async function initRemoteStream(VideoRef) {
    remoteStream.current = new MediaStream();
    console.log('Remote stream is on');

    if (VideoRef) {
      VideoRef.srcObject = remoteStream.current;
    }
  }

  async function initPeerConnection() {
    if (!localStream.current || !remoteStream.current) {
      console.error('Cannot initialize peer connection: localStream or remoteStream is not set.');
      return;
    }

    peerConnection.current = new RTCPeerConnection(configuration);
    console.log('Peer connection has been created.');

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
        socket.current.emit('ice-candidate', e.candidate);
      }
    };

    let createAnswer = async (offer) => {
      await peerConnection.current.setRemoteDescription(new RTCSessionDescription(offer));

      let answer = await peerConnection.current.createAnswer();
      await peerConnection.current.setLocalDescription(answer);

      document.getElementById('answer-sdp').value = JSON.stringify(answer);
      console.log('createAnswer is hit');
      console.log('socket.current:', socket.current);

      if (socket.current) {
        console.log('createAnswer is hit and socket exists');
        socket.current.emit('answer', answer);
      } else {
        console.error('Socket not initialized');
      }
    };

    socket.current.on('offer', async (offer) => {
      console.log('Offer received log:', offer);
      await createAnswer(offer);
    });

    let setAnswer = async (answer) => {
      console.log('Joseph checking answer:', answer);
      if (!peerConnection.current) {
        console.error('Peer connection not initialized');
        return;
      }

      console.log('Current connection state:', peerConnection.current.signalingState);

      // Only proceed if we're in have-local-offer state
      if (peerConnection.current.signalingState === 'have-local-offer') {
        try {
          await peerConnection.current.setRemoteDescription(new RTCSessionDescription(answer));
          console.log('Remote description set from answer.');
          console.log('New connection state:', peerConnection.current.signalingState);
        } catch (error) {
          console.error('Error setting remote description:', error);
        }
      } else {
        console.error('Cannot set remote description in current state:', peerConnection.current.signalingState);
      }
    };

    socket.current.on('answer', async (answer) => {
      console.log('Answer received log:', answer);
      await setAnswer(answer); // Automatically set the answer when received
    });
  }

  let createOffer = async () => {
    console.log('Joseph checking createOffer');
    console.log('Joseph checking peerConnection:', peerConnection.current);
    let offer = await pc.current.createOffer();
    console.log('Joseph checking offer:', offer);
    await peerConnection.current.setLocalDescription(offer);

    console.log('New connection state:', peerConnection.current.signalingState);

    document.getElementById('offer-sdp').value = JSON.stringify(offer);

    if (socket.current) {
      console.log('Sending offer to the server');
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
