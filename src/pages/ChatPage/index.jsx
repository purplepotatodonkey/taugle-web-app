import React, { useState, useContext } from 'react';
import Header from '@/components/Header';
import VideoStream from '@/features/videoChat/components/VideoStream';
import { VideoStreamContext } from '@/features/videoChat/providers/VideoStreamProvider';

function Chat() {
  // State to track whether the chat menu is open or not
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [showRating, setShowRating] = useState(false);

  // Function to toggle the chat menu
  const toggleChatMenu = () => {
    setIsChatOpen(!isChatOpen);
  };

  const handleRatingSelect = (rating) => {
    console.log('You selected:', rating); // Do something with the selected rating
    setShowRating(false);
  };

  // Function to handle the Next button click
  const handleNextClick = () => {
    setShowRating(true); // Show rating when the "Next" button is clicked
    createOffer();
  };

  const { createOffer } = useContext(VideoStreamContext);

  return (
    <div className="h-screen bg-peachOrange">
      {/* Header Section */}
      <div className="flex flex-col bg-red-200">
        <Header />
      </div>
      {/* Main Content Section */}
      <div className="flex flex-row h-[85%] p-10">
        <div className={`${isChatOpen ? 'w-2/3' : 'w-[96%]'} duration-300 ease-in-out `}>
          <VideoStream />
        </div>
        {/* Chat Section */}
        {isChatOpen && (
          <div className="w-1/3 bg-peachOrange shadow-lg border-4 border-brown-500 rounded-2xl flex flex-col ml-4 mr-4 h-full">
            {/* Chat Header */}
            <div className="flex justify-between items-center bg-peachOrange border-b-4 border-b-brown-500 p-4 rounded-t-2xl">
              <h2 className="text-lg font-bold">Chat</h2>
              <button className="text-black text-xl font-bold" onClick={toggleChatMenu}>
                &times;
              </button>
            </div>
            {/* Chat Messages */}
            <div className="flex-grow overflow-y-auto p-4">
              <p className="text-sm text-gray-600">No messages yet!</p>
            </div>
            {/* Chat Input */}
            <div className="p-4 border-t-4 border-t-brown-500 bg-peachOrange rounded-bl-2xl rounded-br-2xl">
              <div className="flex">
                <input type="text" placeholder="Type your message..." className="flex-grow bg-peachOrange" />
                <button className="bg-brown-500 text-white p-2 rounded-lg">Send</button>
              </div>
            </div>
          </div>
        )}
        {/* Side Panel Section */}
        <div className="flex flex-col items-center space-y-2 ml-auto">
          <button className="w-12 h-12 rounded-full bg-green-600 border-black border-4 text-white flex items-center justify-center">
            99
          </button>
          <button
            className="w-12 h-12 rounded-full bg-brown-500 border-black border-4 text-white flex items-center justify-center"
            onClick={toggleChatMenu}
          >
            <i className="fas fa-bars">hi</i>
          </button>
          <button className="w-12 h-12 rounded-full bg-brown-500 border-black border-4 text-white flex items-center justify-center">
            <i className="fas fa-image"></i>
          </button>
          <button className="w-12 h-12 rounded-full bg-brown-500 border-black border-4 text-white flex items-center justify-center">
            <i className="fas fa-gamepad"></i>
          </button>
        </div>
      </div>
      {/* Footer Section */}
      <div className="flex justify-center items-center">
        {!showRating ? (
          <button
            className=" flex bg-transparent text-darkBrown text-xl font-bold py-3 px-10 rounded-full border-4 border-darkBrown hover:bg-peach-400 hover:text-darkBrown transition duration-300"
            onClick={handleNextClick}
          >
            Next
          </button>
        ) : (
          <div className="flex flex-row">
            <div className="flex justify-center items-center space-x-4 bg-[#F2D5B3] pl-4 pr-4 rounded-lg">
              {/* Sad Smiley */}
              <button
                className="flex justify-center items-center p-2 border-4 border-darkBrown rounded-full hover:bg-[#F5E0C3] focus:outline-none"
                onClick={handleRatingSelect}
              >
                <img src="/src/assets/sad.png" alt="Group of Friends" className="rounded-full w-10 h-10 object-cover" />
              </button>
              {/* Neutral Smiley */}
              <button
                className="flex justify-center items-center p-2 border-4 border-darkBrown rounded-full hover:bg-[#F5E0C3] focus:outline-none"
                onClick={handleRatingSelect}
              >
                <img
                  src="/src/assets/normal.png"
                  alt="Group of Friends"
                  className="rounded-full w-10 h-10 object-cover"
                />
              </button>
              {/* Happy Smiley */}
              <button
                className="flex justify-center items-center p-2 border-4 border-darkBrown rounded-full hover:bg-[#F5E0C3] focus:outline-none"
                onClick={handleRatingSelect}
              >
                <img
                  src="/src/assets/happy.png"
                  alt="Group of Friends"
                  className="rounded-full w-10 h-10 object-cover"
                />
              </button>
            </div>
            <div className="flex justify-center items-center">
              <button
                className=" flex bg-transparent text-darkBrown text-xl font-bold py-3 px-10 rounded-full border-4 border-darkBrown hover:bg-peach-400 hover:text-darkBrown transition duration-300"
                onClick={handleRatingSelect}
              >
                Report
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Chat;
