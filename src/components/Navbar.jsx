import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IconContext } from "react-icons";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [nav, setNav] = useState("");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
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

            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="flex flex-row gap-1 items-center justify-center text-gray-700 hover:text-gray-900 focus:outline-none"
              >
                <div>Services</div>
                <IconContext.Provider value={{ color: "grey" }}>
                  <MdKeyboardArrowDown />
                </IconContext.Provider>
              </button>
              {isDropdownOpen && (
                <div className="absolute mt-2 w-48 bg-white border border-gray-200 shadow-lg z-10">
                  <Link
                    onClick={(e) => {
                      setNav("fab");
                      setIsDropdownOpen(false);
                    }}
                    to="/services/fabrication"
                    className={
                      nav === "fab"
                        ? "block px-4 py-2 text-gray-700 bg-gray-100"
                        : "block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    }
                  >
                    Fabrication
                  </Link>
                  <Link
                    onClick={(e) => {
                      setNav("rec");
                      setIsDropdownOpen(false);
                    }}
                    to="/services/recycling"
                    className={
                      nav === "rec"
                        ? "block px-4 py-2 text-gray-700 bg-gray-100"
                        : "block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    }
                  >
                    Recycling
                  </Link>
                  <Link
                    onClick={(e) => {
                      setNav("del");
                      setIsDropdownOpen(false);
                    }}
                    to="/services/delivery"
                    className={
                      nav === "del"
                        ? "block px-4 py-2 text-gray-700 bg-gray-100"
                        : "block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    }
                  >
                    Delivery
                  </Link>
                  <Link
                    onClick={(e) => {
                      setNav("fin");
                      setIsDropdownOpen(false);
                    }}
                    to="/services/finances"
                    className={
                      nav === "fin"
                        ? "block px-4 py-2 text-gray-700 bg-gray-100"
                        : "block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    }
                  >
                    Finances
                  </Link>
                </div>
              )}
            </div>

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

            {/* Mobile Services Dropdown */}
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="text-gray-700 hover:text-gray-900 focus:outline-none"
              >
                Services
              </button>
              {isDropdownOpen && (
                <div className="mt-2 w-48 bg-white border border-gray-200 shadow-lg z-10">
                  <Link
                    to="/services/design"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Design
                  </Link>
                  <Link
                    to="/services/development"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Development
                  </Link>
                  <Link
                    to="/services/marketing"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Marketing
                  </Link>
                </div>
              )}
            </div>

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
