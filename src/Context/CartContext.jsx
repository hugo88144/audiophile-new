import { createContext, useContext, useState } from "react";

// Create a context object
const CartContext = createContext();

// Create a provider component
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [quantity, setQuantity] = useState(1);

  const onAddToCart = ({ productName, price }) => {
    // Implement your addToCart logic here
    // This is just a placeholder
    setCartItems((prevItems) => {
      const itemIndex = prevItems.findIndex(
        (item) => item.productName === productName
      );
      if (itemIndex >= 0) {
        const updatedItems = [...prevItems];
        updatedItems[itemIndex].quantity += quantity;
        return updatedItems;
      } else {
        return [...prevItems, { productName, price, quantity }];
      }
    });
    setQuantity(1); // Reset quantity after adding to cart
  };

  return (
    <CartContext.Provider
      value={{ cartItems, onAddToCart, quantity, setQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use the cart context
export const useCart = () => useContext(CartContext);
