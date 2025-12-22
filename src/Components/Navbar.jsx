import { useState, useRef, useEffect, useContext } from "react";
import { FaShoppingCart, FaSearch } from "react-icons/fa";
import { IoPersonCircle } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "./CartContext";

const Navbar = () => {
  const { cartItems } = useContext(CartContext); // ✅ inside component
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const [showSearch, setShowSearch] = useState(false);
  const searchRef = useRef(null);
  const [profileOpen, setProfileOpen] = useState(false);
  const profileRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (profileOpen && profileRef.current && !profileRef.current.contains(e.target)) {
        setProfileOpen(false);
      }
      if (showSearch && searchRef.current && !searchRef.current.contains(e.target)) {
        setShowSearch(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [profileOpen, showSearch]);

  return (
    <nav className="w-full bg-[#121212] text-gray-300 px-6 py-4 fixed top-0 left-0 flex items-center justify-between z-50">
      <Link to="/">
        <h1 className="text-xl font-bold tracking-wide">X-Beat</h1>
      </Link>

      <div className="flex items-center gap-16">
        {/* SEARCH ICON */}
        <div className="relative flex items-center">
          {!showSearch && (
            <FaSearch
              className="text-xl hover:text-white cursor-pointer"
              onClick={() => setShowSearch(true)}
            />
          )}

          {showSearch && (
            <div ref={searchRef} className="flex items-center gap-2 absolute right-0">
              <input
                type="text"
                placeholder="Search..."
                autoFocus
                className="w-90 px-4 py-2 bg-[#1e1e1e] text-white border border-gray-600 rounded-md"
              />
              <button
                onClick={() => {
                  setShowSearch(false);
                  navigate("/");
                }}
                className="text-xl text-gray-400 hover:text-white"
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
            className="text-2xl hover:text-white cursor-pointer"
            onClick={() => setProfileOpen(!profileOpen)}
          />
          {profileOpen && (
            <div className="absolute right-0 mt-4 w-72 bg-[#121212] border border-gray-700 rounded-lg p-4 z-50 shadow-lg">
              <h2 className="text-lg font-semibold">Hello!</h2>
              <p className="text-sm text-gray-400 mb-4">
                Access account and manage orders
              </p>
              <button className="w-full border border-gray-500 py-2 rounded mb-4 hover:bg-gray-800">
                Login / Signup
              </button>
              <ul className="space-y-2 text-gray-300">
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
    </nav>
  );
};

export default Navbar;
