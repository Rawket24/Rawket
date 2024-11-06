import React from "react";
import Navbar from "../components/Navbar";
import { GrPlan } from "react-icons/gr";
import { IconContext } from "react-icons";
import { BsGraphDown } from "react-icons/bs";
import { FaCheckCircle } from "react-icons/fa";
import { GiReceiveMoney } from "react-icons/gi";
import QuoteForm from "../components/QuoteForm";

const Finances = () => {
  return (
    <div>
      {/* Hero Section */}
      <section id="home" className="bg-white py-5 md:py-10">
        <div className="container max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row-reverse items-center">
          {/* Text Content */}
          <div className="md:w-1/2 lg:pl-10 flex flex-col items-center md:items-start text-center md:text-left">
            <h1 className="text-[32px] md:text-[40px] lg:text-[60px] font-bold text-gray-900 mb-4 leading-tight">
              Financing
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 mb-10">
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
              className="w-60 h-auto md:w-80 lg:w-96"
            />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-[#F4F6FA] py-10 rounded-xl container max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl md:text-3xl font-bold mb-8">
          Benefits of Financing
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
          {/* Benefit Card */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left bg-white p-6 rounded-lg shadow-md">
            <IconContext.Provider
              value={{ size: "2em", className: "text-blue-500 mb-4" }}
            >
              <GrPlan />
            </IconContext.Provider>
            <h3 className="text-lg font-semibold">
              Enhanced Financial Planning
            </h3>
            <p className="text-sm text-gray-600 mt-2">
              Access detailed cost analysis and budgeting tools to better plan
              for future expenditures and avoid unexpected financial strain.
            </p>
          </div>

          {/* Benefit Card */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left bg-white p-6 rounded-lg shadow-md">
            <IconContext.Provider
              value={{ size: "2em", className: "text-blue-500 mb-4" }}
            >
              <BsGraphDown />
            </IconContext.Provider>
            <h3 className="text-lg font-semibold">Reduced Overhead Costs</h3>
            <p className="text-sm text-gray-600 mt-2">
              Leverage our services to minimize operational expenses and improve
              your bottom line, freeing up resources for strategic growth
              initiatives.
            </p>
          </div>

          {/* Benefit Card */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left bg-white p-6 rounded-lg shadow-md">
            <IconContext.Provider
              value={{ size: "2em", className: "text-blue-500 mb-4" }}
            >
              <FaCheckCircle />
            </IconContext.Provider>
            <h3 className="text-lg font-semibold">
              Optimized Resource Allocation
            </h3>
            <p className="text-sm text-gray-600 mt-2">
              Improve resource allocation and utilization, ensuring you invest
              in areas with the highest return on investment and operational
              efficiency.
            </p>
          </div>

          {/* Benefit Card */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left bg-white p-6 rounded-lg shadow-md">
            <IconContext.Provider
              value={{ size: "2em", className: "text-blue-500 mb-4" }}
            >
              <GiReceiveMoney />
            </IconContext.Provider>
            <h3 className="text-lg font-semibold">Cost Reduction</h3>
            <p className="text-sm text-gray-600 mt-2">
              Based on the different plans, enable SMEs to minimize upfront
              costs and manage cash flow effectively, reducing financial strain
              on operational budgets.
            </p>
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section className="bg-gray-100 py-10">
        <div className="container max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <QuoteForm />
        </div>
      </section>
    </div>
  );
};

export default Finances;
