import { useCart } from "../Context/CartContext";

/* eslint-disable react/prop-types */
function BtnCounter() {
  const { quantity, onQuantityChange } = useCart();
  function Handleincrement() {
    onQuantityChange(quantity + 1);
  }
  function Handledecrement() {
    onQuantityChange(quantity - 1);
  }

  return (
    <div className="btnCounter">
      <button className="btnCounter__minus" onClick={Handledecrement}>
        -
      </button>
      <span className="btnCounter__quantity">{quantity}</span>
      <button className="btnCounter__plus" onClick={Handleincrement}>
        +
      </button>
    </div>
  );
}

export default BtnCounter;
