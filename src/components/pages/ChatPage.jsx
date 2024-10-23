import React, { useState } from 'react';
import Header from '../Header';

function Chat() {

    // State to track whether the chat menu is open or not
    const [isChatOpen, setIsChatOpen] = useState(false);
    const [showRating, setShowRating] = useState(false);

    // Function to toggle the chat menu
    const toggleChatMenu = () => {
        setIsChatOpen(!isChatOpen);
    };
    // Function to handle the Next button click
    const handleNextClick = () => {
        setShowRating(true); // Show rating when the "Next" button is clicked
    };
    // Function to handle rating selection
    const handleRatingSelect = (rating) => {
        console.log("You selected:", rating); // Do something with the selected rating
        setShowRating(false); // Go back to showing the Next button
    };

    return (
        <div className='max-h-screen bg-peachOrange'>
            <Header/>
            <div className="p-4">
                {/* Grid Container */}
                <div className={`pl-5 grid grid-cols-11 grid-rows-4 gap-0`}>
                    {/* Video Section - Takes up 11 columns */}
                    <div className={`col-start-1 col-span-${isChatOpen ? '8' : '12'} row-start-1 row-span-2 relative bg-gray-300 border-4 border-darkBrown rounded-3xl`}>
                        {/* Smaller Video in Top Right */}
                        <div className="absolute top-0 right-0 bottom-0 bg-gray-500 rounded-bl-2xl rounded-tr-2xl w-[30%] h-[30%]"></div>
                    </div>
                    {/* Button Section - Takes up 1 column */}
                    <div className=" col-start-12 col-span-1 justify-self-end space-y-4">
                        {/* Buttons */}
                        <button className="w-12 h-12 rounded-full bg-green-600  border-black border-4 text-white flex items-center justify-center">
                            99
                        </button>
                        <button className="w-12 h-12 rounded-full bg-brown-500 border-black border-4 text-white flex items-center justify-center" onClick={toggleChatMenu}>
                            <i className="fas fa-bars"></i>
                        </button>
                        <button className="w-12 h-12 rounded-full bg-brown-500  border-black border-4 text-white flex items-center justify-center">
                            <i className="fas fa-image"></i>
                        </button>
                        <button className="w-12 h-12 rounded-full bg-brown-500  border-black border-4 text-white flex items-center justify-center">
                            <i className="fas fa-gamepad"></i>
                        </button>
                    </div>


                    <div className='row-start-3 row-span-1 col-start-1 col-end-12 flex justify-center items-center'>
                        {!showRating ? (
                            <button className=" flex bg-transparent text-darkBrown text-xl font-bold py-3 px-10 rounded-full border-4 border-darkBrown hover:bg-peach-400 hover:text-darkBrown transition duration-300" onClick={handleNextClick}>Next</button> 
                        ) : (
                            <div className='grid grid-cols-2'>
                                <div className="flex justify-center items-center col-start-1 col-span-1 space-x-4 bg-[#F2D5B3] p-4 rounded-lg">
                                    {/* Sad Smiley */}
                                    <button className="flex justify-center items-center p-2 border-4 border-darkBrown rounded-full hover:bg-[#F5E0C3] focus:outline-none" onClick={handleRatingSelect}>
                                        <img src="/src/assets/sad.png" alt="Group of Friends" className="rounded-full w-10 h-10 object-cover" />
                                    </button>
                        
                                    {/* Neutral Smiley */}
                                    <button className="flex justify-center items-center p-2 border-4 border-darkBrown rounded-full hover:bg-[#F5E0C3] focus:outline-none" onClick={handleRatingSelect}>
                                        <img src="/src/assets/normal.png" alt="Group of Friends" className="rounded-full w-10 h-10 object-cover" />
                                    </button>
                        
                                    {/* Happy Smiley */}
                                    <button className="flex justify-center items-center p-2 border-4 border-darkBrown rounded-full hover:bg-[#F5E0C3] focus:outline-none" onClick={handleRatingSelect}>
                                        <img src="/src/assets/happy.png" alt="Group of Friends" className="rounded-full w-10 h-10 object-cover" />
                                    </button>
                                </div>
                                <div className='flex justify-center items-center col-start-2 col-span-1'>
                                    <button className=" flex bg-transparent text-darkBrown text-xl font-bold py-3 px-10 rounded-full border-4 border-darkBrown hover:bg-peach-400 hover:text-darkBrown transition duration-300" onClick={handleRatingSelect}>Report</button>
                                </div>
                            </div>
                        )
                        }
                    </div>


                    {/* Chat Section (Conditionally Rendered) */}
                    {isChatOpen && (
                        <div className=" col-start-9 col-span-3 row-start-1 row-span-2 h-full w-full flex justify-center bg-peachOrange pl-10">
                            {/* Chat Container */}
                            <div className=" bg-peachOrange border-4 border-darkBrown rounded-3xl flex flex-col justify-between">
                                {/* Chat Messages Area (Scrollable) */}
                                <div className="flex-grow p-4 overflow-y-auto border-b-2 border-darkBrown">
                                    {/* Chat messages would appear here */}
                                    <p className="text-center text-darkBrown">No messages yet...</p>
                                </div>
                
                                {/* Input Area */}
                                <div className="p-2 border-t-2 border-darkBrown flex items-center">
                                    <input
                                        type="text"
                                        placeholder="Start Typing Down Here"
                                        className="w-full p-2 text-darkBrown bg-transparent border-none focus:outline-none"
                                    />
                                    <button className="p-2 bg-transparent text-darkBrown border-4 border-darkBrown ml-2">
                                        <i className="fas fa-paper-plane"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Chat