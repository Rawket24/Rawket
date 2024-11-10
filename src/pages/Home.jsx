import React from "react";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
const Home = () => {
  const industries = [
    {
      title: "Infra & Construction",
      image: "/home/cons.jpeg",
      alt: "Construction site with crane and building structure",
    },
    {
      title: "Electric Vehicles",
      image: "/home/ev.jpeg",
      alt: "Electric vehicle charging station",
    },
    {
      title: "Machinery & Equipment",
      image: "/home/im.png",
      alt: "Industrial machinery",
    },
    {
      title: "Defence & Aerospace",
      image: "/home/da.jpeg",
      alt: "Aerospace equipment maintenance",
    },
    {
      title: "Oil & Gas",
      image: "/home/oilgas.jpeg",
      alt: "Oil and gas refinery",
    },
    {
      title: "Renewable Energy",
      image: "/home/re.jpeg",
      alt: "Solar panels and wind turbine",
    },
  ];
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
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-black">
              Our Services
            </h2>
            <p className="text-gray-600 mb-8 sm:mb-10 md:mb-12">
             
            </p>

            {/* Services Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 md:gap-8">
              {/* Service 1 */}
              <div className="bg-[#F4F6FA] p-4 sm:p-6 rounded-lg shadow-lg flex flex-col md:flex-row-reverse justify-between items-center h-auto sm:h-[200px] lg:h-[250px] xl:h-[300px]">
                <div className="flex-[0.5] lg:flex-[0.6] w-full sm:w-auto">
                  <img
                    src="/Images/fab.png"
                    alt="Fabrication"
                    className="w-full max-w-[150px] sm:max-w-[180px] md:max-w-[200px]"
                  />
                </div>
                <div className="flex-1 mt-4 md:mt-0 md:pr-4 text-left">
                  <h3 className="text-[20px] md:text-[24px] text-black font-bold mb-2">
                    Fabrication
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base">
               Transform raw metals into tailored solutions with our expert fabrication services
                  </p>
                </div>
              </div>

              {/* Service 2 */}
              <div className="bg-[#F4F6FA] p-4 sm:p-6 rounded-lg shadow-lg flex flex-col md:flex-row-reverse justify-between items-center h-auto sm:h-[200px] lg:h-[250px] xl:h-[300px]">
                <div className="flex-[0.5] lg:flex-[0.6] w-full sm:w-auto">
                  <img
                    src="/Images/recycle.png"
                    alt="Recycling"
                    className="w-full max-w-[150px] sm:max-w-[180px] md:max-w-[200px]"
                  />
                </div>
                <div className="flex-1 mt-4 md:mt-0 md:pr-4 text-left">
                  <h3 className="text-[20px] md:text-[24px] text-black font-bold mb-2">
                    Recycling
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base">
                   Maximize sustainability with our streamlined metal recycling services
                  </p>
                </div>
              </div>

              {/* Service 3 */}
              <div className="bg-[#F4F6FA] p-4 sm:p-6 rounded-lg shadow-lg flex flex-col md:flex-row-reverse justify-between items-center h-auto sm:h-[200px] lg:h-[250px] xl:h-[300px]">
                <div className="flex-[0.5] lg:flex-[0.6] w-full sm:w-auto">
                  <img
                    src="/Images/delivery.png"
                    alt="Delivery"
                    className="w-full max-w-[150px] sm:max-w-[180px] md:max-w-[200px]"
                  />
                </div>
                <div className="flex-1 mt-4 md:mt-0 md:pr-4 text-left">
                  <h3 className="text-[20px] md:text-[24px] text-black font-bold mb-2">
                    Logistics
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base">
                    Efficient and reliable logistics for seamless metal delivery
                  </p>
                </div>
              </div>

              {/* Service 4 */}
              <div className="bg-[#F4F6FA] p-4 sm:p-6 rounded-lg shadow-lg flex flex-col md:flex-row-reverse justify-between items-center h-auto sm:h-[200px] lg:h-[250px] xl:h-[300px]">
                <div className="flex-[0.5] lg:flex-[0.6] w-full sm:w-auto">
                  <img
                    src="/Images/fab.png"
                    alt="Custom Service"
                    className="w-full max-w-[150px] sm:max-w-[180px] md:max-w-[200px]"
                  />
                </div>
                <div className="flex-1 mt-4 md:mt-0 md:pr-4 text-left">
                  <h3 className="text-[20px] md:text-[24px] text-black font-bold mb-2">
                    Finance
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base">
                    Flexible financing for your metal procurement needs
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
            
            </p>
            <Slider />
          </div>
        </section>
        <section>
          <div className="container mx-auto px-4 py-16">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
              Industries we Serve
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry, index) => (
                <div
                  key={index}
                  className="group flex flex-col items-center transition-transform duration-300 hover:-translate-y-2"
                >
                  <div className="relative overflow-hidden rounded-lg shadow-lg w-full aspect-[4/3]">
                    <img
                      src={industry.image}
                      alt={industry.alt}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-20 transition-opacity duration-300 group-hover:bg-opacity-30" />
                  </div>

                  <h3 className="mt-4 text-xl font-bold text-black text-center">
                    {industry.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
