import React from "react";
import XX99IICartIMG from "../assets/cart/image-xx99-mark-two-headphones.jpg";
import BtnCounter from "./BtnCounter";

function Cart({ cartItems, setCartItems }) {
  const removeAllItems = () => {
    setCartItems([]);
  };

  return (
    <div className="cart">
      <div className="cart__header">
        <div className="cart__header-title">CART ({cartItems.length})</div>
        <button className="cart__header-btn" onClick={removeAllItems}>
          Remove all
        </button>
      </div>

      {cartItems.length > 0 ? (
        <div className="cart__content">
          {cartItems.map((item, index) => (
            <div className="cart__content-box" key={index}>
              <img
                src={XX99IICartIMG}
                className="cart__content-img"
                alt="XX99 Headphones"
              />
              <div className="cart__content-info">
                <div className="cart__content-title">{item.productName}</div>
                <div className="cart__content-price">$ {item.price}</div>
              </div>
              <BtnCounter />
            </div>
          ))}
        </div>
      ) : (
        <p className="cart__empty">Your cart is empty.</p>
      )}

      <div className="cart__Total">
        <div className="cart__Total-title">TOTAL</div>
        <div className="cart__Total-price">$ 1,699</div>
      </div>
      <button className="cart__btn">Checkout</button>
    </div>
  );
}

export default Cart;
