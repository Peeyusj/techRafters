"use client";
import React, { useState } from "react";

// ** import next elements
import Image from "next/image";
import Link from "next/link";

// ** import assets
import logo from "@/assets/svg/logo.svg";
import logoText from "@/assets/svg/logoText.svg";

// Define your navigation links in a constant that can be reused
const navLinks = [
  { href: "#", label: "Home" },
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#faq", label: "FAQ" },
  // { href: "/contact", label: "Contact Us" },
];

// This component will create a single navigation link
const NavbarLink = ({ href, label, setMenuOpen }) => (
  <Link
    href={href}
    className="text-light-black text-lg transition-all duration-200 hover:text-primary-green hover:text-opacity-80 hover:scale-105 hover:translate-x-3 sm:hover:translate-x-0 sm:hover:-translate-y-1 py-2 block"
    onClick={setMenuOpen?()=>setMenuOpen(false):()=>{}}
  >
    {label}
  </Link>
);

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header
      className={`${
        menuOpen ? "fixed bg-secondary-blue z-10" : "absolute bg-transparent"
      }  inset-x-0 top-0 z-10 w-full  `}
    >
      <div className="px-4 mx-auto sm:px-6 lg:px-8 py-3">
        <nav className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex-shrink-0  ">
            <Link href="/" title="Home">
              <Image
                src={logoText}
                alt="Company Logo"
                className="hidden sm:block"
              />
              <Image
                src={logoText}
                alt="Company Logo"
                width={140}
                hidden={100}
                className="block sm:hidden"
              />
            </Link>
            {/* <Image src={logoText} /> */}
          </div>

          {/* Hamburger Menu */}
          <div className="lg:hidden flex justify-end w-full">
            <button
              onClick={toggleMenu}
              type="button"
              aria-label="Open main menu"
              className="p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              {/* Hamburger Icon */}
              <svg
                className={`${menuOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
              {/* Close Icon */}
              <svg
                className={`${menuOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex lg:items-center lg:justify-end lg:space-x-10">
            {navLinks.map(
              (link, index) => (
                // index === navLinks.length - 1 ? (
                //   <div key={link.href} className="ml-4">
                //     <Link
                //       href={link.href}
                //       className={`inline-block px-4 py-2 text-primary-white bg-primary-blue rounded-md`}
                //     >
                //       {link.label}
                //     </Link>
                //   </div>
                // ) : (
                <NavbarLink
                  key={link.href}
                  href={link.href}
                  label={link.label}
                />
              )
              // )
            )}
          </div>

          <button className="bg-dark-green rounded-md ">
            <a
              href="#contactUs"
              title=""
              className="hidden lg:inline-flex text-white items-center justify-center px-4 py-2 "
            >
              Contact Us
            </a>
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          menuOpen ? "flex" : "hidden"
        } lg:hidden fixed inset-x-0 top-16 bg-secondary-blue bottom-0 min-h-screen p-4  shadow-md flex-col space-y-1`}
      >
        <div>
          {navLinks.map((link) => (
            <NavbarLink key={link.href} href={link.href} label={link.label} setMenuOpen={setMenuOpen} />
          ))}
          <button className=" rounded-md mt-10 bg-dark-green text-primary-white"
          onClick={()=>{setMenuOpen(!menuOpen)}}
          >
            <a
              href="#contactUs"
              title=""
              className="inline-flex items-center justify-center px-4 py-2 "
            >
              Contact Us
            </a>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
