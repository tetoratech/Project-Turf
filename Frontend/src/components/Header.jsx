import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    // <header className="bg-bgColor text-white p-0 -mb-14 ">
    //   <div className="container mx-auto flex justify-between items-center relative">

    //     <div className="flex items-center  p-0  ">
    //       <img
    //         src={Logo}
    //         alt="Logo"
    //         className="h-24 w-auto"
    //       />
    //     </div>

    //     <button
    //       className="absolute right-4 top-4 md:hidden flex items-center p-2"
    //       onClick={toggleMenu}
    //       aria-label="Toggle menu"
    //     >
    //       <svg
    //         className="w-6 h-6"
    //         fill="none"
    //         stroke="currentColor"
    //         viewBox="0 0 24 24"
    //         xmlns="http://www.w3.org/2000/svg"
    //       >
    //         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
    //       </svg>
    //     </button>

    //     <nav
    //       className={`fixed inset-0 bg-primaryColor md:static md:flex md:items-center md:bg-transparent transition-transform transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}
    //     >
    //       <div className="flex justify-between items-center p-4 md:hidden">
    //         <img
    //           src={Logo}
    //           alt="Logo"
    //           className="h-12 w-auto"
    //         />
    //         <button
    //           className="text-white"
    //           onClick={toggleMenu}
    //           aria-label="Close menu"
    //         >
    //           <svg
    //             className="w-6 h-6"
    //             fill="none"
    //             stroke="currentColor"
    //             viewBox="0 0 24 24"
    //             xmlns="http://www.w3.org/2000/svg"
    //           >
    //             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
    //           </svg>
    //         </button>
    //       </div>
    //       <ul className="flex flex-col md:flex-row md:space-x-6 p-4 md:p-0">
    //         <li>
    //           <Link to="/" className="block py-2 px-4 hover:text-gray-400">Home</Link>
    //         </li>
    //         <li>
    //           <Link to="/turf-list" className="block py-2 px-4 hover:text-gray-400">Images</Link>
    //         </li>
    //         <li>
    //           <Link to="/booking" className="block py-2 px-4 hover:text-gray-400">About Us</Link>
    //         </li>
    //         <li>
    //           <Link to="/profile" className="block py-2 px-4 hover:text-gray-400">Login</Link>
    //         </li>
    //       </ul>
    //     </nav>
    //   </div>
    // </header>

    <nav className="bg-white border-gray-200 dark:bg-gray-900">
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
      </a>
      <button
        data-collapse-toggle="navbar-default"
        type="button"
        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-default"
        aria-expanded="false"
      >
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
      <div className="hidden w-full md:block md:w-auto" id="navbar-default">
        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          <li>
            <a
              href="#"
              className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
              aria-current="page"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            >
              Pricing
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  );
};

export default Header;
