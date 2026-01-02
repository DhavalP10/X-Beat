import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import productapi from "../productapi";

function HeroSlider() {

  const [slides,setSlides] = useState([]);

useEffect(()=>{
  const heroload = async () =>{
    const heroProducts = await productapi.getProducts({tag:"hero-product"});
    console.log("Hero Product",heroProducts);
    
    setSlides(heroProducts);
  };
  heroload();
}, []);

  const [current, setCurrent] = useState(0);

  useEffect(() => {
  if (slides.length === 0) return;

  const timer = setInterval(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, 4000);

  return () => clearInterval(timer);
}, [slides]);


  return (
    <div className="relative overflow-hidden w-full h-screen bg-[#121212]">

      <div
        className="flex transition-transform duration-900"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((item, index) => (
          <div
            key={index}
            className="min-w-full h-screen flex flex-col md:flex-row items-center px-4 md:px-8 lg:px-16 xl:px-50 relative text-gray-300"
          >
            {/* Background Big Text */}
            <h1 className="hidden md:block absolute left-10 top-1/2 -translate-y-1/2 text-6xl md:text-9xl lg:text-[150px] xl:text-[200px] font-bold text-[#1a1a1a] select-none">
              {item.bgText}
            </h1>

            {/* IMAGE — FIRST ON MOBILE */}
            <div className="order-1 md:order-2 mt-8 md:mt-0 md:ml-auto z-10">
              <img
                src={item.heroImage}
                alt="product"
                className="w-64 md:w-80 lg:w-96 xl:w-[550px] object-cover"
              />
            </div>

            {/* TEXT — SECOND ON MOBILE */}
            <div className="order-2 md:order-1 z-10 max-w-lg text-center md:text-left">
              <p className="text-base md:text-lg text-gray-400">{item.title}</p>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-gray-200 mt-3">
                {item.tagline}
              </h1>

              <div className="flex items-center justify-center md:justify-start gap-4 mt-6">
                <p className="text-2xl md:text-3xl font-bold text-white"> ₹{item.finalPrice.toLocaleString("en-IN")}</p>
                <p className="text-lg md:text-xl line-through text-gray-500"> ₹{item.originalPrice.toLocaleString("en-IN")}</p>
              </div>

              <Link
                to={`/product-details/${
                  (slides.find((p) => p.title === item.title) || { id: index + 1 }).id
                }`}
                className="mt-8 inline-block bg-red-700 hover:bg-red-600 text-white px-6 py-3 rounded-md text-lg font-semibold duration-200"
              >
                Shop Now
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              current === index ? "bg-red-500" : "bg-gray-600"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default HeroSlider;
