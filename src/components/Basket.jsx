/* eslint-disable react/prop-types */
import { useState } from "react";
import cart from "../assets/shared/desktop/icon-cart.svg";
import Cart from "./Cart";
import { useCart } from "../Context/CartContext";

// eslint-disable-next-line react/prop-types
function Basket() {
  const [cartActive, setCartActive] = useState(false);

  const { cartItems } = useCart();

  function handleBasket() {
    setCartActive(!cartActive);
  }

  return (
    <div className="basket-box">
      <img
        className="nav-link"
        src={cart}
        alt="Cart Icon"
        onClick={handleBasket}
      />

      {cartItems.length > 0 && <div className="items">{cartItems.length}</div>}
      {cartActive && (
        <>
          <div className="overlay" onClick={handleBasket}></div>
          <Cart />
        </>
      )}
    </div>
  );
}

// Placeholder Cart component

export default Basket;
