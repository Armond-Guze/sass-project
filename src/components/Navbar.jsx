import React from "react";
import logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <div className="h-32 m-8 text-gray-600">
      <nav className="flex justify-between  items-center">
        <ul className="flex space-x-12">
          <li className="font-bold">
            <div className="flex items-center space-x-2">
              <img src={logo} className="h-8 w-8" alt="Logo" />
              <span className="text-xl">
                Tax<span className="text-blue-500">Pal</span>
              </span>
            </div>
          </li>
          <li>Features</li>
          <li>Testimonials</li>
          <li>Pricing</li>
        </ul>
        <ul className="flex space-x-12 items-center">
          <li>Sign in</li>
          <li>
            <button className="bg-blue-500 text-center rounded-full p-2 px-4 text-white items-center text-sm">
              Get Started
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
