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
      <div></div>
      <div>
        <section id="home" className="bg-white py-5 md:py-10">
          <div className="container max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row-reverse items-center">
            {/* Text Content */}
            <div className="md:w-1/2 pl-10 flex flex-col">
              <h1 className="text-[40px] md:text-[60px] font-bold text-gray-900 mb-4 leading-tight">
                Financing
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
        <div className="flex flex-col bg-[#F4F6FA] rounded-xl gap-4 container max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-full text-center text-[30px] font-bold">
            Benefits of Financing
          </div>
          <div className="flex flex-row gap-10 pt-5 px-10">
            <div className="flex-1 flex flex-col gap-2">
              <div>
                <IconContext.Provider value={{ size: "2em" }}>
                  <GrPlan />
                </IconContext.Provider>
              </div>
              <div className="text-left text-base font-semibold">
                Enhanced Financial Planning
              </div>
              <div className="text-justify text-sm">
                Access detailed cost analysis and budgeting tools to better plan
                for future expenditures and avoid unexpected financial strain.
              </div>
            </div>
            <div className="flex-1 flex flex-col gap-2">
              <div>
                <IconContext.Provider value={{ size: "2em" }}>
                  <BsGraphDown />
                </IconContext.Provider>
              </div>
              <div className="text-left text-base font-semibold">
                Reduced Overhead Costs
              </div>
              <div className="text-justify text-sm">
                Leverage our services to minimize operational expenses and
                improve your bottom line, freeing up resources for strategic
                growth initiatives.
              </div>
            </div>
            <div className="flex-1 flex flex-col gap-2">
              <div>
                <IconContext.Provider value={{ size: "2em" }}>
                  <FaCheckCircle />
                </IconContext.Provider>
              </div>
              <div className="text-left text-base font-semibold">
                Optimized Resource Allocation
              </div>
              <div className="text-justify text-sm">
                Improve resource allocation and utilization, ensuring you invest
                in areas with the highest return on investment and operational
                efficiency.
              </div>
            </div>
            <div className="flex-1 flex flex-col gap-2">
              <div>
                <IconContext.Provider value={{ size: "2em" }}>
                  <GiReceiveMoney />
                </IconContext.Provider>
              </div>
              <div className="text-left text-base font-semibold">
                Cost Reduction
              </div>
              <div className="text-justify text-sm">
                Based on the different plans, enable SMEs to minimize upfront
                costs and manage cash flow effectively, reducing financial
                strain on operational budgets.
              </div>
            </div>
          </div>
        </div>
        <div>
          <QuoteForm />
        </div>
      </div>
    </div>
  );
};

export default Finances;
