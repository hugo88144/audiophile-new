import { useState } from "react";
import cart from "../assets/shared/desktop/icon-cart.svg";
import Cart from "./Cart";

// eslint-disable-next-line react/prop-types
function Basket({ cartItems, setCartItems }) {
  const [cartActive, setCartActive] = useState(false);

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
