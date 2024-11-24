import React from 'react';

const Mission = () => {
  return (
    <div className="bg-peachOrange flex-grow flex flex-col items-center">
      {/* <!-- Mission Section --> */}
      <div className="max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* <!-- Text Section --> */}
        <div>
          <h2 className="text-darkBrown font-bold text-5xl pb-8 pl-20 pt-0">Our Mission</h2>
          <h1 className="text-lightBrown font-bold text-7xl mt-2 leading-tight  pl-20">
            Creating <br /> Friendships <br />
            <span className="text-darkBrown font-bold text-7xl mt-2 leading-tight">
              Through Digital <br /> Convenience
            </span>
          </h1>
        </div>

        {/* <!-- Image Section --> */}
        <div>
          <img
            src="/src/assets/missionImage.png"
            alt="Group of Friends"
            className="rounded-bl-xl shadow-xl w-full h-auto object-cover"
          />
        </div>
      </div>

      <blockquote className="mt-8 text-center max-w-5xl mx-auto text-lightBrown font-bold text-3xl italic pt-10">
        “Connecting the world, one conversation at a time—sparking curiosity, building bridges, and empowering authentic
        connections.”
      </blockquote>

      {/* <!-- Button Section --> */}
      <div className="mt-8 pt-10">
        <button className="bg-peachOrange text-lightBrown text-xl font-bold py-3 px-10 rounded-full border-4 border-lightBrown hover:bg-peach-400 transition duration-300">
          Start A Chat
        </button>
      </div>

      {/* <!-- Scroll Down Indicator --> */}
      <div className="mt-4 pt-5 pb-3">
        <svg
          className="w-6 h-6 text-darkBrown animate-bounce"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  );
};

export default Mission;
