/* eslint-disable react/prop-types */
import { useCart } from "../Context/CartContext";
import BtnCounter from "./BtnCounter";

function AddToCart({ price, productName }) {
  const { dispatch, cartItems } = useCart();

  // Find the item in cartItems that matches the current productName
  const item = cartItems.find((item) => item.productName === productName);
  const initialQuantity = item ? item.quantity : 1;

  const handleClick = () => {
    dispatch({ type: "ADD_TO_CART", payload: { productName, price } });
  };

  return (
    <>
      <div className="addToCart__price">${price}</div>
      <div className="addToCart">
        <div className="addToCart__btnBox">
          <BtnCounter
            productName={productName}
            initialQuantity={initialQuantity}
          />
          <button className="addToCart__btn" onClick={handleClick}>
            Add to cart
          </button>
        </div>
      </div>
    </>
  );
}

export default AddToCart;
