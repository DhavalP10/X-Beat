import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "./swiperCustom.css"; // for red dots

function FeaturedProducts() {
  const products = [
    { name: "boAt Rockerz 518", img: "/products/boat518-1.png", price: "₹1,299", oldPrice: "₹3,990" },
    { name: "JBL Tune 760NC", img: "/products/jbl760nc-1.png", price: "₹5,999", oldPrice: "₹7,999" },
    { name: "boAt Rockerz 255", img: "/products/boat255r-1.png", price: "₹899", oldPrice: "₹2,990" },
    { name: "JBL Endurance Run", img: "/products/jbl-endu-1.png", price: "₹999", oldPrice: "₹1,599" },
    { name: "boAt Airdopes 203", img: "/products/boat203-1.png", price: "₹1,074", oldPrice: "₹3,999" },
  ];

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
        slidesPerView={3}
        loop={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2,
          slideShadows: false,
        }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 2500 }}
        spaceBetween={40}
        className="featured-swiper"
      >
        {products.map((product, index) => (
          <SwiperSlide key={index}>
            <div className="text-center text-gray-400">
              <p className="text-lg font-semibold mb-4">{product.name}</p>
              <img
                src={product.img}
                className="h-80 w-80 object-contain mx-auto cursor-pointer transition-transform duration-500"
              />
              <div className="flex justify-center gap-6 mt-4">
                <p className="text-gray-400 font-bold text-2xl">{product.price}</p>
                <p className="text-gray-400 font-bold text-2xl pb-15 line-through">
                  {product.oldPrice}
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
