'use client';
import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar bg-white">
      <div className="navbar-start">
        <a className="btn btn-ghost normal-case text-xl">
          <span className="whitespace-nowrap">
            <span className="text-custom-blue italic">ml</span>
            <span className="text-black italic">bench</span>
          </span>
        </a>
      </div>

      <div className={`lg:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="flex flex-col space-y-4">
          <a className="btn btn-ghost hover:bg-transparent duration-300 ease-in-out hover:text-custom-blue">Home</a>
          <a className="btn btn-ghost hover:bg-transparent duration-300 ease-in-out hover:text-custom-blue">About Us</a>
          <div className="dropdown dropdown-hover">
            <label tabIndex={0} className="btn btn-ghost hover:bg-transparent duration-300 ease-in-out hover:text-custom-blue">
              Services
            </label>
            <ul className="menu dropdown-content p-2 shadow bg-base-100 rounded-box w-52 mt-3">
              <li><a>Lorem Ipsum 1</a></li>
              <li><a>Lorem Ipsum 2</a></li>
              <li><a>Lorem Ipsum 3</a></li>
            </ul>
          </div>
          <a className="btn btn-ghost hover:bg-transparent duration-300 ease-in-out hover:text-custom-blue">Portfolio</a>
          <a className="btn btn-ghost hover:bg-transparent duration-300 ease-in-out hover:text-custom-blue">Blogs</a>
          <a className="btn btn-ghost hover:bg-transparent duration-300 ease-in-out hover:text-custom-blue">Contact Us</a>
          <button className="btn bg-custom-blue text-white">Free Consultation</button>
        </div>
      </div>

      <div className="navbar-center hidden lg:flex">
        <div className="flex space-x-4">
          <a className="btn btn-ghost hover:bg-transparent duration-300 ease-in-out hover:text-custom-blue">Home</a>
          <a className="btn btn-ghost hover:bg-transparent duration-300 ease-in-out hover:text-custom-blue">About Us</a>
          <a className="btn btn-ghost hover:bg-transparent duration-300 ease-in-out hover:text-custom-blue">Services</a>
          <a className="btn btn-ghost hover:bg-transparent duration-300 ease-in-out hover:text-custom-blue">Portfolio</a>
          <a className="btn btn-ghost hover:bg-transparent duration-300 ease-in-out hover:text-custom-blue">Blogs</a>
          <a className="btn btn-ghost hover:bg-transparent duration-300 ease-in-out hover:text-custom-blue">Contact Us</a>
        </div>
      </div>

      <div className="navbar-end hidden lg:flex">
        <button className="btn bg-custom-blue text-white">Free Consultation</button>
      </div>

      <div className="navbar-end lg:hidden">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost lg:hidden" onClick={toggleMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
