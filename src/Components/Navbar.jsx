import { useState, useRef, useEffect, useContext } from "react";
import { FaShoppingCart, FaSearch } from "react-icons/fa";
import { IoPersonCircle } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "./CartContext";
import { SearchContext } from "./SearchContext";
import Login from "./Login";
import Signup from "./Signup";

const Navbar = () => {
  const { cartItems } = useContext(CartContext);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const { searchTerm, setSearchTerm } = useContext(SearchContext);

  const [showSearch, setShowSearch] = useState(false);
const searchBoxRef = useRef(null);
const searchIconRef = useRef(null);


  const [profileOpen, setProfileOpen] = useState(false);
  const profileRef = useRef(null);

  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
  const handleClickOutside = (e) => {
    if (
      showSearch &&
      searchBoxRef.current &&
      !searchBoxRef.current.contains(e.target) &&
      searchIconRef.current &&
      !searchIconRef.current.contains(e.target)
    ) {
      setShowSearch(false);
    }

    if (
      profileOpen &&
      profileRef.current &&
      !profileRef.current.contains(e.target)
    ) {
      setProfileOpen(false);
    }
  };

  document.addEventListener("mousedown", handleClickOutside);
  return () => document.removeEventListener("mousedown", handleClickOutside);
}, [showSearch, profileOpen]);


  return (
    <nav className="w-full bg-[#121212] text-gray-300 px-4 md:px-6 py-4 fixed top-0 left-0 flex items-center justify-between z-50">
      
      {/* MOBILE SEARCH BAR */}
{showSearch && (
  <div
    ref={searchBoxRef}
    className="
      md:hidden
      fixed top-[64px] left-0
      w-full px-4 py-3
      bg-[#121212]
      border-t border-gray-700
      z-40
    "
  >
    <input
      type="text"
      placeholder="Search for product..."
      autoFocus
      value={searchTerm}
      onChange={(e) => {
        setSearchTerm(e.target.value);
        navigate("/products");
      }}
      className="
        w-full
        px-4 py-3
        bg-[#1e1e1e]
        text-white
        border border-gray-600
        rounded-md
        outline-none
      "
    />
  </div>
)}

      {/* LOGO */}
      <Link to="/">
        <h1 className="text-lg md:text-xl font-bold tracking-wide">
          X-Beat
        </h1>
      </Link>

      {/* RIGHT ICONS */}
      <div className="flex items-center gap-4 md:gap-8 lg:gap-16">

        {/* SEARCH */}
        {/* SEARCH ICON */}
<div ref={searchIconRef} className="relative flex items-center">
  <FaSearch
    className="text-xl cursor-pointer hover:text-white"
    onClick={() => setShowSearch((prev) => !prev)}
  />

  {/* DESKTOP SEARCH */}
  {showSearch && (
    <div
      ref={searchBoxRef}
      className="
        hidden md:flex
        absolute right-full mr-3
        top-1/2 -translate-y-1/2
        items-center gap-2
        bg-[#1e1e1e]
        px-3 py-2
        rounded-md shadow-lg
      "
    >
      <input
        type="text"
        placeholder="Search for product..."
        autoFocus
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
          navigate("/products");
        }}
        className="w-64 bg-transparent text-white border border-gray-600 rounded-md px-3 py-2 outline-none"
      />
      <button
        onClick={() => {
          setShowSearch(false);
          setSearchTerm("");
          navigate("/");
        }}
        className="text-xl text-gray-400 hover:text-white cursor-pointer"
      >
        ✕
      </button>
    </div>
  )}
</div>


        {/* CART */}
        <Link to="/cart" className="relative">
          <FaShoppingCart className="text-2xl hover:text-white" />
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              {totalItems}
            </span>
          )}
        </Link>

        {/* PROFILE */}
        <div ref={profileRef} className="relative">
          <IoPersonCircle
            className="text-2xl cursor-pointer hover:text-white"
            onClick={() => setProfileOpen(!profileOpen)}
          />

          {profileOpen && (
            <div className="absolute right-0 mt-4 w-72 bg-[#121212] border border-gray-700 rounded-lg p-4 shadow-lg">
              <h2 className="text-lg font-semibold">Hello!</h2>
              <p className="text-sm text-gray-400 mb-4">
                Access account and manage orders
              </p>

              <div className="flex justify-evenly mb-4">
                <button
                  onClick={() => {
                    setShowLoginModal(true);
                    setProfileOpen(false);
                  }}
                  className="w-20 border border-gray-500 py-2 rounded hover:bg-gray-800"
                >
                  Login
                </button>

                <button
                  onClick={() => {
                    setShowSignupModal(true);
                    setProfileOpen(false);
                  }}
                  className="w-20 border border-gray-500 py-2 rounded hover:bg-gray-800"
                >
                  Signup
                </button>
              </div>

              <ul className="space-y-2">
                <li className="hover:text-white cursor-pointer">Orders</li>
                <li className="hover:text-white cursor-pointer">Wishlist</li>
                <li className="hover:text-white cursor-pointer">Gift Cards</li>
                <li className="hover:text-white cursor-pointer">Saved Cards</li>
                <li className="hover:text-white cursor-pointer">Saved Addresses</li>
              </ul>
            </div>
          )}
        </div>
      </div>

      <Login
        isOpen={showLoginModal}
        onClose={() => setShowLoginModal(false)}
        onSwitchToSignup={() => setShowSignupModal(true)}
      />

      <Signup
        isOpen={showSignupModal}
        onClose={() => setShowSignupModal(false)}
        onSwitchToLogin={() => setShowLoginModal(true)}
      />
    </nav>
  );
};

export default Navbar;
