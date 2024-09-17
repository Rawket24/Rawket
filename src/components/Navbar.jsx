import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white border-b border-gray-200 py-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo Group */}
          <div className="flex items-center">
            <Link to="/">
              <div className="text-2xl md:text-[48px] text-myblue font-black">
                OkSent
              </div>
            </Link>
          </div>

          {/* Link Group */}
          <div className="hidden md:flex space-x-8 items-center text-base font-medium">
            <Link to="/about">
              <div className="text-gray-700 hover:text-gray-900">About Us</div>
            </Link>
            <Link to="/products">
              <div className="text-gray-700 hover:text-gray-900">Product</div>
            </Link>
            <Link to="/services">
              <div className="text-gray-700 hover:text-gray-900">Services</div>
            </Link>
            <Link to="/contact">
              <div className="text-gray-700 hover:text-gray-900">
                Contact Us
              </div>
            </Link>
          </div>

          {/* Login Button */}
          <div className="hidden md:flex items-center text-base font-medium">
            <Link to="/login">
              <div className="bg-myblue text-white px-10 py-2 rounded-lg hover:bg-blue-600">
                Login
              </div>
            </Link>
          </div>

          {/* Hamburger Icon for Mobile */}
          <div className="flex items-center md:hidden">
            <button
              type="button"
              onClick={toggleMenu}
              className="text-gray-500 hover:text-gray-900 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center text-base font-medium">
            <Link to="/about">
              <div className="text-gray-700 hover:text-gray-900">About Us</div>
            </Link>
            <Link to="/products">
              <div className="text-gray-700 hover:text-gray-900">Product</div>
            </Link>
            <Link to="/services">
              <div className="text-gray-700 hover:text-gray-900">Services</div>
            </Link>
            <Link to="/contact">
              <div className="text-gray-700 hover:text-gray-900">
                Contact Us
              </div>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
