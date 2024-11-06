import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import productsData from "../data/productsData.json"; // Adjust the path as necessary
import QuoteForm from "../components/QuoteForm";
import QueryForm from "../components/QueryForm";

const ProductDetail = () => {
  const { category, productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const products = productsData.products;
    console.log(products);

    if (!products) {
      console.error("Products data is missing or undefined.");
      return;
    }

    // Define a helper function to get the correct product array
    const getCategoryProducts = () => {
      if (category === "mildsteel") {
        return products[0].mildsteel || [];
      } else if (category === "stainless") {
        return products[1].stainlesssteel || [];
      }
      return [];
    };

    const categoryProducts = getCategoryProducts();

    if (categoryProducts) {
      const foundProduct = categoryProducts.find(
        (item) => item.productId === productId // Adjust as needed if productId is numeric in data
      );
      setProduct(foundProduct || null);
      console.log(product);
    } else {
      console.error("Category not found in products data.");
    }
  }, [category, productId]);

  if (product === null) {
    return <div>Loading...</div>; // Change to Loading... if product is null
  }
  return (
    <div>
      <div className="text-center font-bold text-[32px] md:text-[40px] text-myblue pt-10">
        Product Details
      </div>
      <div className="w-full max-w-[90vw] sm:max-w-[75vw] mx-auto p-4 sm:p-6">
        <div className="bg-white rounded-lg shadow-md border-[1px] p-6 sm:p-8">
          <div className="flex flex-col md:flex-row gap-4 md:gap-10 justify-center items-center md:items-start">
            <img
              src={product.image}
              alt={product.name}
              className="rounded-lg mb-4 w-full h-auto max-w-[300px] sm:max-w-[400px] md:max-w-[500px]"
            />
            <div className="flex-1 flex flex-col w-full">
              <h2 className="text-[28px] md:text-[40px] font-bold mb-4">
                {product.name}
              </h2>

              <p className="text-gray-700 mb-4 p-3 rounded-lg border-[1px] bg-gray-200">
                {product.description}
              </p>

              <p className="text-gray-900 text-md md:text-lg font-semibold mb-4">
                Category:
                <span className="ml-1 text-black rounded-md px-4 py-1 capitalize font-semibold border-[1px] border-gray-400">
                  {category}
                </span>
              </p>

              <div className="flex flex-row flex-wrap">
                <div className="text-md md:text-lg font-semibold mb-2 mr-2">
                  Specifications:
                </div>
                <ul className="flex flex-col gap-2 mb-4">
                  {Object.entries(product.specification).map(
                    ([key, value], index) => (
                      <div
                        key={index}
                        className="text-black border-[1px] border-gray-400 rounded-md px-4 py-1 capitalize font-semibold"
                      >
                        {key}: {Array.isArray(value) ? value.join(", ") : value}
                      </div>
                    )
                  )}
                </ul>
              </div>

              <div className="flex flex-col md:flex-row md:items-center">
                <div className="text-md md:text-lg font-semibold mb-2 mr-2">
                  Brands:
                </div>
                <ul className="flex flex-wrap gap-2 mb-4">
                  {product.brands.map((brand, index) => (
                    <div
                      key={index}
                      className="text-black rounded-md px-4 py-1 capitalize font-semibold border-[1px] border-gray-400"
                    >
                      {brand}
                    </div>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col md:flex-row md:items-center">
                <div className="text-md md:text-lg font-semibold mb-2 mr-2">
                  Grades:
                </div>
                <ul className="flex flex-wrap gap-2 mb-4">
                  {product.grades.map((grade, index) => (
                    <div
                      key={index}
                      className="text-black rounded-md px-4 py-1 capitalize font-semibold border-[1px] border-gray-400"
                    >
                      {grade}
                    </div>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col md:flex-row md:items-center">
                <div className="text-md md:text-lg font-semibold mb-2 mr-2">
                  Customizations:
                </div>
                <ul className="flex flex-wrap gap-2 mb-4">
                  {product.customizations.map((cust, index) => (
                    <div
                      key={index}
                      className="text-black rounded-md px-4 py-1 capitalize font-semibold border-[1px] border-gray-400"
                    >
                      {cust}
                    </div>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <QueryForm productname={product.name} />
      </div>
    </div>
  );
};

export default ProductDetail;
