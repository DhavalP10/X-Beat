import { useState } from "react";

function ProductDetails() {
  const [mainImage, setMainImage] = useState("/products/jbl660nc-1.png");

  return (
    <>
      <div className="bg-black w-full pt-10 flex justify-around">
        
        {/* Small Thumbnail Images */}
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
              onClick={() => setMainImage(img)}  // ✅ Correct JS logic
            />
          ))}
        </div>

        {/* Main Image */}
        <div>
          <img
            src={mainImage}
            alt="Main"
            className="h-150 mt-10  rounded-xl"
          />
        </div>

        {/* Product Details Section */}
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

          <hr className="border-gray-700 my-6"/>

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
      <div class="bg-[#111] py-6">
  <ul class="flex justify-center gap-16 text-gray-300 text-lg font-normal mt-8">
    <li class="hover:bg-red-600 text-white px-5 py-2 rounded-md cursor-pointer">Specifications</li>
    <li class="hover:bg-red-600 text-white px-5 py-2 rounded-md cursor-pointer">Overview</li>
    <li class="hover:bg-red-600 text-white px-5 py-2 rounded-md cursor-pointer">Reviews</li>
  </ul>
</div>
<div className="bg-[#111]">
  <div className="w-300 pl-10">
<span className="grid grid-cols-2 w-[35%] pt-3">
    <h1 className="text-[#A9AFC3]">Brand</h1>
    <h1 className="font-semibold text-[#A9AFC3] text-right">JBL</h1>
</span>
<span className="grid grid-cols-2 w-[35%] pt-3">
    <h1 className="text-[#A9AFC3]">Model</h1>
    <h1 className="font-semibold text-[#A9AFC3] text-right">JBL Live 660NC</h1>
</span>
<span className="grid grid-cols-2 w-[35%] pt-3">
    <h1 className="text-[#A9AFC3]">Generic Name</h1>
    <h1 className="font-semibold text-[#A9AFC3] text-right">Headphones</h1>
</span>
<span className="grid grid-cols-2 w-[35%] pt-3">
    <h1 className="text-[#A9AFC3]">Headphone Type</h1>
    <h1 className="font-semibold text-[#A9AFC3] text-right">Over Ear</h1>
</span>
<span className="grid grid-cols-2 w-[35%] pt-3">
    <h1 className="text-[#A9AFC3]">Connectivity</h1>
    <h1 className="font-semibold text-[#A9AFC3] text-right">Wireless</h1>
</span>
<span className="grid grid-cols-2 w-[35%] pt-3">
    <h1 className="text-[#A9AFC3]">Microphone</h1>
    <h1 className="font-semibold text-[#A9AFC3] text-right">Yes</h1>
</span>
</div>
</div>
    </>
  );
}

export default ProductDetails;
