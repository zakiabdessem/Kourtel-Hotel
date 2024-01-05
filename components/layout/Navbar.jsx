"use client"
import { clientURI } from "../../config/uri.js";
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white fixed w-full z-20 top-0 start-0 border-b border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <a
          href={clientURI}
          className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="/logo.svg" className="h-10" alt="Logo" />
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse justify-center items-center">
          <a
            type="button"
            href="/contact"
            className="text-white bg-primary hover:bg-primary focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center">
            Book now
          </a>
  
        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden focus:outline-none"
          aria-controls="navbar-sticky"
          aria-expanded={isOpen}>
          <span className="sr-only">Open main menu</span>
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          )}
        </button>
        </div>
        {/* Mobile Menu */}
        <div className={`${isOpen ? 'flex' : 'hidden'} absolute top-14 left-0 w-full bg-white shadow-md md:hidden`}>
          <ul className="flex flex-col items-center w-full">
            <li className="w-full">
              <a href="/" className="block py-2 px-3 text-primary text-center w-full">Home</a>
            </li>
            <li className="w-full">
              <a href="#services" className="block py-2 px-3 text-gray-900 text-center w-full">Explore</a>
            </li>
            <li className="w-full">
              <a href="#rooms" className="block py-2 px-3 text-gray-900 text-center w-full">Rooms</a>
            </li>
            <li className="w-full">
              <a href="#rooms" className="block py-2 px-3 text-gray-900 text-center w-full">Contact</a>
            </li>
          </ul>
        </div>
  
        {/* Desktop Menu */}
        <div className="hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
            <li>
              <a
                href="/"
                className="block py-2 px-3 text-primary bg-primary rounded md:bg-transparent md:text-primary md:p-0 md:dark:text-primary"
                aria-current="page">
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary md:p-0 md:dark:hover:text-primary dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                Explore
              </a>
            </li>
            <li>
              <a
                href="#rooms"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary md:p-0 md:dark:hover:text-primary dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                Rooms
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary md:p-0 md:dark:hover:text-primary dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                Services
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary md:p-0 md:dark:hover:text-primary dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                Contact
              </a>
            </li>
          </ul>
        </div>
        </div>
      </div>
    </nav>
  );
  


  return (
    <nav className="bg-white fixed w-full z-20 top-0 start-0 border-b border-gray-200 ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a
          href={clientURI}
          className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="/logo.svg" className="h-10" alt="Logo" />
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            className="text-white bg-primary hover:bg-primary focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center">
            Book now
          </button>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden focus:outline-none"
            aria-controls="navbar-sticky"
            aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
       
      </div>
    </nav>
  );
}

export default Navbar;
