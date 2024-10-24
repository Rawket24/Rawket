import React, { useState } from "react";
import Navbar from "../components/Navbar";
import QuoteForm from "../components/QuoteForm";

const Fabrication = () => {
  const categories = [
    "CNC",
    "Cut to Length",
    "Die Casting",
    "Forging",
    "Extrusion",
    "Steel Stamping",
    "Slitting",
  ];

  const categoryData = {
    1: ["CNC", "/Images/cnc.jpg"],
    2: ["Cut to Length", "/Images/cut_to_length.jpg"],
    3: ["Die Casting", "/Images/diecasting.jpg"],
    4: ["Forging", "/Images/forging.jpg"],
    5: ["Extrusion", "/Images/extrusion.jpg"],
    6: ["Steel Stamping", "/Images/steel_stamping.jpg"],
    7: ["Slitting", "/Images/slitting.jpg"],
  };

  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(1);

  const selectedCategory = categoryData[selectedCategoryIndex][0];
  const selectedImage = categoryData[selectedCategoryIndex][1];

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

          <section className="flex ">
            <div className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex">
              <aside className="w-[40%] pr-8">
                <h2 className="text-xl font-semibold mb-4 text-center">
                  Categories
                </h2>
                <ul className="space-y-2 text-[20px]">
                  {categories.map((category, index) => (
                    <li
                      key={index}
                      onClick={() => setSelectedCategoryIndex(index + 1)} // Use index + 1 to match the JSON keys
                      className={`p-3 cursor-pointer ${
                        selectedCategoryIndex === index + 1
                          ? "bg-blue-600 text-white"
                          : "bg-gray-200"
                      } rounded`}
                    >
                      {category}
                    </li>
                  ))}
                </ul>
              </aside>

              <div className="w-[60%] h-full flex items-center justify-center ">
                <div className="h-full flex items-center pt-5">
                  <img
                    src={selectedImage}
                    alt={`${selectedCategory} Image`}
                    className="object-contain md:h-[400px] rounded-2xl" // Set to full height while maintaining aspect ratio
                  />
                </div>
              </div>
            </div>
          </section>
          <div>
            <QuoteForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fabrication;
