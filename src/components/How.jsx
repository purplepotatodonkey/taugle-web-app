import React from 'react';

const How = () => {
  return (
    <div className="bg-lightBrown min-h-screen flex flex-col items-center p-0 pt-0">
      {/* <!-- Title Section --> */}
      <h1 className="text-4xl lg:text-6xl font-semibold text-peachOrange mb-12 text-center pt-0">Welcome To Taugle</h1>

      {/* <!-- Three Columns Section --> */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-20 mb-12 max-w-6xl w-full">
        {/* <!-- Box 1 --> */}
        <div className="bg-peachOrange rounded-xl p-6 text-center shadow-lg">
          <h2 className="font-bold text-darkBrown text-3xl">(1) Audio First</h2>
          <hr className="border-t border-darkBrown my-4" />
          <p className="text-darkBrown text-2xl font-semibold">
            Taugle Conversations <br /> start with a 10 second <br /> audio portion, followed <br /> by video activation
            <br />
            <br />
            <strong>Why?</strong>
            <br />
            <br />
            We want to create <br /> authenticity through <br /> conversation
          </p>
        </div>

        {/* <!-- Box 2 --> */}
        <div className="bg-peachOrange rounded-xl p-6 text-center shadow-lg">
          <h2 className="font-bold text-darkBrown text-3xl">(2) How Was It</h2>
          <hr className="border-t border-darkBrown my-4" />
          <p className="text-darkBrown text-2xl font-semibold">
            To skip to the next chat, <br /> you have to rate your <br /> experience with our <br /> smiley rating
            <br />
            <br />
            <strong>Why?</strong>
            <br />
            <br />
            Your experience <br /> determines your <br /> vector rating
          </p>
        </div>

        {/* <!-- Box 3 --> */}
        <div className="bg-peachOrange rounded-xl p-6 text-center shadow-lg">
          <h2 className="font-bold text-darkBrown text-3xl">(3) Your Vector</h2>
          <hr className="border-t border-darkBrown my-4" />
          <p className="text-darkBrown text-2xl font-semibold">
            The higher your vector <br /> rating, the better <br /> people you interact <br /> with
            <br />
            <br />
            <strong>Why?</strong>
            <br />
            <br />
            The friendlier you are, <br /> the more friends you <br /> meet
          </p>
        </div>
      </div>

      {/* <!-- Footer Text --> */}
      <h2 className="text-3xl lg:text-5xl font-semibold text-peachOrange text-center mb-12">
        Conversations Matter. Authenticity Matters.
      </h2>
      {/* <!-- Button --> */}
      <button className="bg-transparent text-peachOrange text-xl font-bold py-3 px-10 rounded-full border-4 border-peachOrange hover:bg-peach-400 hover:text-darkBrown transition duration-300">
        Begin
      </button>
    </div>
  );
};

export default How;
