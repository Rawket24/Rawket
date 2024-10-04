import React from "react";
import Navbar from "../components/Navbar";
import QuoteForm from "../components/QuoteForm";

const Fabrication = () => {
  return (
    <div>
      <div></div>
      <div>
        <section id="home" className="bg-white py-5 md:py-10">
          <div className="container max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row-reverse items-center">
            {/* Text Content */}
            <div className="md:w-1/2 pl-10 flex flex-col">
              <h1 className="text-[40px] md:text-[60px] font-bold text-gray-900 mb-4 leading-tight">
                Metal Fabrication
              </h1>
              <p className="text-lg text-gray-600 mb-10">
                Transform raw metals into tailored solutions with our end-to-end
                fabrication services. Utilize advanced technologies and skilled
                craftsmanship to deliver high-quality, durable products that
                exceed industry standards.
              </p>
            </div>

            {/* Image Content */}
            <div className="md:w-1/2 mb-8 md:mb-0 flex justify-center items-center">
              <img
                src="/Images/hero.png"
                alt="Hero Image"
                className="h-auto"
                width={400}
                height={400}
              />
            </div>
          </div>
        </section>
        <div className="flex flex-col gap-4 container max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-full text-center text-[30px] font-bold">
            Metal Fabrication Services
          </div>
          <div className="flex flex-row">
            <div className="flex-1 flex flex-col items-start justify-center pl-10 text-[24px] font-semibold">
              <button className="">CNC</button>
              <button>Cut to Length</button>
              <button>Die Casting</button>
              <button>Forging</button>
              <button>Extrusion</button>
              <button>Steel Stamping</button>
              <button>Slitting</button>
            </div>
            <div className="flex-1"></div>
          </div>
          <div>
            <QuoteForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fabrication;
