import React from "react";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
const Home = () => {
  return (
    <div>
      <div>
        <section id="home" className="bg-white py-5 md:py-10">
          <div className="container max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row items-center">
            {/* Text Content */}
            <div className="md:w-1/2 pl-10 flex flex-col">
              <h1 className="text-[40px] md:text-[60px] font-bold text-gray-900 mb-4 leading-tight">
                Your One-Stop Solution <br /> for Metal Procurement
              </h1>
              <p className="text-lg text-gray-600 mb-10">
                Helping companies cut costs and streamline operations. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in
                et, lectus sit lorem id integer.
              </p>
              <a
                href="#"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700 transition duration-300 ease-in-out w-fit"
              >
                Get Started
              </a>
            </div>

            {/* Image Content */}
            <div className="md:w-1/2 mb-8 md:mb-0 flex justify-center">
              <img
                src="/Images/hero.png"
                alt="Hero Image"
                className="w-full h-auto"
                width={500}
                height={500}
              />
            </div>
          </div>
        </section>
        <section className="py-5">
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc odio in et, lectus sit lorem id integer.
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc odio in et, lectus sit lorem id integer.
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc odio in et, lectus sit lorem id integer.
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
                    Finance
                  </h3>
                  <p className="text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc odio in et, lectus sit lorem id integer.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
              Our Categories
            </h2>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio
              in et, lectus sit lorem id integer.
            </p>
            <Slider />
          </div>
        </section>
        <section></section>
      </div>
    </div>
  );
};

export default Home;
