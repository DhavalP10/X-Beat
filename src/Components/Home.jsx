import { FaShoppingCart } from "react-icons/fa";
import { IoPersonCircle } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import HeroSlider from "./HeroSlider";

function Home() {
  return (
    <>
      <nav className="w-full bg-[#121212] text-gray-300 px-6 py-4 fixed top-0 left-0 flex items-center justify-between z-50">
        <h1 className="text-xl font-bold tracking-wide">X-Beat</h1>
        <div className="flex items-center gap-15">
          <FaSearch className="text-xl hover:text-white duration-200 cursor-pointer" />
          <div className="relative cursor-pointer">
            <FaShoppingCart className="text-2xl hover:text-white duration-200" />
          </div>
          <IoPersonCircle className="text-2xl hover:text-white duration-200 cursor-pointer" />
        </div>
      </nav>

  <HeroSlider />
  
  

    </>
  );
}

export default Home;
