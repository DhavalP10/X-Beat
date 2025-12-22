import { createContext, useState } from "react";

// Create context
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [notification, setNotification] = useState(null);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);

      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });

    // Show notification
    setNotification(`${product.title} added to cart!`);
    setTimeout(() => setNotification(null), 3000); // Hide after 3 seconds

    console.log("Added to cart:", product); // ✅ check console
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, notification }}>
      {children}
    </CartContext.Provider>
  );
};
