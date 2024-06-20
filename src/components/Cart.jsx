/* eslint-disable react/prop-types */ // Disable ESLint prop-types warning because PropTypes are not being used here

import { Link } from "react-router-dom";
import { useCart } from "../Context/CartContext"; // Import useCart hook for accessing cart context
import BtnCounter from "./BtnCounter"; // Import BtnCounter component for handling quantity changes

function Cart() {
  const { dispatch, cartItems } = useCart(); // Access dispatch function and cartItems from context

  // Handle removing all items from the cart
  const removeAllItems = () => {
    dispatch({ type: "REMOVE_ALL" }); // Dispatch action to remove all items from cart
  };

  // Handle updating the quantity of a product in the cart
  const updateItemQuantity = (productName, quantity) => {
    dispatch({
      type: "SET_PRODUCT_QUANTITY",
      payload: { productName, newQuantity: quantity }, // Dispatch action to update quantity of a specific product
    });
  };

  // Calculate the total price of all items in the cart
  const calculateTotal = () => {
    const total = cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    return total.toLocaleString(); // This will format the number with commas
  };

  return (
    <div className="cart">
      <div className="cart__header">
        <div className="cart__header-title">CART ({cartItems.length})</div>
        <button className="cart__header-btn" onClick={removeAllItems}>
          Remove all
        </button>
      </div>

      {cartItems.length > 0 ? ( // Conditionally render cart content if there are items in the cart
        <div className="cart__content">
          {cartItems.map(
            (
              item,
              index // Map through cartItems to display each item in the cart
            ) => (
              <div className="cart__content-box" key={index}>
                <img
                  src={item.imageUrl}
                  className="cart__content-img"
                  alt={item.productName}
                />
                <div className="cart__content-info">
                  <div className="cart__content-title">{item.productName}</div>
                  <div className="cart__content-price">
                    $ {item.price.toLocaleString()}
                  </div>
                </div>
                <BtnCounter
                  productName={item.productName}
                  initialQuantity={item.quantity}
                  onQuantityChange={
                    (quantity) => updateItemQuantity(item.productName, quantity) // Pass callback to BtnCounter for quantity change
                  }
                />
              </div>
            )
          )}
        </div>
      ) : (
        <p className="cart__empty">Your cart is empty.</p>
      )}

      <div className="cart__Total">
        <div className="cart__Total-title">TOTAL</div>
        <div className="cart__Total-price">$ {calculateTotal()}</div>
      </div>
      <Link to="/checkout" className="cart__btn">
        <button className="cart__btn">Checkout</button>
      </Link>
    </div>
  );
}

export default Cart;
