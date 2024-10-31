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
      <div className="text-center font-bold text-[40px] text-myblue pt-10">
        Product Details
      </div>
      <div className="max-w-[75vw] mx-auto p-6">
        <div className="bg-white rounded-lg shadow-md border-[1px] p-8">
          <div className="flex flex-row gap-10 justify-center items-start">
            <img
              src={product.image}
              alt={product.name}
              className="flex-1 rounded-lg mb-4 h-[500px] w-[500px]"
            />
            <div className="flex-1 flex flex-col">
              <h2 className="text-[40px] font-bold mb-4">{product.name}</h2>

              <p className="text-gray-700 mb-4 p-3 rounded-lg border-[1px]  bg-gray-200">
                {product.description}
              </p>
              <p className="text-gray-900 text-lg font-semibold mb-4">
                Category:{" "}
                <span className="font-normal text-white  rounded-md px-4 py-1 bg-myblue">
                  {category}
                </span>
              </p>
              <div className="flex flex-row ">
                <div className="text-lg font-semibold mb-2 mr-2">
                  Specifications:
                </div>
                <ul className="flex flex-row gap-2 mb-4 ">
                  {Object.entries(product.specification).map(
                    ([key, value], index) => (
                      <div
                        key={index}
                        className="text-white  rounded-md px-4 py-1 bg-myblue"
                      >
                        {key}: {Array.isArray(value) ? value.join(", ") : value}
                      </div>
                    )
                  )}
                </ul>
              </div>
              <div className="flex flex-row">
                <div className="text-lg font-semibold mb-2 mr-2">Brands:</div>
                <ul className="flex flex-row gap-2 mb-4">
                  {product.brands.map((brand, index) => (
                    <div
                      key={index}
                      className="text-white  rounded-md px-4 py-1 bg-myblue"
                    >
                      {brand}
                    </div>
                  ))}
                </ul>
              </div>
              <div className="flex flex-row">
                <div className="text-lg font-semibold mb-2 mr-2">Grades:</div>
                <ul className="flex flex-wrap gap-2 mb-4">
                  {product.grades.map((grade, index) => (
                    <div
                      key={index}
                      className="text-white  rounded-md px-4 py-1 bg-myblue"
                    >
                      {grade}
                    </div>
                  ))}
                </ul>
              </div>
              <div className="flex flex-row">
                <div className="text-lg font-semibold mb-2 mr-2">
                  Customizations:
                </div>
                <ul className="flex flex-wrap gap-2 mb-4">
                  {product.customizations.map((cust, index) => (
                    <div
                      key={index}
                      className="text-white  rounded-md px-4 py-1 bg-myblue"
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
