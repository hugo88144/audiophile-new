/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
/* eslint-disable no-fallthrough */
import {
  createContext,
  useContext,
  useReducer,
  useEffect,
  useState,
} from "react";

const CartContext = createContext();

const initialState = {
  cartItems: [],
  productQuantities: {},
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const { productName, price } = action.payload;
      return {
        ...state,
        cartItems: [
          ...state.cartItems,
          { productName, price, quantity: 1 }, // Assuming initial quantity is 1
        ],
      };
    }
    case "SET_PRODUCT_QUANTITY": {
      const { productName, newQuantity } = action.payload;
      // Map through cartItems to update the quantity of the specified product
      const updatedCartItems = state.cartItems.map((item) => {
        if (item.productName === productName) {
          return { ...item, quantity: newQuantity };
        } else {
          return item; // Return unchanged items
        }
      });

      return {
        ...state,
        cartItems: updatedCartItems,
      };
    }
    case "REMOVE_ALL":
      return {
        ...state,
        cartItems: [],
      };
    default:
      return state; // Return the current state if the action type is not recognized
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  const [currentCartState, setCurrentCartState] = useState(initialState);

  useEffect(() => {
    console.log("Current Cart State:", state.cartItems);
    setCurrentCartState(state.cartItems);
  }, [state.cartItems]);

  return (
    <CartContext.Provider
      value={{
        cartItems: state.cartItems,
        productQuantities: state.productQuantities,
        dispatch,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
