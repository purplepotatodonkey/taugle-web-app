import React from 'react';

const Header = () => {
  return (
    <div className="bg-lightBrown top-0 left-0 w-full flex justify-between items-center px-4 py-2 shadow-md z-50">
      <h1 className="text-black text-lg font-bold">Taugle</h1>
      <div className="relative w-12 h-6 flex items-center bg-black rounded-full p-1">
        <div className="h-5 w-5 bg-lightBrown rounded-full shadow-md" />
      </div>
      <h1 className="text-black text-lg font-bold">Beta</h1>
    </div>
  );
};

export default Header;
