import React from "react";

const About = () => {
  return (
    <section className="py-10 px-4 md:px-10 lg:px-20">
      <div className="container mx-auto text-justify">
        {/* Heading */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-myblue mb-8 text-center">
          About Us
        </h1>

        {/* Company Overview */}
        <div className="flex flex-col md:flex-row md:justify-between items-center space-y-6 md:space-y-0">
          <div className="md:flex-[0.5] flex-shrink-0">
            <img
              src="/Images/abt.png"
              alt="About us"
              className="w-full md:max-w-md lg:max-w-lg"
            />
          </div>
          <div className="flex-1 px-4 md:px-8 lg:px-12">
            <p className="text-gray-600 text-base leading-relaxed">
              xox is dedicated to empowering SMEs by providing a streamlined
              platform for procuring essential raw materials. Our marketplace
              simplifies the sourcing process, offering a wide range of metals
              and related services to meet diverse operational needs. Whether
              you're looking for efficient procurement solutions or
              comprehensive support throughout the supply chain, xox is
              committed to facilitating your business growth with reliability
              and innovation.
              <br />
              <br />
              With a strong emphasis on transparency and customer-centric
              services, xox connects buyers and suppliers in a way that enhances
              efficiency and fosters long-term partnerships. We ensure that your
              supply chain operates seamlessly, allowing your business to focus
              on core operations without disruptions.
            </p>
          </div>
        </div>

        {/* Mission and Values */}
        <div className="flex flex-col md:flex-row justify-center items-start space-y-6 md:space-y-0 md:space-x-6 mt-8">
          {/* Mission */}
          <div className="bg-[#F4F6FA] shadow-lg rounded-lg p-6 w-full md:w-1/2">
            <h3 className="text-2xl md:text-3xl font-bold text-myblue mb-4 text-center">
              Mission
            </h3>
            <p className="text-gray-600 leading-relaxed">
              At xox, our mission is to empower SMEs by revolutionizing the raw
              material procurement process through innovation, efficiency, and
              sustainability. We strive to bridge the gap between global
              suppliers and local buyers by providing easy access to
              high-quality metals and raw materials.
              <br />
              <br />
              Our focus is to simplify complex procurement processes, streamline
              operations, and reduce overall costs, allowing businesses to focus
              on scaling and innovation. We are committed to delivering value by
              ensuring the highest level of service and support to help our
              clients grow and achieve their operational goals.
            </p>
          </div>

          {/* Values */}
          <div className="bg-[#F4F6FA] shadow-lg rounded-lg p-6 w-full md:w-1/2">
            <h3 className="text-2xl md:text-3xl font-bold text-myblue mb-4 text-center">
              Values
            </h3>
            <p className="text-gray-600 leading-relaxed">
              xox is dedicated to driving innovation in the procurement industry
              through solutions that prioritize customer needs. Upholding
              integrity, transparency, and sustainability, we ensure that every
              interaction fosters trust and builds lasting partnerships.
              <br />
              <br />
              We prioritize environmentally sustainable practices by promoting
              the responsible sourcing and management of raw materials. By
              embedding sustainability into every stage of the procurement
              process, we help businesses minimize their environmental impact
              while achieving their business objectives. Our commitment to
              operational excellence ensures that businesses not only meet but
              exceed industry standards.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
