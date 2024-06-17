/* eslint-disable react/prop-types */
import { useCart } from "../Context/CartContext";
import BtnCounter from "./BtnCounter";

function AddToCart({ price, productName }) {
  const { onAddToCart } = useCart();

  const handleClick = () => {
    onAddToCart({ productName, price: parseFloat(price.replace(",", "")) });
  };

  return (
    <>
      <div className="addToCart__price">${price}</div>
      <div className="addToCart">
        <div className="addToCart__btnBox">
          <BtnCounter />
          <button className="addToCart__btn" onClick={handleClick}>
            Add to cart
          </button>
        </div>
      </div>
    </>
  );
}

export default AddToCart;
