import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [productQuantities, setProductQuantities] = useState({});

  const onAddToCart = ({ productName, price }) => {
    setCartItems((prevItems) => {
      const itemIndex = prevItems.findIndex(
        (item) => item.productName === productName
      );
      if (itemIndex >= 0) {
        const updatedItems = [...prevItems];
        updatedItems[itemIndex].quantity += productQuantities[productName] || 1;
        return updatedItems;
      } else {
        return [
          ...prevItems,
          { productName, price, quantity: productQuantities[productName] || 1 },
        ];
      }
    });
  };

  const onQuantityChange = (productName, newQuantity) => {
    setProductQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productName]: newQuantity,
    }));
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
        onAddToCart,
        productQuantities,
        onQuantityChange,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
