import { FaStar } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

function TopProducts() {

  return (
    <>
    <h1 className="text-center text-gray-400 font-bold text-2xl bg-[#111] p-10">Top Products</h1>
    <div class="bg-[#111] py-6">
  <ul class="flex justify-center gap-16 text-gray-300 text-lg font-normal mt-8">

    <li class="hover:bg-red-600 text-white px-5 py-2 rounded-md cursor-pointer">
      All
    </li>

    <li class="hover:bg-red-600 text-white px-5 py-2 rounded-md cursor-pointer">Neckbands</li>
    <li class="hover:bg-red-600 text-white px-5 py-2 rounded-md cursor-pointer">Headphones</li>
    <li class="hover:bg-red-600 text-white px-5 py-2 rounded-md cursor-pointer">Earphones</li>
    <li class="hover:bg-red-600 text-white px-5 py-2 rounded-md cursor-pointer">Earbuds</li>

  </ul>
</div>

{/* Card */}
<div className="grid grid-cols-4  bg-black">
<div class="w-90 bg-[#111] border border-gray-700 rounded-xl overflow-hidden shadow-lg p-4 mt-2">
  <div class="rounded-lg">
    <img 
      src="/products/jbl660nc-1.png" 
      alt="JBL Live 660NC"
      class="w-full transition-transform duration-300 hover:scale-105"
    />
  </div>
  <div class="mt-4 space-y-2">
    <div class="text-red-500 text-lg">★★★★★</div>
    <h2 class="text-white text-xl font-semibold">JBL Live 660NC</h2>
    <p class="text-gray-400 text-sm">Wireless Over-Ear NC Headphones</p>
    <div class="flex items-center gap-3 pt-2">
      <span class="text-white text-2xl font-bold">₹9,999</span>
      <span class="text-gray-500 line-through text-lg">₹14,999</span>
    </div>
    <button class="w-full mt-3 bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg font-medium transition">
      Add to cart
    </button>
  </div>
</div>

<div class="w-90 bg-[#111] border border-gray-700 rounded-xl overflow-hidden shadow-lg p-4 mt-2">
  <div class="rounded-lg">
    <img 
      src="/products/boat518-1.png" 
      alt="JBL Live 660NC"
      class="w-full transition-transform duration-300 hover:scale-105"
    />
  </div>
  <div class="mt-4 space-y-2">
    <div class="text-red-500 text-lg">★★★★★</div>
    <h2 class="text-white text-xl font-semibold">boAt Rockerz 518</h2>
    <p class="text-gray-400 text-sm">On-Ear Wireless Headphones</p>
    <div class="flex items-center gap-3 pt-2">
      <span class="text-white text-2xl font-bold">₹1,299</span>
      <span class="text-gray-500 line-through text-lg">₹3,990</span>
    </div>
    <button class="w-full mt-3 bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg font-medium transition">
      Add to cart
    </button>
  </div>
</div>
<div class="w-90 bg-[#111] border border-gray-700 rounded-xl overflow-hidden shadow-lg p-4 mt-2">
  <div class="rounded-lg">
    <img 
      src="/products/boat131-1.png" 
      alt="JBL Live 660NC"
      class="w-full transition-transform duration-300 hover:scale-105"
    />
  </div>
  <div class="mt-4 space-y-2">
    <div class="text-red-500 text-lg">★★★★★</div>
    <h2 class="text-white text-xl font-semibold">boAt Airdopes 131</h2>
    <p class="text-gray-400 text-sm">Wireless In-Ear Earbuds</p>
    <div class="flex items-center gap-3 pt-2">
      <span class="text-white text-2xl font-bold">₹1,099</span>
      <span class="text-gray-500 line-through text-lg">₹2,990</span>
    </div>
    <button class="w-full mt-3 bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg font-medium transition">
      Add to cart
    </button>
  </div>
</div>
<div class="w-90 bg-[#111] border border-gray-700 rounded-xl overflow-hidden shadow-lg p-4 mt-2">
  <div class="rounded-lg">
    <img 
      src="/products/boat110-1.png" 
      alt="JBL Live 660NC"
      class="w-full transition-transform duration-300 hover:scale-105"
    />
  </div>
  <div class="mt-4 space-y-2">
    <div class="text-red-500 text-lg">★★★★★</div>
    <h2 class="text-white text-xl font-semibold">boAt BassHeads 110</h2>
    <p class="text-gray-400 text-sm">In-Ear Wired Earphones</p>
    <div class="flex items-center gap-3 pt-2">
      <span class="text-white text-2xl font-bold">₹449</span>
      <span class="text-gray-500 line-through text-lg">₹999</span>
    </div>
    <button class="w-full mt-3 bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg font-medium transition">
      Add to cart
    </button>
  </div>
</div>
</div>

<div className="grid grid-cols-4  bg-black">
<div class="w-90 bg-[#111] border border-gray-700 rounded-xl overflow-hidden shadow-lg p-4 mt-2">
  <div class=" rounded-lg">
    <img 
      src="/products/boat410-1.png" 
      alt="JBL Live 660NC"
      class="w-full transition-transform duration-300 hover:scale-105"
    />
  </div>
  <div class="mt-4 space-y-2">
    <div class="text-red-500 text-lg">★★★★★</div>
    <h2 class="text-white text-xl font-semibold">boAt Rockerz 410</h2>
    <p class="text-gray-400 text-sm">Bluetooth & Wired On-Ear Headphones</p>
    <div class="flex items-center gap-3 pt-2">
      <span class="text-white text-2xl font-bold">₹1,599</span>
      <span class="text-gray-500 line-through text-lg">₹2,990</span>
    </div>
    <button class="w-full mt-3 bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg font-medium transition">
      Add to cart
    </button>
  </div>
</div>

<div class="w-90 bg-[#111] border border-gray-700 rounded-xl overflow-hidden shadow-lg p-4 mt-2">
  <div class=" rounded-lg">
    <img 
      src="/products/jbl200bt-1.png" 
      alt="JBL Live 660NC"
      class="w-full transition-transform duration-300 hover:scale-105"
    />
  </div>
  <div class="mt-4 space-y-2">
    <div class="text-red-500 text-lg">★★★★★</div>
    <h2 class="text-white text-xl font-semibold">JBL Live 200BT</h2>
    <p class="text-gray-400 text-sm">In-Ear Wireless Neckbands</p>
    <div class="flex items-center gap-3 pt-2">
      <span class="text-white text-2xl font-bold">₹3,699</span>
      <span class="text-gray-500 line-through text-lg">₹5,299</span>
    </div>
    <button class="w-full mt-3 bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg font-medium transition">
      Add to cart
    </button>
  </div>
</div>
<div class="w-90 bg-[#111] border border-gray-700 rounded-xl overflow-hidden shadow-lg p-4 mt-2">
  <div class=" rounded-lg">
    <img 
      src="/products/sonyxb910n-1.png" 
      alt="JBL Live 660NC"
      class="w-full transition-transform duration-300 hover:scale-105"
    />
  </div>
  <div class="mt-4 space-y-2">
    <div class="text-red-500 text-lg">★★★★★</div>
    <h2 class="text-white text-xl font-semibold">Sony WH-XB910N</h2>
    <p class="text-gray-400 text-sm">Wireless Over-Ear Headphones</p>
    <div class="flex items-center gap-3 pt-2">
      <span class="text-white text-2xl font-bold">₹13,489</span>
      <span class="text-gray-500 line-through text-lg">₹19,990</span>
    </div>
    <button class="w-full mt-3 bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg font-medium transition">
      Add to cart
    </button>
  </div>
</div>
<div class="w-90 bg-[#111] border border-gray-700 rounded-xl overflow-hidden shadow-lg p-4 mt-2">
  <div class="rounded-lg">
    <img 
      src="/products/jbl760nc-1.png" 
      alt="JBL Live 660NC"
      class="w-full transition-transform duration-300 hover:scale-105"
    />
  </div>
  <div class="mt-4 space-y-2">
    <div class="text-red-500 text-lg">★★★★★</div>
    <h2 class="text-white text-xl font-semibold">JBL Tune 760NC</h2>
    <p class="text-gray-400 text-sm">Wireless Over-Ear NC Headphones</p>
    <div class="flex items-center gap-3 pt-2">
      <span class="text-white text-2xl font-bold">₹5,999</span>
      <span class="text-gray-500 line-through text-lg">₹7,999</span>
    </div>
    <button class="w-full mt-3 bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg font-medium transition">
      Add to cart
    </button>
  </div>
</div>
</div>

<div className="grid grid-cols-4  bg-black">
<div class="w-90 bg-[#111] border border-gray-700 rounded-xl overflow-hidden shadow-lg p-4 mt-2">
  <div class="rounded-lg">
    <img 
      src="/products/boat255r-1.png" 
      alt="JBL Live 660NC"
      class="w-full transition-transform duration-300 hover:scale-105"
    />
  </div>
  <div class="mt-4 space-y-2">
    <div class="text-red-500 text-lg">★★★★★</div>
    <h2 class="text-white text-xl font-semibold">boAt Rockerz 255</h2>
    <p class="text-gray-400 text-sm">In-Ear Wireless Neckbands</p>
    <div class="flex items-center gap-3 pt-2">
      <span class="text-white text-2xl font-bold">₹899</span>
      <span class="text-gray-500 line-through text-lg">₹2,990</span>
    </div>
    <button class="w-full mt-3 bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg font-medium transition">
      Add to cart
    </button>
  </div>
</div>

<div class="w-90 bg-[#111] border border-gray-700 rounded-xl overflow-hidden shadow-lg p-4 mt-2">
  <div class=" rounded-lg">
    <img 
      src="/products/jbl100-1.png" 
      alt="JBL Live 660NC"
      class="w-full transition-transform duration-300 hover:scale-105"
    />
  </div>
  <div class="mt-4 space-y-2">
    <div class="text-red-500 text-lg">★★★★</div>
    <h2 class="text-white text-xl font-semibold">JBL Wave 100</h2>
    <p class="text-gray-400 text-sm">In-Ear Truly Wireless Earbuds</p>
    <div class="flex items-center gap-3 pt-2">
      <span class="text-white text-2xl font-bold">₹2,999</span>
      <span class="text-gray-500 line-through text-lg">₹6,999</span>
    </div>
    <button class="w-full mt-3 bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg font-medium transition">
      Add to cart
    </button>
  </div>
</div>
<div class="w-90 bg-[#111] border border-gray-700 rounded-xl overflow-hidden shadow-lg p-4 mt-2">
  <div class=" rounded-lg">
    <img 
      src="/products/sony1000xm4-1.png" 
      alt="JBL Live 660NC"
      class="w-full transition-transform duration-300 hover:scale-105"
    />
  </div>
  <div class="mt-4 space-y-2">
    <div class="text-red-500 text-lg">★★★★★</div>
    <h2 class="text-white text-xl font-semibold">Sony WF-1000XM4</h2>
    <p class="text-gray-400 text-sm">Wireless In-Ear NC Headphones</p>
    <div class="flex items-center gap-3 pt-2">
      <span class="text-white text-2xl font-bold">₹19,990</span>
      <span class="text-gray-500 line-through text-lg">₹24,990</span>
    </div>
    <button class="w-full mt-3 bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg font-medium transition">
      Add to cart
    </button>
  </div>
</div>

<div class="w-90 bg-[#111] border border-gray-700 rounded-xl overflow-hidden shadow-lg p-4 mt-2 flex items-center justify-center">
    <p class="text-gray-400 font-bold text-2xl text-center mt-4 space-y-2">Browse all products<FaArrowRight /></p>
</div>

</div>

    </>
  )
}

export default TopProducts