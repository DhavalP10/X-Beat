import { useState } from "react";

function ProductDetails() {
  const [mainImage, setMainImage] = useState("/products/jbl660nc-1.png");
  const [activeTab, setActiveTab] = useState("specs"); // ⭐ NEW STATE

  return (
    <>
      {/* ------------------ TOP SECTION ------------------ */}
      <div className="bg-black w-full pt-10 flex justify-around">
        
        {/* Thumbnails */}
        <div className="flex flex-col gap-4 pt-15">
          {[
            "/products/jbl660nc-1.png",
            "/products/jbl660nc-2.png",
            "/products/jbl660nc-3.png",
            "/products/jbl660nc-4.png",
          ].map((img, i) => (
            <img
              key={i}
              src={img}
              className="w-30 border-2 border-gray-500 rounded-xl cursor-pointer hover:opacity-80"
              onClick={() => setMainImage(img)}
            />
          ))}
        </div>

        {/* Main Image */}
        <div>
          <img src={mainImage} alt="Main" className="h-150 mt-10 rounded-xl" />
        </div>

        {/* Product Details */}
        <div className="bg-black min-h-screen text-white px-6 py-10">
          <h1 className="text-4xl font-bold">JBL Live 660NC</h1>
          <p className="text-gray-400 text-lg mt-2">
            Wireless Over-Ear NC Headphones
          </p>

          <div className="flex items-center gap-3 mt-3 text-gray-300">
            <span className="text-red-500 text-xl">★★★★★</span>
            <span>| 1234 Ratings</span>
          </div>

          <hr className="border-gray-700 my-6" />

          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-end gap-4">
                <span className="text-4xl font-bold">₹9,999</span>
                <span className="text-2xl text-gray-500 line-through">
                  ₹14,999
                </span>
              </div>

              <p className="text-green-500 mt-1 text-lg">
                You save: ₹5,000 (33%)
              </p>
              <p className="text-gray-500 text-sm">(Inclusive of all taxes)</p>
            </div>

            <div className="bg-green-600 text-white px-4 py-2 rounded-lg flex items-center gap-2">
              <span>✔</span> <span>In Stock</span>
            </div>
          </div>

          <hr className="border-gray-700 my-6" />

          <h2 className="text-xl font-semibold mb-4">Offers and Discounts</h2>

          <div className="flex gap-4 flex-wrap">
            <button className="border border-gray-500 px-5 py-3 rounded-lg text-gray-200 hover:bg-gray-800">
              No Cost EMI on Credit Card
            </button>

            <button className="border border-gray-500 px-5 py-3 rounded-lg text-gray-200 hover:bg-gray-800">
              Pay Later & Avail Cashback
            </button>
          </div>

          <hr className="border-gray-700 my-8" />

          <button className="bg-red-600 hover:bg-red-700 px-8 py-4 rounded-lg text-lg font-semibold">
            Add to cart
          </button>
        </div>
      </div>

      {/* ------------------ TABS SECTION ------------------ */}
      <div className="bg-[#111] py-6">
        <ul className="flex justify-center gap-16 text-gray-300 text-lg font-normal mt-8">
          <li
            className={`px-5 py-2 rounded-md cursor-pointer ${
              activeTab === "specs" ? "bg-red-600 text-white" : "hover:bg-red-600"
            }`}
            onClick={() => setActiveTab("specs")}
          >
            Specifications
          </li>

          <li
            className={`px-5 py-2 rounded-md cursor-pointer ${
              activeTab === "overview" ? "bg-red-600 text-white" : "hover:bg-red-600"
            }`}
            onClick={() => setActiveTab("overview")}
          >
            Overview
          </li>

          <li
            className={`px-5 py-2 rounded-md cursor-pointer ${
              activeTab === "reviews" ? "bg-red-600 text-white" : "hover:bg-red-600"
            }`}
            onClick={() => setActiveTab("reviews")}
          >
            Reviews
          </li>
        </ul>
      </div>

      {/* ------------------ TAB CONTENT ------------------ */}
      <div className="bg-[#111] text-white px-10 py-6">

        {/* 👉 TAB 1 : SPECIFICATIONS */}
        {activeTab === "specs" && (
          <div>
            <div className="w-300">
              {[
                ["Brand", "JBL"],
                ["Model", "JBL Live 660NC"],
                ["Generic Name", "Headphones"],
                ["Headphone Type", "Over Ear"],
                ["Connectivity", "Wireless"],
                ["Microphone", "Yes"],
              ].map(([label, value], index) => (
                <span key={index} className="grid grid-cols-2 w-[35%] pt-3">
                  <h1 className="text-[#A9AFC3]">{label}</h1>
                  <h1 className="font-semibold text-[#A9AFC3] text-right">
                    {value}
                  </h1>
                </span>
              ))}
            </div>
          </div>
        )}

        {/* 👉 TAB 2 : OVERVIEW */}
        {activeTab === "overview" && (
          <div className="max-w-[60%] leading-7 text-gray-300">
            <h2 className="text-2xl font-semibold mb-4">Product Overview</h2>
            <p>
              The JBL Live 660NC offers premium sound with Adaptive Noise
              Cancellation, crystal clear bass, a comfortable over-ear fit, and
              up to 50 hours of battery life. Designed for music lovers who want
              a powerful immersive experience.
            </p>
          </div>
        )}

        {/* 👉 TAB 3 : REVIEWS */}
        {activeTab === "reviews" && (
          <div className="max-w-[60%] text-gray-200">
            <h2 className="text-2xl font-semibold mb-4">Customer Reviews</h2>

            <div className="bg-gray-900 p-4 rounded-lg my-4">
              <p className="text-lg font-semibold">Rohan Sharma</p>
              <p className="text-yellow-400">★★★★★</p>
              <p className="mt-2 text-gray-300">
                Amazing sound quality and bass. Battery backup is too good.
              </p>
            </div>

            <div className="bg-gray-900 p-4 rounded-lg my-4">
              <p className="text-lg font-semibold">Aarav Patel</p>
              <p className="text-yellow-400">★★★★☆</p>
              <p className="mt-2 text-gray-300">
                Noise cancellation works well. Comfort is top notch.
              </p>
            </div>

            <button className="mt-4 bg-red-600 px-6 py-2 rounded-lg hover:bg-red-700">
              Load More Reviews
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default ProductDetails;
