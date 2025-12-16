// TopProduct.js
import React, { useState } from "react";
import productsData from "../data/products.js";
import { Link } from "react-router-dom";

// chunkArray function here (same as yours)...

function TopProduct() {
const [activeCategory, setActiveCategory] = useState("All");
const [showAll, setShowAll] = useState(false);

  const filteredProducts =
  activeCategory === "All"
    ? showAll
      ? productsData.slice(0, 18)   // show 11 items when clicked
      : productsData.slice(0, 11)    // show 3 items initially
    : productsData.filter((item) => item.category === activeCategory);

      // TopProducts.jsx
const chunkArray = (array, size) => {
  let result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
};


  const rows = chunkArray(filteredProducts, 4);

  return (
    <div className="bg-[#121212] min-h-screen flex flex-col items-center pt-20">
      <h2 className="text-gray-400 text-3xl font-bold">Top Products</h2>

      {/* Category Buttons */}
      <div className="text-gray-400 text-1xl flex gap-15 mt-15">
        {/* ... your category buttons unchanged ... */}
        {/* Example button */}
        <button
          className={`mt-8 px-6 py-2 rounded-md text-lg ${
            activeCategory === "All"
              ? "bg-red-600 text-white"
              : "bg-[#121212] hover:bg-red-600 hover:text-white"
          }`}
          onClick={() => setActiveCategory("All")}
        >
          All
        </button>
        {/* ... rest of buttons ... */}
        <button
          className={`mt-8 px-6 py-2 rounded-md text-lg ${
            activeCategory === "Headphones"
              ? "bg-red-600 text-white"
              : "bg-[#121212] hover:bg-red-600 hover:text-white  "
          }`}
          onClick={() => setActiveCategory("Headphones")}
        >
          Headphones
        </button>
        <button
          className={`mt-8 px-6 py-2 rounded-md text-lg ${
            activeCategory === "Earbuds"
              ? "bg-red-600 text-white"
              : "bg-[#121212] hover:bg-red-600 hover:text-white"
          }`}
          onClick={() => setActiveCategory("Earbuds")}
        >
          Earbuds
        </button>
        <button
          className={`mt-8 px-6 py-2 rounded-md text-lg  ${
            activeCategory === "Earphones"
              ? "bg-red-600 text-white"
              : "bg-[#121212] hover:bg-red-600 hover:text-white "
          }`}
          onClick={() => setActiveCategory("Earphones")}
        >
          Earphones
        </button>
        <button
          className={`mt-8 px-6 py-2 rounded-md text-lg ${
            activeCategory === "Neckbands"
              ? "bg-red-600 text-white"
              : "bg-[#121212] hover:bg-red-600 hover:text-white"
          }`}
          onClick={() => setActiveCategory("Neckbands")}
        >
          Neckbands
        </button>
      </div>
      

      {/* Product Rows */}
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className="flex gap-5 mt-5 ">

          {row.map((item) => (
            <div
              key={item.id}
              className="bg-[#161819] shadow-lg w-90 border border-gray-400"
            >
              <div className="flex flex-col">

                {/* Wrap image in Link to product details */}
                <Link to={`/product-details/${item.id}`}>
                  <img
                    src={item.images[0]}
                    alt={item.title}
                    className="h-60 w-60 m-auto mt-5 mb-2 cursor-pointer hover:scale-105 duration-200"
                  />
                </Link>

                <div className="bg-[#121212] w-full px-5 py-10 h-65 rounded-b-md">
                  <p className="text-red-500">★★★★★</p>
                  <p className="text-gray-400 font-semibold text-2xl mt-2">{item.title}</p>
                  <h6 className="text-gray-400 mt-1">{item.info}</h6>

                  <hr className="border-t border-gray-700 mt-3" />

                  <div className="flex gap-1 items-center mt-3">
                    <p className="text-gray-400 font-semibold text-3xl">₹{item.finalPrice}</p>
                    <p className="text-gray-400 font-semibold text-2xl line-through">₹{item.originalPrice}</p>
                  </div>

                  <button className="mt-4 bg-red-700 hover:bg-red-600 text-white px-25 py-2 rounded-md font-semibold duration-200 cursor-pointer ml-4">
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          ))}
         {/* Browse All Card */}
{activeCategory === "All" && rowIndex === rows.length - 1 && !showAll && (
  <div
    className="bg-[#161819] shadow-lg w-90 border border-gray-400 flex justify-center items-center cursor-pointer rounded-md"
    onClick={() => setShowAll(true)}  // **Add this onClick**
  >
    <div className="flex flex-col text-gray-400 text-3xl hover:text-gray-200 text-center py-20">
      <h1>Browse All</h1>
      <h1>Products ➜</h1>
    </div>
  </div>
)}


        </div>
      ))}
    </div>
  );
}

export default TopProduct;