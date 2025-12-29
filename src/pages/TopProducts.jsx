// TopProduct.js
import React, { useState } from "react";
import productsData from "../data/products.js";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../Components/CartContext";

function TopProduct() {
const [activeCategory, setActiveCategory] = useState("All");
const { addToCart } = useContext(CartContext);

  const filteredProducts =
  activeCategory === "All"
    ? productsData.slice(0, 11)    // show 11 items initially
    : productsData.filter((item) => item.category === activeCategory);

  return (
    <div className="bg-[#121212] min-h-screen flex flex-col items-center pt-20 px-4">
      <h2 className="text-gray-400 text-2xl md:text-3xl font-bold">Top Products</h2>

      {/* Category Buttons */}
      <div className="text-gray-400 text-sm md:text-lg flex flex-wrap justify-center gap-4 mt-8">
        <button
          className={`px-4 py-2 rounded-md ${
            activeCategory === "All"
              ? "bg-red-600 text-white"
              : "bg-[#121212] hover:bg-red-600 hover:text-white"
          }`}
          onClick={() => setActiveCategory("All")}
        >
          All
        </button>
        <button
          className={`px-4 py-2 rounded-md ${
            activeCategory === "Headphones"
              ? "bg-red-600 text-white"
              : "bg-[#121212] hover:bg-red-600 hover:text-white"
          }`}
          onClick={() => setActiveCategory("Headphones")}
        >
          Headphones
        </button>
        <button
          className={`px-4 py-2 rounded-md ${
            activeCategory === "Earbuds"
              ? "bg-red-600 text-white"
              : "bg-[#121212] hover:bg-red-600 hover:text-white"
          }`}
          onClick={() => setActiveCategory("Earbuds")}
        >
          Earbuds
        </button>
        <button
          className={`px-4 py-2 rounded-md ${
            activeCategory === "Earphones"
              ? "bg-red-600 text-white"
              : "bg-[#121212] hover:bg-red-600 hover:text-white"
          }`}
          onClick={() => setActiveCategory("Earphones")}
        >
          Earphones
        </button>
        <button
          className={`px-4 py-2 rounded-md ${
            activeCategory === "Neckbands"
              ? "bg-red-600 text-white"
              : "bg-[#121212] hover:bg-red-600 hover:text-white"
          }`}
          onClick={() => setActiveCategory("Neckbands")}
        >
          Neckbands
        </button>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-10 w-full max-w-7xl">
        {filteredProducts.map((item) => (
          <div
            key={item.id}
            className="bg-[#161819] shadow-lg border border-gray-400 rounded-md overflow-hidden"
          >
            <div className="flex flex-col">
              {/* Wrap image in Link to product details */}
              <Link to={`/product-details/${item.id}`}>
                <img
                  src={item.images[0]}
                  alt={item.title}
                  className="h-48 w-full object-contain mt-5 mb-2 cursor-pointer hover:scale-105 duration-200"
                />
              </Link>

              <div className="bg-[#121212] w-full px-4 py-6 rounded-b-md">
                <p className="text-red-500">★★★★★</p>
                <p className="text-gray-400 font-semibold text-lg md:text-xl mt-2">{item.title}</p>
                <h6 className="text-gray-400 mt-1 text-sm">{item.info}</h6>

                <hr className="border-t border-gray-700 mt-3" />

                <div className="flex gap-2 items-center mt-3">
                  <p className="text-gray-400 font-semibold text-xl md:text-2xl">₹{item.finalPrice.toLocaleString("en-IN")}</p>
                  <p className="text-gray-400 font-semibold text-lg line-through">₹{item.originalPrice.toLocaleString("en-IN")}</p>
                </div>

                <button
                  onClick={() => addToCart(item)}
                  className="mt-4 bg-red-700 hover:bg-red-600 text-white px-6 py-2 rounded-md font-semibold duration-200 cursor-pointer w-full"
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        ))}
        {/* Browse All Card */}
        {activeCategory === "All" && (
          <Link to={"/products"}>
            <div className="bg-[#161819] shadow-lg border border-gray-400 rounded-md flex justify-center items-center cursor-pointer h-64">
              <div className="flex flex-col text-gray-400 text-xl md:text-2xl hover:text-gray-200 text-center">
                <h1>Browse All</h1>
                <h1>Products ➜</h1>
              </div>
            </div>
          </Link>
        )}
      </div>
    </div>
  );
}

export default TopProduct;