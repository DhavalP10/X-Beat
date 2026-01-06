// TopProduct.js
import React, { useEffect, useState } from "react";
// import productsData from "../data/products.js";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../Components/CartContext";
import { ProductContext } from "../context/ProductContext";
// import productapi from "../productapi.js";

function TopProduct() {
const [activeCategory, setActiveCategory] = useState("All");
// const [loading, setLoading] = useState(true);

const { addToCart } = useContext(CartContext);

// const [loadData,setloadData] = useState([]);
const { products, loading } = useContext(ProductContext);
  
const filteredProducts =
  activeCategory === "All"
    ? products.slice(0, 11)
    : products.filter(item => item.category === activeCategory);





if (!filteredProducts) {
    return (
      <div className="h-screen flex items-center justify-center bg-[#121212] text-gray-400">
        Loading Top products...
      </div>
    );
  }




  return (
    <div className="bg-[#121212] min-h-screen flex flex-col items-center pt-20 px-4">
      <h2 className="text-gray-400 text-2xl md:text-3xl font-bold">Top Products</h2>

      {/* Category Buttons */}
      <div className="text-gray-400 text-sm md:text-lg flex flex-wrap justify-center gap-4 mt-8">
        <button
          className={`px-4 py-2 rounded-md cursor-pointer ${
            activeCategory === "All"
              ? "bg-red-600 text-white"
              : "bg-[#121212] hover:bg-red-600 hover:text-white"
          }`}
          onClick={() => setActiveCategory("All")}
        >
          All
        </button>
        <button
          className={`px-4 py-2 rounded-md cursor-pointer ${
            activeCategory === "Headphones"
              ? "bg-red-600 text-white"
              : "bg-[#121212] hover:bg-red-600 hover:text-white"
          }`}
          onClick={() => setActiveCategory("Headphones")}
        >
          Headphones
        </button>
        <button
          className={`px-4 py-2 rounded-md cursor-pointer ${
            activeCategory === "Earbuds"
              ? "bg-red-600 text-white"
              : "bg-[#121212] hover:bg-red-600 hover:text-white"
          }`}
          onClick={() => setActiveCategory("Earbuds")}
        >
          Earbuds
        </button>
        <button
          className={`px-4 py-2 rounded-md cursor-pointer ${
            activeCategory === "Earphones"
              ? "bg-red-600 text-white"
              : "bg-[#121212] hover:bg-red-600 hover:text-white"
          }`}
          onClick={() => setActiveCategory("Earphones")}
        >
          Earphones
        </button>
        <button
          className={`px-4 py-2 rounded-md cursor-pointer ${
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
      {/* Product Grid */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-10 w-full max-w-7xl">

  {loading ? (
    <div className="col-span-full flex justify-center items-center py-20">
      <p className="text-gray-400 text-xl animate-pulse">
        Loading products...
      </p>
    </div>
  ) : (
    <>
      {filteredProducts.map((item) => (
        <div
          key={item._id}
          className="bg-[#161819] shadow-lg border border-gray-400 rounded-md overflow-hidden"
        >
          <div className="flex flex-col">

            <Link to={`/product-details/${item._id}`}>
              <img
                src={item.images[0]}
                alt={item.title}
                className="h-48 w-full object-contain mt-5 mb-2 cursor-pointer hover:scale-105 duration-200"
              />
            </Link>

            <div className="bg-[#121212] w-full px-4 py-6 rounded-b-md">
              <p className="text-red-500">★★★★★</p>
              <p className="text-gray-400 font-semibold text-lg md:text-xl mt-2">
                {item.title}
              </p>
              <h6 className="text-gray-400 mt-1 text-sm">
                {item.info}
              </h6>

              <hr className="border-t border-gray-700 mt-3" />

              <div className="flex gap-2 items-center mt-3">
                <p className="text-gray-400 font-semibold text-xl md:text-2xl">
                  ₹{item.finalPrice.toLocaleString("en-IN")}
                </p>
                <p className="text-gray-400 font-semibold text-lg line-through">
                  ₹{item.originalPrice.toLocaleString("en-IN")}
                </p>
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

      {activeCategory === "All" && (
        <Link to={"/products"}>
          <div className="bg-[#161819] shadow-lg border border-gray-400 rounded-md flex justify-center items-center cursor-pointer h-117">
            <div className="flex flex-col text-gray-400 text-xl md:text-2xl hover:text-gray-200 text-center">
              <h1>Browse All</h1>
              <h1>Products ➜</h1>
            </div>
          </div>
        </Link>
      )}
    </>
  )}

</div>

    </div>
  );
}

export default TopProduct;