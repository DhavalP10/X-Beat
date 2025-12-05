function FeaturedProducts() {

  return (
    <>
      <h1 className="bg-[#121212] text-center text-[#a9afc3] font-bold text-2xl">Featured Products</h1>
<div className="grid grid-cols-5 pl-4 bg-[#121212]">
<div className="h-80 w-60 mt-10 bg-[#121212]">
  <h1 className="text-gray-300 text-center">boAt Rockerz 518</h1>
  <img src="/products/boat518-1.png" alt="img" className="mt-5"/>
  <div className="flex justify-center gap-3 mt-2">
    <h2 className="font-bold text-white">₹1,299</h2>
    <h2 className="font-bold line-through text-gray-500">₹3,990</h2>
  </div>
</div>
<div className="h-80 w-60 mt-10 bg-[#121212]">
  <h1 className="text-gray-300 text-center">JBL Tune 760NC</h1>
  <img src="/products/jbl760nc-1.png" alt="img" className="mt-5"/>
  <div className="flex justify-center gap-3 mt-2">
    <h2 className="font-bold text-white">₹5,999</h2>
    <h2 className="font-bold line-through text-gray-500">₹7,999</h2>
  </div>
</div>
<div className="h-80 w-60 mt-10 bg-[#121212]">
  <h1 className="text-gray-300 text-center">boAt Airdopes 203</h1>
  <img src="/products/boat203-1.png" alt="img" className="mt-5"/>
  <div className="flex justify-center gap-3 mt-2">
    <h2 className="font-bold text-white">₹1,074</h2>
    <h2 className="font-bold line-through text-gray-500">₹3,999</h2>
  </div>
</div>
<div className="h-80 w-60 mt-10 bg-[#121212]">
  <h1 className="text-gray-300 text-center">boAt Rockerz 255</h1>
  <img src="/products/boat255r-1.png" alt="img" className="mt-5"/>
  <div className="flex justify-center gap-3 mt-2">
    <h2 className="font-bold text-white">₹899</h2>
    <h2 className="font-bold line-through text-gray-500">₹2,990</h2>
  </div>
</div>
<div className="h-80 w-60 mt-10 bg-[#121212]">
  <h1 className="text-gray-300 text-center">JBL Endurance Run Sports</h1>
  <img src="/products/jbl-endu-1.png" alt="img" className="mt-5"/>
  <div className="flex justify-center gap-3 mt-2">
    <h2 className="font-bold text-white">₹999</h2>
    <h2 className="font-bold line-through text-gray-500">₹1,599</h2>
  </div>
</div>
</div>
    </>
  )
}

export default FeaturedProducts