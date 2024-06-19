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

// Create a context for the cart
const CartContext = createContext();

const initialState = {
  cartItems: [], // Initial state for cart items
  productQuantities: {}, // Initial state for product quantities
};

// Reducer function to handle different cart actions
const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const { productName, price, quantity, imageUrl } = action.payload; // Extract payload data
      const existingItemIndex = state.cartItems.findIndex(
        (item) => item.productName === productName
      );

      if (existingItemIndex !== -1) {
        // Item already in the cart, increment its quantity
        const updatedCartItems = state.cartItems.map((item, index) => {
          if (index === existingItemIndex) {
            return { ...item, quantity: item.quantity + quantity };
          }
          return item;
        });

        return {
          ...state,
          cartItems: updatedCartItems, // Return new state with updated cart items
        };
      }

      // Item not in the cart, add it
      return {
        ...state,
        cartItems: [
          ...state.cartItems,
          { productName, price: Number(price), quantity, imageUrl },
        ], // Return new state with the new item added to the cart
      };
    }
    case "SET_PRODUCT_QUANTITY": {
      const { productName, newQuantity } = action.payload; // Extract payload data
      // Map through cartItems to update the quantity of the specified product
      const updatedCartItems = state.cartItems.map((item) => {
        if (item.productName === productName) {
          return { ...item, quantity: newQuantity }; // Update quantity of the matching product
        } else {
          return item; // Return unchanged items
        }
      });

      return {
        ...state,
        cartItems: updatedCartItems, // Return new state with updated cart items
      };
    }
    case "REMOVE_ALL":
      return {
        ...state,
        cartItems: [], // Clear all items from the cart
      };
    default:
      return state; // Return the current state if the action type is not recognized
  }
};

// CartProvider component to provide cart context to its children
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState); // Use cartReducer with initial state

  return (
    <CartContext.Provider
      value={{
        cartItems: state.cartItems, // Provide cart items state to the context
        productQuantities: state.productQuantities, // Provide product quantities state to the context
        dispatch, // Provide dispatch function to the context
      }}
    >
      {children} {/* Render children components */}
    </CartContext.Provider>
  );
};

// Custom hook to use the cart context
export const useCart = () => useContext(CartContext);
