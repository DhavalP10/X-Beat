import { useContext } from "react";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";
import { TbShoppingCartExclamation } from "react-icons/tb";

const Cart = () => {
  const { cartItems } = useContext(CartContext);

  if (cartItems.length === 0)
    return (
      <div className="min-h-screen bg-[#121212] flex flex-col items-center justify-center text-center">
        <div className="relative mb-6">
          <TbShoppingCartExclamation className="text-red-600 text-[120px]" />
        </div>
        <h2 className="text-gray-300 text-2xl font-semibold mb-6">
          Your Cart is Empty
        </h2>
        <Link to="/">
          <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-md text-lg font-semibold">
            Start Shopping
          </button>
        </Link>
      </div>
    );

  return (
    <div className="min-h-screen bg-[#121212] text-white p-10">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
      <div className="grid gap-6">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center bg-[#1a1a1a] p-4 rounded"
          >
            <div className="flex items-center gap-4">
              <img src={item.images[0]} className="w-20 h-20 object-cover" />
              <div>
                <h2 className="text-lg font-semibold">{item.title}</h2>
                <p>Qty: {item.quantity}</p>
              </div>
            </div>
            <div>₹{(item.finalPrice * item.quantity).toLocaleString("en-IN")}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
