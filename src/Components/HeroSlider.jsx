import { useState, useEffect } from "react";

function HeroSlider() {
  // ----- SLIDES DATA (USING YOUR EXACT CODE + IMAGES) -----
  const slides = [
    {
      bgText: "Over Ear",
      title: "Sony WH-XB910N",
      subtitle: "Give Your Favourite Music A Boost.",
      price: "₹13,489",
      oldPrice: "₹19,990",
      img: "/products/sonyXb910n-1.png",
    },
    {
      bgText: "In Ear",
      title: "boAt Airdopes 131",
      subtitle: "Featherweight for comfort all-day.",
      price: "₹1,099",
      oldPrice: "₹2,990",
      img: "/products/boat131-3.png",
    },
    {
      bgText: "Over Ear",
      title: "JBL Live 660NC",
      subtitle: "Keep the noise out, Or in. You choose.",
      price: "₹9,999",
      oldPrice: "₹14,990",
      img: "/products/jbl660nc-1.png",
    },
  ];

  const [current, setCurrent] = useState(0);

  // Auto slide every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative overflow-hidden w-full h-screen bg-[#121212]">

      {/* Slider Wrapper */}
      <div
        className="flex transition-transform duration-900"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((item, index) => (
          <div
            key={index}
            className="min-w-full h-screen flex items-center px-50 relative text-gray-300"
          >
            {/* Background Big Text */}
            <h1 className="absolute left-10 top-1/2 -translate-y-1/2 text-[200px] font-bold text-[#1a1a1a] select-none"> 
              {item.bgText}
            </h1>

            {/* Left Content */}
            <div className="z-10 max-w-lg">
              <p className="text-lg text-gray-400">{item.title}</p>

              <h1 className="text-5xl font-extrabold leading-tight text-gray-200 mt-3">
                {item.subtitle}
              </h1>

              <div className="flex items-center gap-4 mt-6">
                <p className="text-3xl font-bold text-white">{item.price}</p>
                <p className="text-xl line-through text-gray-500">{item.oldPrice}</p>
              </div>

              <button className="mt-8 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md text-lg font-semibold duration-200">
                Shop Now
              </button>
            </div>

            {/* Right Image */}
            <div className="ml-auto z-10">
              <img
                src={item.img}
                alt="product"
                className="w-[550px] object-cover"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Dots Navigation */}
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
