import React from "react";
import Navbar from "../components/Navbar";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

const Products = () => {
  const categories = [
    "Mild Steel",
    "Stainless Steel",
    "Aluminum",
    "Copper",
    "Zinc",
    "Nickel",
    "Metal Scrap",
  ];

  const products = [
    { name: "MS TMT Bars", image: "/api/placeholder/150/150" },
    { name: "MS Sheets", image: "/api/placeholder/150/150" },
    { name: "MS Channels", image: "/api/placeholder/150/150" },
    { name: "MS Beams | Joist", image: "/api/placeholder/150/150" },
    { name: "MS Angles", image: "/api/placeholder/150/150" },
    { name: "MS Square Pipe", image: "/api/placeholder/150/150" },
    { name: "MS Round Bars", image: "/api/placeholder/150/150" },
    { name: "MS HR Coils", image: "/api/placeholder/150/150" },
    { name: "MS CR Coils", image: "/api/placeholder/150/150" },
  ];
  return (
    <div>
      <div>
        <Navbar />
        <div>
          <section id="products1" className="bg-white py-5 md:py-10">
            <div className="container max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row items-center">
              {/* Text Content */}
              <div className="md:w-1/2 pl-10 flex flex-col">
                <h1 className="text-[40px] md:text-[60px] font-bold text-gray-900 mb-4 leading-tight">
                  Metal Products On
                </h1>
                <p className="text-lg text-gray-600 mb-10">
                  Helping companies cut costs and streamline operations. Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio
                  in et, lectus sit lorem id integer.
                </p>
              </div>

              {/* Image Content */}
              <div className="md:w-1/2 mb-8 md:mb-0 flex justify-center">
                <img
                  src="/Images/producthome.png"
                  alt="Hero Image"
                  className="w-3/4 h-auto"
                  width={500}
                  height={500}
                />
              </div>
            </div>
          </section>
          <section className="flex">
            <div className="container max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row items-center">
              <aside className="w-1/4 pr-8">
                <h2 className="text-xl font-semibold mb-4">Categories</h2>
                <ul className="space-y-2">
                  {categories.map((category, index) => (
                    <li
                      key={index}
                      className={`p-2 ${
                        index === 0 ? "bg-blue-600 text-white" : "bg-gray-200"
                      } rounded`}
                    >
                      {category}
                    </li>
                  ))}
                </ul>
              </aside>

              <div className="w-3/4">
                <div className="grid grid-cols-3 gap-8">
                  {products.map((product, index) => (
                    <div key={index} className="bg-white p-4 rounded shadow">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-32 object-cover mb-4"
                      />
                      <div className="flex justify-between items-center">
                        <span>{product.name}</span>
                        <FaHeart />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Products;
