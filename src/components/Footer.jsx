import React from "react";
import { IconContext } from "react-icons";
import { FaLinkedin } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdMailOutline } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import { FaLocationArrow } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start">
        {/* Left Section: Logo */}
        <div className="mb-6 md:mb-0 flex flex-col gap-2">
          <div className="text-2xl md:text-[48px] text-myblue font-black">
            OkSent
          </div>
          <div className="flex flex-row gap-1 items-start text-sm pt-8">
            <a className="text-wrap">
              100 Feet Ring Road, <br />
              Banashankari Stage III, Dwaraka Nagar,
              <br />
              Banashankari, Bengaluru, Karnataka 560085
            </a>
          </div>
          <div className="flex flex-row gap-1 items-center text-sm">
            <IconContext.Provider value={{ color: "white", size: "1em" }}>
              <MdMailOutline />
            </IconContext.Provider>
            <a>oksent@gmail.com</a>
          </div>
          <div className="flex flex-row gap-1 items-center text-sm">
            <IconContext.Provider value={{ color: "white", size: "1em" }}>
              <IoIosCall />
            </IconContext.Provider>
            <a>+91 9999999999</a>
          </div>
          <div className="flex flex-row gap-2 pt-5">
            <IconContext.Provider value={{ color: "white", size: "1.5em" }}>
              <FaLinkedin />
            </IconContext.Provider>
            <IconContext.Provider value={{ color: "white", size: "1.5em" }}>
              <IoLogoWhatsapp />
            </IconContext.Provider>
            <IconContext.Provider value={{ color: "white", size: "1.5em" }}>
              <FaXTwitter />
            </IconContext.Provider>
          </div>
        </div>

        {/* Right Section: Contacts */}
        <div className="mb-6 md:mb-0">
          <h4 className="font-semibold mb-3">Контакты</h4>
          <ul>
            <li className="mb-2">+7 (708) 802 88 88</li>
            <li className="mb-2">+7 (708) 803 88 88</li>
            <li className="mb-2">+7 (708) 51 51 518</li>
            <li className="mb-2">+7 (700) 51 51 518</li>
            <li className="mb-2">
              <i className="fab fa-whatsapp"></i> +7 (708) 802 88 88
            </li>
            <li>
              <i className="fas fa-map-marker-alt"></i> г. Бишкек, ул. Ляляля 69
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="text-center border-t border-gray-700 mt-8 pt-4">
        <p>Copyright © OKSENT 2024. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
