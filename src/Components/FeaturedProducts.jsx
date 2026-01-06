import React, { useEffect, useState, useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectCoverflow } from "swiper/modules";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "./swiperCustom.css"; // for red dots
import { ProductContext } from "../context/ProductContext";


function FeaturedProducts() {


const { products, loading } = useContext(ProductContext);
const [featuredProducts, setFeaturedProducts] = useState([]);

useEffect(() => {
  if (products.length > 0) {
    const featured = products.filter(
      (item) => item.tag === "featured-product"
    );
    setFeaturedProducts(featured);
  }
}, [products]);

if (loading) {
    return <p className="text-center text-gray-400">Loading Featured Data...</p>;
  }



  return (
    <div className="bg-[#121212] py-10">
      <p className="text-3xl text-gray-400 text-center font-bold mb-10">
        Featured Products
      </p>

      <Swiper
        modules={[Pagination, Autoplay, EffectCoverflow]}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        loop={featuredProducts.length > 3}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2,
          slideShadows: false,
        }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 2500 }}
        spaceBetween={20}
        className="featured-swiper"
      >
        {featuredProducts.map((products,index) => (
          <SwiperSlide key={index}>
            <div className="text-center text-gray-400">
              <p className="text-lg font-semibold mb-4">{products.title}</p>
              <Link to={`/product-details/${products._id}`}>
              <img
                src={products.images[0]}
                className="h-80 w-80 object-contain mx-auto cursor-pointer transition-transform duration-500"
              /></Link>
              <div className="flex justify-center gap-6 mt-4">
                <p className="text-gray-400 font-bold text-2xl">₹{products.finalPrice.toLocaleString("en-IN")}</p>
                <p className="text-gray-400 font-bold text-2xl pb-15 line-through">
                  ₹{products.originalPrice.toLocaleString("en-IN")}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default FeaturedProducts;