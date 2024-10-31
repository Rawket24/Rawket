import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import productsData from "../data/productsData.json"; // Adjust the path if necessary

const Products = () => {
  const categories = ["Mild Steel", "Stainless Steel"];
  const [selectedCategory, setSelectedCategory] = useState("Mild Steel");
  const navigate = useNavigate();

  // Determine the products to display based on the selected category
  const getCategoryProducts = () => {
    const products = productsData.products;
    if (selectedCategory === "Mild Steel") {
      return products[0].mildsteel || [];
    } else if (selectedCategory === "Stainless Steel") {
      return products[1].stainlesssteel || [];
    }
    return [];
  };

  const handleProductClick = (productId) => {
    const category =
      selectedCategory === "Mild Steel" ? "mildsteel" : "stainless";
    navigate(`/product/${category}/${productId}`);
  };
  return (
    <div>
      <div className="pb-10">
        <section id="products1" className="bg-white py-5 md:py-10">
          <div className="container max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row items-center">
            <div className="md:w-1/2 pl-10 flex flex-col">
              <h1 className="text-[40px] md:text-[60px] font-bold text-gray-900 mb-4 leading-tight">
                Metal Products On
              </h1>
              <p className="text-lg text-gray-600 mb-10">
                Helping companies cut costs and streamline operations. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in
                et, lectus sit lorem id integer.
              </p>
            </div>

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
          <div className="container max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 flex">
            <aside className="w-1/4 pr-8">
              <h2 className="text-xl font-semibold mb-4">Categories</h2>
              <ul className="space-y-2">
                {categories.map((category, index) => (
                  <li
                    key={index}
                    onClick={() => setSelectedCategory(category)}
                    className={`p-2 cursor-pointer ${
                      selectedCategory === category
                        ? "bg-blue-600 text-white"
                        : "bg-gray-200"
                    } rounded`}
                  >
                    {category}
                  </li>
                ))}
              </ul>
            </aside>

            <div className="w-3/4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {getCategoryProducts().map((product, index) => (
                  <div
                    key={index}
                    className="bg-white p-4 rounded shadow cursor-pointer"
                    onClick={() => handleProductClick(product.productId)}
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-32 object-cover mb-4"
                    />
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{product.name}</span>
                    </div>
                    <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                      {product.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Products;
