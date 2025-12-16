import { FaTruckFast } from "react-icons/fa6";
import { IoShieldHalf } from "react-icons/io5";
import { IoIosPricetags } from "react-icons/io";
import { FaCreditCard } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
function Footer() {

  return (
    <>
    <div className="bg-black h-90">
        <h1 className=" text-gray-400 font-bold text-center pt-24 text-3xl">Our Advantages</h1>
        <div className="flex justify-around mt-20">
        <div className="flex items-center gap-3">
        <span>
          <FaTruckFast className="text-red-500 text-3xl"/>
        </span>
        <span>
          <h1 className="text-gray-400 text-2xl">Express Delivery</h1>
          <h3 className="text-gray-400">Ships in 24 Hours</h3>
        </span>
        </div>
        <div className="flex items-center gap-3">
        <span>
          <IoShieldHalf className="text-red-500 text-3xl"/>
        </span>
        <span>
          <h1 className="text-gray-400 text-2xl">Brand Warranty</h1>
          <h3 className="text-gray-400">100% Original products</h3>
        </span>
        </div>
        <div className="flex items-center gap-3">
        <span>
          <IoIosPricetags className="text-red-500 text-2xl transform -rotate-12"/>
        </span>
        <span>
          <h1 className="text-gray-400 text-2xl">Exciting Deals</h1>
          <h3 className="text-gray-400">On all prepaid orders</h3>
        </span>
        </div>
        <div className="flex items-center gap-3">
        <span>
          <FaCreditCard className="text-red-500 text-2xl"/>
        </span>
        <span>
          <h1 className="text-gray-400 text-2xl">Secure Payments</h1>
          <h3 className="text-gray-400">SSL / Secure сertificate</h3>
        </span>
        </div>
      </div>
      </div>
      <footer>
      <div className="bg-black flex items-center justify-around pr-25">
        <div className="pt-10 ml-20">
          <h1 className="text-gray-400 text-2xl font-bold required:">X-Beat</h1>
          <p className="text-gray-400">Subscribe to our Email alerts to receive <br /> early discount offers, and new products info.</p>
          <input type="text" placeholder="Email Address*" className="mt-3 pr-20 py-2 text-gray-400 border rounded-xl" /><br />
          <button class="w-40 mt-3 bg-red-700 hover:bg-red-600 cursor-pointer text-white py-2 rounded-lg font-medium transition">
      Subscribe
    </button>

        </div>
        <div>
          <h4 className="mt-10 text-[#A9AFC3] font-bold text-2xl">Help</h4>
          <ul className="mt-4 text-gray-400">
            <li className="mt-2 cursor-pointer hover:text-white">FAQs</li>
            <li className="mt-2 cursor-pointer hover:text-white">Track Order</li>
            <li className="mt-2 cursor-pointer hover:text-white">Cancel Order</li>
            <li className="mt-2 cursor-pointer hover:text-white">Return Order</li>
            <li className="mt-2 cursor-pointer hover:text-white">Warranty Info</li>
          </ul>
        </div>

          <div>
          <h4 className="mt-10 text-[#A9AFC3] font-bold text-2xl">Policies</h4>
          <ul className="mt-4 text-gray-400">
            <li className="mt-2 cursor-pointer hover:text-white">Return Policy</li>
            <li className="mt-2 cursor-pointer hover:text-white">Security</li>
            <li className="mt-2 cursor-pointer hover:text-white">Sitemap</li>
            <li className="mt-2 cursor-pointer hover:text-white">Privacy Policy</li>
            <li className="mt-2 cursor-pointer hover:text-white">Terms & Conditions</li>
          </ul>
        </div>

        <div>
          <h4 className="mt-10 text-[#A9AFC3] font-bold text-2xl">Company</h4>
          <ul className="mt-4 text-gray-400">
            <li className="mt-2 cursor-pointer hover:text-white">About Us</li>
            <li className="mt-2 cursor-pointer hover:text-white">Contact Us</li>
            <li className="mt-2 cursor-pointer hover:text-white">Service Centres</li>
            <li className="mt-2 cursor-pointer hover:text-white">Careers</li>
            <li className="mt-2 cursor-pointer hover:text-white">Affiliates</li>
          </ul>
        </div>
      </div >
      <div className="flex justify-between bg-black text-gray-500">
      <span className="pl-20 p-10">
  <h1>2025 | XBeat. All Rights Reserved. Built by | <b>Gulshan Songara</b></h1>
      </span>
      <span className="grid grid-cols-4 gap-4 pr-20 p-10 text-2xl">
        <FaFacebookF className="hover:text-amber-50 cursor-pointer"/>
        <FaTwitter className="hover:text-amber-50 cursor-pointer"/>
        <FaInstagramSquare className="hover:text-amber-50 cursor-pointer"/>
        <FaLinkedin className="hover:text-amber-50 cursor-pointer"/>
      </span>
      </div>
      </footer>
    </>
  )
}

export default Footer