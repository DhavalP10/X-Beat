import { useContext } from "react";
import { CartContext } from "./CartContext";

const Notification = () => {
  const { notification } = useContext(CartContext);

  if (!notification) return null;

  return (
    <div className="fixed top-20 right-4 bg-green-600 text-white px-4 py-2 rounded-md shadow-lg z-50">
      {notification}
    </div>
  );
};

export default Notification;