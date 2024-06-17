/* eslint-disable react/prop-types */
import { useState } from "react";
import cart from "../assets/shared/desktop/icon-cart.svg";
import Cart from "./Cart";
import { useCart } from "../Context/CartContext";

// eslint-disable-next-line react/prop-types
function Basket() {
  const [cartActive, setCartActive] = useState(false);
  const { cartItems, setCartItems } = useCart();

  function handleBasket() {
    setCartActive(!cartActive);
  }

  return (
    <>
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
          <Cart cartItems={cartItems} setCartItems={setCartItems} />
        </>
      )}
    </>
  );
}

// Placeholder Cart component

export default Basket;
