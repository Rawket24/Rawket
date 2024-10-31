import React, { useState, useEffect } from "react";
import { useUser } from "../context/UserContext"; // Assuming this is your authentication context
import { useAuth } from "../context/AuthContext"; // Assuming this is your user context

const QueryForm = ({ productname }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    pincode: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");
  const { signIn } = useAuth(); // Check if user is signed in
  const { user, setUser } = useUser(); // Get user details
  const [showLoginPopup, setShowLoginPopup] = useState(false);

  const SHEETDB_API_URL = "https://sheetdb.io/api/v1/yu8udmpjaytl5";

  useEffect(() => {
    if (user) {
      // Prefill form data when user is logged in
      setFormData((prevData) => ({
        ...prevData,
        name: user.name,
        email: user.email,
        message: productname,
      }));
    }
  }, [user]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("");

    try {
      const formattedData = {
        name: formData.name,
        email: formData.email,
        contact: formData.contact,
        pincode: formData.pincode,
        company: formData.company,
        message: productname,
      };

      const response = await fetch(SHEETDB_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          data: formattedData,
        }),
      });

      if (response.ok) {
        setSubmitStatus("Quotation requested successfully!");
        setFormData({
          name: user?.name || "",
          email: user?.email || "",
          contact: "",
          pincode: "",
          company: "",
          message: productname || "",
        });
      } else {
        setSubmitStatus("Error submitting your quote. Please try again.");
      }
    } catch (error) {
      setSubmitStatus("Error submitting your quote. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Function to handle form access based on login status
  const handleFormAccess = () => {
    if (!signIn) {
      setShowLoginPopup(true);
    }
  };

  return (
    <div>
      {showLoginPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 mx-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Please Sign In
            </h2>
            <p className="text-gray-700 mb-6">
              You need to sign in to fill out the form.
            </p>
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setShowLoginPopup(false)}
                className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400 transition duration-300"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
      <section className="py-12">
        <div className="text-[40px] font-bold text-center text-myblue">
          Get a Quotation
        </div>
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-12">
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="/Images/quote.png"
              alt="Logistics illustration"
              className="w-80 md:w-full"
            />
          </div>

          <div className="w-full md:w-1/2 bg-myblue rounded-lg shadow-lg p-8">
            <h2 className="text-white text-2xl font-bold mb-6">
              Fill the details below to contact us
            </h2>
            {submitStatus && (
              <div
                className={`p-4 mb-4 rounded ${
                  submitStatus.includes("Error")
                    ? "bg-red-100 text-red-700"
                    : "bg-green-100 text-green-700"
                }`}
              >
                {submitStatus}
              </div>
            )}
            <form
              onSubmit={handleSubmit}
              onClick={handleFormAccess}
              disabled={!signIn}
            >
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
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 rounded-md shadow-sm text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                  readOnly={signIn}
                  required
                />
              </div>

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
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  readOnly={signIn}
                  required
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
                    value={formData.contact}
                    onChange={handleChange}
                    placeholder="+91 123456789"
                    className="w-full px-3 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
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
                    value={formData.pincode}
                    onChange={handleChange}
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
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Company Name"
                  className="w-full px-3 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-6">
                <label
                  className="block text-white text-sm font-semibold mb-2"
                  htmlFor="message"
                >
                  Product Name
                </label>
                <input
                  type="text"
                  id="message"
                  value={productname}
                  className="w-full px-3 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows="4"
                />
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-gray-900 text-white font-bold py-2 px-6 rounded-md hover:bg-gray-600 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send Query"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default QueryForm;
