"use client";
import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="absolute inset-x-0 top-0 z-10 w-full">
      <div className="px-4 mx-auto sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex-shrink-0">
            <a href="#" title="" className="flex">
              <img
                className="w-auto h-8"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/4/logo.svg"
                alt=""
              />
            </a>
          </div>

          <button
            type="button"
            className="inline-flex items-center p-2 text-sm text-white uppercase transition-all duration-200 bg-black lg:hidden focus:bg-gray-800 hover:bg-gray-800"
            onClick={toggleMenu}
          >
            {/* Menu open: "hidden", Menu closed: "block" */}
            <svg
              className={
                menuOpen ? "hidden w-6 h-6 mr-2" : "block w-6 h-6 mr-2"
              }
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
            {/* Menu open: "block", Menu closed: "hidden" */}
            <svg
              className={
                menuOpen ? "block w-6 h-6 mr-2" : "hidden w-6 h-6 mr-2"
              }
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
            Menu
          </button>

          <div className="hidden lg:flex lg:items-center lg:justify-center lg:ml-10 lg:mr-auto lg:space-x-10">
            <a
              href="#"
              title=""
              className="text-base text-black transition-all duration-200 hover:text-opacity-80"
            >
              Features
            </a>

            <a
              href="#"
              title=""
              className="text-base text-black transition-all duration-200 hover:text-opacity-80"
            >
              Solutions
            </a>

            <a
              href="#"
              title=""
              className="text-base text-black transition-all duration-200 hover:text-opacity-80"
            >
              Resources
            </a>

            <a
              href="#"
              title=""
              className="text-base text-black transition-all duration-200 hover:text-opacity-80"
            >
              Pricing
            </a>
          </div>

          <a
            href="#"
            title=""
            className="hidden lg:inline-flex items-center justify-center px-5 py-2.5 text-base font-semibold text-black border-2 border-black hover:bg-black hover:text-white transition-all duration-200 focus:bg-black focus:text-white"
            role="button"
          >
            Try for free
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
