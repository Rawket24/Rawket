import React from "react";
import Navbar from "../components/Navbar";
import { GrPlan } from "react-icons/gr";
import { IconContext } from "react-icons";
import { BsGraphDown } from "react-icons/bs";
import { FaCheckCircle } from "react-icons/fa";
import { GiReceiveMoney } from "react-icons/gi";
import QuoteForm from "../components/QuoteForm";

const Delivery = () => {
  return (
    <div>
      <div></div>
      <div>
        <section id="home" className="bg-white py-5 md:py-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row-reverse items-center">
            {/* Text Content */}
            <div className="md:w-1/2 pl-0 md:pl-10 flex flex-col text-center md:text-left">
              <div className="text-xs md:text-lg">
                Ensure seamless operations with our efficient
              </div>
              <h1 className="text-2xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                Logistics Services
              </h1>
              <p className="text-sm md:text-lg text-gray-600 mb-8 md:mb-10">
                We provide reliable transportation, real-time tracking, and
                flexible scheduling to guarantee timely delivery of raw
                materials, optimizing your supply chain and minimizing
                disruptions. By leveraging advanced logistics solutions, we
                enhance productivity and support your business growth.
              </p>
            </div>

            {/* Image Content */}
            <div className="md:w-1/2 mb-8 md:mb-0 flex justify-center items-center">
              <img
                src="/Images/hero.png"
                alt="Hero Image"
                className="w-64 h-auto md:w-96"
              />
            </div>
          </div>
        </section>

        <div className="flex flex-col bg-[#F4F6FA] rounded-xl gap-4 container mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="w-full text-center text-2xl md:text-3xl font-bold">
            Why Choose Our Logistics Services?
          </div>

          <div className="flex flex-col md:flex-row gap-6 md:gap-10 pt-5 px-5 md:px-10">
            {/* Benefits Cards */}
            <div className="flex-1 flex flex-col gap-2 text-center max-md:items-center md:text-left">
              <IconContext.Provider value={{ size: "2em" }}>
                <GrPlan />
              </IconContext.Provider>
              <div className="text-base font-semibold">Timely Delivery</div>
              <div className="text-sm">
                Ensure your raw materials arrive on schedule, minimizing
                downtime and keeping your projects on track.
              </div>
            </div>

            <div className="flex-1 flex flex-col gap-2 text-center max-md:items-center md:text-left">
              <IconContext.Provider value={{ size: "2em" }}>
                <BsGraphDown />
              </IconContext.Provider>
              <div className="text-base font-semibold">Real-Time Tracking</div>
              <div className="text-sm">
                Stay informed with up-to-date tracking information, giving you
                full visibility into your shipments.
              </div>
            </div>

            <div className="flex-1 flex flex-col gap-2 text-center max-md:items-center md:text-left">
              <IconContext.Provider value={{ size: "2em" }}>
                <FaCheckCircle />
              </IconContext.Provider>
              <div className="text-base font-semibold">Flexible Scheduling</div>
              <div className="text-sm">
                Adapt to changing needs with our customizable delivery options,
                including expedited and scheduled services.
              </div>
            </div>

            <div className="flex-1 flex flex-col gap-2 text-center max-md:items-center md:text-left">
              <IconContext.Provider value={{ size: "2em" }}>
                <GiReceiveMoney />
              </IconContext.Provider>
              <div className="text-base font-semibold">
                Optimized Supply Chain
              </div>
              <div className="text-sm">
                Enhance efficiency and reduce costs with our comprehensive
                logistics solutions tailored to your business.
              </div>
            </div>
          </div>
        </div>

        <div className="px-4 sm:px-6 lg:px-8">
          <QuoteForm />
        </div>
      </div>
    </div>
  );
};

export default Delivery;
