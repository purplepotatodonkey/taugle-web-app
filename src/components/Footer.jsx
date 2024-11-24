import React from 'react';

const Footer = () => {
  return (
    <div className="bg-peachOrange text-darkBrown p-8">
      <div className="max-w-7xl mx-auto flex justify-between">
        {/* <!-- Left Section --> */}
        <div>
          <h1 className="text-2xl font-bold">Taugle©</h1>
          <p className="mt-2 italic text-lg">“A Blend of Creativity For All To See”</p>
          <p className="mt-1">Designed to test social network theory</p>
          <p className="mt-1 font-semibold">Shizzles</p>
        </div>

        {/* <!-- Middle Section --> */}
        <div className="flex items-center">
          <p className="text-sm text-center">The Gay Copyright Statement©</p>
        </div>

        {/* <!-- Right Section --> */}
        <div className="flex space-x-16">
          {/* <!-- Our Story Links --> */}
          <div>
            <h2 className="font-bold">Our Story</h2>
            <ul className="mt-2 space-y-1">
              <li>About Us</li>
              <li>Our Community</li>
            </ul>
          </div>

          {/* <!-- Connect Links --> */}
          <div>
            <h2 className="font-bold">Connect</h2>
            <ul className="mt-2 space-y-1">
              <li>Contact Us</li>
              <li>Inquiries</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
