import products from "../data/products";
import { useState } from "react";

const ProductDetails = () => {
  const product = products[0]; // selecting first product
  const [mainImage, setMainImage] = useState(product.images[0]);

  return (
    <div className="min-h-screen bg-[#121212] text-white px-10 py-10 grid grid-cols-1 md:grid-cols-2 gap-12">

      {/* LEFT SIDE - IMAGES */}
      <div className="flex gap-6">
        
        {/* Thumbnails */}
        <div className="flex flex-col gap-4">
          {product.images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt="product"
              onClick={() => setMainImage(img)}
              className="w-20 h-20 border border-gray-700 rounded-lg cursor-pointer hover:border-white"
            />
          ))}
        </div>

        {/* Main Image */}
        <div className="flex-1 flex justify-center items-center">
          <img
            src={mainImage}
            alt={product.title}
            className="max-h-[500px]"
          />
        </div>
      </div>

      {/* RIGHT SIDE - DETAILS */}
      <div>
        <h1 className="text-4xl font-bold mb-2">{product.title}</h1>
        <p className="text-gray-400 mb-4">{product.subtitle}</p>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-6">
          <span className="text-red-500">
            {"★".repeat(product.rating)}
          </span>
          <span className="text-gray-400">
            {product.ratingCount} Ratings
          </span>
        </div>

        {/* Price */}
        <div className="mb-4">
          <span className="text-4xl font-bold">₹{product.price}</span>
          <span className="line-through text-gray-500 ml-3">
            ₹{product.originalPrice}
          </span>
        </div>

        {/* Stock */}
        {product.stock && (
          <span className="inline-block bg-green-600 px-4 py-1 rounded-full mb-6">
            In Stock
          </span>
        )}

        {/* Button */}
        <button className="mt-6 bg-red-600 hover:bg-red-700 px-10 py-3 rounded-lg text-lg">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
