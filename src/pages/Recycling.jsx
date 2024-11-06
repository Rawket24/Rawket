import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { GrPlan } from "react-icons/gr";
import { IconContext } from "react-icons";
import { BsGraphDown } from "react-icons/bs";
import { FaCheckCircle } from "react-icons/fa";
import { GiReceiveMoney } from "react-icons/gi";
import QuoteForm from "../components/QuoteForm";

const Recycling = () => {
  const categories = ["HMS", "Mixed Metals", "Zinc", "Aluminium", "Lithium"];

  const categoryData = {
    1: ["HMS", "/Images/hms.jpg"],
    2: ["Mixed Metals", "/Images/mixedmetal.jpg"],
    3: ["Zinc", "/Images/zinc.jpg"],
    4: ["Aluminium", "/Images/al.jpg"],
    5: ["Lithium", "/Images/li.jpg"],
  };

  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(1);
  const selectedCategory = categoryData[selectedCategoryIndex][0];
  const selectedImage = categoryData[selectedCategoryIndex][1];

  return (
    <div>
      <div></div>
      <section id="home" className="bg-white py-5 md:py-10">
        <div className="container max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row-reverse items-center text-center md:text-left">
          {/* Text Content */}
          <div className="md:w-1/2 pl-0 md:pl-10 flex flex-col">
            <div className="text-[16px] md:text-[20px]">
              Minimize waste with our efficient
            </div>
            <h1 className="text-[30px] md:text-[60px] font-bold text-gray-900 mb-4 leading-tight">
              Metal Recycling Services
            </h1>
            <p className="text-base md:text-lg text-gray-600 mb-10">
              Our efficient metal recycling services are designed to minimize
              waste and promote sustainability in alignment with the United
              Nations' sustainability goals. We responsibly recycle scrap and
              excess metal, reducing environmental impact and conserving natural
              resources.
            </p>
          </div>

          {/* Image Content */}
          <div className="md:w-1/2 mb-8 md:mb-0 flex justify-center items-center">
            <img
              src="/Images/hero.png"
              alt="Hero Image"
              className="h-auto w-[300px] md:w-[400px]"
            />
          </div>
        </div>
      </section>

      {/* Metal We Recycle Section */}
      <div className="container max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-4">
        <h2 className="text-center text-[24px] md:text-[30px] font-bold">
          Metal We Recycle
        </h2>
        <section className="flex flex-col-reverse md:flex-row">
          <aside className="w-full md:w-[40%] pr-0 md:pr-8">
            <h2 className="text-lg md:text-xl pt-4 font-semibold mb-4">
              Categories
            </h2>
            <ul className="space-y-2 text-base md:text-lg">
              {categories.map((category, index) => (
                <li
                  key={index}
                  onClick={() => setSelectedCategoryIndex(index + 1)}
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

          {/* Selected Category Image */}
          <div className="w-full md:w-[60%] mt-4 md:mt-0">
            <img
              src={selectedImage}
              alt={`${selectedCategory} Image`}
              className="w-full rounded-2xl h-[200px] sm:h-[300px] md:h-[400px]"
            />
          </div>
        </section>
      </div>

      {/* Benefits of Recycling Section */}
      <div className="flex flex-col bg-green-100 rounded-xl gap-4 container max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <h2 className="text-center text-[24px] md:text-[30px] font-bold">
          Benefits of Recycling
        </h2>
        <div className="flex flex-col md:flex-row gap-6 pt-5 px-6 md:px-10">
          {[
            {
              icon: <GrPlan />,
              title: "Resource Efficiency",
              text: "Access detailed cost analysis and budgeting tools to better plan for future expenditures and avoid unexpected financial strain.",
            },
            {
              icon: <BsGraphDown />,
              title: "Environmental Conservation",
              text: "Leverage our services to minimize operational expenses and improve your bottom line, freeing up resources for strategic growth initiatives.",
            },
            {
              icon: <FaCheckCircle />,
              title: "Energy Conservation",
              text: "Improve resource allocation and utilization, ensuring you invest in areas with the highest return on investment and operational efficiency.",
            },
            {
              icon: <GiReceiveMoney />,
              title: "Cost Savings",
              text: "Based on the different plans, enable SMEs to minimize upfront costs and manage cash flow effectively, reducing financial strain on operational budgets.",
            },
          ].map(({ icon, title, text }, index) => (
            <div
              key={index}
              className="flex-1 flex flex-col gap-2 items-center md:items-start"
            >
              <IconContext.Provider value={{ size: "2em" }}>
                {icon}
              </IconContext.Provider>
              <h3 className="text-base md:text-lg font-semibold">{title}</h3>
              <p className="text-sm md:text-base text-justify">{text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Quote Form */}
      <div className="container max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <QuoteForm />
      </div>
    </div>
  );
};

export default Recycling;
