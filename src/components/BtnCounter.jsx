/* eslint-disable react/prop-types */
import { useCart } from "../Context/CartContext";

function BtnCounter({ productName }) {
  const { productQuantities, onQuantityChange } = useCart();
  const quantity = productQuantities[productName] || 1;

  const handleIncrement = () => {
    onQuantityChange(productName, quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      onQuantityChange(productName, quantity - 1);
    }
  };

  return (
    <div className="btnCounter">
      <button className="btnCounter__minus" onClick={handleDecrement}>
        -
      </button>
      <span className="btnCounter__quantity">{quantity}</span>
      <button className="btnCounter__plus" onClick={handleIncrement}>
        +
      </button>
    </div>
  );
}

export default BtnCounter;
