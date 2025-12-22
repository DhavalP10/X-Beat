import { FaSearch } from "react-icons/fa";

const SearchOverlay = ({ onClose }) => {
  return (
    <div
      className="fixed inset-0 z-[999] bg-black/60 backdrop-blur-sm flex items-start justify-center pt-24"
      onClick={onClose}>
      <div
        className="w-[70%] max-w-3xl"
        onClick={(e) => e.stopPropagation()}>
        <div className="relative">
          <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search for product..."
            autoFocus
            className="w-full bg-[#121212] text-white px-12 py-4 rounded-lg outline-none border border-gray-600 focus:border-white transition"
          />
        </div>
      </div>
    </div>
  );
};

export default SearchOverlay;
