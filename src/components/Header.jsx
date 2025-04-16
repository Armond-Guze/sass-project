import React from "react";
import playbutton from "../assets/playbutton.png";

const Header = () => {
  return (
    <div className="p-8 justify-center flex flex-col text-center">
      <h1 className="text-7xl font-semibold">
        Accounting <span className="text-blue-500">made simple</span> <br />
        for small businesses
      </h1>
      <div>
        <h1 className="mt-8 text-gray-700 text-lg">
          Most bookkeeping software is accurate, but hard to use. We make the
          opposite <br /> trade-off, and hope you don't get audited.
        </h1>
      </div>
      <div className="m-8 space-x-6 text-sm flex justify-center">
        <button className="bg-black rounded-full text-white px-4 h-10 flex items-center">
          Get 6 months free
        </button>
        <button className="border border-gray-200 rounded-full px-4 h-10 flex items-center space-x-2">
          <img
            src={playbutton}
            alt="Play"
            className="h-4 w-4 inline-block align-middle"
          />
          <span className="leading-none">Watch video</span>
        </button>
      </div>
    </div>
  );
};

export default Header;