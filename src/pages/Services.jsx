import React from "react";
import Navbar from "../components/Navbar";

const Services = () => {
  return (
    <div>
      <div></div>
      <div className="py-5">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
            Our Services
          </h2>
          <p className="text-gray-600 mb-12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio
            in et, lectus sit lorem id integer.
          </p>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Service 1 */}
            <div className="bg-[#F4F6FA] py-6 pl-6 rounded-lg shadow-lg flex flex-col md:flex-row-reverse justify-between items-center h-[150px] md:h-[300px]">
              <div className="flex-[0.6]">
                <img
                  src="/Images/fab.png"
                  alt="Fabrication"
                  width={200}
                  height={200}
                  className="w-full"
                />
              </div>
              <div className="flex-1 mt-4 md:mt-0 md:pl-4 text-left">
                <h3 className="text-[24px] text-black font-bold mb-2">
                  Fabrication
                </h3>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  odio in et, lectus sit lorem id integer.
                </p>
              </div>
            </div>

            {/* Service 2 */}
            <div className="bg-[#F4F6FA] py-6 pl-6 rounded-lg shadow-lg flex flex-col md:flex-row-reverse justify-between items-center h-[150px] md:h-[300px]">
              <div className="flex-[0.6]">
                <img
                  src="/Images/recycle.png"
                  alt="Recycling"
                  width={200}
                  height={200}
                  className="w-full"
                />
              </div>
              <div className="flex-1 mt-4 md:mt-0 md:pl-4 text-left">
                <h3 className="text-[24px] text-black font-bold mb-2">
                  Recycling
                </h3>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  odio in et, lectus sit lorem id integer.
                </p>
              </div>
            </div>

            {/* Service 3 */}
            <div className="bg-[#F4F6FA] py-6 pl-6 rounded-lg shadow-lg flex flex-col md:flex-row-reverse justify-between items-center h-[150px] md:h-[300px]">
              <div className="flex-[0.6]">
                <img
                  src="/Images/delivery.png"
                  alt="Delivery"
                  width={200}
                  height={200}
                  className="w-full"
                />
              </div>
              <div className="flex-1 mt-4 md:mt-0 md:pl-4 text-left">
                <h3 className="text-[24px] text-black font-bold mb-2">
                  Delivery
                </h3>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  odio in et, lectus sit lorem id integer.
                </p>
              </div>
            </div>

            {/* Service 4 */}
            <div className="bg-[#F4F6FA] py-6 pl-6 rounded-lg shadow-lg flex flex-col md:flex-row-reverse justify-between items-center h-[150px] md:h-[300px]">
              <div className="flex-[0.6]">
                <img
                  src="/Images/fab.png"
                  alt="Custom Service"
                  width={200}
                  height={200}
                  className="w-full"
                />
              </div>
              <div className="flex-1 mt-4 md:mt-0 md:pl-4 text-left">
                <h3 className="text-[24px] text-black font-bold mb-2">
                  Custom Service
                </h3>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  odio in et, lectus sit lorem id integer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
