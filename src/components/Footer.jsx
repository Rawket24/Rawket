import React from "react";
import { IconContext } from "react-icons";
import { FaLinkedin } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdMailOutline } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start">
        {/* Left Section: Logo and Contact Information */}
        <div className="mb-6 md:mb-0 flex flex-col gap-2">
          <div className="text-2xl md:text-[48px] text-myblue font-black">
            OkSent
          </div>
          <div className="flex flex-row gap-1 items-start text-sm pt-8">
            <address className="not-italic">
              Mysore Road, <br />
              <br />
              Bengaluru, Karnataka 560026
            </address>
          </div>
          <div className="flex flex-row gap-1 items-center text-sm">
            <IconContext.Provider value={{ color: "white", size: "1em" }}>
              <MdMailOutline />
            </IconContext.Provider>
            <a href="mailto:oksent@gmail.com">varunrao2408@gmail.com</a>
          </div>
          <div className="flex flex-row gap-1 items-center text-sm">
            <IconContext.Provider value={{ color: "white", size: "1em" }}>
              <IoIosCall />
            </IconContext.Provider>
            <a href="tel:+919999999999">+91-8618842120</a>
          </div>
          <div className="flex flex-row gap-2 pt-5">
            <IconContext.Provider value={{ color: "white", size: "1.5em" }}>
              <a href="#" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
            </IconContext.Provider>
            <IconContext.Provider value={{ color: "white", size: "1.5em" }}>
              <a href="#" aria-label="WhatsApp">
                <IoLogoWhatsapp />
              </a>
            </IconContext.Provider>
            <IconContext.Provider value={{ color: "white", size: "1.5em" }}>
              <a href="#" aria-label="Twitter">
                <FaXTwitter />
              </a>
            </IconContext.Provider>
           <IconContext.Provider value={{ color: "white", size: "1.5em" }}>
  <a href="#" aria-label="Instagram">
    <FaInstagram/>
  </a>
</IconContext.Provider>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="mb-6 md:mb-0">
          <h4 className="font-semibold mb-3">Check these out!</h4>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:underline">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/products" className="hover:underline">
                Products
              </Link>
            </li>

            <li>
              <Link to="/contact" className="hover:underline">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="text-center border-t border-gray-700 mt-8 pt-4">
        <p>Copyright © Rawket Materials and services 2024. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
