import React from "react";

const Contact = () => {
  return (
    <section className="bg-blue-50 py-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-12">
        {/* Left Section: Illustration */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="/Images/contact.png" // Replace with actual image path
            alt="Logistics illustration"
            className="w-80 md:w-full"
          />
        </div>

        {/* Right Section: Contact Form */}
        <div className="w-full md:w-1/2 bg-myblue rounded-lg shadow-lg p-8">
          <h2 className="text-white text-2xl font-bold mb-6">
            Fill the details below to contact us
          </h2>
          <form>
            {/* Name Field */}
            <div className="mb-4">
              <label
                className="block text-white text-sm font-semibold mb-2"
                htmlFor="name"
              >
                Name*
              </label>
              <input
                type="text"
                id="name"
                placeholder="Name Surname"
                className="w-full px-3 py-2 rounded-md shadow-sm text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Email Field */}
            <div className="mb-4">
              <label
                className="block text-white text-sm font-semibold mb-2"
                htmlFor="email"
              >
                E-Mail*
              </label>
              <input
                type="email"
                id="email"
                placeholder="name.123@email.com"
                className="w-full px-3 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Contact Number & Pin Code */}
            <div className="flex space-x-4">
              <div className="mb-4 w-1/2">
                <label
                  className="block text-white text-sm font-semibold mb-2"
                  htmlFor="contact"
                >
                  Contact*
                </label>
                <input
                  type="text"
                  id="contact"
                  placeholder="+91 123456789"
                  className="w-full px-3 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="mb-4 w-1/2">
                <label
                  className="block text-white text-sm font-semibold mb-2"
                  htmlFor="pincode"
                >
                  Pin Code
                </label>
                <input
                  type="text"
                  id="pincode"
                  placeholder="000000"
                  className="w-full px-3 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Company Name Field */}
            <div className="mb-6">
              <label
                className="block text-white text-sm font-semibold mb-2"
                htmlFor="company"
              >
                Company Name
              </label>
              <input
                type="text"
                id="company"
                placeholder="Company Name"
                className="w-full px-3 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-white text-sm font-semibold mb-2"
                htmlFor="company"
              >
                Message
              </label>
              <textarea
                id="message"
                placeholder="message"
                className="w-full px-3 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="4" // You can adjust this value to change the size of the textarea
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-gray-900 text-white font-bold py-2 px-6 rounded-md hover:bg-gray-600  transition duration-300"
              >
                Contact Us
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
